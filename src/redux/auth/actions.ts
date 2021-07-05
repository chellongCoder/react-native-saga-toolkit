import { createAction } from '@reduxjs/toolkit';
import { LoggedPayload } from './types';

export const loginRequest = createAction<LoggedPayload>('LOGIN_REQUEST');
