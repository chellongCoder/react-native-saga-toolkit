import React, { memo, useRef } from 'react';
import { Topbar } from '@components/topbar';
import { View } from '@components/view';
import { Text } from '@components/text';
import { Images } from '@theme/images';
import { Platform } from '@theme/platform';
import { Icon } from '@components/common-icon';

const _SwapScreen: React.FC<any> = ({}) => {
  return (
    <View>
      <Topbar title={'Swap'}>
        <Icon icon={Images.IMG_COMING_SOON} width={Platform.deviceWidth} height={Platform.deviceHeight / 2} />
      </Topbar>
    </View>
  );
};

export const SwapScreen = memo(_SwapScreen);
