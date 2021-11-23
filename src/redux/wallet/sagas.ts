import { PayloadAction } from '@reduxjs/toolkit';
import { call, CallEffect, ForkEffect, put, PutEffect, takeLatest } from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';
import * as WalletAPI from './apiCall';
import {
  AddWalletPayload,
  AddWalletSuccessPayload,
  GetWalletPayload,
  GetWalletSuccessPayload,
  PassPhrasePayload,
  PassPhraseSuccessPayload,
} from './types';
import { callSafe } from '@redux/rootSaga';
import {
  addWalletFailed,
  addWalletRequest,
  addWalletSuccess,
  getPassphraseFailed,
  getPassphraseRequest,
  getPassphraseSuccess,
  getWalletsFailed,
  getWalletsRequest,
  getWalletsSuccess,
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

function* getWalletsSaga({ payload }: PayloadAction<GetWalletPayload>): Generator<
  | CallEffect
  | PutEffect<{
      payload: GetWalletSuccessPayload;
      type: string;
    }>,
  void
> {
  const { userId, callback } = payload;
  try {
    const filmsRes: unknown = yield callSafe(WalletAPI.getWallet, { userId });

    if (!isEmpty(filmsRes)) {
      yield put(getWalletsSuccess(filmsRes as GetWalletSuccessPayload) as any);
      callback?.(filmsRes as GetWalletSuccessPayload);
    } else {
      yield put(getWalletsFailed() as any);
    }
  } catch (err) {
    yield put(getWalletsFailed() as any);
  }
}

function* walletSaga(): Generator<ForkEffect<never>, void> {
  yield takeLatest(getPassphraseRequest.type, createPassPhraseSaga);
  yield takeLatest(addWalletRequest.type, createWalletSaga);
  yield takeLatest(getWalletsRequest.type, getWalletsSaga);
}

export default walletSaga;
