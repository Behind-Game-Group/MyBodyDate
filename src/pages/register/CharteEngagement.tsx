import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {PERMISSIONS, check, RESULTS} from 'react-native-permissions';
import {storeData, getData} from '../../services/storage';
import {CameraOptions, launchCamera} from 'react-native-image-picker';
import StylesCharteEngagement from '../../../assets/style/styleScreens/styleRegister/StyleCharteEngagement';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
import {TitreDeuxLignes} from '../../components/titre/TitreDeuxLignes';
import { BtnNext } from '../../components/boutons/BtnNext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Charte_engagement'>;
};

export const CharteEngagement: React.FC<HomeProps> = ({navigation}) => {
  const [buttonPressed, setButtonPressed] = useState<string>('');

  const [modalCharteVisible, setModalCharteVisible] = useState<boolean>(true);

  const [cameraStatus, setCameraStatus] = useState<boolean>(false);

  const [imagePath, setImagePath] = useState<string | boolean>(false);

  // console.log(imagePath);

  // console.log('imageVerif =', imageVerif);

  const checkPermissions = () => {
    check(PERMISSIONS.ANDROID.CAMERA)
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'MyBodyDate',
          message:
            'Autoriser MY BODY DATE à accéder à la caméra de cet appareil ?',
          buttonNeutral: 'Demander plus tard',
          buttonNegative: 'Annuler',
          buttonPositive: 'Autoriser',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Accès autorisé à la caméra');
        setCameraStatus(true);
      } else {
        console.log('Accès refusé à la caméra');
        setCameraStatus(false);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openCamera = () => {
    if (cameraStatus) {
      const options: CameraOptions = {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
      };

      launchCamera(options, response => {
        if (response.didCancel) {
          console.log("L'utilisateur a annulé la capture.");
        } else if (response.errorCode) {
          console.log('Erreur : ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const uri = response.assets[0].uri;
          if (uri) {
            setImagePath(uri);
            handleStoreData('image_verif', uri);
            setTimeout(() => {
              setModalCharteVisible(false);
            }, 2000);
          }
        }
      });
    } else {
      requestCameraPermission();
    }
  };

  const handleStoreData = async (key: string, value: string) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetData = async () => {
    try {
      const imageVerif = await getData('image_verif');
      setImagePath(imageVerif);
      // console.log(imageVerif);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  useEffect(() => {
    checkPermissions();
    handleGetData();
  }, []);

  let imageVerified;
  if (!imagePath) {
    imageVerified = require('../../../assets/images/Kolia-Verif.png');
  } else {
    imageVerified = {
      uri: imagePath,
    };
    // console.log(imageVerified);
  }

  return (
    <ImageBackground
      style={[StylesCharteEngagement.bgGradient]}
      source={require('../../../assets/images/Background.png')}>
      <TitreDeuxLignes
        txtTitle="CHARTE"
        txtTitle2="D'ENGAGEMENT"
        fontFamily={undefined}
        color={undefined}
        textAlign="center"
        fontWeight={undefined}
        fontSize={24}
        top={100}
        left={undefined}
      />
      <View style={[StylesCharteEngagement.ViewCharte]}>
        <ScrollView
          style={[StylesCharteEngagement.ScrollViewCharte]}
          contentContainerStyle={{paddingBottom: 10}}>
          <Text style={[StylesCharteEngagement.textWhite]}>
            <Text style={[StylesCharteEngagement.subTextWhite]}>
              Respect mutuel{'\n'}
            </Text>
            {'\n'}
            C&apos;est la base d&apos;une vraie histoire alors privilégiez les
            échanges respectueux dès le début.
          </Text>
          <Text style={[StylesCharteEngagement.textWhite]}>
            <Text style={[StylesCharteEngagement.subTextWhite]}>
              Soyez sincère{'\n'}
            </Text>
            {'\n'}
            Un profil (photo, âge, infos) qui vous reflète vraiment sera
            toujours plus séduisant.
          </Text>
          <Text style={[StylesCharteEngagement.textWhite]}>
            <Text style={[StylesCharteEngagement.subTextWhite]}>
              Restez prudent{'\n'}
            </Text>
            {'\n'}
            Échangez via les messages, les appels vidéo et audio avant de donner
            vos infos personnelles.
          </Text>
        </ScrollView>
      </View>
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalCharteVisible}
        onRequestClose={() => {
          setModalCharteVisible(!modalCharteVisible);
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            backgroundColor: 'transparent',
            width: '100%',
            height: '100%',
          }}
          onPress={() => {
            setModalCharteVisible(false);
          }}
          accessibilityLabel="Ferme la fenêtre"
        />
        <View style={[StylesCharteEngagement.ViewModal]}>
          <ScrollView
            style={[StylesCharteEngagement.ScrollViewModal]}
            contentContainerStyle={{paddingBottom: 200, paddingTop: 20}}>
            <View style={[StylesCharteEngagement.ViewModal2]}>
              <TitreUneLigne
                txtTitle="VÉRIFICATION"
                textAlign="center"
                top={-100}
                left={undefined}
                fontFamily={undefined}
                color={'#0019A7'}
                fontWeight={'700'}
                fontSize={24}
              />
              <View style={[StylesCharteEngagement.ViewModal3]}>
                <Image
                  style={[StylesCharteEngagement.ImgVerif]}
                  source={imageVerified}
                />
                <Image
                  style={[StylesCharteEngagement.IcoVerif]}
                  blurRadius={0}
                  source={require('../../../assets/images/ico-protection.png')}
                />
              </View>
              <View style={[StylesCharteEngagement.ViewModalCol]}>
                <Text style={[StylesCharteEngagement.textBlueBold]}>
                  Prenez cette pose et faites un selfie
                </Text>
                <Text style={[StylesCharteEngagement.textBlueCenter]}>
                  Nous les comparerons avec les photos de profil pour vérifier
                  votre identité.
                </Text>
              </View>

              <TouchableOpacity
                style={{top: 50}}
                onPress={() => {
                  setButtonPressed('Photo');
                  openCamera();
                }}
                accessibilityLabel="Prendre une photo">
                <Text style={[StylesCharteEngagement.textBtnModal]}>
                  Prendre une photo
                </Text>
                <Image
                  style={[StylesCharteEngagement.imgBtn]}
                  source={
                    buttonPressed === 'Photo'
                      ? require('../../../assets/boutons/Bouton-Rouge-Photo.png')
                      : require('../../../assets/boutons/Bouton-Noir-Photo.png')
                  }
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[StylesCharteEngagement.rowModal]}
                onPress={() => setModalCharteVisible(false)}
                accessibilityLabel="Politique de Confidentialité">
                <Text style={[StylesCharteEngagement.textBlue]}>
                  Politique de Confidentialité
                </Text>
                <Image
                  style={[StylesCharteEngagement.icoArrow]}
                  source={require('../../../assets/images/flèche-B.png')}
                />
              </TouchableOpacity>
              <View style={[StylesCharteEngagement.line]} />
              <TouchableOpacity
                style={[StylesCharteEngagement.rowModal]}
                onPress={() => setModalCharteVisible(false)}
                accessibilityLabel="Comment MyBodyDate utilise vos photos">
                <Text style={[StylesCharteEngagement.textBlue]}>
                  Comment MyBodyDate utilise vos photos
                </Text>
                <Image
                  style={[StylesCharteEngagement.icoArrow]}
                  source={require('../../../assets/images/flèche-B.png')}
                />
              </TouchableOpacity>
              <View style={[StylesCharteEngagement.line]} />
              <TouchableOpacity
                style={[StylesCharteEngagement.rowModal]}
                onPress={() => setModalCharteVisible(false)}
                accessibilityLabel="Retirer votre consentement via notre équipe d'aide">
                <Text style={[StylesCharteEngagement.textBlue]}>
                  Retirer votre consentement via notre équipe d&apos;aide
                </Text>
                <Image
                  style={[StylesCharteEngagement.icoArrow]}
                  source={require('../../../assets/images/ico-info-B.png')}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
      <View style={[{bottom: 100}]}>
        <BtnNext
          navigation={navigation}
          navigateTo="Felicitations"
          propName="RegisterRoute"
          propRoute="Felicitations"
          txt="J'accepte"
          handleStore={{key: 'engagement_consent', value: 'accepté'}}
          postInfo={undefined}
          background="Blue"
          top={0}
          left={0}
        />
      </View>
    </ImageBackground>
  );
};

export default CharteEngagement;
