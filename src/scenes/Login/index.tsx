import React, { useCallback, FC, memo, useState } from 'react';
import { View, ScrollView, Image, StatusBar } from 'react-native';
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
import { fonts } from '@theme/fonts';
import CheckBox from './CheckBox';

const LoginScreen: FC = () => {
  const [t, i18n] = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [lang, setLang] = useState('en');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isCheck, setCheckBox] = useState(false);
  const loading = useLoadingGlobal();

  const switchLocaleToEn = useCallback(() => {
    i18n.changeLanguage('en');
    setLang('en');
  }, [i18n]);

  const switchLocaleToVi = useCallback(() => {
    i18n.changeLanguage('vi');
    setLang('vi');
  }, [i18n]);

  const switchCheckBox = useCallback(() => {
    setCheckBox(!isCheck);
  }, [isCheck]);

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
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <StatusBar barStyle={'light-content'} />
      <Image source={require('../../assets/images/login/header_login.png')} style={styles.header_login} />
      <Image source={require('../../assets/logo/logo.png')} style={styles.logo} />
      <KeyboardAwareScrollView>
        <Text fontType={'fontLight'} style={styles.text_header_login}>
          Đăng nhập băng số điện thoại của bạn
        </Text>
        <View style={styles.line_login} />
        <View style={styles.input}>
          <TextField
            onChangeText={setUsername}
            style={styles.inputRateStyle}
            label={'Số điện thoại'}
            placeholder={'Nhập số điện thoại'}
            inputStyle={styles.inputStyles}
            placeholderTextColor={COLORS.GRAY}
            autoCapitalize={'none'}
            labelContentStyle={styles.labelLogin}
            labelStyle={styles.labelStyle}
          />
          <TextField
            onChangeText={setPassword}
            style={styles.inputRateStyle}
            label={'Mật khẩu'}
            placeholder={'Nhập mật khẩu'}
            inputStyle={styles.inputStyles}
            placeholderTextColor={COLORS.GRAY}
            secureTextEntry
            labelContentStyle={styles.labelLogin}
            labelStyle={styles.labelStyle}
          />
        </View>

        <View style={[commonStyles.row, styles.styWrapFunc]}>
          <CheckBox isCheck={isCheck} label="Duy trì đăng nhập" onPress={switchCheckBox} />
          <Text color={COLORS.AMETHYST} fontType="fontRegular">
            Quên mật khẩu
          </Text>
        </View>

        <View style={styles.buttonGroup}>
          <LinearGradient useAngle={true} colors={COLORS.VIOLET_GRADIENT} style={{ borderRadius: 5 }}>
            <Touchable onPress={onLogin} style={styles.button}>
              <Text fontType="fontRegular" color={COLORS.WHITE} fontSize={Platform.SizeScale(18)}>
                Đăng nhập
              </Text>
            </Touchable>
          </LinearGradient>
        </View>

        <View style={styles.line_login} />

        <Text fontType="fontLight" fontSize={12} color={COLORS.BLACK} style={styles.styTextOr}>
          Hoặc đăng nhập bằng
        </Text>

        <View style={[commonStyles.row, styles.styWrapOptionLogin]}>
          <View style={[commonStyles.row, styles.styWrapLogin, styles.shadow]}>
            <Image source={require('../../assets/images/login/icon_fb.png')} />
            <Text style={styles.styTxtFb} fontType="fontLight" color={COLORS.BLACK}>
              Facebook
            </Text>
          </View>
          <View style={[commonStyles.row, styles.styWrapLogin, styles.shadow]}>
            <Image source={require('../../assets/images/login/icon_gg.png')} />
            <Text style={styles.styTxtFb} fontType="fontLight" color={COLORS.BLACK}>
              Google
            </Text>
          </View>
        </View>

        <Text fontType="fontLight" style={styles.styWrapTxtRegis}>
          Bạn chưa có tài khoản?
          <Text style={styles.styTxtRegis} fontType="fontRegular">
            {' '}
            Đăng ký
          </Text>
        </Text>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default memo(LoginScreen);
