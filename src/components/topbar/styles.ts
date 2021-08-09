import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useTopbarStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          position: 'absolute',
          top: 0,
          width: Platform.deviceWidth,
          height: Platform.deviceHeight,
          left: 0,
        },
        body: {
          backgroundColor: COLORS.BACKGROUND,
          flex: 1,
          marginTop: insets.top,
          borderTopLeftRadius: Platform.SizeScale(30),
          borderTopRightRadius: Platform.SizeScale(30),
          overflow: 'hidden',
        },
        iconBack: {
          position: 'absolute',
          left: 0,
        },
      }),
    [insets],
  );
};
