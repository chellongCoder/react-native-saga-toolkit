import React, { memo } from 'react';
import { View as RNView, Text, StyleProp, ViewStyle, FlexAlignType } from 'react-native';

interface Props {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  mt?: number;
  mb?: number;
  mv?: number;
  mh?: number;
  ml?: number;
  mr?: number;
  flex?: number;
  alignItems?: FlexAlignType;
  position?: 'absolute' | 'relative' | undefined;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}
const _View = ({
  children,
  style,
  mt,
  mb,
  mv,
  mh,
  ml,
  mr,
  flex,
  alignItems,
  position,
  top,
  right,
  bottom,
  left,
}: Props) => {
  const styles = [
    {
      marginTop: mt,
      marginBottom: mb,
      marginVertical: mv,
      marginHorizontal: mh,
      marginLeft: ml,
      marginRight: mr,
      flex,
      alignItems,
    },
    style,
  ];
  if (position) {
    styles.push({ position, top, right, bottom, left });
  }
  return <RNView style={styles}>{children}</RNView>;
};

export const View = memo(_View);
