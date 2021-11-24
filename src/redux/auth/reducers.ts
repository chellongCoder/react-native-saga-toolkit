import {
  getUserFailed,
  getUserRequest,
  getUserSuccess,
  loginRequestFailed,
  loginRequestSuccess,
  logoutRequest,
} from '@redux/actions';
import { createReducer } from '@reduxjs/toolkit';
import { loginRequest } from './actions';
import { GetUserSuccessPayload, UserLogin } from './types';

export interface AuthState {
  logged: boolean;
  requesting: boolean;
  user?: UserLogin;
  userInfo?: GetUserSuccessPayload;
}

const initialState: AuthState = {
  logged: false,
  requesting: false,
  user: undefined,
  userInfo: undefined,
};

export const authReducer = createReducer(initialState, {
  [loginRequest.type]: state => {
    state.requesting = true;
  },
  [loginRequestSuccess.type]: (state, action) => {
    state.requesting = false;
    state.user = action.payload;
    state.logged = true;
  },
  [loginRequestFailed.type]: state => {
    state.requesting = false;
  },
  [logoutRequest.type]: state => {
    state.requesting = false;
    state.logged = false;
  },
  [getUserRequest.type]: state => {
    state.requesting = true;
  },
  [getUserSuccess.type]: (state, action) => {
    state.requesting = false;
    state.userInfo = action.payload;
  },
  [getUserFailed.type]: state => {
    state.requesting = false;
  },
});
