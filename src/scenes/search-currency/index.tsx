import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSearchCurrencyStyle } from './styles'

const _SearchCurrencyScreen = ({}) => {
const navigation = useNavigation();
const styles = useSearchCurrencyStyle();

  return (
    <View>
      <Text>SearchCurrency Screen</Text>
    </View>
  );
};

export const SearchCurrencyScreen = memo(_SearchCurrencyScreen);