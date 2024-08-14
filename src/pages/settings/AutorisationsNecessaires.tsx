import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, ImageBackground} from 'react-native';
import StyleAutorisationsNecessaires from '../../../assets/style/styleScreens/styleSettings/StyleAutorisationsNecessaires';
import MenuSlide from '../../components/menus/MenuSlide';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Autorisations_necessaires'>;
  route: RouteProp<RouteType, 'Autorisations_necessaires'>;
};

export const AutorisationsNecessaires: React.FC<HomeProps> = ({navigation}) => {
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
      style={StyleAutorisationsNecessaires.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        backButton="Retour"
        backgroundColor={'white'}
        settingsNavigation={'Parametre_de_confidentialites'}
      />
      <Text style={StyleAutorisationsNecessaires.title}>
        Autorisations nécessaires
      </Text>
      <View style={StyleAutorisationsNecessaires.separator} />
      <View style={StyleAutorisationsNecessaires.autNecContainer}>
        <View style={StyleAutorisationsNecessaires.containerItem}>
          <Text style={StyleAutorisationsNecessaires.textItem}>Apple</Text>
          <Text style={StyleAutorisationsNecessaires.secondTextItem}>
            Nous permet de surveiller les pannes et d’améliorer la stabilité de
            l’application.
          </Text>
        </View>
        <View style={StyleAutorisationsNecessaires.containerItem}>
          <Text style={StyleAutorisationsNecessaires.textItem}>Giphy</Text>
          <Text style={StyleAutorisationsNecessaires.secondTextItem}>
            Vous permet d’envoyer des GIF.
          </Text>
        </View>
        <View style={StyleAutorisationsNecessaires.containerItem}>
          <Text style={StyleAutorisationsNecessaires.textItem}>Google</Text>
          <Text style={StyleAutorisationsNecessaires.secondTextItem}>
            Nous permet de surveiller les pannes et d’améliorer la stabilité de
            l’application.
          </Text>
        </View>
        <View style={StyleAutorisationsNecessaires.containerItem}>
          <Text style={StyleAutorisationsNecessaires.textItem}>Instagram</Text>
          <Text style={StyleAutorisationsNecessaires.secondTextItem}>
            Vous permet d’ajouter des photos à partir d’Instagram et de les
            afficher sur ton profil.
          </Text>
        </View>
        <View style={StyleAutorisationsNecessaires.containerItem}>
          <Text style={StyleAutorisationsNecessaires.textItem}>Spotify</Text>
          <Text style={StyleAutorisationsNecessaires.secondTextItem}>
            Vous permet d’afficher votre playlist et chansons préférés sur votre
            profil.{' '}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
