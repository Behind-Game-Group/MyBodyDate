import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import ConfirmHcaptcha from '@hcaptcha/react-native-hcaptcha';
// import {postMethod} from '../../services/axiosInstance';
// import {storeData} from '../../services/storage';
import StylesConfirmationCompte from '../../../assets/style/styleScreens/styleRegister/StyleConfirmationCompte';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {WebViewMessageEvent} from 'react-native-webview';
import LottieView from 'lottie-react-native';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Confirmation_compte'>;
};

type HCaptchaCode = string | null;

const siteKey = 'e8489cc3-b124-4243-b0bd-abd6d596e104';
const baseUrl = 'https://hcaptcha.com';

export const ConfirmationCompte: React.FC<HomeProps> = ({navigation}) => {
  const [buttonPressed, setButtonPressed] = useState<string>('');

  // Constantes concernant la Modal Recaptcha
  // const [modalRecaptchaVisible, setModalRecaptchaVisible] = useState<boolean>(true);

  const [code, setCode] = useState<HCaptchaCode>(null);
  const captchaForm = useRef<ConfirmHcaptcha>(null);

  const onMessage = (event: WebViewMessageEvent) => {
    if (event && event.nativeEvent.data) {
      if (['cancel', 'error', 'expired'].includes(event.nativeEvent.data)) {
        console.log('Verified code:', event.nativeEvent.data);
        if (captchaForm.current) {
          captchaForm.current.hide();
        }
        setCode(event.nativeEvent.data);
        return;
      } else {
        setCode(event.nativeEvent.data);
        console.log('Verified code:', event.nativeEvent.data);
        setTimeout(() => {
          if (captchaForm.current) {
            captchaForm.current.hide();
          }
          // do whatever you want here
        }, 1000);
      }
    }
  };

  function testReached() {
    if (!code) {
      return (
        <View style={{backgroundColor: 'transparent', height: 200}}>
          <LottieView
            source={require('../../../assets/animations/AnimRefuserCaptcha.json')}
            style={[StylesConfirmationCompte.lottie]}
            autoPlay
            loop
          />
          <Text style={[StylesConfirmationCompte.lottieText]}>
            Test non confirmé
          </Text>
        </View>
      );
    } else {
      return (
        <View style={{backgroundColor: 'transparent', height: 200}}>
          <LottieView
            source={require('../../../assets/animations/AnimValiderCaptcha.json')}
            style={[StylesConfirmationCompte.lottie2]}
            autoPlay
            loop
          />
          <Text style={[StylesConfirmationCompte.lottieText2]}>
            Test confirmé
          </Text>
        </View>
      );
    }
  }

  // useEffect(() => {
  //   getMethod('/currentUser')
  //     .then(data => {
  //       console.log('Données récupérées :', data);
  //     })
  //     .catch(error => {
  //       console.error('Erreur lors de la récupération des données :', error);
  //     });
  // }, []);

  // const postInfo = async () => {
  //   const url = '/register';
  //   const data = {
  //     // email: email,
  //   };
  //   console.log(data);

  //   try {
  //     const response = await postMethod(url, data);
  //     console.log('Réponse du serveur après la requête POST :', response);
  //     if (response) {
  //       // handleStoreData('confirmation_compte', code);
  //       navigation.navigate('Compte');
  //     }
  //   } catch (error) {
  //     console.error('Erreur lors de la requête POST :', error);
  //   }
  // };

  // const handleStoreData = async (key: string, value: string) => {
  //   try {
  //     await storeData(key, value);
  //   } catch (error) {
  //     console.error('Erreur lors du stockage des données :', error);
  //   }
  // };

  return (
    <ImageBackground
      style={StylesConfirmationCompte.bgGradient}
      source={require('../../../assets/images/Background.png')}>
      <Text style={[StylesConfirmationCompte.TxtTitle]}>MON COMPTE</Text>
      <Text style={[StylesConfirmationCompte.textWhite]}>
        Prouvez que vous n&apos;êtes pas un robot.
      </Text>
      <Text style={[StylesConfirmationCompte.textWhite2]}>
        Pour cela, réalisez ce test pour pouvoir poursuivre.
      </Text>
      <View style={[{top: 280}]}>
        {!code && (
          <TouchableOpacity
            style={[{top: 0}]}
            onPress={() => {
              captchaForm.current !== null ? captchaForm.current.show() : null;
            }}>
            <Text style={[StylesConfirmationCompte.textBtn]}>
              Faire le test
            </Text>
            <Image
              style={[StylesConfirmationCompte.imgBtn]}
              source={require('../../../assets/boutons/Bouton-Rouge.png')}
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={[{top: 400}]}>
        <ConfirmHcaptcha
          ref={captchaForm}
          siteKey={siteKey}
          baseUrl={baseUrl}
          languageCode="fr"
          onMessage={onMessage}
          size={'invisible'}
        />
        {testReached()}
        <TouchableOpacity
          style={[StylesConfirmationCompte.ViewBtn, {top: code ? 50 : -30}]}
          accessibilityLabel="Continuer"
          onPress={() => {
            code == null
              ? navigation.navigate('Confirmation_compte')
              : navigation.navigate('Ajouter_photo');
            setButtonPressed('Continuer');
          }}>
          <Image
            style={[StylesConfirmationCompte.imgBtn2]}
            source={
              buttonPressed === 'Continuer'
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc.png')
            }
          />
          <Text
            style={[
              StylesConfirmationCompte.TxtBtn,
              {
                color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
              },
            ]}>
            Continuer
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default ConfirmationCompte;
