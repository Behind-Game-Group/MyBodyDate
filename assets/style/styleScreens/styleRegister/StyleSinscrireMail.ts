import {StyleSheet} from 'react-native';

const StylesSinscrireMail = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  bgGradient: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  ViewText: {
    flex: 1,
    top: 60,
  },
  TxtTitle: {
    color: '#FFF',
    fontFamily: 'Comfortaa-Bold',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
    top: 100,
    left: 50,
  },
  ViewInput: {
    flex: 2,
    top: 140,
  },
  TextInput: {
    color: '#FFF',
    fontSize: 18,
    alignSelf: 'center',
    width: '80%',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 30,
    padding: 15,
  },
  textError: {
    color: '#880808',
    width: '80%',
    fontSize: 18,
    alignSelf: 'center',
    textDecorationLine: 'underline',
    textDecorationColor: '#880808',
    fontFamily: 'Comfortaa-Bold',
    top: 20,
  },
  textWhite: {
    color: '#fff',
    top: 20,
    fontSize: 16,
    width: '80%',
    height: 350,
    alignSelf: 'center',
    fontFamily: 'Comfortaa',
  },
  ViewBtn: {
    flex: 3,
    top: 280,
  },
  TxtBtn: {
    color: '#0F0BAE',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    zIndex: 1,
    top: 42,
  },
  imgBtn: {
    height: 56,
    flexShrink: 0,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});

export default StylesSinscrireMail;
