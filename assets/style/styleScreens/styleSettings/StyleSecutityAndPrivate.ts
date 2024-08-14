import {StyleSheet} from 'react-native';

const commonTextStyles = {
  fontFamily: 'Comfortaa',
  fontWeight: '700' as const,
};

const StyleSecurityAndPrivate = StyleSheet.create({
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
  separator: {
    backgroundColor: '#0019A7',
    width: 351,
    height: 1,
    alignSelf: 'center',
    top: 60,
  },
  description: {
    color: '#929EDE',
    top: 100,
    width: 320,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    fontSize: 16,
    fontWeight: '700',
  },
  securityAndPrivateContainer: {
    height: 360,
    width: 351,
    alignSelf: 'center',
    top: 150,
    marginBottom: 40,
  },
  securityAndPrivateItem: {
    height: 20,
    width: 351,
    alignSelf: 'center',
    top: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  securityAndPrivateText: {
    color: '#0019A7',
    ...commonTextStyles,
    width: 240,
    fontSize: 16,
    alignItems: 'center',
  },
  securityAndPrivateType: {
    color: '#0019A7',
    ...commonTextStyles,
    width: 100,
    fontSize: 12,
    alignItems: 'center',
  },
  arrowIcon: {
    width: 7,
    height: 15,
    flexShrink: 0,
  },
  backButton: {
    top: 0,
    width: 331,
    height: 56,
    flexShrink: 0,
    alignSelf: 'center',
  },
  backButtonText: {
    top: -40,
    textAlign: 'center',
    alignSelf: 'center',
    ...commonTextStyles,
    fontSize: 18,
  },
});

export default StyleSecurityAndPrivate;
