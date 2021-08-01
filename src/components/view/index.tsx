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
}
const _View = ({ children, style, mt, mb, mv, mh, ml, mr, flex, alignItems }: Props) => {
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
  return <RNView style={styles}>{children}</RNView>;
};

export const View = memo(_View);
