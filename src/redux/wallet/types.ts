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
