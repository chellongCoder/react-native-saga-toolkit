import { PayloadAction } from '@reduxjs/toolkit';
import { call, CallEffect, ForkEffect, put, PutEffect, takeLatest } from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';
import * as WalletAPI from './apiCall';
import { AddWalletPayload, AddWalletSuccessPayload, PassPhrasePayload, PassPhraseSuccessPayload } from './types';
import { callSafe } from '@redux/rootSaga';
import {
  addWalletFailed,
  addWalletRequest,
  addWalletSuccess,
  getPassphraseFailed,
  getPassphraseRequest,
  getPassphraseSuccess,
} from './actions';

function* createPassPhraseSaga({ payload }: PayloadAction<PassPhrasePayload>): Generator<
  | CallEffect
  | PutEffect<{
      payload: PassPhraseSuccessPayload;
      type: string;
    }>,
  void
> {
  const { length, callback } = payload;
  try {
    const filmsRes: unknown = yield callSafe(WalletAPI.requestGeneratePassphrase, { length });

    if (!isEmpty(filmsRes)) {
      yield put(getPassphraseSuccess(filmsRes as PassPhraseSuccessPayload) as any);
      callback?.(filmsRes as PassPhraseSuccessPayload);
    } else {
      yield put(getPassphraseFailed() as any);
    }
  } catch (err) {
    yield put(getPassphraseFailed() as any);
  }
}

function* createWalletSaga({ payload }: PayloadAction<AddWalletPayload>): Generator<
  | CallEffect
  | PutEffect<{
      payload: AddWalletSuccessPayload;
      type: string;
    }>,
  void
> {
  const { mnemonic, name, userId, callback } = payload;
  try {
    const filmsRes: unknown = yield callSafe(WalletAPI.addWallet, { mnemonic, name, userId });

    if (!isEmpty(filmsRes)) {
      yield put(addWalletSuccess(filmsRes as AddWalletSuccessPayload) as any);
      callback?.(filmsRes as AddWalletSuccessPayload);
    } else {
      yield put(addWalletFailed() as any);
    }
  } catch (err) {
    yield put(addWalletFailed() as any);
  }
}

function* walletSaga(): Generator<ForkEffect<never>, void> {
  yield takeLatest(getPassphraseRequest.type, createPassPhraseSaga);
  yield takeLatest(addWalletRequest.type, createWalletSaga);
}

export default walletSaga;
