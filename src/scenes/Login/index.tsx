import React, { useCallback, FC, memo } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { loginRequest } from '@redux/actions';
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

const LoginScreen: FC = () => {
  const [t, i18n] = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onLogin = useCallback(() => {
    dispatch(
      loginRequest({
        auth: true,
      }),
    );
  }, [dispatch]);

  return (
    <LinearGradient useAngle angle={180} colors={COLORS.GREEN_GRADIENT} style={{ flex: 1 }}>
      <View style={styles.lang}>
        <Text>En</Text>
      </View>
      <View style={styles.logo}>
        <Image resizeMode="contain" style={commonStyles.image} source={Images.LOGO} />
      </View>
      <View style={styles.input}>
        <TextField
          // onChangeText={setUserName}
          style={styles.inputRateStyle}
          placeholder="Email"
          inputStyle={styles.inputStyles}
          placeholderTextColor={COLORS.GREEN}
        />
        <TextField
          // onChangeText={setUserName}
          style={styles.inputRateStyle}
          placeholder="Password"
          inputStyle={styles.inputStyles}
          placeholderTextColor={COLORS.GREEN}
          secureTextEntry
        />
      </View>
      <View style={[commonStyles.row, commonStyles.spaceBetween, styles.buttonGroup]}>
        <Touchable onPress={onLogin} style={styles.button}>
          <Text fontType="fontBold" color={'#75F0E6'} fontSize={Platform.SizeScale(20)}>
            Log in
          </Text>
        </Touchable>
        <LinearGradient useAngle angle={93.32} colors={COLORS.PINK_GRADIENT} style={styles.finger}>
          <Image resizeMode="contain" style={commonStyles.image} source={Icons.FINGERPRINT} />
        </LinearGradient>
      </View>
      <View style={[commonStyles.row, styles.funcGroup]}>
        <View style={styles.func}>
          <Image resizeMode="contain" style={commonStyles.image} source={Icons.ICON_NEW} />
        </View>
        <View style={styles.func}>
          <Image resizeMode="contain" style={commonStyles.image} source={Icons.ICON_SUPPORT} />
        </View>
        <View style={styles.func}>
          <Image resizeMode="contain" style={commonStyles.image} source={Icons.ICON_MORE} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default memo(LoginScreen);
