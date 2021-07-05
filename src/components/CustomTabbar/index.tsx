import React, { useMemo } from 'react';
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

const CustomTabar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
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
      return <TabBarAdvancedButton {...{ onPress }} bgColor={COLORS.WHITE} />;
    }
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

    const icon = () => {
      if (index === 0) {
        return <Icon size={1.5} icon={Icons.ICON_ASSET} />;
      } else if (index === 1) {
        return <Icon size={1.5} icon={Icons.ICON_EX} />;
      } else if (index === 3) {
        return <Icon size={1.5} icon={Icons.ICON_MARKET} />;
      } else if (index === 4) {
        return <Icon size={1.5} icon={Icons.ICON_SDG} />;
      }
    };
    return (
      <Touchable activeOpacity={1} {...{ onPress }} style={[styles.tabBar, createBorder()]}>
        <View
          style={[
            commonStyles.row,
            {
              backgroundColor: isFocused ? '#CCFFFB' : COLORS.WHITE,
              padding: Platform.SizeScale(5),
              borderRadius: Platform.SizeScale(10),
            },
          ]}
        >
          {icon()}
          {isFocused && (
            <Text color={COLORS.MAIN_GREEN} ml={Platform.SizeScale(10)} fontSize={Platform.SizeScale(10)}>
              {route.name}
            </Text>
          )}
        </View>
      </Touchable>
    );
  });

  return (
    <View style={[styles.container]}>
      <View style={styles.content}>{routes}</View>
    </View>
  );
};

export { CustomTabar };

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    alignSelf: 'center',
  },
  content: {
    flexDirection: 'row',
  },
  tabBar: {
    width: (Platform.deviceWidth - Platform.SizeScale(40)) / 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
