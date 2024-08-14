import {StyleSheet} from 'react-native';
const StylesAmi = StyleSheet.create({
  btnModal: {
    bottom: 300,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  icoBtnModal: {
    width: 38,
    height: 41,
    resizeMode: 'contain',
  },
  txtBtnModal: {
    fontFamily: 'Comfortaa',
    fontWeight: '700',
    fontSize: 15,
    color: '#9424FA',
    right: 20,
  },
  plusBtnModal: {
    width: 37,
    height: 37,
    resizeMode: 'contain',
  },
  containerModal: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnClose: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  viewModal: {
    top: 100,
    width: '100%',
    height: 700,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  icoModal: {
    width: 84,
    height: 84,
    top: 30,
    alignSelf: 'center',
  },
  txtTitleModal: {
    fontFamily: 'Gilroy-Bold',
    fontWeight: '700',
    fontSize: 20,
    color: '#000',
    top: 50,
    alignSelf: 'center',
  },
  subTxtModal: {
    fontFamily: 'Gilroy',
    fontWeight: '700',
    fontSize: 14,
    color: '#000',
    top: 140,
    left: 40,
  },
});

export default StylesAmi;
