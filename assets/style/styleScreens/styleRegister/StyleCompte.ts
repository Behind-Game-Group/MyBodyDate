import {StyleSheet} from 'react-native';

const StylesCompte = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgGradient: {
    minHeight: 900,
    resizeMode: 'contain',
    flexDirection: 'column',
  },
  ViewText: {
    top: 120,
  },
  TxtTitle: {
    color: '#FFF',
    fontFamily: 'Comfortaa-Bold',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
    textAlign: 'center',
  },
  TxtTitle2: {
    color: '#FFF',
    fontFamily: 'Comfortaa-Bold',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  ViewVideo: {
    flex: 3,
    alignItems: 'center',
  },
  btnVideo: {
    width: 30,
    height: 45,
    bottom: 110,
    resizeMode: 'contain',
  },
  TxtBtn: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});

export default StylesCompte;
