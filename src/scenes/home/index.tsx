import React, { memo, useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useHomeStyle } from './styles';
import { TouchableWithoutFeedback } from 'react-native';
import { Icon } from '@ui-kitten/components';

const _HomeScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useHomeStyle();
  const animation = useRef(new Animated.Value(0)).current;
  let _open = false;

  const toggleOpen = () => {
    const toValue = _open ? 0 : 1;
    Animated.timing(animation, {
      toValue,
      duration: 200,
      useNativeDriver: true,
    }).start();
    _open = !_open;
  };
  const firstItemStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -70],
        }),
      },
    ],
  };
  const secondItemStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 20],
        }),
      },
    ],
  };
  const scaleInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 30],
  });
  const bgStyle = {
    transform: [
      {
        scale: scaleInterpolate,
      },
    ],
  };
  const labelPositionInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-30, -90],
  });
  const opacityInterpolate = animation.interpolate({
    inputRange: [0, 0.8, 1],
    outputRange: [0, 0, 1],
  });
  const labelStyle = {
    opacity: opacityInterpolate,
    transform: [
      {
        translateX: labelPositionInterpolate,
      },
    ],
  };
  const rotateAnim = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-180deg'],
  });
  const iconButtonStyle = {
    transform: [{ rotate: rotateAnim }],
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.background, bgStyle]} />
      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.other, secondItemStyle]}>
          <Animated.Text style={[styles.label, labelStyle]}>Network</Animated.Text>
          <Icon style={{ height: 20, color: 'white' }} type="Feather" name="network" color="#555" size={20} />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={toggleOpen}>
        <View style={[styles.button, { backgroundColor: '#323F4E' }]}>
          <Animated.Text style={[styles.label, labelStyle]}>Cancel</Animated.Text>
          <Animated.View style={[iconButtonStyle]}>
            <Icon style={{ height: 20, color: 'white' }} type="Feather" name="home" tintColor="#FFF" size={20} />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export const HomeScreen = memo(_HomeScreen);
