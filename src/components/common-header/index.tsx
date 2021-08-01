import { Icon } from '@components/common-icon';
import { CommonMenu } from '@components/common-menu';
import { Touchable } from '@components/touchable';
import { useBlurView } from '@hook/use-blur-view';
import commonStyles from '@theme/commonStyles';
import { Icons } from '@theme/icons';
import { Images } from '@theme/images';
import { Platform } from '@theme/platform';
import React, { memo, useCallback } from 'react';
import { View, Text, Image } from 'react-native';
import { useCommonHeaderStyle } from './styles';

const _CommonHeader = ({}) => {
  const styles = useCommonHeaderStyle();
  const blurView = useBlurView();

  const onShowMenu = useCallback(() => {
    blurView.onShow(
      <CommonMenu />,
      {
        right: Platform.SizeScale(10),
        top: Platform.SizeScale(50),
      },
      'zoom',
    );
  }, [blurView]);

  return (
    <View style={[commonStyles.row, commonStyles.spaceBetween, styles.header]}>
      <View style={commonStyles.row}>
        <Touchable>
          <Icon mr={Platform.SizeScale(10)} icon={Icons.ICON_AVATAR} size={4} />
        </Touchable>
        <View style={styles.logo}>
          <Image resizeMode="contain" style={commonStyles.image} source={Images.TEXT_LOGO} />
        </View>
      </View>
      <View style={commonStyles.row}>
        <Icon ml={Platform.SizeScale(10)} icon={Icons.ICON_SEARCH} size={2} />
        <Touchable onPress={onShowMenu}>
          <Icon ml={Platform.SizeScale(20)} icon={Icons.ICON_MENU} size={2} />
        </Touchable>
      </View>
    </View>
  );
};

export const CommonHeader = memo(_CommonHeader);
