import React, { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSettingStyle } from './styles';
import { Topbar } from '@components/topbar';
import commonStyles from '@theme/commonStyles';
import { Touchable } from '@components/touchable';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenRouteT } from '@routes/types';
import { Platform } from '@theme/platform';
import { COLORS } from '@theme/colors';
import { View } from '@components/view';
import { Icon } from '@components/common-icon';
import { Text } from '@components/text';
import { Icons } from '@theme/icons';
import { BreadCrumb } from '@components/bread-crumb';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequest, purgeRequest, sendEmailVerifyRequest } from '@redux/actions';
import { RootState } from '@redux/reducers';
import { useCopied } from '@hook/use-copied';
import { ScrollView } from 'react-native';
import { showConfirm } from '@utils';
import { useLoadingGlobal } from '@hook/use-loading-global';

const _SettingScreen = ({}) => {
  const { userInfo } = useSelector((state: RootState) => state.auth);

  const navigation = useNavigation<StackNavigationProp<ScreenRouteT, 'Buy'>>();
  const styles = useSettingStyle();
  const dispatch = useDispatch();
  const copy = useCopied();
  const loading = useLoadingGlobal();
  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onLogout = useCallback(() => {
    dispatch(logoutRequest());
  }, [dispatch]);

  const onCopy = useCallback(() => {
    copy.onShow(userInfo?.data._id);
  }, [copy, userInfo?.data._id]);

  const onVerificationEmail = useCallback(() => {
    showConfirm('By clicking "OK" you will go to Email verification', () => {
      loading.onShow();
      dispatch(
        sendEmailVerifyRequest({
          email: userInfo?.data.email,
          callback: () => {
            loading.onHide();
            navigation.navigate('EmailVerification', { email: userInfo?.data?.email });
          },
        }),
      );
    });
  }, [dispatch, loading, navigation, userInfo?.data.email]);

  const onChangePassword = useCallback(() => {
    navigation.navigate('ChangePassword');
  }, [navigation]);

  return (
    <View>
      <Topbar>
        <View mh={Platform.SizeScale(20)}>
          <View>
            <Touchable onPress={onBack}>
              <View ml={Platform.SizeScale(10)} style={[commonStyles.row]}>
                <Icon tintColor={COLORS._085A51} icon={Icons.ICON_BACK} size={2} />
                <Text
                  ml={Platform.SizeScale(10)}
                  fontType="fontBold"
                  fontSize={Platform.SizeScale(20)}
                  color={COLORS._085A51}
                >
                  Account Setting
                </Text>
              </View>
            </Touchable>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View mt={Platform.SizeScale(10)} style={[commonStyles.row, commonStyles.spaceBetween]}>
              <View>
                <Icon
                  style={{ overflow: 'hidden', borderRadius: Platform.SizeScale(50) }}
                  icon={{ uri: userInfo?.data.avatar }}
                  size={8}
                  resizeMode={'cover'}
                />
              </View>
              <View mh={Platform.SizeScale(20)} flex={1}>
                <View style={[commonStyles.spaceBetween, commonStyles.row]}>
                  <Text fontSize={Platform.SizeScale(18)} fontType="fontBold">
                    {userInfo?.data.fullname}
                  </Text>
                  <Icon icon={Icons.ICON_PENCIL} size={2} />
                </View>
                <View mt={Platform.SizeScale(10)} style={[commonStyles.spaceBetween, commonStyles.row]}>
                  <Text fontSize={Platform.SizeScale(12)} fontType="fontLight">
                    UID: {userInfo?.data._id}
                  </Text>
                  <Touchable onPress={onCopy}>
                    <Icon icon={Icons.ICON_COPY} size={2} />
                  </Touchable>
                </View>
              </View>
            </View>
            <View mt={Platform.SizeScale(10)}>
              <BreadCrumb
                left={
                  <View>
                    <Text fontType="fontBold" fontSize={Platform.SizeScale(12)}>
                      Username
                    </Text>
                    <Text mt={Platform.SizeScale(10)} fontSize={Platform.SizeScale(15)} color={COLORS._26BBA9}>
                      @{userInfo?.data.username}
                    </Text>
                  </View>
                }
                right={
                  <Touchable>
                    <Icon icon={Icons.ICON_CHECKBOX} size={3} />
                  </Touchable>
                }
              />
            </View>
            <View mt={Platform.SizeScale(10)}>
              <BreadCrumb
                left={
                  <View>
                    <Text fontType="fontBold" fontSize={Platform.SizeScale(12)}>
                      Email
                    </Text>
                    <Text mt={Platform.SizeScale(10)} fontSize={Platform.SizeScale(15)} color={COLORS._26BBA9}>
                      @{userInfo?.data.email}
                    </Text>
                  </View>
                }
                right={
                  <Touchable onPress={onVerificationEmail}>
                    {userInfo?.data.verified ? (
                      <Icon icon={Icons.ICON_CHECKBOX} size={3} />
                    ) : (
                      <Icon icon={Icons.ICON_UNCHECKBOX} size={3} />
                    )}
                  </Touchable>
                }
              />
            </View>
            <View mt={Platform.SizeScale(10)}>
              <BreadCrumb
                onPress={onChangePassword}
                left={
                  <View>
                    <Text fontSize={Platform.SizeScale(15)}>Change Password</Text>
                  </View>
                }
                right={
                  <Touchable>
                    <Icon icon={Icons.ICON_ARROW_RIGHT} size={3} />
                  </Touchable>
                }
              />
            </View>
            <View mt={Platform.SizeScale(10)}>
              <BreadCrumb
                left={
                  <View>
                    <Text fontSize={Platform.SizeScale(15)}>Language</Text>
                  </View>
                }
                right={
                  <Touchable>
                    <View style={[commonStyles.row]}>
                      <Text color={COLORS._909090} fontType="fontLight">
                        English
                      </Text>
                      <Icon icon={Icons.ICON_ARROW_RIGHT} size={3} />
                    </View>
                  </Touchable>
                }
              />
            </View>
            <View mt={Platform.SizeScale(10)}>
              <BreadCrumb
                left={
                  <View>
                    <Text fontSize={Platform.SizeScale(15)}>Currency</Text>
                  </View>
                }
                right={
                  <Touchable>
                    <View style={[commonStyles.row]}>
                      <Text color={COLORS._909090} fontType="fontLight">
                        USD
                      </Text>
                      <Icon icon={Icons.ICON_ARROW_RIGHT} size={3} />
                    </View>
                  </Touchable>
                }
              />
            </View>
            <View mt={Platform.SizeScale(10)}>
              <BreadCrumb
                left={
                  <View>
                    <Text fontSize={Platform.SizeScale(15)}>Security Setting</Text>
                    <Text fontSize={Platform.SizeScale(12)} color={COLORS._909090}>
                      Security, payment, auto lock...
                    </Text>
                  </View>
                }
                right={
                  <Touchable>
                    <View style={[commonStyles.row]}>
                      <Text color={COLORS._909090} fontType="fontLight">
                        USD
                      </Text>
                      <Icon icon={Icons.ICON_ARROW_RIGHT} size={3} />
                    </View>
                  </Touchable>
                }
              />
            </View>
            <View mt={Platform.SizeScale(10)}>
              <BreadCrumb
                left={
                  <View>
                    <Text>Logout</Text>
                  </View>
                }
                onPress={onLogout}
              />
            </View>
            <View mt={Platform.SizeScale(200)} />
          </ScrollView>
        </View>
      </Topbar>
    </View>
  );
};

export const SettingScreen = memo(_SettingScreen);
