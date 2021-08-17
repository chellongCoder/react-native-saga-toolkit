import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useCommonHeaderStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        logo: {
          width: Platform.SizeScale(131),
          height: Platform.SizeScale(15),
        },
        header: {
          paddingHorizontal: Platform.SizeScale(30),
          paddingTop: insets.top,
          paddingBottom: Platform.SizeScale(10),
        },
      }),
    [insets],
  );
};