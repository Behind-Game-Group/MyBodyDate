import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  PERMISSIONS,
  check,
  requestMultiple,
  RESULTS,
} from 'react-native-permissions';
// import {
//   getMethod,
//   postMethod,
//   postImageMethod,
// } from '../../services/axiosInstance';
import {storeData, getData} from '../../services/storage';
import {
  launchImageLibrary,
  launchCamera,
  CameraOptions,
  ImageLibraryOptions,
} from 'react-native-image-picker';
import StylesAjoutPhoto from '../../../assets/style/styleScreens/styleRegister/StyleAjoutPhoto';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
import {useAvatarContext} from '../../context/AvatarContext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Ajouter_photo'>;
};

export const AjoutPhoto: React.FC<HomeProps> = ({navigation}) => {
  const [buttonPressed, setButtonPressed] = useState<string>('');

  const [cameraStatus, setCameraStatus] = useState<boolean>(false);

  const {avatar, setAvatar} = useAvatarContext();

  const [modalRecaptchaVisible, setModalPreventImageaVisible] =
    useState<boolean>(false);

  // console.log('userAvatar : ' + avatar);

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
            requestPermission();
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            requestPermission();
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

  const requestPermission = async () => {
    try {
      const cameraPermission = PERMISSIONS.ANDROID.CAMERA;

      const permissions = [cameraPermission];

      const result = await requestMultiple(permissions);

      console.log('Résultat des demandes de permission :', result);

      console.log('Camera', result[cameraPermission]);

      if (result[cameraPermission] === RESULTS.GRANTED) {
        console.log('Autorisations accordées.');
        setCameraStatus(true);
      } else {
        console.log('Autorisations refusées.');
      }
    } catch (err) {
      console.error('Erreur lors de la demande de permissions : ', err);
    }
  };

  const ImagePicker = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log("L'utilisateur a annulé la sélection de l'image.");
      } else if (response.errorCode) {
        console.log('Erreur : ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        if (uri) {
          setAvatar(uri);
          handleStoreData('avatar', uri);
          console.log(uri);
        }
      }
    });
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
            setAvatar(uri);
            handleStoreData('avatar', uri);
            console.log(uri);
          }
        }
      });
    } else {
      requestPermission();
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
      const avatar = await getData('avatar');
      setAvatar(avatar);
      // console.log(avatar);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  useEffect(() => {
    checkPermissions();
    handleGetData();
  }, []);

  let sourcePath;
  if (!avatar) {
    sourcePath = require('../../../assets/images/image.png');
  } else {
    sourcePath = {uri: avatar};
    console.log(sourcePath);
  }

  return (
    <View style={StylesAjoutPhoto.container}>
      <ImageBackground
        style={StylesAjoutPhoto.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[StylesAjoutPhoto.ViewText]}>
          <TitreUneLigne
            txtTitle="AJOUTEZ UNE PHOTO"
            textAlign="center"
            top={0}
            left={undefined}
            fontFamily={undefined}
            color={undefined}
            fontWeight={undefined}
            fontSize={24}
          />
          <Text style={[StylesAjoutPhoto.TxtTitle2]}>
            Affichez votre lifestyle.(6 photos publiques)
          </Text>
          <Image style={[StylesAjoutPhoto.imgPhoto]} source={sourcePath} />
          <View style={[StylesAjoutPhoto.viewBtn]}>
            <TouchableOpacity
              style={[StylesAjoutPhoto.btn]}
              accessibilityLabel="Importer une image"
              onPress={() => {
                setButtonPressed('Import');
                ImagePicker();
              }}>
              <Image
                style={[StylesAjoutPhoto.imgBtn]}
                source={
                  buttonPressed === 'Import'
                    ? require('../../../assets/boutons/Bouton-Rouge-Image.png')
                    : require('../../../assets/boutons/Bouton-Noir-Image.png')
                }
              />
              <Text style={[StylesAjoutPhoto.textBtn]}>Importer une image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[StylesAjoutPhoto.btn]}
              accessibilityLabel="Prendre une photo"
              onPress={() => {
                setButtonPressed('Photo');
                openCamera();
              }}>
              <Image
                style={[StylesAjoutPhoto.imgBtn]}
                source={
                  buttonPressed === 'Photo'
                    ? require('../../../assets/boutons/Bouton-Rouge-Photo.png')
                    : require('../../../assets/boutons/Bouton-Noir-Photo.png')
                }
              />
              <Text style={[StylesAjoutPhoto.textBtn]}>Prendre une photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[StylesAjoutPhoto.btn]}
              accessibilityLabel="Meta - Facebook"
              onPress={() => {
                setButtonPressed('Meta');
              }}>
              <Image
                style={[StylesAjoutPhoto.imgBtn]}
                source={
                  buttonPressed === 'Meta'
                    ? require('../../../assets/boutons/Bouton-Rouge-Meta.png')
                    : require('../../../assets/boutons/Bouton-Noir-Meta.png')
                }
              />
              <Text style={[StylesAjoutPhoto.textBtn]}>Meta (Facebook)</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[StylesAjoutPhoto.btn2]}
            onPress={() => navigation.navigate('Empreinte_vocal')}
            accessibilityLabel="Enregistrer plus tard">
            <Text style={[StylesAjoutPhoto.textBtnBlue]}>
              Enregistrer plus tard
            </Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalRecaptchaVisible}
            onRequestClose={() => {
              setModalPreventImageaVisible(!modalRecaptchaVisible);
            }}>
            <View style={[StylesAjoutPhoto.centeredView]}>
              <Image
                style={[StylesAjoutPhoto.icoCadenas]}
                source={require('../../../assets/images/cadenas.png')}
              />
              <Text style={[StylesAjoutPhoto.textBlueCenter]}>
                À MONTRER{'\n'}SOUS RÉSERVE !
              </Text>
              <View style={[StylesAjoutPhoto.rowImg]}>
                <Image
                  style={[StylesAjoutPhoto.imgBlur]}
                  blurRadius={10}
                  source={require('../../../assets/images/x-femme.png')}
                />
                <Image
                  style={[StylesAjoutPhoto.imgBlur]}
                  blurRadius={10}
                  source={require('../../../assets/images/x-homme.png')}
                />
                <Image
                  style={[StylesAjoutPhoto.imgNblur]}
                  source={require('../../../assets/images/julia.jpg')}
                />
              </View>
              <Text style={[StylesAjoutPhoto.textBlueCenter2]}>
                Les profils dénudés ou les visages{'\n'}masqués peu
                reconnaissables ne{'\n'}sont pas autorisés sur votre profil
                {'\n'}public. Vous pouvez ajouter ces{'\n'}à votre dossier dédié
                et{'\n'}confidentiel plus tard.
              </Text>
              <TouchableOpacity
                style={[StylesAjoutPhoto.btn]}
                onPress={() => {
                  setButtonPressed('Next');
                  setModalPreventImageaVisible(false);
                  navigation.navigate('Empreinte_vocal');
                }}
                accessibilityLabel="Continuer">
                <Image
                  style={[StylesAjoutPhoto.imgBtn]}
                  source={
                    buttonPressed === 'Next'
                      ? require('../../../assets/boutons/Bouton-Rouge.png')
                      : require('../../../assets/boutons/Bouton-Bleu.png')
                  }
                />
                <Text style={[StylesAjoutPhoto.textBtn2]}>Continuer</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <TouchableOpacity
            style={StylesAjoutPhoto.btn3}
            onPress={() => {
              setButtonPressed('Continuer');
              setModalPreventImageaVisible(true);
            }}
            accessibilityLabel="Continuer">
            <Text
              style={[
                StylesAjoutPhoto.textBtn1,
                {
                  color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
                },
              ]}>
              Continuer
            </Text>
            <Image
              style={[StylesAjoutPhoto.imgBtn2]}
              source={
                buttonPressed === 'Continuer'
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

export default AjoutPhoto;
