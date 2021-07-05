import { createReducer } from '@reduxjs/toolkit';
import uniqBy from 'lodash/uniqBy';
import { loginRequest } from './actions';

export interface AuthState {
  logged: boolean;
}

const initialState: AuthState = {
  logged: false,
};

export const authReducer = createReducer(initialState, {
  [loginRequest.type]: state => {
    state.logged = true;
  },
  //   [getAllFilmsSuccess.type]: (state, action) => {
  //     state.loading = false;
  //     state.films = uniqBy(action.payload, 'id');
  //   },
  //   [getAllFilmsFailed.type]: state => {
  //     state.loading = false;
  //   },
});
