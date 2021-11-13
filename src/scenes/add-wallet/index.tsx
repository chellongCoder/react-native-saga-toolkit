import React, { FC, memo, useCallback, useState } from 'react';
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
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenKeyT, ScreenRouteT } from '@routes/types';
import { CommonButton } from '@components/CommonButton';

const _AddWalletScreen: FC = () => {
  const navigation = useNavigation<StackNavigationProp<ScreenRouteT, 'AddWallet'>>();
  const styles = useAddWalletStyle();
  const [isActive, setIsActive] = useState(false);

  const onCreateNew = useCallback(() => {
    navigation.navigate('CreateNewWallet');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Topbar title="Add Wallet">
        <View>
          <Touchable
            onPress={onCreateNew}
            style={[commonStyles.row, commonStyles.spaceBetween, commonStyles.center, styles.buttonAdd]}
          >
            <View style={styles.iconButtonAdd}>
              <Icon icon={Icons.ICON_PLUS} size={2} tintColor={COLORS.WHITE} />
            </View>
            <View alignItems="center" flex={9 / 10}>
              <Text fontSize={Platform.SizeScale(16)}>Create new Wallet</Text>
            </View>
          </Touchable>
          <Touchable onPress={() => setIsActive(!isActive)}>
            <View
              mt={Platform.SizeScale(20)}
              style={[
                commonStyles.row,
                commonStyles.spaceBetween,
                commonStyles.center,
                styles.buttonAdd,
                { backgroundColor: isActive ? COLORS._EEFFF3 : COLORS.WHITE },
              ]}
            >
              <View style={styles.iconButtonAdd}>
                <Icon icon={Icons.ICON_RESTORE} size={2} tintColor={COLORS.WHITE} />
              </View>
              <View alignItems="center" flex={9 / 10}>
                <Text fontSize={Platform.SizeScale(16)}>Restore Wallet by...</Text>
              </View>
              <View>
                <Icon icon={Icons.ICON_DROP_DOWN} size={1} tintColor={COLORS._26BBA9} />
              </View>
            </View>
          </Touchable>
          <View mt={Platform.SizeScale(10)}>
            <CommonButton
              style={styles.button}
              type="normal"
              text={'Passphase'}
              width={Platform.SizeScale(343)}
              height={Platform.SizeScale(56)}
            />
          </View>
          <View mt={Platform.SizeScale(10)}>
            <CommonButton
              style={styles.button}
              type="normal"
              text={'Passphase'}
              width={Platform.SizeScale(343)}
              height={Platform.SizeScale(56)}
            />
          </View>
          <View mt={Platform.SizeScale(10)}>
            <CommonButton
              style={styles.button}
              type="normal"
              text={'Passphase'}
              width={Platform.SizeScale(343)}
              height={Platform.SizeScale(56)}
            />
          </View>
        </View>
      </Topbar>
    </View>
  );
};

export const AddWalletScreen = memo(_AddWalletScreen);
