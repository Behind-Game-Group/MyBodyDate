import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Styles from '../../../assets/style/Styles';
import Logo from '../../components/Logo';
import StylesLinksSignIn from '../../../assets/style/styleScreens/styleRegister/StyleLinksSignIn';
import {getData} from '../../services/storage';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreDeuxLignes} from '../../components/titre/TitreDeuxLignes';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
import {BtnNext} from '../../components/boutons/BtnNext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'LinksSignIn'>;
};

export const LinksSignIn: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    try {
      const routeChoice = await getData('route_choice');
      setRouteChoice(routeChoice || '');
      // console.log('route_choice : ' + routeChoice);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const [routeChoice, setRouteChoice] = useState<string>();

  return (
    <View style={StylesLinksSignIn.container}>
      <ImageBackground
        style={StylesLinksSignIn.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Logo />

        <TitreDeuxLignes
          txtTitle="UN COUP DE COEUR"
          txtTitle2="N'ATTEND PAS"
          textAlign="left"
          fontWeight="700"
          fontFamily={undefined}
          color={undefined}
          fontSize={24}
          top={undefined}
          left={30}
        />
        <TitreUneLigne
          txtTitle="NE PERDEZ PLUS RIEN..."
          textAlign="left"
          top={-80}
          left={30}
          fontFamily={undefined}
          color={undefined}
          fontWeight={undefined}
          fontSize={24}
        />

        <View style={[StylesLinksSignIn.ViewBtnLog]}>
          <View style={[{top: 50, height: 140}]}>
            <BtnNext
              navigation={navigation}
              navigateTo="S_inscrire_par_mail"
              propName="SignInRoute"
              propRoute="S_inscrire_par_mail"
              txt="S'inscrire par email"
              handleStore={{key: 'route_choice', value: 'inscription email'}}
              postInfo={undefined}
              background="Email"
              top={0}
              left={0}
            />
            <BtnNext
              navigation={navigation}
              navigateTo="S_inscrire_par_numero"
              propName="SignInRoute"
              propRoute="S_inscrire_par_numero"
              txt="S'inscrire avec son n°"
              handleStore={{key: 'route_choice', value: 'inscription numero'}}
              postInfo={undefined}
              background="Numero"
              top={60}
              left={0}
            />
            <View style={[{top: 140}]}>
              <View style={[{height: 70}]}>
                <Text style={[StylesLinksSignIn.textWhite, Styles.fl]}>
                  Vous n'avez pas de compte ?
                </Text>
                <BtnNext
                  navigation={navigation}
                  navigateTo="LogInNavigator"
                  propName="LoginRoute"
                  propRoute="Liens_de_connexion"
                  txt="Se connecter"
                  handleStore={{key: 'route_choice', value: 'connexion'}}
                  postInfo={undefined}
                  background={undefined}
                  top={15}
                  left={0}
                />
                <View style={[StylesLinksSignIn.line]} />
              </View>

              <View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('LinksLogIn', {
                      LoginRoute: 'Recuperation_email',
                    })
                  }
                  accessibilityLabel="Récupération email">
                  <Text style={[StylesLinksSignIn.linkBlue]}>
                    Récupérez mon compte.
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
