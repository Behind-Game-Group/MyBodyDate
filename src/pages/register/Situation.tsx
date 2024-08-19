import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import StylesSituation from '../../../assets/style/styleScreens/styleRegister/StyleSituation';
import {getData} from '../../services/storage';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreDeuxLignes} from '../../components/titre/TitreDeuxLignes';
import {BtnNext} from '../../components/boutons/BtnNext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'S_inscrire_par_numero'>;
};

export const Situation: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    try {
      const userSituation = await getData('situation');
      setSituation(userSituation || '');
      // console.log('langue : ' + langue);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  // Constante permettant de récupérer la valeur du bouton sélectionner par l'utilisateur
  const [situation, setSituation] = useState<string>();

  // console.log('Situation : ' + situation);

  return (
    <View style={StylesSituation.container}>
      <ImageBackground
        style={StylesSituation.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        {/* <Text style={[StylesSituation.TxtTitle]}>VOTRE SITUATION</Text>
        <Text style={[StylesSituation.TxtTitle]}>ACTUELLE ?</Text> */}
        <TitreDeuxLignes
          txtTitle="VOTRE SITUATION"
          txtTitle2="ACTUELLE ?"
          textAlign="center"
          top={160}
          left={undefined}
          fontFamily={undefined}
          color={undefined}
          fontWeight={undefined}
          fontSize={24}
        />

        <View style={[StylesSituation.ViewBTNSelect]}>
          <TouchableOpacity
            style={[StylesSituation.btnSelect]}
            onPress={() => setSituation('Célibataire')}
            accessibilityLabel="Célibataire">
            <Text
              style={[
                StylesSituation.txtBtnSelect,
                {
                  color: situation === 'Célibataire' ? '#0019A7' : '#fff',
                  fontFamily:
                    situation === 'Célibataire'
                      ? 'Comfortaa-Bold'
                      : 'Comfortaa',
                  fontWeight: situation === 'Célibataire' ? '700' : '500',
                },
              ]}>
              Célibataire
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesSituation.btnSelect]}
            onPress={() => setSituation('Séparé.e')}
            accessibilityLabel="Séparé(e)">
            <Text
              style={[
                StylesSituation.txtBtnSelect,
                {
                  color: situation === 'Séparé.e' ? '#0019A7' : '#fff',
                  fontFamily:
                    situation === 'Séparé.e' ? 'Comfortaa-Bold' : 'Comfortaa',
                  fontWeight: situation === 'Séparé.e' ? '700' : '500',
                },
              ]}>
              Séparé.e
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesSituation.btnSelect]}
            onPress={() => setSituation('Divorcé.e')}
            accessibilityLabel="Divorcé.e">
            <Text
              style={[
                StylesSituation.txtBtnSelect,
                {
                  color: situation === 'Divorcé.e' ? '#0019A7' : '#fff',
                  fontFamily:
                    situation === 'Divorcé.e' ? 'Comfortaa-Bold' : 'Comfortaa',
                  fontWeight: situation === 'Divorcé.e' ? '700' : '500',
                },
              ]}>
              Divorcé.e
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesSituation.btnSelect]}
            onPress={() => setSituation('Veuf')}
            accessibilityLabel="Veuf">
            <Text
              style={[
                StylesSituation.txtBtnSelect,
                {
                  color: situation === 'Veuf' ? '#0019A7' : '#fff',
                  fontFamily:
                    situation === 'Veuf' ? 'Comfortaa-Bold' : 'Comfortaa',
                  fontWeight: situation === 'Veuf' ? '700' : '500',
                },
              ]}>
              Veuf
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesSituation.btnSelect]}
            onPress={() => setSituation("C'est compliqué")}
            accessibilityLabel="C\'est compliqué">
            <Text
              style={[
                StylesSituation.txtBtnSelect,
                {
                  color: situation === "C'est compliqué" ? '#0019A7' : '#fff',
                  fontFamily:
                    situation === "C'est compliqué"
                      ? 'Comfortaa-Bold'
                      : 'Comfortaa',
                  fontWeight: situation === "C'est compliqué" ? '700' : '500',
                },
              ]}>
              C'est compliqué
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={[StylesSituation.textWhite]}>Choix unique.</Text>
        <BtnNext
          navigation={navigation}
          navigateTo="Orientation"
          propName="RegisterRoute"
          propRoute="Orientation"
          txt="Continuer"
          handleStore={{key: 'situation', value: situation ?? ''}}
          postInfo={undefined}
          background="White"
          top={100}
          left={0}
        />
      </ImageBackground>
    </View>
  );
};
