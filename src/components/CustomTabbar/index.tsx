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
import Svg, { Path } from 'react-native-svg';

const CustomTabar: FC = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const styles = style();
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
        <View style={[styles.tabBar]}>
          <TabBarAdvancedButton {...{ onPress }} bgColor={COLORS.WHITE} />
        </View>
      );
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
        return <Icon size={2} icon={Icons.ICON_ASSET} />;
      } else if (index === 1) {
        return <Icon size={2} icon={Icons.ICON_EX} />;
      } else if (index === 3) {
        return <Icon size={2} icon={Icons.ICON_MARKET} />;
      } else if (index === 4) {
        return <Icon size={2} icon={Icons.ICON_SDG} />;
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
      {Platform.isIphoneX() ? (
        <Svg width={406} height={94} viewBox="0 0 406 94">
          <Path
            d="M199 38.0001C210.913 38.0001 221.257 31.28 226.447 21.4239C230.307 14.0938 236.716 7.00006 245 7.00006H361C377.569 7.00006 391 20.4315 391 37.0001V49.0001C391 65.5686 377.569 79.0001 361 79.0001H37C20.4315 79.0001 7 65.5686 7 49.0001V37.0001C7 20.4315 20.4315 7.00006 37 7.00006H153C161.284 7.00006 167.693 14.0938 171.553 21.4239C176.743 31.28 187.087 38.0001 199 38.0001Z"
            fill="white"
            // fill={color}
          />
        </Svg>
      ) : (
        <Svg width={362} height={Platform.SizeScale(94)} viewBox="0 -10 362 94">
          <Path
            d="M177 32.6083C186.522 32.6083 194.912 28.1479 199.835 21.3747C204.705 14.6733 211.164 7.36087 219.448 7.36087H320.438C335.108 7.36087 347 18.2999 347 31.7939V41.5671C347 55.061 335.108 66.0001 320.438 66.0001H33.5625C18.8924 66.0001 7 55.061 7 41.5671V31.7939C7 18.2999 18.8924 7.36087 33.5625 7.36087H134.552C142.836 7.36087 149.295 14.6733 154.165 21.3747C159.088 28.1479 167.478 32.6083 177 32.6083Z"
            fill="white"
          />
        </Svg>
      )}
      <View style={styles.content}>{routes}</View>
    </View>
  );
};

export { CustomTabar };

export const style = () => {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: Platform.SizeScale(0),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      left: Platform.SizeScale(10),
    },
    content: {
      flexDirection: 'row',
      position: 'absolute',
      width: Platform.SizeScale(310),
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    tabBar: {
      flex: 1,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};
