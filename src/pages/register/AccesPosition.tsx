import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Modal,
  PermissionsAndroid,
  Permission,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import {
  PERMISSIONS,
  checkMultiple,
  request,
  RESULTS,
} from 'react-native-permissions';
import StylesAccesPosition from '../../../assets/style/styleScreens/styleRegister/StyleAccesPosition';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import { TitreDeuxLignes } from '../../components/TitreDeuxLignes';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Acces_Position'>;
};

export const AccesPosition: React.FC<HomeProps> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [buttonPressed, setButtonPressed] = useState<string>();
  const [buttonPerm, setButtonPerm] = useState<string>('Exact');

  // La constante checkMultiplePermissions vérifie que tous les accès à la localisation soient garantis ou non
  const checkMultiplePermissions = () => {
    checkMultiple([
      PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
      PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
    ]).then(statuses => {
      console.log(statuses);
      if (
        statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] ===
          RESULTS.GRANTED ||
        statuses[PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION] ===
          RESULTS.GRANTED ||
        statuses[PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION] === RESULTS.GRANTED
      ) {
        console.log('Vous pouvez utiliser la géolocalisation');
      } else {
        console.log('Accès refusé à la géolocalisation');
      }
    });
  };

  // La constante requestLocationPermission permet de récupérer le choix de l'utilisateur au travers de react-native-permissions
  const validPermission: Permission =
    'com.android.voicemail.permission.ADD_VOICEMAIL';

  const requestLocationPermission = async () => {
    const permissionStatus = await request(validPermission);
    console.log('Permission Localisation:', permissionStatus);
    setModalVisible(false);
    if (permissionStatus === RESULTS.GRANTED) {
      console.log('Vous pouvez utiliser la géolocalisation Location');
    } else {
      console.log('Accès refusé à la géolocalisation Location');
    }
  };

  // La constante requestLocationFinePermission permet de récupérer le choix de l'utilisateur au travers de PermissionAndroid qui est natif pour l'accès ACCESS_FINE_LOCATION dans mybodydateapp\android\app\src\main\AndroidManifest.xml
  const requestLocationFinePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'MyBodyDate',
          message:
            'Autoriser MY BODY DATE à accéder à la position de cet appareil ?',
          buttonNeutral: 'Demander plus tard',
          buttonNegative: 'Annuler',
          buttonPositive: 'Autoriser',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setModalVisible(false);
        console.log('Vous pouvez utiliser la position exacte');
        navigation.navigate('Genre');
      } else {
        setModalVisible(false);
        navigation.navigate('Genre');
        console.log('Accès refusé à la géolocalisation');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // La constante requestLocationCoarsePermission permet de récupérer le choix de l'utilisateur au travers de PermissionAndroid qui est natif pour l'accès ACCESS_FINE_LOCATION dans mybodydateapp\android\app\src\main\AndroidManifest.xml
  const requestLocationCoarsePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'MyBodyDate',
          message:
            'Autoriser MY BODY DATE à accéder à la position de cet appareil ?',
          buttonNeutral: 'Demander plus tard',
          buttonNegative: 'Annuler',
          buttonPositive: 'Autoriser',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setModalVisible(false);
        console.log('Vous pouvez utiliser la position approximative');
        navigation.navigate('Genre');
      } else {
        setModalVisible(false);
        navigation.navigate('Genre');
        console.log('Accès refusé à la géolocalisation');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    checkMultiplePermissions();
  }, []);

  return (
    <View style={StylesAccesPosition.container}>
      <ImageBackground
        style={StylesAccesPosition.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <TitreDeuxLignes
          txtTitle="AUTORISEZ L'ACCÈS À"
          txtTitle2="VOTRE POSITION"
          textAlign="left"
          fontWeight={undefined}
          top={160}
          left={30}
        />
        <View style={[StylesAccesPosition.ViewImg]}>
          <View style={[StylesAccesPosition.BlockImg]}>
            <Image
              style={StylesAccesPosition.ImgBulle}
              source={require('../../../assets/images/emplacement.png')}
            />
          </View>
          <Text style={[StylesAccesPosition.Description]}>
            Pour retrouver les personnes que vous croisez, nous avons besoin de
            savoir où vous êtes .
          </Text>
          <Text style={[StylesAccesPosition.Description2]}>
            Choisissez “ Lorsque vous utilisez l&apos;application” pour ne rater
            aucune rencontre.
          </Text>
        </View>

        <View style={[{bottom: 60}]}>
          <TouchableOpacity
            style={{}}
            onPress={() => {
              setModalVisible(true);
              setButtonPressed('Go');
            }}>
            <Text style={[Styles.textBtn, {zIndex: 1, top: 40}]}>
              C&apos;est parti
            </Text>
            <Image
              style={[StylesAccesPosition.ImgBtn]}
              source={
                buttonPressed === 'Go'
                  ? require('../../../assets/boutons/Bouton-Rouge.png')
                  : require('../../../assets/boutons/Bouton-Noir.png')
              }
            />
          </TouchableOpacity>
        </View>

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              requestLocationPermission;
              setModalVisible(!modalVisible);
            }}>
            <View style={[StylesAccesPosition.centeredView, {top: 200}]}>
              <Image
                style={[StylesAccesPosition.IcoPosition]}
                source={require('../../../assets/boutons/ico-position.png')}
              />
              <Text style={[StylesAccesPosition.textBlack2]}>
                Autoriser MY BODY DATE à accéder à la position de cet appareil ?
              </Text>
              <View style={[StylesAccesPosition.RowModal]}>
                <TouchableOpacity
                  onPress={() => {
                    requestLocationFinePermission();
                    setButtonPerm('Exact');
                  }}>
                  <Image
                    source={require('../../../assets/images/position-exacte.png')}
                    style={[
                      StylesAccesPosition.IcoPermission,
                      {
                        borderWidth: buttonPerm === 'Exact' ? 2 : 0,
                      },
                    ]}
                  />
                  <Text
                    style={[
                      StylesAccesPosition.textBlackBold,
                      {
                        top: 10,
                        fontWeight: buttonPerm === 'Exact' ? '700' : '500',
                      },
                    ]}>
                    Exacte
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    requestLocationCoarsePermission();
                    setButtonPerm('Approximative');
                  }}>
                  <Image
                    source={require('../../../assets/images/position-approximative.png')}
                    style={[
                      StylesAccesPosition.IcoPermission,
                      {
                        borderWidth: buttonPerm === 'Approximative' ? 2 : 0,
                      },
                    ]}
                  />
                  <Text
                    style={[
                      StylesAccesPosition.textBlackBold2,
                      {
                        fontWeight:
                          buttonPerm === 'Approximative' ? '700' : '500',
                      },
                    ]}>
                    Approximative
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{top: 50}}>
                <TouchableOpacity
                  onPress={() => requestLocationFinePermission()}>
                  <Text style={[StylesAccesPosition.textBlack, {bottom: 100}]}>
                    Lorsque vous utilisez l&apos;application
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => requestLocationFinePermission()}>
                  <Text
                    style={[StylesAccesPosition.textBlackBold, {bottom: 80}]}>
                    Uniquement cette fois-ci
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate('Genre');
                  }}>
                  <Text
                    style={[StylesAccesPosition.textBlackBold, {bottom: 60}]}>
                    Ne pas autoriser
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </ImageBackground>
    </View>
  );
};
