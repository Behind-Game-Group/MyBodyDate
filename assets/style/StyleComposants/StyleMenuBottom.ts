import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: '100%',
    height: 80,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#0019A7',
    borderRadius: 30,
  },
  tabText: {
    fontFamily: 'Comfortaa',
    fontWeight: '700',
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: -10,
    alignSelf: 'center',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FF84D7',
  },
  tabImage: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
});

export default styles;
