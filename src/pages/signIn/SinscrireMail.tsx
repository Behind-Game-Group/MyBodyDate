import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {storeData, getData} from '../../services/storage';
import StylesSinscrireMail from '../../../assets/style/styleScreens/styleRegister/StyleSinscrireMail';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/TitreUneLigne';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'S_inscrire_par_mail'>;
};

export const SignInMail: React.FC<HomeProps> = ({navigation}) => {
  const [userEmail, setEmail] = useState<string>();
  const [errorEmail, setErrorEmail] = useState<boolean | null>(null);
  const [buttonPressed, setButtonPressed] = useState<boolean>();

  const errorMessage =
    'L\'email saisi est invalide. Veuillez respecter le format "exemple@email.fr"';

  const validateMessage =
    'Un lien pour connecter à votre ancien compte, va vous être envoyer par email';

  const validateEmail = (index: string) => {
    const reg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const emailAdress = index;
    // const phoneNumber = userPhone;
    if (reg.test(emailAdress)) {
      setEmail(index);
      setErrorEmail(true);
    } else if (!reg.test(emailAdress)) {
      setEmail(index);
      setErrorEmail(false);
    } else {
      setErrorEmail(null);
    }
  };
  console.log(errorEmail);

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
      const email = await getData('email');
      setEmail(email || '');
      // console.log(consent);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  console.log('Email: ' + userEmail);
  return (
    <View style={StylesSinscrireMail.container}>
      <ImageBackground
        style={StylesSinscrireMail.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[StylesSinscrireMail.ViewText]}>
          <TitreUneLigne
            txtTitle="S'INSCRIRE"
            textAlign="left"
            top={120}
            left={30}
            fontFamily={2}
          />
        </View>
        <SafeAreaView style={[StylesSinscrireMail.ViewInput, {top: 180}]}>
          <TextInput
            style={StylesSinscrireMail.TextInput}
            keyboardType="email-address"
            placeholder="Entrez votre Email"
            placeholderTextColor="#FFF"
            maxLength={100}
            onChangeText={text => validateEmail(text)}
            value={userEmail}
          />
          {errorEmail === false ? (
            <Text style={[StylesSinscrireMail.textError]}>{errorMessage}</Text>
          ) : (
            <Text style={[StylesSinscrireMail.textWhite]}>
              {validateMessage}
            </Text>
          )}
        </SafeAreaView>

        <View style={[StylesSinscrireMail.ViewBtn]}>
          <TouchableOpacity
            style={[]}
            onPress={() => {
              navigation.navigate('Confirmation_email');
              handleStoreData('email', userEmail ?? '');
              setButtonPressed(true);
            }}
            accessibilityLabel="Continuer">
            <Text
              style={[
                StylesSinscrireMail.TxtBtn,
                {color: buttonPressed ? '#fff' : '#0019A7'},
              ]}>
              Continuer
            </Text>
            <Image
              style={[StylesSinscrireMail.imgBtn]}
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
