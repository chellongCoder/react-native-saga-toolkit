import { Text } from '@components/text';
import { Touchable } from '@components/touchable';
import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  text: string;
  type: 'gradient' | 'border' | 'full';
  onPress?: () => void;
  width?: number;
};
const _CommonButton = ({ text, type, onPress, width }: Props) => {
  switch (type) {
    case 'gradient':
      return (
        <Touchable {...{ onPress }}>
          <LinearGradient useAngle angle={137.31} colors={COLORS.BUTTON_GRADIENT} style={styles.container}>
            <Text color={COLORS.WHITE} fontSize={Platform.SizeScale(15)}>
              {text}
            </Text>
          </LinearGradient>
        </Touchable>
      );

    case 'border':
      return (
        <Touchable {...{ onPress }} style={styles.container1}>
          <Text fontSize={Platform.SizeScale(15)} color={COLORS.GREEN}>
            {text}
          </Text>
        </Touchable>
      );
    default:
      return (
        <Touchable {...{ onPress }} style={[styles.container2, { width }]}>
          <Text fontType="fontBold" fontSize={Platform.SizeScale(15)} color={COLORS.WHITE}>
            {text}
          </Text>
        </Touchable>
      );
  }
};

export const CommonButton = memo(_CommonButton);

const styles = StyleSheet.create({
  container: {
    width: Platform.SizeScale(91),
    height: Platform.SizeScale(37),
    borderRadius: Platform.SizeScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    width: Platform.SizeScale(91),
    height: Platform.SizeScale(37),
    borderRadius: Platform.SizeScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.GREEN,
  },
  container2: {
    width: Platform.SizeScale(91),
    height: Platform.SizeScale(37),
    borderRadius: Platform.SizeScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.GREEN,
  },
});
