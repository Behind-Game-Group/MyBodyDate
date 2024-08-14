import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {storeData, getData} from '../../services/storage';
import StylesRythmeDeVie1 from '../../../assets/style/styleScreens/styleRegister/StyleRythmeDeVie1';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/TitreUneLigne';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Rythme1'>;
};

export const RythmeDeVie1: React.FC<HomeProps> = ({navigation}) => {
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
      const userRythme1 = await getData('rythme1');
      setState(userRythme1 || '');
      // console.log('rythme de vie 1 : ' + userRythme1);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const [buttonPressed, setButtonPressed] = useState<boolean>();

  // Constante permettant de récupérer la valeur du bouton sélectionner par l'utilisateur
  const [rythmeDeVie1, setState] = useState<string>();

  // console.log('Rythme de Vie 1 : ' + rythmeDeVie1.state);

  return (
    <View style={StylesRythmeDeVie1.container}>
      <ImageBackground
        style={StylesRythmeDeVie1.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <TitreUneLigne
          txtTitle="VOTRE RYTHME DE VIE ?"
          textAlign="center"
          top={140}
          left={undefined}
          fontFamily={2}
        />
        <View style={[StylesRythmeDeVie1.ViewBTNSelect]}>
          <Text style={[StylesRythmeDeVie1.textWhite]}>Vous êtes plutôt ?</Text>
          <TouchableOpacity
            style={[StylesRythmeDeVie1.btnSelect]}
            onPress={() => setState('Matinale')}
            accessibilityLabel="Matinale">
            <Text
              style={[
                StylesRythmeDeVie1.txtBtnSelect,
                {
                  color: rythmeDeVie1 === 'Matinale' ? '#0019A7' : '#FFF',
                  fontFamily:
                    rythmeDeVie1 === 'Matinale'
                      ? 'Comfortaa-Bold'
                      : 'Comfortaa',
                },
              ]}>
              Matinale
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRythmeDeVie1.btnSelect]}
            onPress={() => setState('Couche tard')}
            accessibilityLabel="Couche tard">
            <Text
              style={[
                StylesRythmeDeVie1.txtBtnSelect,
                {
                  color: rythmeDeVie1 === 'Couche tard' ? '#0019A7' : '#FFF',
                  fontFamily:
                    rythmeDeVie1 === 'Couche tard'
                      ? 'Comfortaa-Bold'
                      : 'Comfortaa',
                },
              ]}>
              Couche tard
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={[StylesRythmeDeVie1.textWhite1]}>Choix unique.</Text>
        <TouchableOpacity
          style={StylesRythmeDeVie1.ViewBtn}
          onPress={() => {
            navigation.navigate('Rythme2');
            handleStoreData('rythme1', rythmeDeVie1 ?? '');
            setButtonPressed(true);
          }}
          accessibilityLabel="Continuer">
          <Text
            style={[
              StylesRythmeDeVie1.TxtBtn,
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Continuer
          </Text>
          <Image
            style={[StylesRythmeDeVie1.imgBtn]}
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
