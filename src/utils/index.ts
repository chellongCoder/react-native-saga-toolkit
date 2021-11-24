import { Alert } from 'react-native';

export const alertError = (message: string) => {
  Alert.alert('Lỗi!', message);
};

export function alertMessage(message: string, onPress?: any, content = '') {
  setTimeout(() => {
    Alert.alert(message, content, [
      {
        text: 'OK',
        onPress: onPress,
      },
    ]);
  }, 0);
}

export const showConfirm = (message = '', onPositive = () => {}, onNegative = () => {}, title = 'Verfication') => {
  Alert.alert(title, message, [
    {
      text: 'OK',
      onPress: onPositive,
    },
    {
      text: 'Cancel',
      onPress: onNegative,
    },
  ]);
};
