import React, {useEffect, useState} from 'react';
import {StatusBar, View, ImageBackground} from 'react-native';
import MenuSlide from '../../components/menus/MenuSlide';
import MenuTalk from '../../components/menus/MenuTalk';
import OdlMessage from '../../components/message/OldMessage';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'TabTalk'>;
  route: RouteProp<RouteType, 'TabTalk'>;
};

export const Talk: React.FC<HomeProps> = ({navigation, route}) => {
  const {tabPath, imagePath} = route.params;

  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  const [user, setUser] = useState<string>();

  return (
    <View style={{backgroundColor: '#fff', height: '100%', width: 'auto'}}>
      <MenuSlide
        imagePath={imagePath}
        tabPath={tabPath}
        navigation={navigation}
        icoPushChange={false}
        backButton={undefined}
        settingsNavigation={undefined}
        backgroundColor={undefined}
      />
      <View>
        <MenuTalk
          route={route}
          prenium={undefined}
          user={user}
          navigation={navigation}
        />
      </View>
      <ImageBackground
        resizeMode="contain"
        source={require('../../../assets/images/bg-parametres.png')}
        style={{top: '10%'}}>
        <OdlMessage navigation={navigation} route={route} />
      </ImageBackground>
    </View>
  );
};
