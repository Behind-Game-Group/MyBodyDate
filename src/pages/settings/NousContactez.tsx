import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import StyleNousContactez from '../../../assets/style/styleScreens/styleSettings/StyleNousContactez';
import MenuSlide from '../../components/menus/MenuSlide';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Nous_contactez'>;
  route: RouteProp<RouteType, 'Nous_contactez'>;
};

export const NousContactez: React.FC<HomeProps> = ({navigation}) => {
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);

  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <ImageBackground
      style={StyleNousContactez.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        backgroundColor={'white'}
        settingsNavigation={'Contact_et_FAQ'}
        backButton={'Retour'}
      />
      <View style={{flex: 5}}>
        <Text style={StyleNousContactez.title}>Nous contactez</Text>
        <View style={StyleNousContactez.separator} />
        <Text style={StyleNousContactez.description}>Nous contactez</Text>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={StyleNousContactez.backButtonContainer}
          onPress={() => {
            setButtonPressed(true);
            navigation.navigate('SettingsNavigator', {
              SettingsRoute: 'Contact_et_FAQ',
            });
          }}>
          <Image
            style={StyleNousContactez.backButton}
            source={
              buttonPressed
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc-Border.png')
            }
          />
          <Text
            style={[
              StyleNousContactez.backButtonText,
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Retour Contact et FAQ
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
