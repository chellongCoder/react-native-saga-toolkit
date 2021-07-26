import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useHomeStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'white' },
        text: { color: 'white' },
        background: {
          backgroundColor: 'rgba(0,0,0,.2)',
          position: 'absolute',
          width: 60,
          height: 60,
          bottom: 20,
          right: 20,
          borderRadius: 30,
        },
        button: {
          width: 60,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#333',
          shadowOpacity: 0.1,
          shadowOffset: { width: 2, height: 0 },
          shadowRadius: 2,
          borderRadius: 30,
          position: 'absolute',
          bottom: 80,
          right: 20,
        },
        other: {
          backgroundColor: '#FFF',
        },
        pay: {},
        label: {
          color: '#FFF',
          position: 'absolute',
          fontSize: 14,
          fontWeight: 'bold',
          backgroundColor: 'transparent',
        },
      }),
    [],
  );
};
