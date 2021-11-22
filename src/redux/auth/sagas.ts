import { PayloadAction } from '@reduxjs/toolkit';
import { call, CallEffect, ForkEffect, put, PutEffect, takeLatest } from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';
import * as AuthAPI from './apiCall';
import { loginRequest, loginRequestFailed, loginRequestSuccess } from '@redux/actions';
import { LogginPayload, LoginSuccessPayload } from './types';
import { callSafe } from '@redux/rootSaga';

function* loginSaga({ payload }: PayloadAction<LogginPayload>): Generator<
  | CallEffect
  | PutEffect<{
      payload: LoginSuccessPayload;
      type: string;
    }>,
  void
> {
  const { username, password, fcmToken } = payload;
  try {
    const filmsRes: any = yield callSafe(AuthAPI.requestLogin, { username, password, fcmToken });

    if (!isEmpty(filmsRes)) {
      yield put(loginRequestSuccess(filmsRes));
    } else {
      yield put(loginRequestFailed() as any);
    }
  } catch (err) {
    yield put(loginRequestFailed() as any);
  }
}

function* authSaga(): Generator<ForkEffect<never>, void> {
  yield takeLatest(loginRequest.type, loginSaga);
}

export default authSaga;
