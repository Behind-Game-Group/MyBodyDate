import {StyleSheet} from 'react-native';

const StylesGenre = StyleSheet.create({
  container: {
    flex: 1,
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
  ViewText: {
    flex: 1,
  },
  TxtTitle: {
    top: 150,
    color: '#FFF',
    fontFamily: 'Comfortaa-Bold',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
    textAlign: 'center',
  },
  ViewBTNSelect: {
    top: 250,
    justifyContent: 'space-between',
    height: 240,
  },
  BtnSelect: {
    width: '80%',
    height: 56,
    alignSelf: 'center',
    borderColor: '#0019A7',
    borderWidth: 2,
    borderRadius: 100,
    justifyContent: 'center',
  },
  TextSelect: {
    textAlign: 'center',
    fontSize: 18,
    fontStyle: 'normal',
  },
  textWhite: {
    top: 420,
    left: 40,
    color: '#fff',
    fontSize: 12,
    width: '90%',
    height: 200,
    fontFamily: 'Comfortaa',
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

export default StylesGenre;
