import {StyleSheet} from 'react-native';
const StylesAccesPosition = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  bgGradient: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  Description: {
    top: 100,
    width: '90%',
    alignSelf: 'center',
    color: '#FFF',
    fontFamily: 'Comfortaa',
    fontSize: 12,
    fontWeight: '700',
  },
  Description2: {
    top: 150,
    width: '90%',
    alignSelf: 'center',
    color: '#FFF',
    fontFamily: 'Comfortaa',
    fontSize: 12,
    fontWeight: '700',
  },
  textTitleWhite: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Comfortaa-Bold',
    top: 150,
    left: 30,
  },
  textBtn: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Comfortaa-Bold',
  },
  ViewImg: {
    flex: 3,
    top: 100,
  },
  BlockImg: {
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

  //   Bouton

  ImgBtn: {
    width: '100%',
    height: 56,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  //   Modal

  centeredView: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  IcoPosition: {
    bottom: 180,
    width: 40,
    resizeMode: 'contain',
  },
  textBlack: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Comfortaa',
    alignSelf: 'center',
  },
  textBlack2: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Comfortaa',
    alignSelf: 'center',
    bottom: 160,
    width: '90%',
    textAlign: 'center',
  },
  textBlackBold: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Comfortaa-Bold',
    textAlign: 'center',
  },
  textBlackBold2: {
    top: 10,
    color: '#000',
    fontSize: 16,
    fontFamily: 'Comfortaa-Bold',
    textAlign: 'center',
  },
  RowModal: {
    flexDirection: 'row',
    bottom: 100,
    width: '90%',
    justifyContent: 'space-around',
  },
  IcoPermission: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
    borderRadius: 100,
    borderColor: '#0019A7',
  },
});

export default StylesAccesPosition;
