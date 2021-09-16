import React, { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useMarketCoinProfileStyle } from './styles';
import { Topbar } from '@components/topbar';
import { View } from '@components/view';
import commonStyles from '@theme/commonStyles';
import { Icon } from '@components/common-icon';
import { Icons } from '@theme/icons';
import { Platform } from '@theme/platform';
import { Text } from '@components/text';
import { COLORS } from '@theme/colors';
import { ButtonGroup } from './buttonGroup';

const _MarketCoinProfileScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useMarketCoinProfileStyle();

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderHeader = useCallback(() => {
    return (
      <View style={{ flex: 1 }}>
        <View style={[commonStyles.row, commonStyles.spaceBetween]}>
          <View>
            <Icon tintColor={COLORS._085A51} icon={Icons.ICON_BACK} />
          </View>
          <View style={[commonStyles.row]}>
            <Text fontType="fontBold" fontSize={Platform.SizeScale(20)} color={COLORS._085A51}>
              BTC / USDT
            </Text>
          </View>
          <View style={[commonStyles.row]}>
            <Icon icon={Icons.ICON_ACTIVE_STAR} />
          </View>
        </View>

        <ButtonGroup />
      </View>
    );
  }, []);

  return (
    <View>
      <Topbar renderHeader={renderHeader}>
        <Text>s</Text>
      </Topbar>
      {/* <ClickViewUI /> */}
    </View>
  );
};

export const MarketCoinProfileScreen = memo(_MarketCoinProfileScreen);
