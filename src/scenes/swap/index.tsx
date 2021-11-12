import React, { memo, useRef } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSwapStyle } from './styles';
import BottomSheet from 'react-native-bottomsheet-reanimated';

const _SwapScreen: React.FC<any> = ({}) => {
  const navigation = useNavigation();
  const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  };
  const snapPoints = [0, Screen.height / 2, '70%', '100%'];
  const bottomSheet = useRef<any>();
  const styles = useSwapStyle();
  const onOpenBottomSheetHandler = index => {
    bottomSheet?.current?.snapTo?.(index);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.boxWrapper}>
        <TouchableOpacity onPress={() => onOpenBottomSheetHandler(0)}>
          <View style={styles.box}>
            <Text>1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onOpenBottomSheetHandler(1)}>
          <View style={styles.box}>
            <Text>2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onOpenBottomSheetHandler(2)}>
          <View style={styles.box}>
            <Text>3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onOpenBottomSheetHandler(3)}>
          <View style={styles.box}>
            <Text>4</Text>
          </View>
        </TouchableOpacity>
      </View>

      <BottomSheet
        bottomSheerColor="#FFFFFF"
        // backDropColor="red"
        ref={bottomSheet}
        initialPosition={'50%'}
        snapPoints={snapPoints}
        isBackDrop={true}
        isBackDropDismissByPress={true}
        isRoundBorderWithTipHeader={true}
        keyboardAware
        header={
          <View>
            <Text style={styles.text}>Header</Text>
          </View>
        }
        body={
          <View style={styles.body}>
            <Text style={styles.text}>Body</Text>
            <TextInput style={{ width: '100%', backgroundColor: 'gray' }} />
          </View>
        }
      />
    </SafeAreaView>
  );
};

export const SwapScreen = memo(_SwapScreen);
