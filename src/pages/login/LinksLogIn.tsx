import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Styles from '../../../assets/style/Styles';
import Logo from '../../components/Logo';
import {getDatas, storeData} from '../../services/storage';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {
  StorageValue,
  StorageValueMap,
} from '../../../interfaces/StorageValueInterface';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
import {TitreDeuxLignes} from '../../components/titre/TitreDeuxLignes';
import {BtnNext} from '../../components/boutons/BtnNext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'LinksLogIn'>;
};

export const LinksLogIn: React.FC<HomeProps> = ({navigation}) => {
  const [buttonPressed, setButtonPressed] = useState('');
  const [buttonPressedNumero, setButtonPressedNumero] =
    useState<boolean>(false);
  const [buttonPressedGoogle, setButtonPressedGoogle] = useState(false);
  const [buttonPressedFacebook, setButtonPressedFacebook] =
    useState<boolean>(false);
  const [buttonPressedApple, setButtonPressedApple] = useState<boolean>(false);
  const [buttonPressedBack, setButtonPressedBack] = useState<boolean>(false);
  const [buttonPressedEmail, setButtonPressedEmail] = useState<boolean>(false);
  const keysToRetrieve: string[] = ['mode_de_connexion'];
  // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
  const handleStoreData = async (
    key: string,
    value: StorageValue[] | string,
  ) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const getMultipleValues = async () => {
    try {
      const retrievedValues: StorageValue[] = await getDatas(keysToRetrieve);

      const result: StorageValueMap = {};
      retrievedValues.forEach(item => {
        result[item.key] = item.value;
      });

      if (result.Numero !== undefined) {
        setButtonPressed('Numero');
        setButtonPressedNumero(result.Mode_Numero as boolean);
      } else if (result.Google !== undefined) {
        setButtonPressedGoogle(result.Mode_Google as boolean);
        setButtonPressed('Google');
      } else if (result.Facebook !== undefined) {
        setButtonPressedFacebook(result.Mode_Facebook as boolean);
        setButtonPressed('Facebook');
      } else if (result.Apple !== undefined) {
        setButtonPressedApple(result.Mode_Apple as boolean);
        setButtonPressed('Apple');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  useEffect(() => {
    getMultipleValues();
  }, []);

  return (
    <View style={[Styles.container]}>
      <ImageBackground
        style={[Styles.bgGradient]}
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
          top={-40}
          left={30}
        />
        <TitreUneLigne
          txtTitle="NE PERDEZ PLUS RIEN..."
          textAlign="left"
          top={-120}
          left={30}
          fontFamily={undefined}
          color={undefined}
          fontWeight={undefined}
          fontSize={24}
        />

        <View style={[Styles.ViewBtnLog, {bottom: 70}]}>
          <View style={{height: 250}}>
            <BtnNext
              navigation={navigation}
              navigateTo="TabNavigator"
              propName="TabRoute"
              propRoute="Discover"
              txt="Se connecter avec Apple"
              handleStore={{key: 'route_choice', value: 'connexion Apple'}}
              postInfo={undefined}
              background="Apple"
              top={0}
              left={15}
            />
            <BtnNext
              navigation={navigation}
              navigateTo="TabNavigator"
              propName="TabRoute"
              propRoute="Discover"
              txt="Se connecter avec Facebook"
              handleStore={{key: 'route_choice', value: 'connexion Facebook'}}
              postInfo={undefined}
              background="Facebook"
              top={40}
              left={15}
            />
            <BtnNext
              navigation={navigation}
              navigateTo="TabNavigator"
              propName="TabRoute"
              propRoute="Discover"
              txt="Se connecter avec Google"
              handleStore={{key: 'route_choice', value: 'connexion Google'}}
              postInfo={undefined}
              background="Google"
              top={80}
              left={15}
            />

            <View style={[Styles.line, {top: 100}]} />

            <BtnNext
              navigation={navigation}
              navigateTo="S_inscrire_par_mail"
              propName="SignInRoute"
              propRoute="S_inscrire_par_mail"
              txt="S'inscrire par email"
              handleStore={{key: 'route_choice', value: 'inscription email'}}
              postInfo={undefined}
              background="Email"
              top={100}
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
              top={140}
              left={0}
            />
          </View>
          <View style={[{top: 170}]}>
            <Text style={[Styles.textBtn, Styles.fl]}>
              {' '}
              Vous n'avez pas de compte ?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LinksSignIn', {
                  SignInRoute: 'Liens_dinscription',
                });
              }}
              accessibilityLabel="Rejoignez-nous">
              <Text style={[Styles.textBtnBlue, Styles.fb]}>
                {' '}
                Rejoignez-nous !
              </Text>
            </TouchableOpacity>

            <View style={[Styles.line]} />
            <View>
              <TouchableOpacity
                onPress={() => {
                  handleStoreData('route_choice', 'recuperation email');
                  navigation.navigate('LinksSignIn', {
                    SignInRoute: 'Recuperation email',
                  });
                }}
                accessibilityLabel="Récupération email">
                <Text
                  style={[Styles.textBtnBlue, Styles.fb, {color: '#880808'}]}>
                  {' '}
                  Récupérez mon compte.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
