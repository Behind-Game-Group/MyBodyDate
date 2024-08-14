import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import StyleAide from '../../../assets/style/styleScreens/styleSettings/StyleContactAndFAQ';
import MenuSlide from '../../components/menus/MenuSlide';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {useMainContext} from '../../context/MainContext ';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Aide'>;
  route: RouteProp<RouteType, 'Aide'>;
};

export const Aide: React.FC<HomeProps> = ({navigation}) => {
  const {cercle, tabPath} = useMainContext();
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
      style={StyleAide.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        backButton="Retour"
        cercle={cercle}
        tabPath={tabPath}
        backgroundColor={'white'}
        settingsNavigation={'Contact_et_FAQ'}
      />
      <View style={{flex: 5}}>
        <Text style={StyleAide.title}>Aide</Text>
        <View style={StyleAide.separator} />
        <Text style={StyleAide.description}>Trouvez de l'aide</Text>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={StyleAide.backButtonContainer}
          onPress={() => {
            setButtonPressed(true);
            navigation.navigate('Contact_et_FAQ');
          }}>
          <Image
            style={StyleAide.backButton}
            source={
              buttonPressed
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc-Border.png')
            }
          />
          <Text
            style={[
              StyleAide.backButtonText,
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Retour Contact et FAQ
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
