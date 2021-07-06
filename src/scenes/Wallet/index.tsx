import { BreadCrumb } from '@components/bread-crumb';
import { Icon } from '@components/common-icon';
import { CommonButton } from '@components/CommonButton';
import { Text } from '@components/text';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Icons } from '@theme/icons';
import { Images } from '@theme/images';
import { Platform } from '@theme/platform';
import React, { memo } from 'react';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const _WalletPage = () => {
  return (
    <LinearGradient useAngle angle={108.66} colors={COLORS.HEADER_GRADIENT} style={{ flex: 1 }}>
      <View style={[commonStyles.row, commonStyles.spaceBetween, styles.header]}>
        <View style={commonStyles.row}>
          <Icon mr={Platform.SizeScale(10)} icon={Icons.ICON_AVATAR} size={4} />
          <View style={styles.logo}>
            <Image resizeMode="contain" style={commonStyles.image} source={Images.TEXT_LOGO} />
          </View>
        </View>
        <View style={commonStyles.row}>
          <Icon ml={Platform.SizeScale(10)} icon={Icons.ICON_SEARCH} size={2} />
          <Icon ml={Platform.SizeScale(20)} icon={Icons.ICON_MENU} size={2} />
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
            <CommonButton text="Send" type="gradient" />
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
});
