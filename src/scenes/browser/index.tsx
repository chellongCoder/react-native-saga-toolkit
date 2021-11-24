import React, { memo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useBrowserStyle } from './styles';
import { Topbar } from '@components/topbar';
import { View } from '@components/view';
import { TabBorderradius } from '@components/tab-borderradius';
import { COLORS } from '@theme/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icon } from '@components/common-icon';
import { Icons } from '@theme/icons';
import commonStyles from '@theme/commonStyles';
import { Platform } from '@theme/platform';
import { TextField } from '@components/text-field';
import { Text } from '@components/text';
import { Images } from '@theme/images';

const _BrowserScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useBrowserStyle();
  const insets = useSafeAreaInsets();

  return (
    <View>
      <Topbar
        header={
          <>
            <View mh={Platform.SizeScale(20)} style={[commonStyles.row, commonStyles.spaceBetween]} mt={insets.top}>
              <TabBorderradius
                activeTabColor="#08B5A0"
                backgroundColor="#0C6A62"
                activeTabTextColor={COLORS.WHITE}
                unActiveTabTextColor={COLORS.customOpacity(COLORS.WHITE, 0.5)}
                tabs={[{ name: 'Search' }, { name: 'DApp' }]}
              />
              <View borderRadius={Platform.SizeScale(20)} backgroundColor={COLORS.WHITE}>
                <Icon tintColor={COLORS._085A51} size={2} icon={Icons.ICON_THREEDOT} />
              </View>
            </View>
            <View mh={Platform.SizeScale(20)} mv={Platform.SizeScale(20)}>
              <TextField
                // onChangeText={setUserName}
                style={styles.inputRateStyle}
                placeholder={'Enter wallet name'}
                // inputStyle={styles.inputStyles}
                placeholderTextColor={COLORS._989898}
                renderLeftAccessory={() => (
                  <View>
                    <Icon tintColor={COLORS._085A51} size={2} icon={Icons.ICON_SEARCH} />
                  </View>
                )}
                renderRightAccessory={() => (
                  <View style={styles.searchNumber} backgroundColor={COLORS._0F9888}>
                    <Text fontSize={Platform.SizeScale(16)} fontType="fontBold" color={COLORS.WHITE}>
                      1
                    </Text>
                  </View>
                )}
              />
            </View>
          </>
        }
      >
        <View>
          <Icon icon={Images.IMG_COMING_SOON} width={Platform.deviceWidth} height={Platform.deviceHeight / 2} />
        </View>
      </Topbar>
    </View>
  );
};

export const BrowserScreen = memo(_BrowserScreen);
