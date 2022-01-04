import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useHomeStyle } from './styles';
import { View } from '@components/view';
import { ScreenRouteT } from '@routes/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootState } from '@redux/reducers';
import { useSelector } from 'react-redux';
import { Text } from '@components/text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Touchable } from '@components/touchable';

const _HomeScreen = ({ }) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { wallets } = useSelector((state: RootState) => state.wallet);

  const navigation = useNavigation<StackNavigationProp<ScreenRouteT, 'Home'>>();
  const styles = useHomeStyle();

  const onPress = () => {
    navigation.navigate('ProductDetail');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Touchable onPress={onPress}>
        <Text style={styles.btnGoToDetail}>go to detail</Text>
      </Touchable>
    </SafeAreaView>
  );
};

export const HomeScreen = memo(_HomeScreen);
