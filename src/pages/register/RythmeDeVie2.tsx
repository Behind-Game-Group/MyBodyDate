import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {getData} from '../../services/storage';
import StylesRythmeDeVie2 from '../../../assets/style/styleScreens/styleRegister/StyleRythmeDeVie2';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
import {BtnNext} from '../../components/boutons/BtnNext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Rythme2'>;
};

export const RythmeDeVie2: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    try {
      const userRythme1 = await getData('rythme2');
      setSelectedRythme2(userRythme1 || '');
      // console.log('rythme de vie 2 : ' + userRythme2);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  // Constante permettant de récupérer les boutons sélectionnés par l'utilisateur
  const [selectedRythme2, setSelectedRythme2] = useState<string[]>([]);

  const handleButtonPress = (value: string) => {
    // Copie le tableau des boutons sélectionnés
    let newSelectedRythme2 = [...selectedRythme2];

    if (newSelectedRythme2.includes(value)) {
      // Si la valeur est déjà dans le tableau, la retire
      newSelectedRythme2 = newSelectedRythme2.filter(item => item !== value);
    } else {
      // Ajoute la valeur au tableau
      newSelectedRythme2.push(value);
    }

    // Met à jour le tableau des boutons sélectionnés
    setSelectedRythme2(newSelectedRythme2);
    console.log('Rythme de vies 2 : ' + newSelectedRythme2);
  };
  console.log(selectedRythme2);

  return (
    <View style={StylesRythmeDeVie2.container}>
      <ImageBackground
        style={StylesRythmeDeVie2.bgGradient}
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
        <View style={[StylesRythmeDeVie2.ViewBTNSelect]}>
          <TouchableOpacity
            style={[StylesRythmeDeVie2.btnSelect]}
            onPress={() => handleButtonPress('Petit déjeuner')}
            accessibilityLabel="Petit déjeuner">
            <Text
              style={[
                StylesRythmeDeVie2.txtBtnSelect,
                {
                  color: selectedRythme2.includes('Petit déjeuner')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRythme2.includes('Petit déjeuner')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Petit déjeuner
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRythmeDeVie2.btnSelect]}
            onPress={() => handleButtonPress('Brunch')}
            accessibilityLabel="Brunch">
            <Text
              style={[
                StylesRythmeDeVie2.txtBtnSelect,
                {
                  color: selectedRythme2.includes('Brunch')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRythme2.includes('Brunch')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Brunch
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRythmeDeVie2.btnSelect]}
            onPress={() => handleButtonPress('Déjeuner')}
            accessibilityLabel="Déjeuner">
            <Text
              style={[
                StylesRythmeDeVie2.txtBtnSelect,
                {
                  color: selectedRythme2.includes('Déjeuner')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRythme2.includes('Déjeuner')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Déjeuner
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRythmeDeVie2.btnSelect]}
            onPress={() => handleButtonPress('Afterwork')}
            accessibilityLabel="Afterwork">
            <Text
              style={[
                StylesRythmeDeVie2.txtBtnSelect,
                {
                  color: selectedRythme2.includes('Afterwork')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRythme2.includes('Afterwork')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Afterwork
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRythmeDeVie2.btnSelect]}
            onPress={() => handleButtonPress('Diner')}
            accessibilityLabel="Diner">
            <Text
              style={[
                StylesRythmeDeVie2.txtBtnSelect,
                {
                  color: selectedRythme2.includes('Diner') ? '#0019A7' : '#FFF',
                  fontFamily: selectedRythme2.includes('Diner')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Diner
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={[StylesRythmeDeVie2.textWhite]}>Choix multiple.</Text>
        <BtnNext
          navigation={navigation}
          navigateTo="Prenom"
          propName="RegisterRoute"
          propRoute="Prenom"
          txt="Continuer"
          handleStore={{key: 'rythme2', value: selectedRythme2 ?? ''}}
          postInfo={undefined}
          color="#0019A7"
          background="White"
          top={140}
          left={0}
          fontSize={18}
          fontFamily={undefined}
          fontWeight="700"
        />
      </ImageBackground>
    </View>
  );
};
