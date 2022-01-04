import { Platform } from "@theme/platform";
import React, { memo, useRef, useState } from "react";
import { View } from "react-native";
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { useDetailStyle } from "./styles";
const _ImageSlider = () => {
    const styles = useDetailStyle();
    const [entries, setEntries] = useState(ENTRIES1);
    const carouselRef = useRef(null);

    const _renderItem = ({ item, index }: any, parallaxProps: any) => {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: item.illustration }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.1}
                    {...parallaxProps}
                />
            </View>
        );
    }

    return (
        <View>
            <Carousel
                ref={carouselRef}
                sliderWidth={Platform.deviceWidth}
                sliderHeight={Platform.deviceWidth}
                itemWidth={Platform.deviceWidth - 60}
                data={entries}
                renderItem={_renderItem}
                hasParallaxImages={true}
            />
        </View>
    );
};

export const ImageSlider = memo(_ImageSlider);

const ENTRIES1 = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
];