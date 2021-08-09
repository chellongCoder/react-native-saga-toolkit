import React, { FC } from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Homepage from '@scenes/Homepage';
import OtherPage from '@scenes/OtherPage';
import ModalPage from '@scenes/ModalPage';
import { routeOverlayOption } from './routeOptions';
import Login from '@scenes/Login';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomTabar } from '@components/CustomTabbar';
import { WalletPage } from '@scenes/Wallet';
import { LoginPasswordScreen } from '@scenes/login-password';
import { ROUTES } from './constants';
import { CoinProfileScreen } from '@scenes/coin-profile';
import { HomeScreen } from '@scenes/home';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import { Drawer } from '@components/drawer';
import { AddWalletScreen } from '@scenes/add-wallet';
import { CreateNewWalletScreen } from '@scenes/create-new-wallet';
import { BottomTabT, MainStackT, RootStackT } from './types';

const RootStack = createStackNavigator<RootStackT>();
const MainStack = createStackNavigator<MainStackT>();
const Tab = createBottomTabNavigator<BottomTabT>();
const DrawerStack = createDrawerNavigator();

export const tabBar = (props: any) => <CustomTabar {...props} />;

export const BottomTab: FC = () => {
  return (
    <Tab.Navigator {...{ tabBar }} tabBarOptions={{}}>
      <Tab.Screen name="Asset" component={HomeScreen} />
      <Tab.Screen name="Ex" component={OtherPage} />
      <Tab.Screen name="Wallet" component={WalletPage} />
      <Tab.Screen name="Market" component={OtherPage} />
      <Tab.Screen name="SDG" component={OtherPage} />
    </Tab.Navigator>
  );
};

export const DrawerNavigator: FC = () => {
  const renderContent = (props: DrawerContentComponentProps) => {
    return <Drawer {...props} />;
  };
  return (
    <DrawerStack.Navigator statusBarAnimation="slide" drawerType="front" drawerContent={renderContent}>
      <DrawerStack.Screen options={{ swipeEnabled: true }} name={ROUTES.BottomTab} component={BottomTab} />
    </DrawerStack.Navigator>
  );
};

export const MainStackScreen: FC = () => {
  return (
    <MainStack.Navigator initialRouteName={ROUTES.Drawer}>
      <MainStack.Screen
        name={ROUTES.Drawer}
        component={DrawerNavigator}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name="Home"
        component={Homepage}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name="OtherPage"
        component={OtherPage}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={ROUTES.CoinProfile}
        component={CoinProfileScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={ROUTES.AddWallet}
        component={AddWalletScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={ROUTES.CreateNewWallet}
        component={CreateNewWalletScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </MainStack.Navigator>
  );
};

export const AuthStackScreen: FC = () => {
  return (
    <MainStack.Navigator initialRouteName={'Home'}>
      <MainStack.Screen
        name={ROUTES.Login}
        component={Login}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={ROUTES.LoginPassword}
        component={LoginPasswordScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </MainStack.Navigator>
  );
};

export const RootStackScreen: FC = () => {
  const logged = useSelector((state: RootState) => state.auth.logged);

  return (
    <RootStack.Navigator mode="modal" screenOptions={routeOverlayOption}>
      {logged ? (
        <RootStack.Screen
          name="MainStack"
          component={MainStackScreen}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            headerShown: false,
          }}
        />
      )}
      <RootStack.Screen
        name="MyModal"
        component={ModalPage}
        options={{
          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </RootStack.Navigator>
  );
};
