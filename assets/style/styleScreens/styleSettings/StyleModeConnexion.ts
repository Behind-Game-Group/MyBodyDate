import {StyleSheet} from 'react-native';

const commonTextStyles = {
  fontFamily: 'Comfortaa',
  fontWeight: '700' as const,
};

const ModeConnexionStyles = StyleSheet.create({
  bgGradient: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  title: {
    top: 30,
    color: '#0019A7',
    fontFamily: 'Gilroy',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
  },
  separator: {
    backgroundColor: '#0019A7',
    width: 351,
    height: 1,
    alignSelf: 'center',
    top: 60,
  },
  description: {
    color: '#929EDE',
    top: 100,
    width: 320,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 16,
    ...commonTextStyles,
  },
  ModeConnexionContainer: {
    flexShrink: 0,
    alignSelf: 'center',
    top: 150,
  },
  secondTitle: {
    color: '#0019A7',
    textAlign: 'left',
    left: 20,
    fontFamily: 'Gilroy',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  ModeConnexionItem: {
    width: 327,
    height: 51,
    flexShrink: 0,
    alignSelf: 'center',
  },
  ModeConnexionLog: {
    width: 331,
    height: 56,
    flexShrink: 0,
    alignSelf: 'center',
  },
  ModeConnexionLogText: {
    top: -40,
    left: 10,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 18,
    ...commonTextStyles,
  },
  ModeConnexionItemText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 18,
    ...commonTextStyles,
  },
  backButton: {
    width: 340,
    height: 56,
    flexShrink: 0,
    alignSelf: 'center',
  },
  backButtonText: {
    top: -40,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 18,
    ...commonTextStyles,
  },
});

export default ModeConnexionStyles;
