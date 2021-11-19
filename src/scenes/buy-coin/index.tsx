import React, { memo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useBuyCoinStyle } from './styles';
import { Topbar } from '@components/topbar';
import { Platform } from '@theme/platform';
import commonStyles from '@theme/commonStyles';
import { Icon } from '@components/common-icon';
import { View } from '@components/view';
import { Text } from '@components/text';
import { COLORS } from '@theme/colors';
import { Icons } from '@theme/icons';
import { TextField } from '@components/text-field';

const _BuyCoinScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useBuyCoinStyle();

  return (
    <View>
      <Topbar>
        <View ml={Platform.SizeScale(10)} style={[commonStyles.row, commonStyles.spaceBetween]}>
          <View style={[commonStyles.row]}>
            <Icon tintColor={COLORS._085A51} icon={Icons.ICON_BACK} size={2} />
            <Text
              ml={Platform.SizeScale(10)}
              fontType="fontBold"
              fontSize={Platform.SizeScale(20)}
              color={COLORS._085A51}
            >
              Buy
            </Text>
          </View>
          <View style={[commonStyles.row]}>
            <View style={styles.buttonHeader}>
              <Icon tintColor={COLORS._085A51} icon={Icons.ICON_THREEDOT} size={1} />
            </View>
            <View mh={Platform.SizeScale(20)}>
              <Icon icon={Icons.ICON_X_GREEN} size={3} />
            </View>
          </View>
        </View>

        <View
          mt={Platform.SizeScale(20)}
          borderRadius={Platform.SizeScale(20)}
          mh={Platform.SizeScale(10)}
          backgroundColor={COLORS.WHITE}
        >
          <View mv={Platform.SizeScale(20)} alignItems="center">
            <Text fontSize={Platform.SizeScale(16)}>Buy BTC - Bitcoin</Text>
          </View>
          <View mh={Platform.SizeScale(10)} mt={Platform.SizeScale(20)}>
            <Text
              mb={Platform.SizeScale(10)}
              fontType="fontBold"
              fontSize={Platform.SizeScale(16)}
              color={COLORS._0E9888}
            >
              Order Amount
            </Text>
            <TextField
              style={[styles.inputRateStyle]}
              placeholder={'Search - Buy'}
              inputStyle={styles.inputStyles}
              placeholderTextColor={COLORS._989898}
              renderRightAccessory={() => (
                <View style={[commonStyles.row, styles.choice]}>
                  <Text mr={Platform.SizeScale(5)} fontType="fontBold" color={COLORS.WHITE}>
                    BTC
                  </Text>
                  <Icon tintColor={COLORS.WHITE} icon={Icons.ICON_DROP_DOWN} size={1} />
                </View>
              )}
            />
          </View>
          <View mh={Platform.SizeScale(10)} mt={Platform.SizeScale(20)}>
            <Text
              mb={Platform.SizeScale(10)}
              fontType="fontBold"
              fontSize={Platform.SizeScale(16)}
              color={COLORS._0E9888}
            >
              Total Charge (Fee included)
            </Text>
            <TextField
              style={[styles.inputRateStyle]}
              placeholder={'Search - Buy'}
              inputStyle={styles.inputStyles}
              placeholderTextColor={COLORS._989898}
              renderRightAccessory={() => (
                <View style={[commonStyles.row, styles.choice]}>
                  <Text mr={Platform.SizeScale(5)} fontType="fontBold" color={COLORS.WHITE}>
                    USD
                  </Text>
                  <Icon tintColor={COLORS.WHITE} icon={Icons.ICON_DROP_DOWN} size={1} />
                </View>
              )}
            />
          </View>
        </View>
      </Topbar>
    </View>
  );
};

export const BuyCoinScreen = memo(_BuyCoinScreen);
