import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  GestureResponderEvent,
} from 'react-native';
import {storeData, getData, getDatas} from '../../services/storage';
import Logo from '../../components/Logo';
import Styles from '../../../assets/style/Styles';
import StylesLoveCoach from '../../../assets/style/styleScreens/styleRegister/StyleLoveCoach';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/TitreUneLigne';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'LoveCoach'>;
};

type RadioInputProps = {
  label: string;
  selected: boolean;
  onPress: (event: GestureResponderEvent) => void;
};

const RadioInput: React.FC<RadioInputProps> = ({label, selected, onPress}) => {
  const icon = selected
    ? require('../../../assets/images/radio_selected.png')
    : require('../../../assets/images/radio_unselected.png');

  return (
    <TouchableOpacity
      style={[StylesLoveCoach.radioInputContainer]}
      onPress={onPress}>
      <Image source={icon} style={StylesLoveCoach.radioInputIcon} />
      <Text style={[StylesLoveCoach.textInput]}>{label}</Text>
    </TouchableOpacity>
  );
};

// Home Screen
export const LoveCoach: React.FC<HomeProps> = ({navigation}) => {
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('Oui');
  const [userConsent, setUserConsent] = useState<string>('');
  const [routeChoice, setRouteChoice] = useState<string>('');

  useEffect(() => {
    handleGetData();
  }, []);

  const handleStoreData = async (key: string, value: string) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetData = async () => {
    try {
      const consent = await getData('love_coach');
      setUserConsent(consent || '');
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const keysToRetrieve = ['user_consent', 'love_coach', 'route_choice'];

  const retrieveMultipleValues = async () => {
    try {
      const retrievedValues = await getDatas(keysToRetrieve);
      // console.log('Valeurs récupérées :', retrievedValues);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };
  retrieveMultipleValues();

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const values = await Promise.all(
          keysToRetrieve.map(async key => {
            const value = await getData(key);
            setRouteChoice(value || '');
            return {key, value};
          }),
        );
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    retrieveData();
  }, []);

  return (
    <View style={StylesLoveCoach.container}>
      <ImageBackground
        style={StylesLoveCoach.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Logo />
        <View style={[StylesLoveCoach.ViewText, {top: 50}]}>
          <TitreUneLigne
            txtTitle="LOVE COACH"
            left={30}
            textAlign="left"
            top={20}
            fontFamily={undefined}
          />
          <Text style={[StylesLoveCoach.textWhite2]}>
            Nous sommes heureux de vous accompagner pour augmenter vos chances
            de matchs. En choisissant le programme gratuit LOVE COACH, nous vous
            proposerons des profils personnalisés de célibataires correspondant
            à vos attentes. Vous recevrez également des invitations aux
            événements près de chez vous et/ou dans la ville de votre choix.
          </Text>
        </View>
        <View style={[StylesLoveCoach.ViewRadio, Styles.ml40]}>
          <RadioInput
            label="Non, je peux me débrouiller"
            selected={selectedOption === 'Non'}
            onPress={() => setSelectedOption('Non')}
          />
          <RadioInput
            label="Oui, c'est parfait"
            selected={selectedOption === 'Oui'}
            onPress={() => setSelectedOption('Oui')}
          />
        </View>
        <View style={{left: 40}}>
          <Text style={[StylesLoveCoach.textInfo]}>
            Création du compte gratuit.
          </Text>
          <Text style={[StylesLoveCoach.textInfo2]}>Choix unique.</Text>
        </View>
        <View style={[StylesLoveCoach.ViewBtn]}>
          <TouchableOpacity
            style={[]}
            onPress={() => {
              if (routeChoice === 'connexion') {
                navigation.navigate('LogInNavigator', {
                  LoginRoute: 'Liens_de_connexion',
                });
                handleStoreData('love_coach', selectedOption);
              } else {
                navigation.navigate('SignInNavigator', {
                  SignInRoute: 'Liens_dinscription',
                });
                handleStoreData('love_coach', selectedOption);
              }
              setButtonPressed(true);
            }}
            accessibilityLabel="Continuer">
            <Text
              style={[
                StylesLoveCoach.textBtn9,
                {
                  color: buttonPressed ? '#fff' : '#0019A7',
                },
              ]}>
              Continuer
            </Text>
            <Image
              style={[StylesLoveCoach.imgBtn]}
              source={
                buttonPressed
                  ? require('../../../assets/boutons/Bouton-Rouge.png')
                  : require('../../../assets/boutons/Bouton-Blanc.png')
              }
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
