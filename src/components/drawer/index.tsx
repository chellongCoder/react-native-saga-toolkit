import { DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import React, { memo, useCallback, useMemo } from 'react';
import { useDrawerStyle } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '@theme/colors';
import { Icon } from '@components/common-icon';
import { Icons } from '@theme/icons';
import commonStyles from '@theme/commonStyles';
import { View } from '@components/view';
import { Text } from '@components/text';
import { Platform } from '@theme/platform';
import { ListFullOption } from '@components/list';
import { Touchable } from '@components/touchable';
import { ROUTES } from '@routes/constants';
import { DrawerActions } from '@react-navigation/native';
import { RootState } from '@redux/reducers';
import { useSelector } from 'react-redux';
import { mapDataWallet, mapWalletsList } from '@tools/wallet.helper';

const _Drawer = ({ navigation }: DrawerContentComponentProps) => {
  const { wallets } = useSelector((state: RootState) => state.wallet);
  const { userInfo } = useSelector((state: RootState) => state.auth);

  const profiles = useMemo(() => {
    return mapWalletsList(wallets);
  }, [wallets]);
  const mapWallets = useMemo(() => {
    return mapDataWallet(wallets);
  }, [wallets]);

  const styles = useDrawerStyle();

  const onAddWallet = useCallback(() => {
    navigation.navigate(ROUTES.AddWallet);
  }, [navigation]);

  const onWalletDetail = useCallback(
    (index: number) => {
      navigation.navigate(ROUTES.WalletDetail, {
        walletDetail: mapWallets[index],
      });
    },
    [mapWallets, navigation],
  );

  const onBack = useCallback(() => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  }, [navigation]);

  const renderItemContent = useCallback(
    (item, index) => {
      const backgroundColor = item.isSelected ? COLORS._04322C : COLORS._26BBA9;
      return (
        <Touchable onPress={() => onWalletDetail(index)}>
          <View style={[{ backgroundColor }, commonStyles.row, commonStyles.spaceBetween, styles.itemContainer]}>
            <View style={[commonStyles.row]}>
              <Icon icon={Icons.ICON_AVATAR} size={4} />
              <View ml={Platform.SizeScale(10)}>
                <Text fontSize={Platform.SizeScale(15)} color={COLORS.WHITE}>
                  {item.name}
                </Text>
                <Text mt={Platform.SizeScale(5)} fontSize={Platform.SizeScale(15)} color={COLORS.WHITE}>
                  {item.price}
                </Text>
              </View>
            </View>
            <View>
              {item.isSelected ? (
                <Icon icon={Icons.ICON_THREEDOT} size={2} />
              ) : (
                <Icon tintColor={COLORS._04322C} icon={Icons.ICON_THREEDOT} size={2} />
              )}
            </View>
          </View>
        </Touchable>
      );
    },
    [onWalletDetail, styles.itemContainer],
  );
  return (
    <LinearGradient useAngle angle={108.66} colors={COLORS.DRAWER_GRADIENT} style={styles.container}>
      <View mh={Platform.SizeScale(20)} style={[commonStyles.row, commonStyles.spaceBetween]}>
        <Touchable onPress={onBack}>
          <Icon icon={Icons.ICON_BACK} size={2} />
        </Touchable>
        <Text fontSize={Platform.SizeScale(20)} color={COLORS.WHITE}>
          Wallet
        </Text>
        <Icon
          style={{
            overflow: 'hidden',
            borderRadius: Platform.SizeScale(50),
          }}
          mr={Platform.SizeScale(10)}
          resizeMode="cover"
          icon={{ uri: userInfo?.data.avatar }}
          size={2.5}
        />
      </View>

      <View
        mv={Platform.SizeScale(20)}
        mh={Platform.SizeScale(20)}
        style={[commonStyles.row, commonStyles.spaceBetween]}
      >
        <Icon tintColor={COLORS.WHITE} icon={Icons.ICON_FILTER} size={2} />
        <Icon tintColor={COLORS.WHITE} icon={Icons.ICON_PLUS} size={2} />
      </View>

      <Touchable onPress={onAddWallet}>
        <View style={[commonStyles.row, commonStyles.center, styles.buttonAdd]}>
          <View style={styles.iconButtonAdd}>
            <Icon icon={Icons.ICON_PLUS} size={2} tintColor={COLORS.WHITE} />
          </View>
          <View>
            <Text fontSize={Platform.SizeScale(16)} color={COLORS.WHITE}>
              Add Wallet
            </Text>
          </View>
        </View>
      </Touchable>

      <View flex={1} mh={Platform.SizeScale(10)}>
        <ListFullOption
          // listFooterComponent={<View style={{ height: Platform.SizeScale(100) }} />}
          data={profiles}
          renderSubItem={renderItemContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </LinearGradient>
  );
};

export const Drawer = memo(_Drawer);
