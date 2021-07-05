import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Svg, { Path, SvgProps } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
type Props = SvgProps & {
  color?: string;
};

export const TabBg: React.FC<Props> = ({ color = '#FFFFFF', ...props }) => {
  return (
    <Svg width={75} height={Platform.SizeScale(50)} viewBox="0 0 75 50" {...props}>
      <Path
        d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
        fill={color}
      />
    </Svg>
  );
};

type BottomTabBarProps = {
  bgColor?: string;
  onPress: () => void;
};

export const TabBarAdvancedButton: React.FC<BottomTabBarProps> = ({ bgColor, ...props }) => (
  <View style={styles.container} pointerEvents="box-none">
    <TabBg color={bgColor} style={styles.background} />
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Icon name="rocket" style={styles.buttonIcon} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 75,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 27,
    backgroundColor: COLORS.MAIN_GREEN,
  },
  buttonIcon: {
    fontSize: 16,
    color: '#F6F7EB',
  },
});
