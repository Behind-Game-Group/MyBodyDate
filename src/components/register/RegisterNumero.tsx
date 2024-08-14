import React, {useState, useEffect, JSXElementConstructor} from 'react';
import {
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import {getMethod, postMethod} from '../../../service/axiosInstance';
import {storeData, getData, getDatas} from '../../../service/storage';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Compte'>;
};

export const RegisterNumero: React.FC<HomeProps> = ({navigation}) => {
  const [buttonPressed, setButtonPressed] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<string>('');
  const [errorNumero, setErrorNumero] = useState<React.ReactNode>(null);
  // console.log('errorNumero : ', errorNumero);
  const [numero, setNumero] = useState<string>('');
  const [dataNumero, setDataNumero] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [privacyMode, setPrivacyMode] = useState<boolean>(true);

  const validatePhone = (userPhone: string) => {
    console.log('validatePhone appelé');
    console.log(userPhone);
    const phoneRegex = /^\+\d{9,11}$/;
    phoneRegex.test(userPhone)
      ? setNumero(userPhone)
      : setErrorNumero(
          <>
            <Text
              style={[
                Styles.textError,
                {
                  top: 10,
                  fontFamily: 'Comfortaa-Bold',
                  alignItems: 'center',
                  fontSize: 12,
                },
              ]}>
              Numéro de téléphone invalide. Veuillez respecter le format
              "+330000000"
            </Text>
          </>,
        );
  };
  const validatePassword = (inputPassword: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&?!])[A-Za-z\d@#$%^&?!]{12,}$/;
    setErrorPassword(
      passwordRegex.test(inputPassword)
        ? ''
        : 'Le mot de passe doit contenir : au moins une lettre majuscule, au moins une lettre minuscule, au moins un chiffre, au moins un caractère spécial (@#$%^&?!), et au moins douze (12) caractères.',
    );
  };

  const postInfo = async () => {
    const url = '/register';
    const data = {
      numero: numero,
      password: password,
    };
    console.log(data);

    try {
      const response = await postMethod(url, data);
      console.log('Réponse du serveur après la requête POST :', response);
      if (response) {
        handleStoreData('route_choice', 'connexion numero');
        navigation.navigate('Compte');
      }
    } catch (error) {
      // console.log('Erreur lors de la requête POST :', error);
      setErrorNumero(
        <>
          <Text
            style={[
              Styles.textError,
              {
                top: 10,
                fontFamily: 'Comfortaa-Bold',
                alignItems: 'center',
                fontSize: 12,
              },
            ]}>
            Ce numéro de téléphone est déjà associé à un compte. Veuillez
            utiliser un autre ou connectez-vous, en cliquant ci-dessous.
          </Text>
          <TouchableOpacity
            key="btnIci"
            style={[{top: 10, justifyContent: 'center', alignItems: 'center'}]}
            onPress={() => {
              navigation.navigate('Compte');
              handleStoreData('route_choice', 'connexion numero');
            }}>
            <Text style={[{color: 'white'}]}>ICI !</Text>
          </TouchableOpacity>
        </>,
      );
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
      setNumero(cleanNumero);
      setDataNumero(cleanNumero);
      console.log(cleanNumero.length, userPhone.length);
      // console.log('Email : ' + userEmail);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  return (
    <>
      <SafeAreaView style={[{top: 40}]}>
        <TextInput
          style={[Styles.TextInputEmail, {position: 'relative', top: 0}]}
          keyboardType="numeric"
          placeholder="Votre numéro"
          placeholderTextColor="#FFF"
          maxLength={12}
          onChangeText={text => {
            setNumero(text);
            validatePhone(text);
          }}
          value={numero}
        />
        {errorNumero ? (
          errorNumero
        ) : (
          <Text
            style={[Styles.textWhite4, {top: 10, width: '70%', fontSize: 12}]}>
            Veuillez entrer un numéro de téléphone valide
          </Text>
        )}
      </SafeAreaView>
      <SafeAreaView
        style={{
          top: 80,
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
          onEndEditing={() => validatePassword(password)}
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
            {top: 100, alignSelf: 'center', width: '80%', fontSize: 12},
          ]}>
          {errorPassword}
        </Text>
      ) : (
        <Text
          style={[
            Styles.textWhite4,
            {top: 100, left: 20, width: '80%', fontSize: 12},
          ]}>
          Pour garantir la sécurité de votre{'\n'}mot de passe, il doit contenir
          {'\n'}:{'\n'}-au moins une lettre majuscule{'\n'}-au moins une lettre
          minuscule{'\n'}-au moins un chiffre{'\n'}-au moins un caractère
          spéciale{'\n'}(@#$%^&?!){'\n'}-au moins huit (8) caractères
        </Text>
      )}
      <View style={{top: 250}}>
        <TouchableOpacity
          accessibilityLabel="Continuer"
          onPress={() => {
            setButtonPressed('Continuer');
            validatePhone(numero);
            validatePassword(password);
            setButtonPressed('Continuer');
            if (!errorNumero && !errorPassword) {
              postInfo();
            } else {
              if (errorNumero) {
                setErrorNumero(
                  <>
                    <Text
                      style={[
                        Styles.textError,
                        {
                          top: 10,
                          fontFamily: 'Comfortaa-Bold',
                          alignItems: 'center',
                          fontSize: 12,
                        },
                      ]}>
                      Veuillez entrer un numéro de téléphone et un mot de passe
                      valide.
                    </Text>
                  </>,
                );
              }
              if (errorPassword) {
                setErrorPassword(
                  'Le mot de passe doit contenir : au moins une lettre majuscule, au moins une lettre minuscule, au moins un chiffre, au moins un caractère spécial (@#$%^&?!), et au moins huit (12) caractères.',
                );
              }
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

export default RegisterNumero;
