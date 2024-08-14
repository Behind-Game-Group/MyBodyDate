import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import StyleFAQ from '../../../assets/style/styleScreens/styleSettings/StyleFAQ';
import MenuSlide from '../../components/menus/MenuSlide';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'FAQ'>;
  route: RouteProp<RouteType, 'FAQ'>;
};

export const FAQ: React.FC<HomeProps> = ({navigation}) => {
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
      style={StyleFAQ.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        backgroundColor={'white'}
        settingsNavigation={'Contact_et_FAQ'}
        backButton={'Retour'}
      />
      <View style={{flex: 5}}>
        <Text style={StyleFAQ.title}>FAQ</Text>
        <View style={StyleFAQ.separator} />
        <Text style={StyleFAQ.description}>Trouvez l'FAQ</Text>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={StyleFAQ.backButtonContainer}
          onPress={() => {
            setButtonPressed(true);
            navigation.navigate('SettingsNavigator', {
              SettingsRoute: 'Contact_et_FAQ',
            });
          }}>
          <Image
            style={StyleFAQ.backButton}
            source={
              buttonPressed
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc-Border.png')
            }
          />
          <Text
            style={[
              StyleFAQ.backButtonText,
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Retour Contact et FAQ
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
