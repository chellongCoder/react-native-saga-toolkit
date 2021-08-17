import React, { memo, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSendStyle } from './styles';
import { Topbar } from '@components/topbar';
import commonStyles from '@theme/commonStyles';
import { Platform } from '@theme/platform';
import { View } from '@components/view';
import { Text } from '@components/text';
import { COLORS } from '@theme/colors';
import { Currency } from '@components/currency';
import { useBlurView } from '@hook/use-blur-view';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenRouteT } from '@routes/types';

const _SendScreen = ({}) => {
  const styles = useSendStyle();
  const blurView = useBlurView();
  const navigation = useNavigation<StackNavigationProp<ScreenRouteT, 'Send'>>();

  const onPressCurrency = useCallback(() => {
    navigation.navigate('CurrencyStack');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Topbar title="Your custom name">
        <ScrollView>
          <View mh={Platform.SizeScale(10)} style={[commonStyles.row, commonStyles.spaceBetween]}>
            <Text fontSize={Platform.SizeScale(16)} color={COLORS._1A9E8F}>
              Choose currency:
            </Text>
            <Currency onPress={onPressCurrency} />
          </View>
        </ScrollView>
      </Topbar>
    </View>
  );
};

export const SendScreen = memo(_SendScreen);
