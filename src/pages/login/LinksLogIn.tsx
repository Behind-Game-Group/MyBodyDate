import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import Logo from '../../components/Logo';
import {getDatas, storeData} from '../../services/storage';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {
  StorageValue,
  StorageValueMap,
} from '../../../interfaces/StorageValueInterface';

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

  // const handleGetRoute = async () => {
  //   try {
  //     const route = await getData('route_choice');
  //     setRouteChoice(route || '');
  //     // console.log('route_choice : ' + route);
  //   } catch (error) {
  //     console.error('Erreur lors de la récupération des données :', error);
  //   }
  // };

  useEffect(() => {
    getMultipleValues();
  }, []);

  return (
    <View style={[Styles.container]}>
      <ImageBackground
        style={[Styles.bgGradient]}
        source={require('../../../assets/images/Background.png')}>
        <Logo />

        <View style={[Styles.ViewText2, {top: 20}]}>
          <Text style={[Styles.textWhite, {top: 0, left: 50}]}>
            UN COUP DE COEUR
          </Text>
          <Text style={[Styles.textWhite, {top: 0, left: 50}]}>
            N'ATTEND PAS
          </Text>
          <Text style={[Styles.textWhite, Styles.fl, {top: 10, left: 50}]}>
            NE PERDEZ PLUS RIEN...{' '}
          </Text>
        </View>

        <View style={[Styles.ViewBtnLog, {bottom: 120}]}>
          <View>
            <TouchableOpacity
              style={[{top: 10, height: 56}]}
              onPress={() => {
                setButtonPressed('Apple');
                handleStoreData('Mode_de_connexion', [
                  {key: 'Mode_Numero', value: false},
                  {key: 'Mode_Google', value: false},
                  {key: 'Mode_Facebook', value: false},
                  {key: 'Mode_Apple', value: true},
                  {key: 'Mode_Email', value: false},
                ]);
                navigation.navigate('TabNavigator', {
                  TabRoute: 'DiscoverNavigator',
                  active: 'Discover',
                  tabPath: 'Amour',
                });
              }}
              accessibilityLabel="Connexion avec Apple">
              <Text
                style={[
                  Styles.textBtn10,
                  {
                    zIndex: 1,
                    top: 12,
                    left: 12,
                    fontSize: 18,
                    fontFamily: 'Comfortaa-Bold',
                  },
                ]}>
                Se connecter avec Apple
              </Text>
              <Image
                style={[
                  {
                    bottom: 28,
                    height: 56,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  },
                ]}
                source={
                  buttonPressed === 'Apple'
                    ? require('../../../assets/boutons/Bouton-Rouge-Apple.png')
                    : require('../../../assets/boutons/Bouton-Noir-Apple.png')
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[{top: 30, height: 56}]}
              onPress={() => {
                setButtonPressed('Facebook');
                navigation.navigate('TabNavigator', {
                  TabRoute: 'DiscoverNavigator',
                });
              }}
              accessibilityLabel="Connexion avec Facebook">
              <Text
                style={[
                  Styles.textBtn10,
                  {
                    zIndex: 2,
                    top: 12,
                    left: 12,
                    fontSize: 18,
                    fontFamily: 'Comfortaa-Bold',
                  },
                ]}>
                Se connecter avec Facebook
              </Text>
              <Image
                style={[
                  {
                    bottom: 28,
                    height: 56,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  },
                ]}
                source={
                  buttonPressed === 'Facebook'
                    ? require('../../../assets/boutons/Bouton-Rouge-Facebook.png')
                    : require('../../../assets/boutons/Bouton-Noir-Facebook.png')
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[{top: 50, height: 56}]}
              onPress={() => {
                setButtonPressed('Google');
                navigation.navigate('TabNavigator', {
                  TabRoute: 'DiscoverNavigator',
                  active: 'Discover',
                  tabPath: 'Amour',
                });
              }}
              accessibilityLabel="Connexion avec Google">
              <Text
                style={[
                  Styles.textBtn10,
                  {
                    zIndex: 3,
                    top: 12,
                    left: 15,
                    fontSize: 18,
                    fontFamily: 'Comfortaa-Bold',
                  },
                ]}>
                Se connecter avec Google
              </Text>
              <Image
                style={[
                  {
                    bottom: 28,
                    height: 56,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  },
                ]}
                source={
                  buttonPressed === 'Google'
                    ? require('../../../assets/boutons/Bouton-Rouge-Google.png')
                    : require('../../../assets/boutons/Bouton-Noir-Google.png')
                }
              />
            </TouchableOpacity>

            <View style={[Styles.line, {top: 50}]} />

            <TouchableOpacity
              style={[{top: 50, height: 56}]}
              onPress={() => {
                setButtonPressed('Email');
                handleStoreData('route_choice', 'connexion email');
                navigation.navigate('Compte');
              }}
              accessibilityLabel="Se connecter par email">
              <Text
                style={[
                  Styles.textBtn10,
                  {
                    zIndex: 4,
                    top: 12,
                    left: 15,
                    fontSize: 18,
                    fontFamily: 'Comfortaa-Bold',
                  },
                ]}>
                Se connecter par e-mail
              </Text>
              <Image
                style={[
                  {
                    bottom: 28,
                    height: 56,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  },
                ]}
                source={
                  buttonPressed === 'Email'
                    ? require('../../../assets/boutons/Bouton-Rouge-Email.png')
                    : require('../../../assets/boutons/Bouton-Bleu-Email.png')
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[{top: 70, height: 56}]}
              onPress={() => {
                setButtonPressed('Numero');
                handleStoreData('route_choice', 'connexion numero');
                navigation.navigate('Compte');
              }}
              accessibilityLabel="Se connecter avec son numéro de téléphone">
              <Text
                style={[
                  Styles.textBtn10,
                  {
                    zIndex: 5,
                    top: 12,
                    left: 15,
                    fontSize: 18,
                    fontFamily: 'Comfortaa-Bold',
                  },
                ]}>
                Se connecter avec son n°
              </Text>
              <Image
                style={[
                  {
                    bottom: 28,
                    height: 56,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  },
                ]}
                source={
                  buttonPressed === 'Numero'
                    ? require('../../../assets/boutons/Bouton-Rouge-Telephone.png')
                    : require('../../../assets/boutons/Bouton-Bleu-Telephone.png')
                }
              />
            </TouchableOpacity>
          </View>
          <View style={[{top: 90}]}>
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
