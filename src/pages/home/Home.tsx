import React, {useEffect} from 'react';
import {View, ImageBackground, Image} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Styles from '../../../assets/style/Styles';
import {RouteType} from '../../../types/routes/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Home'>;
};

export const Home: React.FC<HomeProps> = () => {
  const navigation = useNavigation<NavigationProp<RouteType, 'Home'>>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('HomeNext');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={Styles.ViewLogo1}>
          <Image
            style={Styles.logo1}
            source={require('../../../assets/logos/logo-col-mybodydate-transparent.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
