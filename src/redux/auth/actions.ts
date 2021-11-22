import { createAction } from '@reduxjs/toolkit';
import { LogginPayload, LoginSuccessPayload } from './types';

export const loginRequest = createAction<LogginPayload>('LOGIN_REQUEST');
export const loginRequestSuccess = createAction<LoginSuccessPayload>('LOGIN_REQUEST_SUCCESS');
export const loginRequestFailed = createAction('LOGIN_REQUEST_FAILED');
