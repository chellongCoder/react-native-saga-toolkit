export type BottomTabT = {
  Asset: undefined;
  Ex: undefined;
  Wallet: undefined;
  Market: undefined;
  SDG: undefined;
};

export type RootStackT = {
  MainStack: undefined;
  Auth: undefined;
  MyModal?: undefined;
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
};
export type ScreenKeyT = keyof (BottomTabT & RootStackT & MainStackT);
export type ScreenRouteT = BottomTabT & RootStackT & MainStackT;
