import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import StylesLoginNumero from '../../../assets/style/StyleComposants/styleLogin/StyleLoginNumero';
import {getMethod, postMethod} from '../../services/axiosInstance';
import {
  storeData,
  getData,
  // getDatas
} from '../../services/storage';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Compte'>;
};

export const LoginNumero: React.FC<HomeProps> = ({navigation}) => {
  const [buttonPressed, setButtonPressed] = useState<string>('');
  const [privacyMode, setPrivacyMode] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<string>('');
  const [errorNumero, setErrorNumero] = useState<string>('');
  const [numero, setNumero] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const validatePhone = (userPhone: string) => {
    console.log('validatePhone appelé');
    console.log(userPhone);
    const phoneRegex = /^\+\d{9,11}$/;
    phoneRegex.test(userPhone)
      ? setNumero(userPhone)
      : setErrorNumero(
          'Numéro de téléphone invalide. Veuillez respecter le format "+330000000"',
        );
  };
  // const validatePassword = inputPassword => {
  //   const passwordRegex =
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&?!])[A-Za-z\d@#$%^&?!]{12,}$/;
  //   setErrorPassword(
  //     passwordRegex.test(inputPassword)
  //       ? ''
  //       : 'Le mot de passe doit contenir : au moins une lettre majuscule, au moins une lettre minuscule, au moins un chiffre, au moins un caractère spécial (@#$%^&?!), et au moins douze (12) caractères.',
  //   );
  // };

  const postInfo = async () => {
    const url = '/login';
    const data = {
      phoneNumber: numero,
      password: password,
    };

    console.log(data);

    try {
      const response = await postMethod(url, data);
      console.log('Réponse du serveur après la requête POST :', response);
      if (response) {
        handleStoreData('route_choice', 'connexion numero');
        navigation.navigate('Confirmation_compte');
        getMethod('/currentUser')
          .then(data => {
            console.log('Données récupérées :', data);
          })
          .catch(error => {
            console.error(
              'Erreur lors de la récupération des données :',
              error,
            );
          });
      }
    } catch (error) {
      console.error('Erreur lors de la requête POST :', error);
    }
  };

  useEffect(() => {
    handleGetNumero();
  }, []);

  const handleStoreData = async (key: string, value: string) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetNumero = async () => {
    try {
      const userPhone = await getData('phone');
      const cleanNumero = userPhone.toLowerCase().replace(/\s/g, '');
      validatePhone(cleanNumero);
      console.log('userPhone : ' + cleanNumero);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  return (
    <>
      <SafeAreaView style={[{top: 50}]}>
        <TextInput
          style={[StylesLoginNumero.TextInputNumero]}
          keyboardType="numeric"
          placeholder="Votre numéro"
          placeholderTextColor="#FFF"
          maxLength={10}
          onChangeText={numero => setNumero(numero)}
          onBlur={() => validatePhone(numero)}
          value={numero}
        />
        {errorNumero ? (
          <Text style={[StylesLoginNumero.textError]}>{errorNumero}</Text>
        ) : (
          <Text style={[StylesLoginNumero.textWhite]}>
            Veuillez entrer un numéro de téléphone valide
          </Text>
        )}
      </SafeAreaView>
      <SafeAreaView
        style={{
          top: 90,
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          width: '80%',
        }}>
        <TextInput
          style={[Styles.TextInputPassword, {width: '100%'}]}
          keyboardType="default"
          placeholder="Votre mot de passe"
          placeholderTextColor="#FFF"
          maxLength={100}
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={privacyMode}
        />

        <TouchableOpacity
          style={{
            bottom: 18,
            right: 50,
            width: 25,
            height: 25,
            alignSelf: 'flex-end',
          }}
          onPress={() => {
            privacyMode ? setPrivacyMode(false) : setPrivacyMode(true);
          }}>
          <Image
            source={require('../../../assets/boutons/ico-privacy.png')}
            style={{width: 25, height: 25, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </SafeAreaView>
      {errorPassword ? (
        <Text
          style={[
            Styles.textError2,
            {top: 110, alignSelf: 'center', width: '80%', fontSize: 12},
          ]}>
          {errorPassword}
        </Text>
      ) : (
        <Text
          style={[
            Styles.textWhite4,
            {top: 110, left: 20, width: '80%', fontSize: 12},
          ]}>
          Mot de passe oublié ?
        </Text>
      )}
      <View style={{top: 300}}>
        <TouchableOpacity
          accessibilityLabel="Continuer"
          onPress={() => {
            setButtonPressed('Continuer');
            if (!errorNumero) {
              postInfo();
            } else {
              setErrorNumero(
                'Veuillez entrer une adresse e-mail et un mot de passe valide.',
              );
            }
          }}>
          <Text
            style={[
              Styles.textBtn9,
              {
                zIndex: 1,
                top: 40,
                color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
              },
            ]}>
            Continuer
          </Text>
          <Image
            style={[
              {
                height: 56,
                resizeMode: 'contain',
                alignSelf: 'center',
              },
            ]}
            source={
              buttonPressed === 'Continuer'
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc.png')
            }
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LoginNumero;
