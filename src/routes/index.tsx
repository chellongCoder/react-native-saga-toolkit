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
import { Platform } from '@theme/platform';
import { StyleSheet } from 'react-native';
import { CustomTabar } from '@components/CustomTabbar';
import { WalletPage } from '@scenes/Wallet';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();
export const tabBar = (props: any) => <CustomTabar {...props} />;

export const BottomTab: FC = () => {
  return (
    <Tab.Navigator {...{ tabBar }} tabBarOptions={{}}>
      <Tab.Screen name="Asset" component={OtherPage} />
      <Tab.Screen name="Ex" component={OtherPage} />
      <Tab.Screen name="Home" component={WalletPage} />
      <Tab.Screen name="Market" component={OtherPage} />
      <Tab.Screen name="SDG" component={OtherPage} />
    </Tab.Navigator>
  );
};

export const MainStackScreen: FC = () => {
  return (
    <MainStack.Navigator initialRouteName={'Home'}>
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
    </MainStack.Navigator>
  );
};

export const AuthStackScreen: FC = () => {
  return (
    <MainStack.Navigator initialRouteName={'Home'}>
      <MainStack.Screen
        name="Login"
        component={Login}
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
          name="BottomTab"
          component={BottomTab}
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
