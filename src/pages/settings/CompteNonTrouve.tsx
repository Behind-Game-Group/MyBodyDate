import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import StyleCompteNonTrouve from '../../../assets/style/styleScreens/styleSettings/StyleCompteNonTrouve';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Compte_non_trouve'>;
  route: RouteProp<RouteType, 'Compte_non_trouve'>;
};

export const CompteNonTrouve: React.FC<HomeProps> = ({navigation}) => {
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
      style={StyleCompteNonTrouve.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <View style={{flex: 4}}>
        <Text style={StyleCompteNonTrouve.title}>
          Ce profil n’est plus accessible{' '}
        </Text>
        <Image
          style={StyleCompteNonTrouve.icoAlert}
          source={require('../../../assets/boutons/ico-alert.png')}
        />
        <Text style={[{top: 200}, StyleCompteNonTrouve.textInfo]}>
          Nous sommes désolés, mais le compte que vous tentez d'accéder n'est
          actuellement pas disponible.
        </Text>
        <Text style={[{top: 250}, StyleCompteNonTrouve.textInfo]}>
          Cela peut être dû à différentes raisons, telles que des problèmes
          techniques temporaires, une maintenance en cours, ou des vérifications
          de sécurité.
        </Text>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => {
            setButtonPressed(true);
            navigation.navigate('HomeNavigator', {HomeRoute: 'HomeNext'});
          }}
          style={{top: 50}}>
          <Image
            style={StyleCompteNonTrouve.backButton}
            source={
              buttonPressed
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc-Border.png')
            }
          />
          <Text
            style={[
              StyleCompteNonTrouve.backButtonText,
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Retour
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default CompteNonTrouve;
