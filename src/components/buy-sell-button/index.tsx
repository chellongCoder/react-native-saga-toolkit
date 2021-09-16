import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { useBuySellButtonStyle } from './styles'

const _BuySellButton = ({}) => {
    const styles = useBuySellButtonStyle();
  return (
    <View>
      <Text>BuySellButton</Text>
    </View>
  );
};

export const BuySellButton = memo(_BuySellButton);