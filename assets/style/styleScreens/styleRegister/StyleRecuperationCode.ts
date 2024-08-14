import {StyleSheet} from 'react-native';

const StylesRecuperationCode = StyleSheet.create({
  container: {
    height: 10,
    backgroundColor: 'red',
  },
  bgGradient: {
    position: 'relative',
    resizeMode: 'contain',
    top: 0,
    height: 868,
  },
  TxtTitle: {
    top: 150,
    color: '#FFF',
    fontFamily: 'Comfortaa-Bold',
    textAlign: 'center',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  ViewInput: {
    flex: 2,
    top: 300,
    height: 700,
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
  textWhite: {
    color: '#fff',
    alignSelf: 'center',
    fontFamily: 'Comfortaa',
    top: 20,
    width: '70%',
    fontSize: 12,
  },
  btn: {
    height: 56,
    bottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtn: {
    color: '#0F0BAE',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    zIndex: 1,
    top: 25,
  },
  imgBtn: {
    bottom: 20,
    width: '90%',
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default StylesRecuperationCode;
