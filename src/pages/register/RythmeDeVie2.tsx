import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {storeData, getData} from '../../services/storage';
import StylesRythmeDeVie2 from '../../../assets/style/styleScreens/styleRegister/StyleRythmeDeVie2';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/TitreUneLigne';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Rythme2'>;
};

export const RythmeDeVie2: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    handleGetData();
  }, []);

  const handleStoreData = async (key: string, value: string[]) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetData = async () => {
    try {
      const userRythme1 = await getData('rythme2');
      setSelectedRythme2(userRythme1 || '');
      // console.log('rythme de vie 2 : ' + userRythme2);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const [buttonPressed, setButtonPressed] = useState<boolean>();

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
          fontFamily={2}
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
        <TouchableOpacity
          style={StylesRythmeDeVie2.ViewBtn}
          onPress={() => {
            navigation.navigate('Prenom');
            handleStoreData('rythme2', selectedRythme2);
            setButtonPressed(true);
          }}
          accessibilityLabel="Continuer">
          <Text
            style={[
              StylesRythmeDeVie2.TxtBtn,
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Continuer
          </Text>
          <Image
            style={[StylesRythmeDeVie2.imgBtn]}
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
