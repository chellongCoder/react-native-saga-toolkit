import { StyleSheet } from 'react-native';
import { COLORS } from '@theme/colors';
import { fonts } from '@theme/fonts';
import theme from '@theme';
import { Platform } from '@theme/platform';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
  },
  logo: {
    width: Platform.SizeScale(160.45),
    height: Platform.SizeScale(119.19),
    alignSelf: 'center',
  },
  inputRateStyle: {
    height: Platform.SizeScale(41),
    borderRadius: Platform.SizeScale(20),
  },
  inputStyles: {
    color: COLORS.GREEN,
  },
  button: {
    backgroundColor: COLORS.DARK_GREEN,
    width: Platform.SizeScale(225),
    height: Platform.SizeScale(47),
    borderRadius: Platform.SizeScale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  finger: {
    width: Platform.SizeScale(47),
    height: Platform.SizeScale(47),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Platform.SizeScale(47 / 2),
    padding: Platform.SizeScale(10),
  },
  func: {
    width: Platform.SizeScale(47),
    height: Platform.SizeScale(47),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Platform.SizeScale(47 / 2),
    padding: Platform.SizeScale(10),
    backgroundColor: '#0D5650',
    marginHorizontal: Platform.SizeScale(10),
  },
});

export default styles;
