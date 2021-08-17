import React, { FC } from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { CurrencyStackT } from './types';
import { ChoiceCurrencyScreen } from '@scenes/choice-currency';

const MainStack = createStackNavigator<CurrencyStackT>();

export const CurrencyStack: React.FC = () => {
  return (
    <MainStack.Navigator initialRouteName={'ChoiceCurrency'}>
      <MainStack.Screen
        name={'ChoiceCurrency'}
        component={ChoiceCurrencyScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      {/* <MainStack.Screen
        name={'SearchCurrency'}
        component={LoginPasswordScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      /> */}
    </MainStack.Navigator>
  );
};
