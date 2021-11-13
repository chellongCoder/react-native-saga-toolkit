import React, { FC, useMemo } from 'react';
import { Touchable } from '@components/touchable';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import { Platform } from '@theme/platform';
import { TabBarAdvancedButton } from '@routes/tabbar';
import { COLORS } from '@theme/colors';
import { Icon } from '@components/common-icon';
import { Icons } from '@theme/icons';
import { Text } from '@components/text';
import commonStyles from '@theme/commonStyles';
import { BlurView as Blur } from '@react-native-community/blur';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomTabar: FC<BottomTabBarProps> = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const styles = style();
  const tabFocus = [
    <Icon size={3} icon={Icons.ICON_WALLET} />,
    <Icon size={3} icon={Icons.ICON_MK} />,
    <Icon size={3} icon={Icons.ICON_BROSWER} />,
    <Icon size={3} icon={Icons.ICON_DEX} />,
    <Icon size={3} icon={Icons.ICON_SETTING} />,
  ];
  const tabUnFocus = [
    <Icon size={3} icon={Icons.ICON_WALLET_UNFOCUS} />,
    <Icon size={3} icon={Icons.ICON_MK_UNFOCUS} />,
    <Icon size={3} icon={Icons.ICON_BROSWER} />,
    <Icon size={3} icon={Icons.ICON_DEX_UNFCUS} />,
    <Icon size={3} icon={Icons.ICON_SETTING_UNFOCUS} />,
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

    const createBorder = () => {
      if (index === 0) {
        return {
          borderTopLeftRadius: Platform.SizeScale(20),
          borderBottomLeftRadius: Platform.SizeScale(20),
        };
      } else if (state.routes.length - 1 === index) {
        return {
          borderTopRightRadius: Platform.SizeScale(20),
          borderBottomRightRadius: Platform.SizeScale(20),
        };
      }
    };

    return (
      <Touchable activeOpacity={1} {...{ onPress }} style={[styles.tabBar]}>
        <View style={[commonStyles.row]}>{isFocused ? tabFocus[index] : tabUnFocus[index]}</View>
      </Touchable>
    );
  });

  return (
    <View style={[styles.container]}>
      <View style={styles.content}>
        {routes}
        <Blur
          blurType="light"
          style={commonStyles.absolute}
          blurAmount={2}
          blurRadius={20}
          downsampleFactor={0.5}
          overlayColor="transparent"
        />
      </View>
    </View>
  );
};

export { CustomTabar };

export const style = () => {
  const insets = useSafeAreaInsets();

  return StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: Platform.SizeScale(0),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      alignSelf: 'center',
      alignItems: 'center',
    },
    content: {
      flexDirection: 'row',
      backgroundColor: COLORS.TRANSPARENT,
      width: Platform.deviceWidth - Platform.SizeScale(30),
      height: Platform.SizeScale(78),
      borderRadius: Platform.SizeScale(41),
      overflow: 'hidden',
      marginBottom: insets.bottom,
    },
    tabBar: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999,
    },
  });
};
