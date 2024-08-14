import {StyleSheet} from 'react-native';
const StyleAutorisationsNecessaires = StyleSheet.create({
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
  titleItem: {
    color: '#0019A7',
    width: 320,
    textAlign: 'left',
    fontFamily: 'Gilroy',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    marginBottom: 20,
  },
  separator: {
    backgroundColor: '#0019A7',
    width: 351,
    height: 1,
    alignSelf: 'center',
    top: 60,
  },
  autNecContainer: {
    top: 100,
    width: '80%',
    alignSelf: 'center',
  },
  containerItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 40,
  },
  textItem: {
    color: '#0019A7',
    fontFamily: 'Comfortaa',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  secondTextItem: {
    color: '#929EDE',
    fontFamily: 'Comfortaa',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
  },
});

export default StyleAutorisationsNecessaires;
