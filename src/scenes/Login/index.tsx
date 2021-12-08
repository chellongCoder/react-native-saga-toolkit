import React, { useCallback, FC, memo, useState } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '@theme/colors';
import { Images } from '@theme/images';
import commonStyles from '@theme/commonStyles';
import styles from './styles';
import { TextField } from '@components/text-field';
import { Touchable } from '@components/touchable';
import { Icons } from '@theme/icons';
import { Platform } from '@theme/platform';
import { Text } from '@components/text';
import { Dropdown } from '@scenes/create-new-wallet/dropdown';
import { langs } from './__mocks__/data';
import { loginRequest } from '@redux/actions';
import AsyncStorage from '@react-native-community/async-storage';
import { useLoadingGlobal } from '@hook/use-loading-global';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { alertError } from '@utils';

const LoginScreen: FC = () => {
  const [t, i18n] = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [lang, setLang] = useState('en');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loading = useLoadingGlobal();

  const switchLocaleToEn = useCallback(() => {
    i18n.changeLanguage('en');
    setLang('en');
  }, [i18n]);

  const switchLocaleToVi = useCallback(() => {
    i18n.changeLanguage('vi');
    setLang('vi');
  }, [i18n]);

  const onLogin = useCallback(async () => {
    loading.onShow();
    const fcmToken = await AsyncStorage.getItem('@fcmToken');
    console.log(`🛠 LOG: 🚀 --> -------------------------------------------------------------------------`);
    console.log(`🛠 LOG: 🚀 --> ~ file: index.tsx ~ line 48 ~ onLogin ~ fcmToken`, fcmToken);
    console.log(`🛠 LOG: 🚀 --> -------------------------------------------------------------------------`);

    dispatch(
      loginRequest({
        username,
        password,
        fcmToken,
        callback: (responseDataLogin: any, type?: 'SUCCESS' | 'ERROR') => {
          console.log(
            `🛠 LOG: 🚀 --> -------------------------------------------------------------------------------------------`,
          );
          console.log(`🛠 LOG: 🚀 --> ~ file: index.tsx ~ line 40 ~ onLogin ~ responseDataLogin`, responseDataLogin);
          console.log(
            `🛠 LOG: 🚀 --> -------------------------------------------------------------------------------------------`,
          );
          loading.onHide();
          if (type === 'ERROR') {
            alertError(responseDataLogin?.error?.message);
          }
        },
      }),
    );

    // navigate(ROUTES.LoginPassword, {});
  }, [dispatch, loading, password, username]);

  return (
    <LinearGradient useAngle angle={180} colors={COLORS.GREEN_GRADIENT} style={{ flex: 1 }}>
      <KeyboardAwareScrollView>
        <View style={styles.input}>
          <TextField
            onChangeText={setUsername}
            style={styles.inputRateStyle}
            placeholder={t('Login:email')}
            inputStyle={styles.inputStyles}
            placeholderTextColor={COLORS.GREEN}
            autoCapitalize={'none'}
          />
          <TextField
            onChangeText={setPassword}
            style={styles.inputRateStyle}
            placeholder={t('Login:pass')}
            inputStyle={styles.inputStyles}
            placeholderTextColor={COLORS.GREEN}
            secureTextEntry
          />
        </View>
        <View style={[commonStyles.row, commonStyles.spaceBetween, styles.buttonGroup]}>
          <Touchable onPress={onLogin} style={styles.button}>
            <Text fontType="fontBold" color={COLORS.LIGHT_GREEN} fontSize={Platform.SizeScale(20)}>
              {t('Login:login')}
            </Text>
          </Touchable>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export default memo(LoginScreen);
