import {StyleSheet} from 'react-native';
const StyleContactAndFAQ = StyleSheet.create({
  bgGradient: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  title: {
    top: 30,
    color: '#0019A7',
    fontFamily: 'Gilroy',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
  },
  description: {
    color: '#929EDE',
    top: 100,
    width: 320,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  separator: {
    backgroundColor: '#0019A7',
    width: 351,
    height: 1,
    alignSelf: 'center',
    top: 60,
  },
  contactAndFaqContainer: {
    height: 360,
    width: 351,
    alignSelf: 'center',
    top: 150,
  },
  viewItem: {
    height: 20,
    width: 351,
    alignSelf: 'center',
    top: 10,
    flexDirection: 'row',
    marginBottom: 40,
  },
  textItem: {
    color: '#0019A7',
    fontFamily: 'Comfortaa',
    width: 340,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    alignItems: 'center',
  },
  imgItem: {
    width: 7,
    height: 15,
    flexShrink: 0,
  },
  backButtonContainer: {
    top: 0,
  },
  backButton: {
    width: 331,
    height: 56,
    flexShrink: 0,
    alignSelf: 'center',
  },
  backButtonText: {
    top: -40,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Comfortaa',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
  },
});

export default StyleContactAndFAQ;
