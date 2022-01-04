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
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

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
        <CountdownCircleTimer
          onComplete={() => {
            // do your stuff here
            return [true, 1500]; // repeat animation in 1.5 seconds
          }}
          isPlaying
          duration={10}
          colors="#A30000"
        />
      </ScrollView>
    </View>
  );
};

export const HomeScreen = memo(_HomeScreen);
