import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import StyleModeVoyage from '../../../assets/style/styleScreens/styleSettings/StyleModeVoyage';
import MenuSlide from '../../components/menus/MenuSlide';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {BtnNext} from '../../components/boutons/BtnNext';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Mode_voyage'>;
  route: RouteProp<RouteType, 'Mode_voyage'>;
};

export const ModeVoyage: React.FC<HomeProps> = ({navigation}) => {
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
      style={StyleModeVoyage.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        backgroundColor={'white'}
        settingsNavigation={'Settings'}
        backButton={'Retour'}
      />
      <View style={{flex: 7}}>
        <TitreUneLigne
          txtTitle="Mode voyage"
          fontFamily="Comfortaa-Bold"
          color={'#0019A7'}
          fontSize={24}
          textAlign="center"
          fontWeight={'700'}
          top={25}
          left={undefined}
        />
        <View style={StyleModeVoyage.separator} />
        <Text style={StyleModeVoyage.description}>
          Utilisez le mode voyage pour changez votre emplacement et découvrir de
          nouvelles personnes.
        </Text>
        <View style={StyleModeVoyage.boxInfoModeVoyage}>
          <TouchableOpacity
            accessibilityLabel="Changer ma localisation"
            onPress={() => navigation.navigate('Changer_localisation')}>
            <View style={StyleModeVoyage.boxLinkModeVoyage}>
              <Text style={StyleModeVoyage.textLinkModeVoyage}>
                Changer ma localisation
              </Text>
              <Text style={StyleModeVoyage.subTextModeVoyage}>Paris, FR</Text>
              <Image
                style={{
                  width: 7,
                  height: 15,
                  flexShrink: 0,
                }}
                source={require('../../../assets/images/fleche-blue.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={StyleModeVoyage.viewContainerInfo}>
          <Image
            style={StyleModeVoyage.icoInfo}
            source={require('../../../assets/boutons/ico-info-rose-text-bleu.png')}
          />
          <Text style={StyleModeVoyage.textInfo}>
            Si vous avez accepté la géolocalisation, votre recherche est basée
            d’abord sur la position de votre téléphone. Donc si vous changez,
            vous pouvez élargir votre recherche sans être sur place.
          </Text>
          <Text style={StyleModeVoyage.textInfo}>
            Si vous avez bloqué votre géolocalisation, votre recherche est
            définie exclusivement par la ville que vous aurez déclaré.
          </Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <BtnNext
          navigation={navigation}
          navigateTo="Settings"
          propName="SettingsRoute"
          propRoute="Settings"
          txt="Retour paramètres"
          handleStore={undefined}
          postInfo={undefined}
          color="#0019A7"
          background="Blue-border"
          top={0}
          left={0}
          fontSize={18}
          fontFamily={undefined}
          fontWeight="700"
        />
      </View>
    </ImageBackground>
  );
};
