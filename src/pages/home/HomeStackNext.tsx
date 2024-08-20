import React from 'react';
import {View, ImageBackground, Image} from 'react-native';
import Styles from '../../../assets/style/Styles';
import {RouteType} from '../../../types/routes/RouteType';
import {NavigationProp} from '@react-navigation/native';
import {TitreDeuxLignes} from '../../components/titre/TitreDeuxLignes';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
import {BtnNext} from '../../components/boutons/BtnNext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'HomeNext'>;
};

export const HomeStackNext: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background2.png')}>
        <View style={[Styles.ViewLogo3]}>
          <Image
            style={Styles.logo3}
            source={require('../../../assets/logos/logo-row-mybodydate-transparent.png')}
          />
        </View>
        <TitreDeuxLignes
          txtTitle="UN COUP DE COEUR"
          txtTitle2="N'ATTEND PAS"
          fontFamily="Gilroy"
          color={'#0019A7'}
          textAlign="left"
          fontWeight={'700'}
          fontSize={27}
          top={130}
          left={30}
        />
        <TitreUneLigne
          txtTitle="NE PERDEZ PLUS RIEN..."
          fontFamily="Gilroy"
          color={'#0019A7'}
          fontSize={27}
          textAlign="left"
          fontWeight={'500'}
          top={-130}
          left={30}
        />
        <View style={[{top: -50, height: 150}]}>
          <BtnNext
            navigation={navigation}
            navigateTo="RegisterNavigator"
            propName="RegisterRoute"
            propRoute="Bienvenue"
            txt="S'inscrire"
            handleStore={{key: 'route_choice', value: 'inscription'}}
            postInfo={undefined}
            background="Blue"
            top={0}
            left={0}
            fontSize={18}
          />
          <BtnNext
            navigation={navigation}
            navigateTo="LogInNavigator"
            propName="LoginRoute"
            propRoute="Liens_de_connexion"
            txt="Se connecter"
            handleStore={{key: 'route_choice', value: 'connexion'}}
            postInfo={undefined}
            background="Blue"
            top={0}
            left={0}
            fontSize={18}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
