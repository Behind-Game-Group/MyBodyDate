import {StyleSheet} from 'react-native';

const StylesSituation = StyleSheet.create({
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
  },
  TxtTitle: {
    top: 100,
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Comfortaa-Bold',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  textWhite: {
    top: 180,
    left: 40,
    color: '#fff',
    fontSize: 12,
    width: '90%',
    height: 200,
    fontFamily: 'Comfortaa',
  },
  ViewBTNSelect: {
    top: 140,
    height: 400,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnSelect: {
    width: '80%',
    height: 56,
    alignSelf: 'center',
    borderColor: '#0019A7',
    borderWidth: 2,
    borderRadius: 100,
    justifyContent: 'center',
  },
  txtBtnSelect: {
    textAlign: 'center',
    fontSize: 18,
    fontStyle: 'normal',
  },
  ViewBtn: {
    flex: 1,
    top: 20,
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

export default StylesSituation;
