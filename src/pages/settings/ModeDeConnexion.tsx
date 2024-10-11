import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import StyleModeConnexion from '../../../assets/style/styleScreens/styleSettings/StyleModeConnexion';
import ModeConnexionStyles from '../../../assets/style/styleScreens/styleSettings/StyleModeConnexion';
import MenuSlide from '../../components/menus/MenuSlide';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {getDatas, storeData} from '../../services/storage';
import {
  StorageValue,
  StorageValueMap,
} from '../../../interfaces/StorageValueInterface';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Mode_de_connexion'>;
  route: RouteProp<RouteType, 'Mode_de_connexion'>;
};

export const ModeDeConnexion: React.FC<HomeProps> = ({navigation}) => {
  const [userEmail, setUserEmail] = useState<string>('');
  const keysToRetrieve: string[] = ['userEmail', 'mode_de_connexion'];

  const [buttonPressedNumero, setButtonPressedNumero] =
    useState<boolean>(false);
  const [buttonPressedGoogle, setButtonPressedGoogle] = useState(false);
  const [buttonPressedFacebook, setButtonPressedFacebook] =
    useState<boolean>(false);
  const [buttonPressedApple, setButtonPressedApple] = useState<boolean>(false);
  const [buttonPressedBack, setButtonPressedBack] = useState<boolean>(false);
  const [buttonPressedEmail, setButtonPressedEmail] = useState<boolean>(false);

  const handleStoreData = async (key: string, value: StorageValue[]) => {
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

      if (result.userEmail) setUserEmail(result.userEmail as string);
      if (result.Numero !== undefined)
        setButtonPressedNumero(result.Mode_Numero as boolean);
      if (result.Google !== undefined)
        setButtonPressedGoogle(result.Mode_Google as boolean);
      if (result.Facebook !== undefined)
        setButtonPressedFacebook(result.Mode_Facebook as boolean);
      if (result.Apple !== undefined)
        setButtonPressedApple(result.Mode_Apple as boolean);
      if (result.Email !== undefined)
        setButtonPressedEmail(result.Mode_Email as boolean);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    getMultipleValues();
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <ImageBackground
      style={StyleModeConnexion.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <View style={{flex: 8}}>
        <MenuSlide
          navigation={navigation}
          icoPushChange={false}
          backgroundColor={'white'}
          settingsNavigation={'Securite_et_privee'}
          backButton={'Retour'}
        />
        <TitreUneLigne
          txtTitle="Mode de connexion"
          fontFamily="Comfortaa-Bold"
          color={'#0019A7'}
          fontSize={24}
          textAlign="center"
          fontWeight={'700'}
          top={25}
          left={undefined}
        />
        <View style={StyleModeConnexion.separator} />
        <Text style={StyleModeConnexion.description}>
          Gérez vos modes de connexions sécurisé ?
        </Text>
        <View style={ModeConnexionStyles.ModeConnexionContainer}>
          <Text style={[StyleModeConnexion.secondTitle, {top: -20}]}>
            Email actuel
          </Text>
          <View>
            <Image
              style={StyleModeConnexion.ModeDeConnexionItem}
              source={require('../../../assets/boutons/bouton-enveloppe-tranparent.png')}
            />
            <TextInput
              style={[
                StyleModeConnexion.ModeConnexionItemText,
                {top: -40, color: '#0019A7'},
              ]}
              placeholder={userEmail ?? 'abcd@gmail.com'}
              onSubmitEditing={event => setUserEmail(event.nativeEvent.text)}
            />
          </View>
          <Text style={StyleModeConnexion.secondTitle}>
            Autre mode de connexion
          </Text>
        </View>
        <View style={{top: 170}}>
          {/* Se connecter avec son numéro */}
          <TouchableOpacity
            onPress={() => {
              setButtonPressedNumero(previousState => !previousState);
              navigation.navigate('SignInNavigator', {
                SignInRoute: 'S_inscrire_par_numero',
              });
            }}>
            <Image
              style={StyleModeConnexion.ModeConnexionLog}
              source={
                buttonPressedNumero
                  ? require('../../../assets/boutons/bouton-telephone-bleu.png')
                  : require('../../../assets/boutons/bouton-telephone-transparent.png')
              }
            />
            <Text
              style={[
                {color: buttonPressedNumero ? 'white' : '#000'},
                StyleModeConnexion.ModeConnexionLogText,
              ]}>
              Se connecter avec son n°
            </Text>
          </TouchableOpacity>
          {/* Se connecter avec Apple */}
          <TouchableOpacity
            onPress={() => {
              setButtonPressedApple(previousState => !previousState);
            }}>
            <Image
              style={StyleModeConnexion.ModeConnexionLog}
              source={
                buttonPressedApple
                  ? require('../../../assets/boutons/bouton-apple-bleu.png')
                  : require('../../../assets/boutons/bouton-apple-transparent.png')
              }
            />
            <Text
              style={[
                {color: buttonPressedApple ? 'white' : '#000'},
                StyleModeConnexion.ModeConnexionLogText,
              ]}>
              Connexion avec Apple
            </Text>
          </TouchableOpacity>
          {/* Se connecter avec Facebook */}
          <TouchableOpacity
            onPress={() => {
              setButtonPressedFacebook(previousState => !previousState);
            }}>
            <Image
              style={StyleModeConnexion.ModeConnexionLog}
              source={
                buttonPressedFacebook
                  ? require('../../../assets/boutons/bouton-facebook-bleu.png')
                  : require('../../../assets/boutons/bouton-facebook-transparent.png')
              }
            />
            <Text
              style={[
                {color: buttonPressedFacebook ? 'white' : '#000'},
                StyleModeConnexion.ModeConnexionLogText,
              ]}>
              Connexion avec Facebook
            </Text>
          </TouchableOpacity>
          {/* Se connecter avec Google */}
          <TouchableOpacity
            onPress={() => {
              setButtonPressedGoogle(previousState => !previousState);
            }}>
            <Image
              style={StyleModeConnexion.ModeConnexionLog}
              source={
                buttonPressedGoogle
                  ? require('../../../assets/boutons/bouton-google-bleu.png')
                  : require('../../../assets/boutons/bouton-google-transparent.png')
              }
            />
            <Text
              style={[
                {color: buttonPressedGoogle ? 'white' : '#000'},
                StyleModeConnexion.ModeConnexionLogText,
              ]}>
              Connexion avec Google
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={{marginTop: 15}}
          onPress={() => {
            setButtonPressedBack(true);
            handleStoreData('Mode_de_connexion', [
              {key: 'Mode_Numero', value: buttonPressedNumero},
              {key: 'Mode_Google', value: buttonPressedGoogle},
              {key: 'Mode_Facebook', value: buttonPressedFacebook},
              {key: 'Mode_Apple', value: buttonPressedApple},
              {key: 'Mode_Email', value: buttonPressedEmail},
            ]);
            navigation.navigate('Securite_et_privee');
          }}>
          <Image
            style={StyleModeConnexion.backButton}
            source={
              buttonPressedBack
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc-Border.png')
            }
          />
          <Text
            style={[
              {color: buttonPressedBack ? 'white' : '#0019A7'},
              StyleModeConnexion.backButtonText,
            ]}>
            Retour sécurité & vie privée
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
