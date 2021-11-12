import { Icon } from '@components/common-icon';
import { Text } from '@components/text';
import { Touchable } from '@components/touchable';
import { View } from '@components/view';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Icons } from '@theme/icons';
import { Platform } from '@theme/platform';
import React, { memo, useCallback, useState } from 'react';
import { useDropdownSelectionStyle } from './styles';
import { data } from './__mocks__/data';

export type DropdownSelectionProps = {
  width?: number;
};

const _DropdownSelection: React.FC<DropdownSelectionProps> = ({ width }) => {
  const [isShow, setIsShow] = useState(false);
  const [choosenData, setChoosenData] = useState(data[0].name);

  const onShowPopup = useCallback(() => {
    setIsShow(!isShow);
  }, [isShow]);

  const onChoice = useCallback((data: string) => {
    setChoosenData(data);
    setIsShow(false);
  }, []);

  const styles = useDropdownSelectionStyle(width);

  return (
    <View>
      <Touchable onPress={onShowPopup} style={[commonStyles.row, commonStyles.center, styles.choice]}>
        <Text color={COLORS._085A51} fontSize={Platform.SizeScale(11)}>
          {choosenData}
        </Text>
        <View position="absolute" right={Platform.SizeScale(5)}>
          <Icon size={0.8} icon={Icons.ICON_DROPDOWN} />
        </View>
      </Touchable>

      {isShow ? (
        <View style={styles.options}>
          {data.map((value, index) => {
            return (
              <Touchable onPress={() => onChoice(value.name)}>
                <Text mv={Platform.SizeScale(5)} color={COLORS.WHITE} fontSize={Platform.SizeScale(11)}>
                  {value.name}
                </Text>
              </Touchable>
            );
          })}
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

export const DropdownSelection = memo(_DropdownSelection);
