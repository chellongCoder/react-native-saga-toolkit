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
import { Header } from './component/Header';
import { Platform } from '@theme/platform';
import { SliderCarousel } from '@components/slider-carousel';
import { Categories } from './component/Categories';
import { COLORS } from '@theme/colors';
import { CountDown } from './component/CountDown';
import commonStyles from '@theme/commonStyles';
import { ProductContainer } from '@components/product-container';

const _HomeScreen = ({}) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { wallets } = useSelector((state: RootState) => state.wallet);

  const navigation = useNavigation<StackNavigationProp<ScreenRouteT, 'Home'>>();
  const styles = useHomeStyle();

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={{
          marginTop: -Platform.SizeScale(110),
        }}
      >
        <View>
          <SliderCarousel />
        </View>
        <View>
          <Categories />
        </View>

        <ProductContainer
          title={
            <View style={[commonStyles.row]}>
              <Text>Flashsale</Text>
              <CountDown />
            </View>
          }
        />
        <ProductContainer title={'Skin care'} />
        <View
          style={{
            height: Platform.SizeScale(100),
          }}
        />
      </ScrollView>
    </View>
  );
};

export const HomeScreen = memo(_HomeScreen);
