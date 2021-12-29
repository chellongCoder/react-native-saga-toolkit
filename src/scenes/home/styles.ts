import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useHomeStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: { flex: 1, backgroundColor: COLORS._F1F1F1 },
      }),
    [],
  );
};
