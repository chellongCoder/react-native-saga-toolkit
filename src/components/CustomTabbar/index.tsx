import React, { FC, useMemo } from 'react';
import { Touchable } from '@components/touchable';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Platform } from '@theme/platform';
import { COLORS } from '@theme/colors';
import { Icon } from '@components/common-icon';
import { Icons } from '@theme/icons';
import { Text } from '@components/text';
import commonStyles from '@theme/commonStyles';
import { BlurView as Blur } from '@react-native-community/blur';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Images } from '@theme/images';

const CustomTabar: FC<BottomTabBarProps> = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const styles = style();
  const tabFocus = [
    <Icon size={2} tintColor={COLORS._FDCB44} icon={Icons.ICON_BROSWER} />,
    <Icon size={2} tintColor={COLORS._FDCB44} icon={Icons.ICON_FAVORITE} />,
    <Icon size={2} tintColor={COLORS._7F2B81} icon={Icons.ICON_HOME} />,
    <Icon size={2} tintColor={COLORS._FDCB44} icon={Icons.ICON_BELL} />,
    <Icon size={2} tintColor={COLORS._FDCB44} icon={Icons.ICON_USER} />,
  ];
  const tabUnFocus = [
    <Icon size={2} tintColor={COLORS.WHITE} icon={Icons.ICON_BROSWER} />,
    <Icon size={2} tintColor={COLORS.WHITE} icon={Icons.ICON_FAVORITE} />,
    <Icon size={2} tintColor={COLORS._7F2B81} icon={Icons.ICON_HOME} />,
    <Icon size={2} tintColor={COLORS.WHITE} icon={Icons.ICON_BELL} />,
    <Icon size={2} tintColor={COLORS.WHITE} icon={Icons.ICON_USER} />,
  ];

  const routes = state.routes.map((route, index) => {
    const isFocused = state.index === index;
    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    };

    if (index === 2) {
      return (
        <Touchable key={index} activeOpacity={1} {...{ onPress }} style={[styles.tabBarHome]}>
          <View style={[commonStyles.row]}>{isFocused ? tabFocus[index] : tabUnFocus[index]}</View>
        </Touchable>
      );
    }

    return (
      <Touchable key={index} activeOpacity={1} {...{ onPress }} style={[styles.tabBar]}>
        <View style={[commonStyles.row]}>{isFocused ? tabFocus[index] : tabUnFocus[index]}</View>
      </Touchable>
    );
  });

  return (
    <ImageBackground resizeMode="cover" source={Images.TABBAR} style={[styles.container]}>
      <View style={styles.content}>{routes}</View>
    </ImageBackground>
  );
};

export { CustomTabar };

export const style = () => {
  const insets = useSafeAreaInsets();

  return StyleSheet.create({
    container: {
      width: Platform.deviceWidth,
      height: Platform.SizeScale(90),
      backgroundColor: COLORS._F1F1F1,
    },
    content: {
      flex: 1,
      flexDirection: 'row',
    },
    tabBar: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999,
      marginTop: Platform.SizeScale(30),
    },
    tabBarHome: {
      width: Platform.SizeScale(63),
      height: Platform.SizeScale(63),
      borderRadius: Platform.SizeScale(63 / 2),
      backgroundColor: COLORS._FDCB44,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};
