import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Styles from '../../../assets/style/Styles';
import {getData} from '../../services/storage';
import StylesRecherche1 from '../../../assets/style/styleScreens/styleRegister/StyleRecherche1';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
import {BtnNext} from '../../components/boutons/BtnNext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Recherche1'>;
};

export const Recherche1: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    handleGetData();
  }, []);
  const handleGetData = async () => {
    try {
      const userRecherche1 = await getData('recherche1');
      setState(userRecherche1 || '');
      // console.log('Recherche 1 : ' + userRecherche1);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const [recherche1, setState] = useState<string>();

  const handleRecherche1 = (value: string) => {
    setState(value);
  };

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <TitreUneLigne
          txtTitle="VOTRE RECHERCHE ?"
          textAlign="center"
          top={180}
          left={undefined}
          fontFamily={undefined}
          color={undefined}
          fontWeight={undefined}
          fontSize={24}
        />
        <View style={[StylesRecherche1.ViewBTNSelect]}>
          <TouchableOpacity
            style={[StylesRecherche1.btnSelect]}
            onPress={() => handleRecherche1('Homme')}
            accessibilityLabel="Homme">
            <Text
              style={[
                StylesRecherche1.txtBtnSelect,
                {
                  color: recherche1 === 'Homme' ? '#0019A7' : '#FFF',
                  fontFamily:
                    recherche1 === 'Homme' ? 'Comfortaa-Bold' : 'Comfortaa',
                },
              ]}>
              Homme
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRecherche1.btnSelect]}
            onPress={() => handleRecherche1('Femme')}
            accessibilityLabel="Femme">
            <Text
              style={[
                StylesRecherche1.txtBtnSelect,
                {
                  color: recherche1 === 'Femme' ? '#0019A7' : '#FFF',
                  fontFamily:
                    recherche1 === 'Femme' ? 'Comfortaa-Bold' : 'Comfortaa',
                },
              ]}>
              Femme
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRecherche1.btnSelect]}
            onPress={() => handleRecherche1('Tout le monde')}
            accessibilityLabel="Tout le monde">
            <Text
              style={[
                StylesRecherche1.txtBtnSelect,
                {
                  color: recherche1 === 'Tout le monde' ? '#0019A7' : '#FFF',
                  fontFamily:
                    recherche1 === 'Tout le monde'
                      ? 'Comfortaa-Bold'
                      : 'Comfortaa',
                },
              ]}>
              Tout le monde
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={[StylesRecherche1.textWhite]}>Choix unique.</Text>
        <BtnNext
          navigation={navigation}
          navigateTo="Recherche2"
          propName="RegisterRoute"
          propRoute="Recherche2"
          txt="Continuer"
          handleStore={{key: 'recherche1', value: recherche1 ?? ''}}
          postInfo={undefined}
          color="#0019A7"
          background="White"
          top={280}
          left={0}
          fontSize={18}
          fontFamily={undefined}
          fontWeight="700"
        />
      </ImageBackground>
    </View>
  );
};
