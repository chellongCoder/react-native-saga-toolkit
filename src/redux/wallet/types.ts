import { ApiParamsT } from '@types';

export interface PassPhrasePayload extends ApiParamsT {
  length: number;
}

export type PassPhraseSuccessPayload = {
  data: {
    mnemonic: string;
  };
  message: string;
};

export type TablePassPhrase = {
  name: string;
  index: number;
};

export interface AddWalletPayload extends ApiParamsT {
  name: string;
  mnemonic: string;
  userId: string;
}

export type AddWalletSuccessPayload = {
  data: {
    mnemonic: string;
    privateKey: string;
    account: string;
  };
  message: string;
};

export interface GetWalletPayload extends ApiParamsT {
  userId: string;
}

export type GetWalletSuccessPayload = {
  data: any[];
  message: string;
};

export type WalletDetail = {
  id: string;
  assets: any[];
  name: string;
  mnemonic: string;
  privateKey: string;
  address: string;
  user: string;
  createdAt: string;
  updatedAt: string;
};

export type ProfileWallet = {
  name: string;
  price: string;
  isSelected: boolean;
};

export type WalletsHome = {
  name: string;
  note: string;
  id: string;
};
