import {StyleSheet} from 'react-native';
const StyleModeInvisible = StyleSheet.create({
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
  description: {
    color: '#929EDE',
    top: 100,
    width: 320,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  separator: {
    backgroundColor: '#0019A7',
    width: 351,
    height: 1,
    alignSelf: 'center',
    top: 60,
  },
  textBold: {
    color: '#0019A7',
    textAlign: 'center',
    fontFamily: 'Gilroy',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  switchModeInvisible: {
    top: 20,
    alignSelf: 'center',
  },
  backButton: {
    width: 331,
    height: 56,
    flexShrink: 0,
    alignSelf: 'center',
  },
  backButtonText: {
    top: -40,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Comfortaa',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
  },
});

export default StyleModeInvisible;
