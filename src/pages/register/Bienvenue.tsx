import React from 'react';
import {View, ImageBackground} from 'react-native';
import Logo from '../../components/Logo';
import {TitreDeuxLignes} from '../../components/titre/TitreDeuxLignes';
import {VideoBox} from '../../components/VideoBox';
import StylesBienvenue from '../../../assets/style/styleScreens/styleRegister/StyleBienvenue';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {BtnNext} from '../../components/boutons/BtnNext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Bienvenue'>;
};

export const Bienvenue: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View style={StylesBienvenue.container}>
      <ImageBackground
        style={StylesBienvenue.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Logo />

        <TitreDeuxLignes
          txtTitle="BIENVENUE,"
          txtTitle2="DÉCOUVREZ NOUS."
          fontFamily={undefined}
          color={undefined}
          textAlign="left"
          fontWeight={undefined}
          fontSize={24}
          top={30}
          left={30}
        />
        <VideoBox
          url="https://video.wixstatic.com/video/8e4c05_5791dadfe85b41e792e18d6fcac7717a/480p/mp4/file.mp4"
          top={150}
        />
        <BtnNext
          navigation={navigation}
          navigateTo="CreationEtDeveloppement"
          propName="RegisterRoute"
          propRoute="CreationEtDeveloppement"
          txt="Passer"
          handleStore={undefined}
          postInfo={undefined}
          background={undefined}
          top={210}
          left={80}
          fontFamily={undefined}
          fontSize={18}
          fontWeight="700"
        />
      </ImageBackground>
    </View>
  );
};
