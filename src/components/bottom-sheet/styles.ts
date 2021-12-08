import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useBottomSheetStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(() => StyleSheet.create({}), [insets]);
};
