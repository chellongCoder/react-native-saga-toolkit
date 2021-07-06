import commonStyles from '@theme/commonStyles';
import React, { memo } from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { useBreadCrumbStyle } from './styles';

const _BreadCrumb = ({
  left,
  right,
  style,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) => {
  const styles = useBreadCrumbStyle();
  return (
    <View style={[commonStyles.row, commonStyles.spaceBetween, styles.container, style]}>
      <View style={[styles.left]}>{left}</View>
      <View style={[styles.right]}>{right}</View>
    </View>
  );
};

export const BreadCrumb = memo(_BreadCrumb);
