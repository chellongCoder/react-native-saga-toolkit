import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useProductListItemStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flexWrap: 'wrap',
          backgroundColor: COLORS.WHITE,
          width: Platform.SizeScale(186),
          borderRadius: Platform.SizeScale(10),
        },
      }),
    [insets],
  );
};
