import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import {getData} from '../../services/storage';
import StylesSinscrirePhone from '../../../assets/style/styleScreens/styleRegister/StyleSinscrirePhone';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
import {BtnNext} from '../../components/boutons/BtnNext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'S_inscrire_par_numero'>;
};

export const SignInPhone: React.FC<HomeProps> = ({navigation}) => {
  const [userPhone, setPhone] = useState<string>();
  const [errorNumero, setErrorNumero] = useState<boolean>(false);

  const errorMessage =
    'Numéro de téléphone est invalide. Veuillez respecter le format "+33 000000000"';

  const validateMessage =
    'Un code va vous être envoyé par SMS afin de vous identifier';

  const validatePhone = (index: string) => {
    const reg = /^\+33\d{9}$/;
    const phoneNumber = index;

    if (reg.test(phoneNumber)) {
      setPhone(phoneNumber);
      setErrorNumero(true);
    } else {
      setPhone(phoneNumber);
      setErrorNumero(false);
    }
  };
  console.log(errorNumero);

  console.log('Téléphone: ' + userPhone);

  useEffect(() => {
    handleGetData();
    handleGetRoute();
  }, []);

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
      // console.log(route);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  return (
    <View style={StylesSinscrirePhone.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[StylesSinscrirePhone.ViewText]}>
          <TitreUneLigne
            txtTitle="S'INSCRIRE"
            textAlign="left"
            top={120}
            left={30}
            fontFamily={undefined}
            color={undefined}
            fontWeight={undefined}
            fontSize={24}
          />
        </View>
        <SafeAreaView style={[StylesSinscrirePhone.ViewInput]}>
          <TextInput
            style={StylesSinscrirePhone.TextInput}
            keyboardType="phone-pad"
            placeholder="Entrez votre n° de téléphone"
            placeholderTextColor="#FFF"
            onChangeText={phone => {
              validatePhone(phone);
            }}
            value={userPhone}
          />
          {errorNumero === false ? (
            <Text style={[StylesSinscrirePhone.textError]}>{errorMessage}</Text>
          ) : (
            <Text style={[StylesSinscrirePhone.textWhite]}>
              {validateMessage}
            </Text>
          )}
        </SafeAreaView>
        <BtnNext
          navigation={navigation}
          navigateTo="Confirmation_numero"
          propName="SignInRoute"
          propRoute="Confirmation_numero"
          txt="Continuer"
          handleStore={{key: 'phone', value: userPhone ?? ''}}
          postInfo={undefined}
          background="White"
          top={300}
          left={0}
        />
      </ImageBackground>
    </View>
  );
};
