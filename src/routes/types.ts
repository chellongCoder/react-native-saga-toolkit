import { NavigatorScreenParams } from '@react-navigation/core';
import { WalletDetail } from '@redux/wallet/types';

export type BottomTabT = {
  Wallet: undefined;
  Market: undefined;
  Home: undefined;
  Exchange: undefined;
  Setting: undefined;
};

export type RootStackT = {
  MainStack: undefined;
  Auth: undefined;
  MyModal?: undefined;
};

export type CurrencyStackT = {
  ChoiceCurrency: undefined;
  SearchCurrency: undefined;
  FeePerByte: undefined;
};

export type MarketStackT = {
  Market: undefined;
  SearchMarket: undefined;
  CoinProfile: undefined;
};

export type MainStackT = {
  Drawer: undefined;
  Home: undefined;
  CoinProfile: undefined;
  AddWallet: undefined;
  CreateNewWallet: undefined;
  Passphrase: undefined;
  OtherPage: undefined;
  Login: undefined;
  LoginPassword: undefined;
  Send: undefined;
  CurrencyStack: NavigatorScreenParams<CurrencyStackT> | undefined;
  MarketStack: NavigatorScreenParams<MarketStackT> | undefined;
  FeePerByte: undefined;
  WalletDetail: { walletDetail: WalletDetail };
  PassphraseVerification: undefined;
  Receive: { walletDetail: WalletDetail };
  Buy: undefined;
  BuyCoin: undefined;
  ShowPassphrase: { walletDetail: WalletDetail };
  EmailVerification: { email?: string };
  ChangePassword: undefined;
  SendWaiting: undefined;
  SendComplete: undefined;
  Privatekey: undefined;
  Keystore: undefined;
};
export type ScreenKeyT = keyof (BottomTabT & RootStackT & MainStackT);
export type ScreenRouteT = BottomTabT & RootStackT & MainStackT & CurrencyStackT & MarketStackT;
