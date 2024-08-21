import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {getData} from '../../services/storage';
import StylesRythmeDeVie1 from '../../../assets/style/styleScreens/styleRegister/StyleRythmeDeVie1';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
import {BtnNext} from '../../components/boutons/BtnNext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Rythme1'>;
};

export const RythmeDeVie1: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    try {
      const userRythme1 = await getData('rythme1');
      setState(userRythme1 || '');
      // console.log('rythme de vie 1 : ' + userRythme1);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

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
          fontFamily={undefined}
          color={undefined}
          fontWeight={undefined}
          fontSize={24}
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
        <BtnNext
          navigation={navigation}
          navigateTo="Rythme2"
          propName="RegisterRoute"
          propRoute="Rythme2"
          txt="Continuer"
          handleStore={{key: 'rythme1', value: rythmeDeVie1 ?? ''}}
          postInfo={undefined}
          color="#0019A7"
          background="White"
          top={340}
          left={0}
          fontSize={18}
          fontFamily={undefined}
          fontWeight="700"
        />
      </ImageBackground>
    </View>
  );
};
