import {StyleSheet} from 'react-native';

const StylesConfirmationCompte = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    bottom: 100,
  },
  bgGradient: {
    resizeMode: 'contain',
    flex: 1,
  },
  TxtTitle: {
    top: 100,
    color: '#FFF',
    fontFamily: 'Comfortaa-Bold',
    fontSize: 24,
    fontStyle: 'normal',
    textAlign: 'center',
    fontWeight: '500',
  },
  textWhite: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Comfortaa',
    top: 200,
    left: 40,
  },
  textWhite2: {
    color: '#fff',
    top: 220,
    width: '80%',
    fontSize: 15,
    left: 40,
  },
  btn: {
    top: 350,
    height: 56,
  },
  textBtn: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Comfortaa-Bold',
    top: 15,
    zIndex: 1,
  },
  imgBtn: {
    bottom: 30,
    width: '90%',
    height: 56,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  lottie: {
    bottom: 80,
    width: '80%',
    height: '80%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  lottie2: {
    bottom: 60,
    width: '80%',
    height: '80%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  lottieText: {
    bottom: 40,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#A70000',
    fontFamily: 'Comfortaa-Bold',
  },
  lottieText2: {
    bottom: 20,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#0019A7',
    fontFamily: 'Comfortaa-Bold',
  },
  ViewBtn: {
    top: 0,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBtn2: {
    height: 56,
    flexShrink: 0,
    alignSelf: 'center',
    resizeMode: 'contain',
    top: 18,
  },
  TxtBtn: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    bottom: 28,
    zIndex: 1,
  },
});

export default StylesConfirmationCompte;
