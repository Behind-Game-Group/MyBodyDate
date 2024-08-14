import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  Modal,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Logo from '../../components/Logo';
import StylesCreationEtDeveloppement from '../../../assets/style/styleScreens/styleRegister/StyleCreationEtDeveloppement';
import {storeData, getData} from '../../services/storage';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import LottieView from 'lottie-react-native';
import {TitreDeuxLignes} from '../../components/TitreDeuxLignes';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'CreationEtDeveloppement'>;
};

export const Creation: React.FC<HomeProps> = ({navigation}) => {
  const [buttonPressed, setButtonPressed] = useState<string>();
  const [userConsent, setUserConsent] = useState<string>();
  // console.log(userConsent);

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
      const consent = await getData('user_consent');
      setUserConsent(consent || '');
      // console.log(consent);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  // Constantes concernant la Modal d'accès au consentement
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={StylesCreationEtDeveloppement.container}>
      <ImageBackground
        style={StylesCreationEtDeveloppement.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Logo />
        <TitreDeuxLignes
          txtTitle="CRÉATION ET"
          txtTitle2="DÉVELOPPEMENT."
          textAlign="left"
          fontWeight={undefined}
          top={0}
          left={30}
        />
        <View style={[StylesCreationEtDeveloppement.ViewVideo]}>
          <LottieView
            source={require('../../../assets/animations/Animation-credits.json')}
            style={{width: '100%', height: '100%'}}
            autoPlay
            loop
          />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              backgroundColor: 'transparent',
              width: '100%',
              height: '100%',
            }}
            onPress={() => {
              setModalVisible(false);
            }}
            accessibilityLabel="Ferme la fenêtre"
          />
          <View
            style={[StylesCreationEtDeveloppement.CenteredView, {top: 200}]}>
            <ScrollView style={[]}>
              {/* <Icon name="location-dot" size={19} color="#fff" /> */}
              <Text style={[StylesCreationEtDeveloppement.textBlue]}>
                CONSENTEMENT
              </Text>
              <Text style={[StylesCreationEtDeveloppement.textBlue2]}>
                Nous respectons la vie privée de nos utilisateurs. Vos données,
                vos choix.{'\n'}MyBodyDate utilise des cookies et des
                informations non sensibles pour assurer le bon fonctionnement de
                son application, mesurer l&apos;audience et les contenus
                consultés ou personnaliser les contenus affichés.{'\n'}Pour en
                savoir plus sur les cookies, les données utilisées et leur
                traitement vous pouvez consulter{' '}
                <Text style={[StylesCreationEtDeveloppement.textBlueUnder]}>
                  notre politique en matière de cookies et nos engagements en
                  matière de sécurité et de Confidentialité de données
                  personnelles.
                </Text>
                {'\n'}
              </Text>
              <Text style={[StylesCreationEtDeveloppement.textBlack]}>
                Notre site n&apos;accepte que des profils vérifiés au delà de 7
                jours.{'\n'}Sinon votre compte sera suspendu.
              </Text>
              <Text style={[StylesCreationEtDeveloppement.textBlue3]}>
                Nous sommes conforme RGPD, règlement générale à la
                règlementation de la protection des données
              </Text>
            </ScrollView>
          </View>

          <View style={[StylesCreationEtDeveloppement.ViewBtnRow]}>
            <TouchableOpacity
              accessibilityLabel="Refuser"
              onPress={() => {
                setButtonPressed('refuser');
                handleStoreData('user_consent', 'refuser');
                setModalVisible(false);
              }}>
              <Text
                style={[
                  StylesCreationEtDeveloppement.textBtn,
                  {
                    color:
                      buttonPressed === 'refuser' || userConsent === 'refuser'
                        ? '#A70000'
                        : '#0019A7',
                  },
                ]}>
                Refuser
              </Text>
              <Image
                style={[StylesCreationEtDeveloppement.ImgBtn]}
                source={
                  buttonPressed === 'refuser' || userConsent === 'refuser'
                    ? require('../../../assets/boutons/Bouton-Trans-Court-Rouge.png')
                    : require('../../../assets/boutons/Bouton-Trans-Court.png')
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              accessibilityLabel="Accepter"
              onPress={() => {
                navigation.navigate('LoveCoach');
                setButtonPressed('accepter');
                handleStoreData('user_consent', 'accepter');
                setModalVisible(false);
              }}>
              <Text style={[StylesCreationEtDeveloppement.textBtn2]}>
                Accepter
              </Text>
              <Image
                style={[StylesCreationEtDeveloppement.ImgBtn2]}
                source={
                  buttonPressed === 'accepter' || userConsent === 'accepter'
                    ? require('../../../assets/boutons/Bouton-Rouge-Court.png')
                    : require('../../../assets/boutons/Bouton-Bleu-Court.png')
                }
              />
            </TouchableOpacity>
          </View>
        </Modal>
        <View style={[StylesCreationEtDeveloppement.Row]}>
          <TouchableOpacity
            style={[{}]}
            onPress={() => {
              setModalVisible(true);
              setButtonPressed('passer');
            }}
            accessibilityLabel="Passer">
            <Image
              style={[StylesCreationEtDeveloppement.ImgBtn3]}
              source={
                buttonPressed === 'passer' || userConsent === 'passer'
                  ? require('../../../assets/boutons/Passer-Rouge.png')
                  : require('../../../assets/boutons/Passer.png')
              }
            />
            <Text style={[StylesCreationEtDeveloppement.textBtn3]}>Passer</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
