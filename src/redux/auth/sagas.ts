import { PayloadAction } from '@reduxjs/toolkit';
import { call, CallEffect, ForkEffect, put, PutEffect, takeLatest } from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';
import * as AuthAPI from './apiCall';
import {
  getUserFailed,
  getUserRequest,
  getUserSuccess,
  loginRequest,
  loginRequestFailed,
  loginRequestSuccess,
  sendEmailVerifyFailed,
  sendEmailVerifyRequest,
  sendEmailVerifySuccess,
  verifyEmailFailed,
  verifyEmailRequest,
  verifyEmailSuccess,
} from '@redux/actions';
import {
  EmailVerifyPayload,
  EmailVerifySuccessPayload,
  GetUserParams,
  GetUserSuccessPayload,
  LogginPayload,
  LoginSuccessPayload,
  SendEmailVerifyPayload,
  SendEmailVerifySuccessPayload,
} from './types';
import { callSafe } from '@redux/rootSaga';

function* loginSaga({ payload }: PayloadAction<LogginPayload>): Generator<
  | CallEffect
  | PutEffect<{
      payload: LoginSuccessPayload;
      type: string;
    }>,
  void
> {
  const { username, password, fcmToken, callback } = payload;
  try {
    const filmsRes: any = yield callSafe(AuthAPI.requestLogin, { username, password, fcmToken });

    if (!isEmpty(filmsRes)) {
      callback?.(filmsRes);
      yield put(loginRequestSuccess(filmsRes));
    } else {
      callback?.(filmsRes);
      yield put(loginRequestFailed() as any);
    }
  } catch (err) {
    callback?.(err);
    yield put(loginRequestFailed() as any);
  }
}

function* getUserSaga({ payload }: PayloadAction<GetUserParams>): Generator<
  | CallEffect
  | PutEffect<{
      payload: GetUserSuccessPayload;
      type: string;
    }>,
  void
> {
  const { id, callback } = payload;
  try {
    const filmsRes: unknown = yield callSafe(AuthAPI.getUserRequest, { id });

    if (!isEmpty(filmsRes)) {
      yield put(getUserSuccess(filmsRes as GetUserSuccessPayload) as any);
      callback?.(filmsRes as GetUserSuccessPayload);
    } else {
      yield put(getUserFailed() as any);
    }
  } catch (err) {
    yield put(getUserFailed() as any);
  }
}

function* sendEmailVerifySaga({ payload }: PayloadAction<SendEmailVerifyPayload>): Generator<
  | CallEffect
  | PutEffect<{
      payload: SendEmailVerifySuccessPayload;
      type: string;
    }>,
  void
> {
  const { email, callback } = payload;
  try {
    const filmsRes: any = yield callSafe(AuthAPI.requestSendEmailVerify, { email });

    if (!isEmpty(filmsRes)) {
      callback?.(filmsRes);
      yield put(sendEmailVerifySuccess(filmsRes));
    } else {
      callback?.(filmsRes);
      yield put(sendEmailVerifyFailed() as any);
    }
  } catch (err) {
    callback?.(err);
    yield put(sendEmailVerifyFailed() as any);
  }
}

function* verifyEmailSaga({ payload }: PayloadAction<EmailVerifyPayload>): Generator<
  | CallEffect
  | PutEffect<{
      payload: EmailVerifySuccessPayload;
      type: string;
    }>,
  void
> {
  const { email, code, callback } = payload;
  try {
    const filmsRes: any = yield callSafe(AuthAPI.requestEmailVerify, { email, code });

    if (!isEmpty(filmsRes)) {
      callback?.(filmsRes);
      yield put(verifyEmailSuccess(filmsRes));
    } else {
      callback?.(filmsRes);
      yield put(verifyEmailFailed() as any);
    }
  } catch (err) {
    callback?.(err);
    yield put(verifyEmailFailed() as any);
  }
}

function* authSaga(): Generator<ForkEffect<never>, void> {
  yield takeLatest(loginRequest.type, loginSaga);
  yield takeLatest(getUserRequest.type, getUserSaga);
  yield takeLatest(sendEmailVerifyRequest.type, sendEmailVerifySaga);
  yield takeLatest(verifyEmailRequest.type, verifyEmailSaga);
}

export default authSaga;
