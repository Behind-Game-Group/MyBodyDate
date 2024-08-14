import {StyleSheet} from 'react-native';
const StyleChangerLocalisation = StyleSheet.create({
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
    fontFamily: 'Comfortaa',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  boxInputCity: {
    top: 150,
    alignSelf: 'center',
  },
  inputCity: {
    width: 276,
    height: 51,
    borderRadius: 24,
    borderWidth: 1,
    textAlign: 'center',
    borderColor: '#0019A7',
    color: '#0019A7',
    fontFamily: 'Comfortaa',
    fontSize: 15,
    fontStyle: 'normal',
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

export default StyleChangerLocalisation;
