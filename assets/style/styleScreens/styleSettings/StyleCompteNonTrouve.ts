import {StyleSheet} from 'react-native';
const StyleCompteNonTrouve = StyleSheet.create({
  bgGradient: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  title: {
    top: 150,
    color: '#0019A7',
    width: 200,
    height: 89,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  icoAlert: {
    top: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 120,
    height: 120,
  },
  textInfo: {
    width: '80%',
    color: '#0019A7',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  backButton: {
    width: 331,
    height: 56,
    flexShrink: 0,
    alignSelf: 'center',
  },
  backButtonText: {
    top: -40,
    left: 10,
    color: '#0019A7',
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Comfortaa',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
  },
});

export default StyleCompteNonTrouve;
