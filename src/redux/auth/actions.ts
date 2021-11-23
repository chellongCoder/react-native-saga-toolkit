import { createAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { LogginPayload, LoginSuccessPayload } from './types';

export const loginRequest = createAction<LogginPayload>('LOGIN_REQUEST');
export const loginRequestSuccess = createAction<LoginSuccessPayload>('LOGIN_REQUEST_SUCCESS');
export const loginRequestFailed = createAction('LOGIN_REQUEST_FAILED');

export const logoutRequest = createAction('LOGOUT_REQUEST');
export const purgeRequest = createAction(PURGE);
