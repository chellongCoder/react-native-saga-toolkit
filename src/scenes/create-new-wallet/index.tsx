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

const _CreateNewWalletScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useCreateNewWalletStyle();
  const copy = useCopied();

  const onCopy = useCallback(() => {
    copy.onShow('asasd');
  }, [copy]);

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
              // onChangeText={setUserName}
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
            <Dropdown />
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

          <View alignItems="center" mt={Platform.SizeScale(20)}>
            <Text color={COLORS._13A6D4}>Self-generated Passphrase</Text>
          </View>

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
      </Topbar>
    </View>
  );
};

export const CreateNewWalletScreen = memo(_CreateNewWalletScreen);
