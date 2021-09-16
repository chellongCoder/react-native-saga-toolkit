import { NavigatorScreenParams } from '@react-navigation/core';

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
  OtherPage: undefined;
  Login: undefined;
  LoginPassword: undefined;
  Send: undefined;
  CurrencyStack: NavigatorScreenParams<CurrencyStackT> | undefined;
  MarketStack: NavigatorScreenParams<MarketStackT> | undefined;
  FeePerByte: undefined;
};
export type ScreenKeyT = keyof (BottomTabT & RootStackT & MainStackT);
export type ScreenRouteT = BottomTabT & RootStackT & MainStackT & CurrencyStackT & MarketStackT;
