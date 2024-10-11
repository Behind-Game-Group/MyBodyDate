import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  TextInput,
  Keyboard,
  EventSubscription,
} from 'react-native';
import StylesConfirmationNumero from '../../../assets/style/styleScreens/styleRegister/StyleConfirmationNumero';
import {postMethod} from '../../services/axiosInstance';
import {getData} from '../../services/storage';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreDeuxLignes} from '../../components/titre/TitreDeuxLignes';
import {BtnNext} from '../../components/boutons/BtnNext';

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
          fontFamily={undefined}
          color={undefined}
          fontWeight={undefined}
          fontSize={24}
          top={120}
          left={30}
        />
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
        <View
          style={[
            {
              top: showButton ? 100 : 80,
              height: 180,
            },
          ]}>
          <BtnNext
            navigation={navigation}
            navigateTo="S_inscrire_par_numero"
            propName="SignInRoute"
            propRoute="S_inscrire_par_numero"
            txt="Réessayez"
            handleStore={undefined}
            postInfo={undefined}
            color={undefined}
            background="Black"
            top={0}
            left={0}
            fontSize={18}
            fontFamily={undefined}
            fontWeight="700"
          />
          <Text style={[StylesConfirmationNumero.textWhite]}>
            Si vous n&apos;avez pas reçu d&apos;sms, veuillez rééssayez.
          </Text>
          <BtnNext
            navigation={navigation}
            navigateTo="S_inscrire_par_mail"
            propName="RegisterRoute"
            propRoute="S_inscrire_par_mail"
            txt="S'inscrire par email"
            handleStore={undefined}
            postInfo={undefined}
            color={undefined}
            background="Email-rouge"
            top={50}
            left={10}
            fontSize={18}
            fontFamily={undefined}
            fontWeight="700"
          />
          <Text style={[StylesConfirmationNumero.textWhite1]}>
            Utilisez un autre moyen pour vous inscrire
          </Text>
        </View>
        {showButton && (
          <BtnNext
            navigation={navigation}
            navigateTo={check ? 'Ville' : 'Confirmation_numero'}
            propName="RegisterRoute"
            propRoute={check ? 'Ville' : 'Confirmation_numero'}
            txt="Continuer"
            handleStore={undefined}
            postInfo={undefined}
            color="#0019A7"
            background="White"
            top={240}
            left={0}
            fontSize={18}
            fontFamily={undefined}
            fontWeight="700"
          />
        )}
      </ImageBackground>
    </View>
  );
};

export default ConfirmationNumero;
