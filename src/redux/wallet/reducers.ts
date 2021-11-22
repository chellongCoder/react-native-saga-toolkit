import { createReducer } from '@reduxjs/toolkit';
import {
  changeNameWallet,
  getPassphraseFailed,
  getPassphraseRequest,
  getPassphraseSuccess,
  saveLengthMnemonic,
} from './actions';

export interface WalletState {
  requesting: boolean;
  mnemonic: string;
  lengthMnemonic: number;
  privateKey: string;
  account: string;
  walletName: string;
}

const initialState: WalletState = {
  requesting: false,
  mnemonic: '',
  lengthMnemonic: 12,
  privateKey: '',
  account: '',
  walletName: '',
};

export const walletReducer = createReducer(initialState, {
  [getPassphraseRequest.type]: state => {
    state.requesting = true;
  },
  [getPassphraseSuccess.type]: (state, action) => {
    state.requesting = false;
    state.mnemonic = action.payload.data.mnemonic;
  },
  [getPassphraseFailed.type]: state => {
    state.requesting = false;
  },
  [saveLengthMnemonic.type]: (state, action) => {
    state.lengthMnemonic = action.payload;
  },
  [changeNameWallet.type]: (state, action) => {
    state.walletName = action.payload;
  },
});
