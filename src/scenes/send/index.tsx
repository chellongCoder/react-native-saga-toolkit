import React, { memo, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSendStyle } from './styles';
import { Topbar } from '@components/topbar';
import { Platform } from '@theme/platform';
import { View } from '@components/view';
import { Text } from '@components/text';
import { COLORS } from '@theme/colors';
import { Currency } from '@components/currency';
import { useBlurView } from '@hook/use-blur-view';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenRouteT } from '@routes/types';
import { Icons } from '@theme/icons';
import { Icon } from '@components/common-icon';
import commonStyles from '@theme/commonStyles';
import { TextField } from '@components/text-field';
import { Touchable } from '@components/touchable';
import { CommonButton } from '@components/CommonButton';
import { inputAlert } from '@utils';

const _SendScreen = ({}) => {
  const styles = useSendStyle();
  const blurView = useBlurView();
  const navigation = useNavigation<StackNavigationProp<ScreenRouteT, 'Send'>>();

  const onPressCurrency = useCallback(() => {
    navigation.navigate('CurrencyStack');
  }, [navigation]);

  const onChoiceFee = useCallback(() => {
    navigation.navigate('FeePerByte');
  }, [navigation]);

  const onNext = useCallback(() => {
    inputAlert('Please enter password', '', (password: string) => {
      console.log(`🛠 LOG: 🚀 --> ----------------------------------------------------------------------------`);
      console.log(`🛠 LOG: 🚀 --> ~ file: index.tsx ~ line 37 ~ inputAlert ~ password`, password);
      console.log(`🛠 LOG: 🚀 --> ----------------------------------------------------------------------------`);
      navigation.navigate('SendComplete');
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Topbar title="Your custom name">
        <ScrollView>
          <View mh={Platform.SizeScale(10)} style={[commonStyles.row, commonStyles.spaceBetween]}>
            <Text fontType="fontBold" fontSize={Platform.SizeScale(16)} color={COLORS._1A9E8F}>
              Choose currency:
            </Text>
            <Currency onPress={onPressCurrency} />
          </View>

          <View mv={Platform.SizeScale(20)} mh={Platform.SizeScale(10)} style={styles.form}>
            <View
              mh={Platform.SizeScale(10)}
              mv={Platform.SizeScale(10)}
              style={[commonStyles.row, commonStyles.spaceBetween]}
            >
              <Text fontType="fontBold" fontSize={Platform.SizeScale(16)} color={COLORS._0E9888}>
                To:{' '}
              </Text>
              <View style={[commonStyles.row]}>
                <View mr={Platform.SizeScale(20)}>
                  <Icon icon={Icons.ICON_WALLET} size={2} />
                </View>
                <Icon icon={Icons.ICON_BARCODE} size={2} />
              </View>
            </View>
            <View mh={Platform.SizeScale(10)}>
              <TextField
                // onChangeText={setUserName}
                style={styles.inputContainer}
                placeholder={'Click to paste address'}
                // inputStyle={styles.inputStyles}
                placeholderTextColor={COLORS._909090}
              />
            </View>
            <Text
              mt={Platform.SizeScale(30)}
              mh={Platform.SizeScale(10)}
              mb={Platform.SizeScale(10)}
              fontType="fontBold"
              fontSize={Platform.SizeScale(16)}
              color={COLORS._0E9888}
            >
              Amount:
            </Text>
            <View mh={Platform.SizeScale(10)}>
              <TextField
                // onChangeText={setUserName}
                style={styles.inputContainer}
                placeholder={'0.00'}
                // inputStyle={styles.inputStyles}
                placeholderTextColor={COLORS._909090}
                renderRightAccessory={() => (
                  <View>
                    <Text color={COLORS._1AD3BD}>MAX</Text>
                  </View>
                )}
              />
              <View mt={Platform.SizeScale(10)}>
                <TextField
                  // onChangeText={setUserName}
                  style={styles.inputContainer}
                  placeholder={'0.00'}
                  // inputStyle={styles.inputStyles}
                  placeholderTextColor={COLORS._909090}
                  renderRightAccessory={() => (
                    <View>
                      <Text>USD</Text>
                    </View>
                  )}
                />
              </View>
            </View>
            <Text mt={Platform.SizeScale(10)} mh={Platform.SizeScale(10)} fontSize={Platform.SizeScale(13)}>
              Available balance: <Text color={COLORS._0E9888}>19,181,615.6464 BBS</Text>
            </Text>

            <View mv={Platform.SizeScale(20)} alignItems="center">
              <Touchable style={styles.add}>
                <View style={[commonStyles.row]}>
                  <Icon icon={Icons.ICON_PLUS} size={1} />
                  <Text ml={Platform.SizeScale(10)} fontSize={Platform.SizeScale(10)} color={COLORS._0E9888}>
                    Add Receive Address
                  </Text>
                </View>
              </Touchable>
            </View>
          </View>

          <View
            borderRadius={Platform.SizeScale(20)}
            style={styles.total}
            mh={Platform.SizeScale(10)}
            backgroundColor={COLORS.WHITE}
            mb={Platform.SizeScale(20)}
          >
            <Text
              mt={Platform.SizeScale(10)}
              mh={Platform.SizeScale(10)}
              fontType="fontBold"
              fontSize={Platform.SizeScale(16)}
              color={COLORS._0E9888}
            >
              Total Fee:
            </Text>
            <View
              mv={Platform.SizeScale(20)}
              mh={Platform.SizeScale(10)}
              style={[commonStyles.row, commonStyles.spaceBetween]}
            >
              <Text>Fee per byte:</Text>
              <Touchable onPress={onChoiceFee} style={styles.byte}>
                <View style={[commonStyles.row]}>
                  <View alignItems="center" flex={0.8}>
                    <Text>71 sat/B</Text>
                  </View>
                  <View flex={0.2}>
                    <Icon icon={Icons.ICON_ARROW_RIGHT} size={2} />
                  </View>
                </View>
              </Touchable>
            </View>
          </View>
        </ScrollView>
        <View
          borderRadius={Platform.SizeScale(20)}
          mh={Platform.SizeScale(10)}
          style={styles.footer}
          alignItems="center"
          backgroundColor={COLORS.WHITE}
          mb={Platform.SizeScale(10)}
        >
          <CommonButton onPress={onNext} width={Platform.SizeScale(343)} type="full" text={'Next'} />
        </View>
      </Topbar>
    </View>
  );
};

export const SendScreen = memo(_SendScreen);
