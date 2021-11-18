import React, { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { usePassphraseVerificationStyle } from './styles';
import { Topbar } from '@components/topbar';
import Question from '@scenes/passphase/Question';
import { TextField } from '@components/text-field';
import { View } from '@components/view';
import { Platform } from '@theme/platform';
import { COLORS } from '@theme/colors';
import { CommonButton } from '@components/CommonButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenRouteT } from '@routes/types';
import { useBlurView } from '@hook/use-blur-view';
import { CommonCard } from '@components/common-card';
import { LazyImage } from '@components/lazy-image';
import { Images } from '@theme/images';
import { Text } from '@components/text';

const _PassphraseVerificationScreen = ({}) => {
  const navigation = useNavigation<StackNavigationProp<ScreenRouteT, 'PassphraseVerification'>>();
  const styles = usePassphraseVerificationStyle();
  const blurView = useBlurView();

  const onShowComplete = useCallback(() => {
    blurView.onShow(
      <CommonCard title="COMPLETED" width={Platform.SizeScale(310)}>
        <View mt={Platform.SizeScale(20)} alignItems="center">
          <LazyImage resizeMode="contain" source={Images.IMAGE_LIKE} style={styles.like} />
        </View>
        <Text
          mv={Platform.SizeScale(20)}
          mh={Platform.SizeScale(20)}
          textAlign="center"
          fontSize={Platform.SizeScale(18)}
        >
          Welcome to SDG Wallet, Your wallet has been created!
        </Text>
        <View mv={Platform.SizeScale(20)} alignItems="center">
          <CommonButton
            onPress={() => {
              blurView.onHide();
            }}
            width={Platform.SizeScale(290)}
            type="full"
            text="Done"
          />
        </View>
      </CommonCard>,
      {
        right: Platform.SizeScale(30),
        top: Platform.SizeScale(100),
      },

      'zoom',
    );
  }, [blurView, styles.like]);

  const onComplete = useCallback(() => {
    navigation.replace('Drawer');
    onShowComplete();
  }, [navigation, onShowComplete]);

  return (
    <View>
      <Topbar title="Passphrase Verification">
        <View mv={Platform.SizeScale(10)} mh={Platform.SizeScale(20)}>
          <Question />
          <TextField
            multiline={true}
            numberOfLines={5}
            style={styles.passphraseInput}
            placeholder={'Enter your passphrase'}
            inputStyle={styles.inputStyles}
            placeholderTextColor={COLORS._989898}
          />
        </View>
        <View mt={Platform.SizeScale(10)}>
          <CommonButton
            style={styles.button}
            type="normal"
            text={'Next'}
            width={Platform.SizeScale(343)}
            height={Platform.SizeScale(47)}
            textColor={COLORS.WHITE}
            onPress={onComplete}
          />
        </View>
      </Topbar>
    </View>
  );
};

export const PassphraseVerificationScreen = memo(_PassphraseVerificationScreen);
