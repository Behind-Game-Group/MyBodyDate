import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import StylesConfirmationEmail from '../../../assets/style/styleScreens/styleRegister/StyleConfirmationEmail';
import {getData} from '../../services/storage';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreDeuxLignes} from '../../components/TitreDeuxLignes';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Confirmation_email'>;
};

export const ConfirmationEmail: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    try {
      const route = await getData('route');
      setRouteChoice(route || '');
      // console.log('route : ' + route);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const [routeChoice, setRouteChoice] = useState<string>();

  const [buttonPressed, setButtonPressed] = useState<string>();

  return (
    <View style={StylesConfirmationEmail.container}>
      <ImageBackground
        style={StylesConfirmationEmail.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <TitreDeuxLignes
          txtTitle="CONFRIMATION"
          txtTitle2="E-MAIL"
          textAlign="left"
          fontWeight={undefined}
          top={160}
          left={30}
        />
        <View style={[StylesConfirmationEmail.BlockImg]}>
          <Image
            style={StylesConfirmationEmail.ImgBulle}
            source={require('../../../assets/images/avion-en-papier.png')}
          />
        </View>
        <Text style={[StylesConfirmationEmail.textWhite]}>
          Si vous n&apos;avez pas reçu d&apos;email, consultez vos spams ou
          rééssayez.
        </Text>
        <TouchableOpacity
          style={[StylesConfirmationEmail.btn]}
          onPress={() => {
            setButtonPressed('Utiliser');
            navigation.navigate('S_inscrire_par_mail');
          }}
          accessibilityLabel="Récupérer mon compte">
          <Text style={[StylesConfirmationEmail.textBtn]}>
            Utiliser un autre e-mail
          </Text>
          <Image
            style={[StylesConfirmationEmail.imgBtn]}
            source={
              buttonPressed === 'Utiliser'
                ? require('../../../assets/boutons/Bouton-Rouge-Email.png')
                : require('../../../assets/boutons/Bouton-Noir-Email.png')
            }
          />
        </TouchableOpacity>
        <Text style={[StylesConfirmationEmail.textWhite2]}>
          Utilisez un autre moyen de connexion
        </Text>
        {routeChoice === 'Recuperation de compte' ? (
          <TouchableOpacity
            style={[StylesConfirmationEmail.btnUn]}
            onPress={() => {
              setButtonPressed('Continuer');
              navigation.navigate('Felicitations');
            }}
            accessibilityLabel="Continuer">
            <Text
              style={[
                StylesConfirmationEmail.textBtnUn,
                {
                  color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
                },
              ]}>
              Continuer
            </Text>
            <Image
              style={[StylesConfirmationEmail.imgBtn]}
              source={
                buttonPressed === 'Continuer'
                  ? require('../../../assets/boutons/Bouton-Rouge.png')
                  : require('../../../assets/boutons/Bouton-Blanc.png')
              }
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[StylesConfirmationEmail.btnUn]}
            onPress={() => {
              setButtonPressed('Continuer');
              navigation.navigate('Ville');
            }}
            accessibilityLabel="Continuer">
            <Text
              style={[
                StylesConfirmationEmail.textBtnUn,
                {
                  color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
                },
              ]}>
              Continuer
            </Text>
            <Image
              style={[StylesConfirmationEmail.imgBtn]}
              source={
                buttonPressed === 'Continuer'
                  ? require('../../../assets/boutons/Bouton-Rouge.png')
                  : require('../../../assets/boutons/Bouton-Blanc.png')
              }
            />
          </TouchableOpacity>
        )}
      </ImageBackground>
    </View>
  );
};
