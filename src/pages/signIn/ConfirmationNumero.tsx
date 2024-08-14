import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  EventSubscription,
} from 'react-native';
import StylesConfirmationNumero from '../../../assets/style/styleScreens/styleRegister/StyleConfirmationNumero';
import {postMethod} from '../../services/axiosInstance';
import {getData} from '../../services/storage';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreDeuxLignes} from '../../components/TitreDeuxLignes';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'S_inscrire_par_numero'>;
};

export const ConfirmationNumero: React.FC<HomeProps> = ({navigation}) => {
  // Gérer les focus des TextInput pour ne pas afficher maudit TouchableOpactity pardessus
  const [showButton, setShowButton] = useState(true);

  let keyboardDidShowListener: EventSubscription;
  let keyboardDidHideListener: EventSubscription;

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      _keyboardDidShow,
    );
    keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      _keyboardDidHide,
    );

    return () => {
      keyboardDidShowListener?.remove();
      keyboardDidHideListener?.remove();
    };
  }, []);

  const _keyboardDidShow = () => {
    setShowButton(false);
  };

  const _keyboardDidHide = () => {
    setShowButton(true);
  };
  const [userCode, setCode] = useState<string>('');

  const [userPhone, setPhone] = useState<string>('');

  const [buttonPressed, setButtonPressed] = useState<string>('');

  const [check, setCheck] = useState<boolean>();

  const handleGetData = async () => {
    try {
      const phone = await getData('phone');
      setPhone(phone || '');
      // console.log(phone);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const handleGetRoute = async () => {
    try {
      const route = await getData('route_choice');
      console.log(route);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  useEffect(() => {
    handleGetData();
    handleGetRoute();
  }, []);

  const postInfo = async () => {
    const url = '/verificationCheck';
    const data = {
      phoneNumber: userPhone,
      code: userCode,
    };
    try {
      const response = await postMethod(url, data);
      console.log('Réponse du serveur après la requête POST :', response);
      if (response) {
        response.status === 'VALID' ? setCheck(true) : setCheck(false);
      }
    } catch (error) {
      setCheck(false);
      // console.error('Erreur lors de la requête POST :', error);
    }
  };
  return (
    <View style={StylesConfirmationNumero.container}>
      <ImageBackground
        style={StylesConfirmationNumero.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <TitreDeuxLignes
          txtTitle="CONFRIMATION"
          txtTitle2="NUMÉRO"
          textAlign="left"
          fontWeight={undefined}
          top={120}
          left={30}
        />
        {/* <Text style={[StylesConfirmationNumero.TxtTitle]}>CONFRIMATION</Text>
        <Text style={[StylesConfirmationNumero.TxtTitle]}>NUMÉRO</Text> */}
        <SafeAreaView style={[StylesConfirmationNumero.ViewInput]}>
          <TextInput
            style={StylesConfirmationNumero.TextInput}
            keyboardType="numeric"
            placeholder="Entrez le code reçu par sms"
            placeholderTextColor="#FFF"
            maxLength={11}
            onChangeText={text => setCode(text)}
            value={userCode}
            onSubmitEditing={() => {
              if (check !== true) {
                postInfo();
              }
            }}
          />
          {userCode ? (
            <Image
              source={
                check
                  ? require('../../../assets/images/ico-valid.png')
                  : require('../../../assets/images/ico-x.png')
              }
              style={{
                bottom: 42,
                right: 85,
                width: 25,
                height: 25,
                resizeMode: 'contain',
                alignSelf: 'flex-end',
              }}
            />
          ) : null}
        </SafeAreaView>
        <View style={[{bottom: showButton ? 140 : -85}]}>
          <TouchableOpacity
            style={[{bottom: 10}]}
            onPress={() => {
              setButtonPressed('Reessayez');
              navigation.navigate('S_inscrire_par_numero');
            }}
            accessibilityLabel="S'inscrire par numéro">
            <Text style={[StylesConfirmationNumero.textBtn]}>Réessayez</Text>
            <Image
              style={[StylesConfirmationNumero.imgBtn]}
              source={
                buttonPressed === 'Reessayez'
                  ? require('../../../assets/boutons/Bouton-Rouge.png')
                  : require('../../../assets/boutons/Bouton-Noir.png')
              }
            />
          </TouchableOpacity>
          <Text style={[StylesConfirmationNumero.textWhite]}>
            Si vous n&apos;avez pas reçu d&apos;sms, veuillez rééssayez.
          </Text>
          <TouchableOpacity
            style={[{top: 20}]}
            onPress={() => {
              setButtonPressed('Recup');
              navigation.navigate('S_inscrire_par_mail');
            }}
            accessibilityLabel="Récupérer mon compte">
            <Text style={[StylesConfirmationNumero.textBtn1]}>
              S&apos;inscrire par email
            </Text>
            <Image
              style={[StylesConfirmationNumero.imgBtn1]}
              source={
                buttonPressed === 'Recup'
                  ? require('../../../assets/boutons/Bouton-Noir-Email.png')
                  : require('../../../assets/boutons/Bouton-Rouge-Email.png')
              }
            />
          </TouchableOpacity>
          <Text style={[StylesConfirmationNumero.textWhite1]}>
            Utilisez un autre moyen pour vous inscrire
          </Text>
        </View>
        {showButton && (
          <View style={[{bottom: 40}]}>
            <TouchableOpacity
              onPress={() => {
                setButtonPressed('Continuer');
                check
                  ? navigation.navigate('Ville')
                  : navigation.navigate('Confirmation_numero');
              }}
              accessibilityLabel="Continuer">
              <Text
                style={[
                  StylesConfirmationNumero.textBtn2,
                  {
                    color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
                  },
                ]}>
                Continuer
              </Text>
              <Image
                style={[StylesConfirmationNumero.imgBtn2]}
                source={
                  buttonPressed === 'Continuer'
                    ? require('../../../assets/boutons/Bouton-Rouge.png')
                    : require('../../../assets/boutons/Bouton-Blanc.png')
                }
              />
            </TouchableOpacity>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default ConfirmationNumero;
