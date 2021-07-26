import { BreadCrumb } from '@components/bread-crumb';
import { Icon } from '@components/common-icon';
import { CommonButton } from '@components/CommonButton';
import { Text } from '@components/text';
import { Touchable } from '@components/touchable';
import { useBlurView } from '@hook/use-blur-view';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@routes/constants';
import { navigate } from '@routes/navigationUtils';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Icons } from '@theme/icons';
import { Images } from '@theme/images';
import { Platform } from '@theme/platform';
import React, { memo, useCallback, useRef } from 'react';
import { Animated, Image } from 'react-native';
import { ScrollView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Menu } from './Menu';
import { menus } from './__mocks__/data';

const _WalletPage = () => {
  const blurView = useBlurView();
  const navigation = useNavigation();

  const onShowMenu = useCallback(() => {
    blurView.onShow(
      <LinearGradient style={styles.category} colors={COLORS.GREEN_TRANSPARENT_GRADIENT} useAngle angle={162.63}>
        <ScrollView>
          {menus.map((value, index) => {
            return (
              <View style={styles.itemCategory}>
                <Text color={COLORS.WHITE} fontSize={Platform.SizeScale(16)}>
                  {value.content}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </LinearGradient>,
      {
        right: Platform.SizeScale(10),
        top: Platform.SizeScale(50),
      },
    );
  }, [blurView]);

  const onSend = useCallback(() => {
    navigation.navigate(ROUTES.CoinProfile, {});
  }, [navigation]);

  return (
    <LinearGradient useAngle angle={108.66} colors={COLORS.HEADER_GRADIENT} style={{ flex: 1 }}>
      <Menu />

      <View style={[commonStyles.row, commonStyles.spaceBetween, styles.header]}>
        <View style={commonStyles.row}>
          <Touchable>
            <Icon mr={Platform.SizeScale(10)} icon={Icons.ICON_AVATAR} size={4} />
          </Touchable>
          <View style={styles.logo}>
            <Image resizeMode="contain" style={commonStyles.image} source={Images.TEXT_LOGO} />
          </View>
        </View>
        <View style={commonStyles.row}>
          <Icon ml={Platform.SizeScale(10)} icon={Icons.ICON_SEARCH} size={2} />
          <Touchable onPress={onShowMenu}>
            <Icon ml={Platform.SizeScale(20)} icon={Icons.ICON_MENU} size={2} />
          </Touchable>
        </View>
      </View>
      <ScrollView style={styles.body}>
        <Text
          color={'#085A51'}
          mt={Platform.SizeScale(20)}
          ml={Platform.SizeScale(20)}
          mb={Platform.SizeScale(10)}
          fontSize={Platform.SizeScale(20)}
        >
          Total Assets
        </Text>
        <BreadCrumb
          left={
            <View style={[commonStyles.row, styles.leftBread]}>
              <Text style={styles.txtPrice}>$56,955</Text>
              <Text color={COLORS.AMETHYST}>+1,54 %</Text>
            </View>
          }
          right={
            <View style={[styles.rightBread, commonStyles.row]}>
              <Text fontType="fontBold" style={styles.txtRightBread}>
                USD
              </Text>
              <Icon icon={Icons.ICON_DROP_DOWN} size={1.5} />
            </View>
          }
        />
        <View>
          <View style={[commonStyles.row, commonStyles.spaceBetween, styles.buttonGroup]}>
            <CommonButton onPress={onSend} text="Send" type="gradient" />
            <CommonButton text="Receive" type="gradient" />
            <CommonButton text="Buy" type="gradient" />
          </View>
          <View style={[commonStyles.row, commonStyles.spaceBetween, styles.buttonGroup]}>
            <CommonButton text="Swap" type="border" />
            <CommonButton text="Pool" type="border" />
            <CommonButton text="Add a." type="border" />
          </View>
        </View>
        <View style={styles.walletItem}>
          <View style={[commonStyles.row, commonStyles.spaceBetween]}>
            <Text color={'#085A51'} fontSize={Platform.SizeScale(20)}>
              Wallet’s items
            </Text>
            <Icon icon={Icons.WALLET_ITEM} size={2} />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export const WalletPage = memo(_WalletPage);

const styles = StyleSheet.create({
  logo: {
    width: Platform.SizeScale(131),
    height: Platform.SizeScale(15),
  },
  header: {
    paddingHorizontal: Platform.SizeScale(30),
    paddingTop: Platform.SizeScale(50),
    paddingBottom: Platform.SizeScale(20),
  },
  leftBread: {
    alignItems: 'baseline',
  },
  rightBread: {
    backgroundColor: COLORS.GREEN,
    paddingVertical: Platform.SizeScale(5),
    paddingHorizontal: Platform.SizeScale(10),
    borderRadius: Platform.SizeScale(20),
  },
  txtRightBread: {
    fontSize: Platform.SizeScale(12),
    color: COLORS.WHITE,
    marginRight: Platform.SizeScale(5),
  },
  txtPrice: {
    fontSize: Platform.SizeScale(30),
    marginRight: Platform.SizeScale(10),
  },
  body: {
    backgroundColor: COLORS.BACKGROUND,
    paddingHorizontal: Platform.SizeScale(20),
    borderTopRightRadius: Platform.SizeScale(30),
    borderTopLeftRadius: Platform.SizeScale(30),
  },
  buttonGroup: {
    marginTop: Platform.SizeScale(20),
  },
  walletItem: {
    paddingTop: Platform.SizeScale(30),
  },
  category: {
    width: Platform.SizeScale(269),
    height: Platform.SizeScale(459),
    alignItems: 'center',
    borderRadius: Platform.SizeScale(20),
  },
  itemCategory: {
    paddingVertical: Platform.SizeScale(20),
  },
});
