import React, { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useMarketStyle } from './styles';
import { Topbar } from '@components/topbar';
import commonStyles from '@theme/commonStyles';
import { Header } from './header';
import { Icon } from '@components/common-icon';
import { Icons } from '@theme/icons';
import { Platform } from '@theme/platform';
import { View } from '@components/view';
import { Tabs } from './tab';
import { Filters } from './filter';
import { List } from './list';
// const ClickViewUI: any = requireNativeComponent('ClickView');

const _MarketScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useMarketStyle();

  const renderHeader = useCallback(() => {
    return (
      <View style={{ flex: 1 }}>
        <View style={[commonStyles.row, commonStyles.spaceBetween]}>
          <View>
            <Header />
          </View>
          <View style={[commonStyles.row]}>
            <View mr={Platform.SizeScale(20)}>
              <Icon icon={Icons.ICON_THREE_DOT_GREEN} size={3.5} />
            </View>
            <View>
              <Icon icon={Icons.ICON_X_GREEN} size={3.5} />
            </View>
          </View>
        </View>
      </View>
    );
  }, []);

  return (
    <View>
      <Topbar renderHeader={renderHeader}>
        <Tabs />
        <Filters />
        <List />
      </Topbar>
      {/* <ClickViewUI /> */}
    </View>
  );
};

export const MarketScreen = memo(_MarketScreen);
