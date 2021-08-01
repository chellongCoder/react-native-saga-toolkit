import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useDrawerStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          paddingTop: insets.top,
        },
        itemContainer: {
          marginVertical: Platform.SizeScale(5),
          padding: Platform.SizeScale(10),
          borderRadius: Platform.SizeScale(30),
        },
      }),
    [insets],
  );
};
