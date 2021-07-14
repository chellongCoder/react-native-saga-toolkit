import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { BlurView as Blur } from '@react-native-community/blur';
import { useBlurViewStyle } from './styles';
import commonStyles from '@theme/commonStyles';
import { Touchable } from '@components/touchable';
import FadeZoomAnim from '@components/anim/FadeZoomAnim';

const _BlurView = ({ child, onHide, position }: { child: React.ReactNode; onHide: () => void; position: any }) => {
  const styles = useBlurViewStyle();
  return (
    <View style={styles.container}>
      <>
        <FadeZoomAnim style={{ position: 'absolute', zIndex: 999, ...position }}>
          <>{child}</>
        </FadeZoomAnim>
        <Touchable onPress={onHide} style={commonStyles.absolute}>
          <Blur
            blurType="light"
            style={commonStyles.absolute}
            blurAmount={2}
            blurRadius={20}
            downsampleFactor={0.5}
            overlayColor="transparent"
          />
        </Touchable>
      </>
    </View>
  );
};

export const BlurView = memo(_BlurView);
