import React, {useState, useEffect} from 'react';
import {storeData, getData} from '../../services/storage';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import StylesOrientation from '../../../assets/style/styleScreens/styleRegister/StyleOrientation';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/TitreUneLigne';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Orientation'>;
};

export const Orientation: React.FC<HomeProps> = ({navigation}) => {
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
      const userOrientation = await getData('orientation');
      setOrientation(userOrientation || '');
      // console.log('Orienatation : ' + userOrientation);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  // Constante permettant de récupérer la valeur du bouton sélectionner par l'utilisateur
  const [orientation, setOrientation] = useState<string>();

  const [buttonPressed, setButtonPressed] = useState<boolean>();

  console.log('Orientation : ' + orientation);

  return (
    <View style={StylesOrientation.container}>
      <ImageBackground
        style={StylesOrientation.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <TitreUneLigne
          txtTitle="VOTRE ORIENATION ?"
          textAlign="center"
          top={180}
          left={undefined}
          fontFamily={2}
        />
        <View style={[StylesOrientation.ViewBTNSelect]}>
          <TouchableOpacity
            style={[StylesOrientation.btnSelect]}
            onPress={() => setOrientation('HétérosexeLle')}
            accessibilityLabel="HétérosexeLle">
            <Text
              style={[
                StylesOrientation.txtBtnSelect,
                {
                  color: orientation === 'HétérosexeLle' ? '#0019A7' : '#fff',
                  fontFamily:
                    orientation === 'HétérosexeLle'
                      ? 'Comfortaa-Bold'
                      : 'Comfortaa',
                  fontWeight: orientation === 'HétérosexeLle' ? '700' : '500',
                },
              ]}>
              HétérosexeLle
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesOrientation.btnSelect]}
            onPress={() => setOrientation('HomosexueLle')}
            accessibilityLabel="HomosexueLle">
            <Text
              style={[
                StylesOrientation.txtBtnSelect,
                {
                  color: orientation === 'HomosexueLle' ? '#0019A7' : '#fff',
                  fontFamily:
                    orientation === 'HomosexueLle'
                      ? 'Comfortaa-Bold'
                      : 'Comfortaa',
                  fontWeight: orientation === 'HomosexueLle' ? '700' : '500',
                },
              ]}>
              HomosexueLle
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesOrientation.btnSelect]}
            onPress={() => setOrientation('BisexueLle')}
            accessibilityLabel="BisexueLle">
            <Text
              style={[
                StylesOrientation.txtBtnSelect,
                {
                  color: orientation === 'BisexueLle' ? '#0019A7' : '#fff',
                  fontFamily:
                    orientation === 'BisexueLle'
                      ? 'Comfortaa-Bold'
                      : 'Comfortaa',
                  fontWeight: orientation === 'BisexueLle' ? '700' : '500',
                },
              ]}>
              BisexueLle
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={[StylesOrientation.textWhite]}>Choix unique.</Text>
        <TouchableOpacity
          style={StylesOrientation.ViewBtn}
          onPress={() => {
            navigation.navigate('Recherche1');
            handleStoreData('orientation', orientation ?? '');
            setButtonPressed(true);
          }}
          accessibilityLabel="Continuer">
          <Text
            style={[
              StylesOrientation.TxtBtn,
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Continuer
          </Text>
          <Image
            style={[StylesOrientation.imgBtn]}
            source={
              buttonPressed
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc.png')
            }
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
