import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {getData} from '../../services/storage';
import StylesAffinite from '../../../assets/style/styleScreens/styleRegister/StyleAffinite';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
import {BtnNext} from '../../components/boutons/BtnNext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Affinite'>;
};

export const Affinite: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    try {
      const userAffinite = await getData('affinite');
      setSelectedAffinite(userAffinite || '');
      // console.log('Recherche 2 : ' + userRecherche2);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const [selectedAffinite, setSelectedAffinite] = useState<string[]>([]);

  const handleButtonPress = (value: string) => {
    let newSelectedAffinite = [...selectedAffinite];

    if (newSelectedAffinite.includes(value)) {
      newSelectedAffinite = newSelectedAffinite.filter(item => item !== value);
    } else {
      newSelectedAffinite.push(value);
    }

    setSelectedAffinite(newSelectedAffinite);
    console.log('Affinité(s) : ' + newSelectedAffinite);
  };

  return (
    <View style={StylesAffinite.container}>
      <ImageBackground
        style={StylesAffinite.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <TitreUneLigne
          txtTitle="VOS AFFINITÉS ?"
          textAlign="center"
          top={150}
          left={undefined}
          fontFamily={undefined}
          color={undefined}
          fontWeight={undefined}
          fontSize={24}
        />
        <View style={[StylesAffinite.ViewBTNSelect]}>
          <TouchableOpacity
            style={[StylesAffinite.btnSelect]}
            onPress={() => handleButtonPress('Cuisine & Gourmet')}
            accessibilityLabel="Cuisine & Gourmet">
            <Text
              style={[
                StylesAffinite.txtBtnSelect,
                {
                  color: selectedAffinite.includes('Cuisine & Gourmet')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedAffinite.includes('Cuisine & Gourmet')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Cuisine & Gourmet
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesAffinite.btnSelect]}
            onPress={() => handleButtonPress('Globe Trotter')}
            accessibilityLabel="Globe Trotter">
            <Text
              style={[
                StylesAffinite.txtBtnSelect,
                {
                  color: selectedAffinite.includes('Globe Trotter')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedAffinite.includes('Globe Trotter')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Globe Trotter
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesAffinite.btnSelect]}
            onPress={() => handleButtonPress('Fan de Musée & Culture')}
            accessibilityLabel="Fan de Musée & Culture">
            <Text
              style={[
                StylesAffinite.txtBtnSelect,
                {
                  color: selectedAffinite.includes('Fan de Musée & Culture')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedAffinite.includes(
                    'Fan de Musée & Culture',
                  )
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Fan de Musée & Culture
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesAffinite.btnSelect]}
            onPress={() => handleButtonPress('Amis.es des Animaux')}
            accessibilityLabel="Rien de très sérieux">
            <Text
              style={[
                StylesAffinite.txtBtnSelect,
                {
                  color: selectedAffinite.includes('Amis.es des Animaux')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedAffinite.includes('Amis.es des Animaux')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Amis.es des Animaux
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesAffinite.btnSelect]}
            onPress={() => handleButtonPress('Sportif.ve')}
            accessibilityLabel="Sportif.ve">
            <Text
              style={[
                StylesAffinite.txtBtnSelect,
                {
                  color: selectedAffinite.includes('Sportif.ve')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedAffinite.includes('Sportif.ve')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Sportif.ve
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={[StylesAffinite.textWhite]}>Choix multiple.</Text>
        <BtnNext
          navigation={navigation}
          navigateTo="Rythme1"
          propName="RegisterRoute"
          propRoute="Rythme1"
          txt="Continuer"
          handleStore={{key: 'affinite', value: selectedAffinite ?? ''}}
          postInfo={undefined}
          background="White"
          top={180}
          left={0}
        />
      </ImageBackground>
    </View>
  );
};

export default Affinite;
