import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, ImageBackground} from 'react-native';
import StyleNousContactez from '../../../assets/style/styleScreens/styleSettings/StyleNousContactez';
import MenuSlide from '../../components/menus/MenuSlide';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
import {BtnNext} from '../../components/boutons/BtnNext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Nous_contactez'>;
  route: RouteProp<RouteType, 'Nous_contactez'>;
};

export const NousContactez: React.FC<HomeProps> = ({navigation}) => {
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
        <TitreUneLigne
          txtTitle="Nous contactez"
          fontFamily="Comfortaa-Bold"
          color={'#0019A7'}
          fontSize={24}
          textAlign="center"
          fontWeight={'700'}
          top={25}
          left={undefined}
        />
        <View style={StyleNousContactez.separator} />
        <Text style={StyleNousContactez.description}>Nous contactez</Text>
      </View>
      <View style={{flex: 1}}>
        <BtnNext
          navigation={navigation}
          navigateTo="Contact_et_FAQ"
          propName="SettingsRoute"
          propRoute="Contact_et_FAQ"
          txt="Retour paramètres"
          handleStore={undefined}
          postInfo={undefined}
          background="Blue-border"
          top={0}
          left={0}
          fontSize={18}
        />
      </View>
    </ImageBackground>
  );
};
