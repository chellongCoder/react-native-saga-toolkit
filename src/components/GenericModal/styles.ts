import { StyleSheet } from 'react-native';
import { COLORS } from '@theme/colors';
import { fonts } from '@theme/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.MIDNIGHT_BLUE,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIconContent: {
    fontSize: 24,
    marginRight: 10,
  },
  pageTitle: {
    color: COLORS.ALIZARIN,
    fontFamily: fonts.regular,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default styles;
