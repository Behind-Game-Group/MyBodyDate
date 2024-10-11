import React, {useState, useEffect, useRef} from 'react';
import {View, ImageBackground} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import StylesCompte from '../../../assets/style/styleScreens/styleRegister/StyleCompte';
import RegisterNumero from '../../components/register/RegisterNumero';
import RegisterEmail from '../../components/register/RegisterEmail';
import LoginEmail from '../../components/login/LoginEmail';
import LoginNumero from '../../components/login/LoginNumero';
import {getData} from '../../services/storage';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Compte'>;
};

export const Compte: React.FC<HomeProps> = ({navigation}) => {
  const handleGetRoute = async () => {
    try {
      const routeChoice = await getData('route_choice');
      setRouteChoice(routeChoice || '');
      // console.log('route_choice : ' + routeChoice);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const handleGetEmail = async () => {
    try {
      const userEMail = await getData('email');
      setEmail(userEMail || '');
      // console.log('Email : ' + userEmail);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const handleGetNumero = async () => {
    try {
      const userPhone = await getData('phone');
      setNumero(userPhone || '');
      // console.log('Téléphone : ' + userPhone);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const [email, setEmail] = useState<string>('');
  const [numero, setNumero] = useState<string>('');

  const [routeChoice, setRouteChoice] = useState<string>('');

  const scrollRef = useRef<KeyboardAwareScrollView>(null);

  useEffect(() => {
    handleGetRoute();
    handleGetEmail();
    handleGetNumero();
  }, [email, numero]);

  return (
    <KeyboardAwareScrollView
      ref={scrollRef}
      style={[StylesCompte.container, {top: 0}]}>
      <ImageBackground
        style={[StylesCompte.bgGradient]}
        source={require('../../../assets/images/Background.png')}>
        <TitreUneLigne
          txtTitle="MON COMPTE"
          textAlign="center"
          top={130}
          left={undefined}
          fontFamily={undefined}
          color={undefined}
          fontWeight={undefined}
          fontSize={24}
        />
        <View style={[{flex: 2, top: 180}]}>
          {routeChoice === 'inscription numero' ? (
            <RegisterNumero navigation={navigation} />
          ) : routeChoice === 'connexion numero' ? (
            <LoginNumero navigation={navigation} />
          ) : routeChoice === 'connexion email' ? (
            <LoginEmail navigation={navigation} />
          ) : routeChoice === 'inscription email' ? (
            <RegisterEmail navigation={navigation} />
          ) : null}
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};

export default Compte;
