import { getTokensFailed, getTokensRequest, getTokensSuccess } from '@redux/actions';
import { createReducer } from '@reduxjs/toolkit';
import {
  changeNameWallet,
  getPassphraseFailed,
  getPassphraseRequest,
  getPassphraseSuccess,
  getWalletsFailed,
  getWalletsRequest,
  getWalletsSuccess,
  saveLengthMnemonic,
} from './actions';

export interface WalletState {
  requesting: boolean;
  mnemonic: string;
  lengthMnemonic: number;
  privateKey: string;
  account: string;
  walletName: string;
  wallets: any[];
  tokens: any[];
}

const initialState: WalletState = {
  requesting: false,
  mnemonic: '',
  lengthMnemonic: 12,
  privateKey: '',
  account: '',
  walletName: '',
  wallets: [],
  tokens: [],
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
  [getWalletsRequest.type]: state => {
    state.requesting = true;
  },
  [getWalletsSuccess.type]: (state, action) => {
    state.requesting = false;
    state.wallets = action.payload.data;
  },
  [getWalletsFailed.type]: state => {
    state.requesting = false;
  },
  [getTokensRequest.type]: state => {
    state.requesting = true;
  },
  [getTokensSuccess.type]: (state, action) => {
    state.requesting = false;
    state.tokens = action.payload.data;
  },
  [getTokensFailed.type]: state => {
    state.requesting = false;
  },
});
