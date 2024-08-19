import {StyleSheet} from 'react-native';
const StylesConfirmationEmail = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  bgGradient: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  TxtTitle: {
    top: 180,
    left: 40,
    color: '#FFF',
    fontFamily: 'Comfortaa-Bold',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  BlockImg: {
    top: 200,
    width: 130,
    height: 130,
    borderRadius: 100,
    padding: 20,
    backgroundColor: '#FFF',
    alignSelf: 'center',
  },
  ImgBulle: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  textWhite: {
    top: 260,
    color: '#fff',
    fontSize: 12,
    width: '70%',
    alignSelf: 'center',
    fontFamily: 'Comfortaa',
  },
  textWhite2: {
    top: 100,
    color: '#fff',
    fontSize: 12,
    width: '70%',
    alignSelf: 'center',
    fontFamily: 'Comfortaa',
  },
  btn: {
    top: 250,
    height: 56,
  },
  btnUn: {
    bottom: 40,
    height: 56,
  },
  textBtn: {
    top: 10,
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Comfortaa-Bold',
    zIndex: 1,
    left: 20,
  },
  textBtnUn: {
    textAlign: 'center',
    fontFamily: 'Comfortaa-Bold',
    fontSize: 18,
    fontStyle: 'normal',
    zIndex: 1,
    top: 10,
  },
  imgBtn: {
    bottom: 30,
    width: '90%',
    height: 56,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default StylesConfirmationEmail;
