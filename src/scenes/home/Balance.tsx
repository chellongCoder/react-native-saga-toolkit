import { BreadCrumb } from '@components/bread-crumb';
import { Icon } from '@components/common-icon';
import { Text } from '@components/text';
import { Touchable } from '@components/touchable';
import { View } from '@components/view';
import { Icons } from '@theme/icons';
import { Platform } from '@theme/platform';
import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';

const Balance = () => {
  const [isShow, setIsShow] = useState(false);
  const viewBalance = useCallback(() => {
    setIsShow(!isShow);
  }, [isShow]);

  return (
    <BreadCrumb
      left={
        <View>
          <Text fontSize={Platform.SizeScale(30)} mr={Platform.SizeScale(10)}>
            {isShow ? '$0' : '***********'}
          </Text>
        </View>
      }
      right={
        <Touchable onPress={viewBalance}>
          {!isShow ? (
            <Icon icon={Icons.ICON_CLOSEEYE} width={Platform.SizeScale(18)} height={Platform.SizeScale(20)} />
          ) : (
            <Icon icon={Icons.ICON_OPEN_EYE} width={Platform.SizeScale(18)} height={Platform.SizeScale(35)} />
          )}
        </Touchable>
      }
    />
  );
};

export default Balance;

const styles = StyleSheet.create({});
