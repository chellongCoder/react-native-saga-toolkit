import React, { FC, memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAddWalletStyle } from './styles';
import { Topbar } from '@components/topbar';
import { Icon } from '@components/common-icon';
import { Platform } from '@theme/platform';
import { View } from '@components/view';
import { Icons } from '@theme/icons';
import commonStyles from '@theme/commonStyles';
import { Text } from '@components/text';
import { COLORS } from '@theme/colors';
import { Touchable } from '@components/touchable';
import { ROUTES } from '@routes/constants';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenKeyT, ScreenRouteT } from '@routes/types';

const _AddWalletScreen: FC = () => {
  const navigation = useNavigation<StackNavigationProp<ScreenRouteT, 'AddWallet'>>();
  const styles = useAddWalletStyle();

  const onCreateNew = useCallback(() => {
    navigation.navigate('CreateNewWallet');
  }, [navigation]);

  const onOpenModal = useCallback(() => {
    navigation.navigate('MyModal');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Topbar title="Add Wallet">
        <View>
          <Touchable onPress={onCreateNew} style={[commonStyles.row, commonStyles.center, styles.buttonAdd]}>
            <View style={styles.iconButtonAdd}>
              <Icon icon={Icons.ICON_PLUS} size={2} tintColor={COLORS.WHITE} />
            </View>
            <View>
              <Text fontSize={Platform.SizeScale(16)}>Create new Wallet</Text>
            </View>
          </Touchable>
          <Touchable onPress={onOpenModal}>
            <View mt={Platform.SizeScale(20)} style={[commonStyles.row, commonStyles.center, styles.buttonAdd]}>
              <View style={styles.iconButtonAdd}>
                <Icon icon={Icons.ICON_RESTORE} size={2} tintColor={COLORS.WHITE} />
              </View>
              <View>
                <Text fontSize={Platform.SizeScale(16)}>Restore Wallet by...</Text>
              </View>
            </View>
          </Touchable>
        </View>
      </Topbar>
    </View>
  );
};

export const AddWalletScreen = memo(_AddWalletScreen);
