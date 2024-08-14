import {StyleSheet} from 'react-native';

const StylesTaille = StyleSheet.create({
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
    top: 150,
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Comfortaa-Bold',
  },
  ViewRow: {
    flexDirection: 'row',
    height: 150,
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    bottom: 30,
  },
  BoxFlat: {justifyContent: 'center'},
  Flat: {
    height: 130,
    alignSelf: 'center',
  },
  SelectBox: {
    width: 70,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
    alignSelf: 'center',
  },
  SelectedText: {
    textAlign: 'center',
    alignSelf: 'center',
    color: '#0F0BAE',
    fontFamily: 'Comfortaa-Bold',
    fontSize: 20,
    width: 80,
  },
  NotSelectedText: {
    textAlign: 'center',
    alignSelf: 'center',
    color: '#FFF',
    fontFamily: 'Comfortaa',
    fontSize: 18,
    width: 80,
  },
  BoxCol: {
    flexDirection: 'column',
    height: 130,
    alignItems: 'center',
  },
  ScrollUp: {
    top: 10,
    left: 3,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  ScrollUpImg: {
    height: 70,
    resizeMode: 'contain',
  },
  ScrollDown: {
    width: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    bottom: 10,
  },
  ScrollDownImg: {
    height: 70,
    resizeMode: 'contain',
  },
  textWhite: {
    top: 100,
    left: 40,
    color: '#fff',
    fontSize: 12,
    width: '90%',
    height: 200,
    fontFamily: 'Comfortaa',
  },
  ViewBtn: {
    flex: 1,
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

export default StylesTaille;
