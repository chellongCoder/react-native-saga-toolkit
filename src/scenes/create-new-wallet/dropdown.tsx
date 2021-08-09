import { Icon } from '@components/common-icon';
import { Text } from '@components/text';
import { Touchable } from '@components/touchable';
import { View } from '@components/view';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Icons } from '@theme/icons';
import { Platform } from '@theme/platform';
import React, { memo, useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';

const _Dropdown = () => {
  const [isShow, setIsShow] = useState(false);
  const onShowPopup = useCallback(() => {
    setIsShow(!isShow);
  }, [isShow]);

  return (
    <View>
      <Touchable onPress={onShowPopup} style={[commonStyles.row, commonStyles.center, styles.choice]}>
        <Text color={COLORS._085A51} fontSize={Platform.SizeScale(11)}>
          12
        </Text>
        <View position="absolute" right={Platform.SizeScale(5)}>
          <Icon size={0.8} icon={Icons.ICON_DROPDOWN} />
        </View>
      </Touchable>

      {isShow ? (
        <View style={styles.options}>
          <Text mv={Platform.SizeScale(5)} color={COLORS.WHITE} fontSize={Platform.SizeScale(11)}>
            12
          </Text>
          <Text mv={Platform.SizeScale(5)} color={COLORS.WHITE} fontSize={Platform.SizeScale(11)}>
            24
          </Text>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export const Dropdown = memo(_Dropdown);

const styles = StyleSheet.create({
  choice: {
    backgroundColor: COLORS.WHITE,
    width: Platform.SizeScale(53),
    height: Platform.SizeScale(21),
    borderRadius: Platform.SizeScale(10),
  },
  options: {
    backgroundColor: COLORS._26BBA9,
    position: 'absolute',
    zIndex: 999,
    top: 30,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Platform.SizeScale(10),
    paddingHorizontal: Platform.SizeScale(20),
  },
});
