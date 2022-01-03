import { Platform } from '@theme/platform';
import React, { memo, useCallback, useRef, useState } from 'react';
import { useSliderCarouselStyle } from './styles';
import { slides } from './__mocks__/data';
import Carousel from 'react-native-snap-carousel';
import FastImage from 'react-native-fast-image';
import commonStyles from '@theme/commonStyles';
import { View } from '@components/view';
import { Text } from '@components/text';
import { COLORS } from '@theme/colors';

const _SliderCarousel = ({}) => {
  const styles = useSliderCarouselStyle();
  const carousel = useRef();
  const [activeSlide, setActiveSlide] = useState(0);

  const onSnapToItem = useCallback((index: number) => {
    setActiveSlide(index);
  }, []);

  const renderItem = useCallback(({ item }) => {
    return (
      <View
        style={{
          width: '100%',
          height: Platform.SizeScale(130),
        }}
      >
        <FastImage resizeMode={'contain'} style={commonStyles.image} source={item.source} />
      </View>
    );
  }, []);
  const renderDot = useCallback(() => {
    return slides.map((value, index) => {
      return (
        <View>
          <Text
            color={index === activeSlide ? COLORS._9C9C9C : COLORS.WHITE}
            mh={Platform.SizeScale(5)}
            fontSize={Platform.SizeScale(24)}
          >
            •
          </Text>
        </View>
      );
    });
  }, [activeSlide]);
  return (
    <View>
      <Carousel
        data={slides}
        firstItem={0}
        renderItem={renderItem}
        sliderWidth={Platform.deviceWidth}
        itemWidth={Platform.deviceWidth}
        ref={carousel}
        loop={true}
        onSnapToItem={onSnapToItem}
        activeSlideAlignment="start"
      />
      <View mt={-Platform.SizeScale(30)} alignItems="center">
        <View style={[commonStyles.row]}>{renderDot()}</View>
      </View>
    </View>
  );
};

export const SliderCarousel = memo(_SliderCarousel);
