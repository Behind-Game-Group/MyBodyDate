import {StyleSheet} from 'react-native';
const StylesVille = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  bgGradient: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  viewContent: {
    flex: 8,
  },
  TxtTitle: {
    top: 150,
    left: 40,
    color: '#FFF',
    fontFamily: 'Comfortaa-Bold',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  ViewInput: {
    flex: 2,
    top: 300,
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
  ViewBtn: {
    flex: 2,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBtn: {
    height: 56,
    flexShrink: 0,
    alignSelf: 'center',
    resizeMode: 'contain',
    bottom: 17,
  },
  TxtBtn: {
    color: '#0F0BAE',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    top: 24,
    zIndex: 1,
  },
});

export default StylesVille;
