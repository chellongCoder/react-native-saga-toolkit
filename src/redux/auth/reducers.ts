import { loginRequestFailed, loginRequestSuccess } from '@redux/actions';
import { createReducer } from '@reduxjs/toolkit';
import uniqBy from 'lodash/uniqBy';
import { loginRequest } from './actions';
import { UserLogin } from './types';

export interface AuthState {
  logged: boolean;
  requesting: boolean;
  user?: UserLogin;
}

const initialState: AuthState = {
  logged: false,
  requesting: false,
  user: undefined,
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
});
