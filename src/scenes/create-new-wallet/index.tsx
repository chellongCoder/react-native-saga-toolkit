import React, { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useCreateNewWalletStyle } from './styles';
import { Topbar } from '@components/topbar';
import { TextField } from '@components/text-field';
import { COLORS } from '@theme/colors';
import { View } from '@components/view';
import { Text } from '@components/text';
import { Platform } from '@theme/platform';
import { Dropdown } from './dropdown';
import commonStyles from '@theme/commonStyles';
import { ParsephaseTable } from '@components/parsephase-table';
import { Icon } from '@components/common-icon';
import { Icons } from '@theme/icons';
import { useCopied } from '@hook/use-copied';
import { Touchable } from '@components/touchable';
import { ScrollView } from 'react-native';
import { data } from '@components/dropdown-selection/__mocks__/data';
import { useBottomSheet } from '@hook/use-bottom-sheet';
import SelfGeneratedPassphrase from './SelfGeneratedPassphrase';
import { CommonButton } from '@components/CommonButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenRouteT } from '@routes/types';

const _CreateNewWalletScreen = ({}) => {
  const navigation = useNavigation<StackNavigationProp<ScreenRouteT, 'CreateNewWallet'>>();
  const styles = useCreateNewWalletStyle();
  const copy = useCopied();
  const bottomSheet = useBottomSheet();

  const onCopy = useCallback(() => {
    copy.onShow('asasd');
  }, [copy]);

  const onNext = useCallback(() => {
    navigation.navigate('PassphraseVerification');
  }, [navigation]);

  const onShowPassPhrase = useCallback(() => {
    bottomSheet.onShow(<SelfGeneratedPassphrase />);
  }, [bottomSheet]);

  return (
    <View style={styles.container}>
      <Topbar title="Create new Wallet">
        <ScrollView>
          <View mh={Platform.SizeScale(20)}>
            <Text
              fontType="fontBold"
              mb={Platform.SizeScale(10)}
              fontSize={Platform.SizeScale(16)}
              color={COLORS._085A51}
            >
              Wallet name
            </Text>
            <TextField
              style={styles.inputRateStyle}
              placeholder={'Enter wallet name'}
              inputStyle={styles.inputStyles}
              placeholderTextColor={COLORS._989898}
            />
          </View>

          <View
            mt={Platform.SizeScale(20)}
            mh={Platform.SizeScale(20)}
            style={[commonStyles.row, commonStyles.spaceBetween]}
          >
            <Text
              fontType="fontBold"
              mb={Platform.SizeScale(10)}
              fontSize={Platform.SizeScale(16)}
              color={COLORS._085A51}
            >
              Passphase *
            </Text>
            <Dropdown data={data} />
          </View>

          <ParsephaseTable />
          <View mt={Platform.SizeScale(20)} style={[commonStyles.row, commonStyles.center]}>
            <Touchable onPress={onCopy}>
              <View style={[commonStyles.row, styles.action]}>
                <Icon size={1.5} icon={Icons.ICON_COPY} />
                <Text ml={Platform.SizeScale(10)} fontSize={Platform.SizeScale(12)}>
                  Copy
                </Text>
              </View>
            </Touchable>
            <View style={[commonStyles.row, styles.action]}>
              <Icon size={1.5} icon={Icons.ICON_QR} />
              <Text ml={Platform.SizeScale(10)} fontSize={Platform.SizeScale(12)}>
                QR Code
              </Text>
            </View>
          </View>

          <Touchable onPress={onShowPassPhrase}>
            <View alignItems="center" mt={Platform.SizeScale(20)}>
              <Text color={COLORS._13A6D4}>Self-generated Passphrase</Text>
            </View>
          </Touchable>

          <View mt={Platform.SizeScale(20)} mh={Platform.SizeScale(20)} style={styles.note}>
            <View style={[commonStyles.row]}>
              <Icon icon={Icons.ICON_CHECKBOX} size={3} />
              <Text mh={Platform.SizeScale(20)}>* Back up your Passphrase</Text>
              <Icon icon={Icons.ICON_COPY} size={2} />
            </View>
            <View style={[commonStyles.row]}>
              <Icon icon={Icons.ICON_CHECKBOX} size={3} />
              <Text mv={Platform.SizeScale(10)} mr={Platform.SizeScale(40)} ml={Platform.SizeScale(20)}>
                I understand if I lose my Passphrase, I won't be able to access my wallet
              </Text>
            </View>
            <View style={[commonStyles.row]}>
              <Icon icon={Icons.ICON_CHECKBOX} size={3} />
              <Text ml={Platform.SizeScale(20)}>Do not give Passphrase to anyone</Text>
            </View>
          </View>
        </ScrollView>
        <View mt={Platform.SizeScale(10)}>
          <CommonButton
            style={styles.button}
            type="gradient2"
            text={'Next'}
            width={Platform.SizeScale(343)}
            height={Platform.SizeScale(47)}
            textColor={COLORS.BLACK}
            onPress={onNext}
          />
        </View>
      </Topbar>
    </View>
  );
};

export const CreateNewWalletScreen = memo(_CreateNewWalletScreen);
