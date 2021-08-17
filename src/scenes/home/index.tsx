import React, { memo, useCallback, useRef, useState } from 'react';
import { Animated, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useHomeStyle } from './styles';
import { COLORS } from '@theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import { Menu } from '@scenes/Wallet/Menu';
import { CommonHeader } from '@components/common-header';
import { Icons } from '@theme/icons';
import { Icon } from '@components/common-icon';
import commonStyles from '@theme/commonStyles';
import { Text } from '@components/text';
import { Platform } from '@theme/platform';
import { View } from '@components/view';
import { BreadCrumb } from '@components/bread-crumb';
import { Touchable } from '@components/touchable';
import Color from 'color';
import { ListFullOption } from '@components/list';
import { assets } from './__mocks__/data';
import { useBlurView } from '@hook/use-blur-view';
import { Sorting } from './Sorting';
import { ScreenRouteT } from '@routes/types';
import { StackNavigationProp } from '@react-navigation/stack';

const _HomeScreen = ({}) => {
  const navigation = useNavigation<StackNavigationProp<ScreenRouteT, 'Home'>>();
  const styles = useHomeStyle();
  const [tabIndex, setTabIndex] = useState(1);
  const blurView = useBlurView();

  const onShowMenu = useCallback(() => {
    blurView.onShow(
      <Sorting />,
      {
        right: Platform.SizeScale(10),
        bottom: Platform.SizeScale(0),
      },
      'bottom',
    );
  }, [blurView]);

  const onChangeTab1 = useCallback(() => {
    setTabIndex(1);
  }, []);

  const onChangeTab2 = useCallback(() => {
    setTabIndex(2);
  }, []);

  const onSend = useCallback(() => {
    navigation.navigate('Send');
  }, [navigation]);

  const renderItemContent = useCallback(() => {
    return (
      <View mh={Platform.SizeScale(20)} style={[commonStyles.row, styles.item]}>
        <View style={[commonStyles.row]} flex={0.8}>
          <Icon icon={Icons.ICON_COIN} size={6} />
          <View ml={Platform.SizeScale(10)}>
            <Text fontSize={Platform.SizeScale(16)} fontType="fontBold">
              BTC
            </Text>
            <Text mt={Platform.SizeScale(5)} color={COLORS._989898} fontSize={Platform.SizeScale(13)}>
              $ 29,850.15 <Text color={COLORS.MAIN_GREEN}>+ 1,6%</Text>
            </Text>
          </View>
        </View>
        <View alignItems={'flex-end'} style={[commonStyles.spaceBetween]} flex={0.2}>
          <Text fontSize={Platform.SizeScale(16)}>0</Text>
          <Text mt={Platform.SizeScale(5)} fontSize={Platform.SizeScale(13)} color={COLORS._1A9E8F}>
            $ 0
          </Text>
        </View>
      </View>
    );
  }, [styles.item]);

  return (
    <LinearGradient useAngle angle={108.66} colors={COLORS.HEADER_GRADIENT} style={styles.container}>
      <Menu />

      <CommonHeader />

      <View style={styles.body}>
        <View mv={Platform.SizeScale(20)} style={[commonStyles.row, commonStyles.spaceBetween]}>
          <Icon icon={Icons.ICON_WALLET} size={3} />
          <View style={[commonStyles.row, { alignItems: 'flex-end' }]}>
            <Text fontType="fontBold" fontSize={Platform.SizeScale(20)} color={'#085A51'}>
              Your custom name{' '}
            </Text>
            <Icon icon={Icons.ICON_DROP_DOWN} size={1.5} />
          </View>
          <Icon icon={Icons.ICON_BARCODE} size={3} />
        </View>

        <BreadCrumb
          left={
            <View>
              <Text fontSize={Platform.SizeScale(30)} mr={Platform.SizeScale(10)}>
                $56,955
              </Text>
            </View>
          }
          right={
            <Touchable
              onPress={() => {
                navigation.navigate('OtherPage');
              }}
            >
              <Icon icon={Icons.ICON_CLOSEEYE} size={2} />
            </Touchable>
          }
        />

        <View
          mv={Platform.SizeScale(20)}
          mh={Platform.SizeScale(20)}
          style={[commonStyles.row, commonStyles.spaceBetween]}
        >
          <Touchable onPress={onSend} style={[commonStyles.column]}>
            <Icon icon={Icons.ICON_SEND} size={5} style={[{ backgroundColor: COLORS._10C9F1 }, styles.action]} />
            <Text mt={Platform.SizeScale(5)} fontSize={Platform.SizeScale(12)}>
              send
            </Text>
          </Touchable>
          <View style={[commonStyles.column]}>
            <Icon icon={Icons.ICON_RECEIVE} size={5} style={[{ backgroundColor: COLORS._42EF91 }, styles.action]} />
            <Text mt={Platform.SizeScale(5)} fontSize={Platform.SizeScale(12)}>
              receive
            </Text>
          </View>
          <View style={[commonStyles.column]}>
            <Icon icon={Icons.ICON_BUYCOIN} size={5} style={[{ backgroundColor: COLORS._9977FC }, styles.action]} />
            <Text mt={Platform.SizeScale(5)} fontSize={Platform.SizeScale(12)}>
              buy coin
            </Text>
          </View>
        </View>

        <View style={styles.tablist}>
          <View style={[commonStyles.row, styles.tabs]}>
            <View flex={1} style={[commonStyles.row]}>
              <Touchable
                onPress={onChangeTab1}
                style={[
                  styles.tab,
                  { borderBottomWidth: tabIndex === 1 ? Platform.SizeScale(3) : styles.tab.borderBottomWidth },
                ]}
              >
                <Text
                  color={tabIndex === 1 ? COLORS._085A51 : Color(COLORS._085A51, 'hex').alpha(0.4).toString()}
                  fontType={tabIndex === 1 ? 'fontBold' : 'fontRegular'}
                  fontSize={Platform.SizeScale(18)}
                >
                  Asset
                </Text>
              </Touchable>
              <Touchable
                onPress={onChangeTab2}
                style={[
                  styles.tab,
                  { borderBottomWidth: tabIndex === 2 ? Platform.SizeScale(2) : styles.tab.borderBottomWidth },
                ]}
              >
                <Text
                  fontType={tabIndex === 2 ? 'fontBold' : 'fontRegular'}
                  color={tabIndex === 2 ? COLORS._085A51 : Color(COLORS._085A51, 'hex').alpha(0.4).toString()}
                  fontSize={Platform.SizeScale(18)}
                >
                  NFT
                </Text>
              </Touchable>
            </View>
            <View flex={1} style={[commonStyles.row, commonStyles.spaceBetween]}>
              <Touchable onPress={onShowMenu}>
                <Icon icon={Icons.ICON_FILTER} size={2} />
              </Touchable>
              <Icon tintColor={COLORS._0F7D70} icon={Icons.ICON_SEARCH} size={2} />
              <Icon icon={Icons.ICON_PLUS} size={2} />
            </View>
          </View>

          <View style={styles.list}>
            <ListFullOption
              listFooterComponent={<View style={{ height: Platform.SizeScale(150) }} />}
              data={assets}
              renderSubItem={renderItemContent}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export const HomeScreen = memo(_HomeScreen);
