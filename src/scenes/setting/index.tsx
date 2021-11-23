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
import { useDispatch } from 'react-redux';
import { logoutRequest, purgeRequest } from '@redux/actions';

const _SettingScreen = ({}) => {
  const navigation = useNavigation<StackNavigationProp<ScreenRouteT, 'Buy'>>();
  const styles = useSettingStyle();
  const dispatch = useDispatch();
  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onLogout = useCallback(() => {
    dispatch(logoutRequest());
  }, [dispatch]);

  return (
    <View>
      <Topbar>
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
        <View mh={Platform.SizeScale(10)} mt={Platform.SizeScale(10)}>
          <BreadCrumb
            left={
              <View>
                <Text>Logout</Text>
              </View>
            }
            onPress={onLogout}
          />
        </View>
      </Topbar>
    </View>
  );
};

export const SettingScreen = memo(_SettingScreen);
