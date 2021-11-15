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

const _PassphraseVerificationScreen = ({}) => {
  const navigation = useNavigation<StackNavigationProp<ScreenRouteT, 'PassphraseVerification'>>();
  const styles = usePassphraseVerificationStyle();

  const onComplete = useCallback(() => {
    navigation.replace('Drawer');
  }, [navigation]);

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
