import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Styles from '../../../assets/style/Styles';
import StylesRecuperationCode from '../../../assets/style/styleScreens/styleRegister/StyleRecuperationCode';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {getData} from '../../services/storage';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Recuperation_code'>;
};

export const RecuperationCode: React.FC<HomeProps> = ({navigation}) => {
  const [userCode, setCode] = useState<string>();
  const [routeChoice, setRouteChoice] = useState<string>();
  // console.log('Code récupéré: ' + userCode);

  const scrollRef = useRef<KeyboardAwareScrollView>(null);

  const handleGetData = async () => {
    try {
      const routeChoice = await getData('route_choice');
      setRouteChoice(routeChoice || '');
      // console.log('route_choice : ' + routeChoice);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  let txtCode: React.ReactNode;

  // Condition du contenu de txtCode selon le paramètre de route Connexion numero ou email
  if (routeChoice === 'Connexion numero') {
    txtCode = (
      <Text>
        Si vous n&apos;avez pas reçu votre code,{' '}
        <TouchableOpacity
          style={[{}]}
          onPress={() => navigation.navigate('Compte')}>
          <Text
            style={[
              Styles.textWhite3,
              {
                position: 'relative',
                top: 4,
                fontSize: 12,
                textDecorationLine: 'underline',
              },
            ]}>
            réessayez
          </Text>
        </TouchableOpacity>
        .
      </Text>
    );
  } else if (routeChoice === "S'inscrire par numero") {
    txtCode = (
      <Text style={{fontSize: 12}}>
        Si vous n&apos;avez pas reçu votre code,{' '}
        <TouchableOpacity onPress={() => navigation.navigate('Compte')}>
          <Text
            style={[
              Styles.textWhite3,
              {
                position: 'relative',
                top: 4,
                textDecorationLine: 'underline',
                fontSize: 12,
              },
            ]}>
            réessayez
          </Text>
        </TouchableOpacity>
        .
      </Text>
    );
  } else if (routeChoice === "S'inscrire par mail") {
    txtCode = (
      <Text style={{fontSize: 12}}>
        Si vous n&apos;avez pas reçu d&apos;email, consultez vos spams, ou{' '}
        <TouchableOpacity onPress={() => navigation.navigate('Compte')}>
          <Text
            style={[
              Styles.textWhite3,
              {
                position: 'relative',
                top: 4,
                textDecorationLine: 'underline',
                fontSize: 12,
              },
            ]}>
            réessayez
          </Text>
        </TouchableOpacity>
        .
      </Text>
    );
  } else if (routeChoice === 'Connexion mail') {
    txtCode = (
      <Text style={{fontSize: 12}}>
        Si vous n&apos;avez pas reçu d&apos;email, consultez vos spams, ou{' '}
        <TouchableOpacity onPress={() => navigation.navigate('Compte')}>
          <Text
            style={[
              Styles.textWhite3,
              {
                position: 'relative',
                top: 4,
                textDecorationLine: 'underline',
                fontSize: 12,
              },
            ]}>
            réessayez
          </Text>
        </TouchableOpacity>
        .
      </Text>
    );
  }

  const handleNavigation = () => {
    switch (routeChoice) {
      case 'Connexion mail':
      case 'Se connecter':
      case 'Connexion numero':
        navigation.navigate('TabNavigator', {
          TabRoute: 'DiscoverNavigator',
        });
        break;
      case "S'inscrire par mail":
      case "S'inscrire par numero":
      default:
        navigation.navigate('Confirmation_compte');
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <KeyboardAwareScrollView
      ref={scrollRef}
      style={[StylesRecuperationCode.container]}>
      <ImageBackground
        style={[StylesRecuperationCode.bgGradient]}
        source={require('../../../assets/images/Background.png')}>
        <Text style={[StylesRecuperationCode.TxtTitle]}>VOTRE CODE ?</Text>
        <SafeAreaView style={[StylesRecuperationCode.ViewInput]}>
          <TextInput
            style={StylesRecuperationCode.TextInput}
            keyboardType="numeric"
            placeholder="Votre code"
            placeholderTextColor="#FFF"
            maxLength={10}
            onChangeText={userCode => setCode(userCode)}
            value={userCode}
          />
          <Text style={[StylesRecuperationCode.textWhite]}>{txtCode}</Text>
        </SafeAreaView>

        <TouchableOpacity
          style={[StylesRecuperationCode.btn]}
          onPress={handleNavigation}
          accessibilityLabel="Continuer">
          <Text style={[StylesRecuperationCode.textBtn]}>Continuer</Text>
          <Image
            style={[StylesRecuperationCode.imgBtn]}
            source={require('../../../assets/boutons/Bouton-Blanc.png')}
          />
        </TouchableOpacity>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};
