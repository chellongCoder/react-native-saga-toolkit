import { Icon } from '@components/common-icon';
import { COLORS } from '@theme/colors';
import { Icons } from '@theme/icons';
import { Platform } from '@theme/platform';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Svg, { Path, SvgProps } from 'react-native-svg';
type Props = SvgProps & {
  color?: string;
};

export const TabBg: React.FC<Props> = ({ color = '#FFFFFF', ...props }) => {
  return Platform.isIphoneX() ? (
    <Svg width={75} height={Platform.SizeScale(50)} viewBox="0 3.5 75 50" {...props}>
      <Path
        d="M75.2 0v50H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
        fill={color}
      />
    </Svg>
  ) : (
    <Svg width={75} height={Platform.SizeScale(50)} viewBox="0 0 75 50" {...props}>
      <Path
        d="M75.2 0v50H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
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
    {/* <TabBg color={bgColor} style={styles.background} /> */}
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Icon icon={Icons.ICON_BROSWER} tintColor={COLORS.WHITE} size={2} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -40.5,
    left: -4,
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
