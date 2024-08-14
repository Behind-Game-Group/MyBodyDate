import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {storeData, getData} from '../../services/storage';
import StylesGenre from '../../../assets/style/styleScreens/styleRegister/StyleGenre';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/TitreUneLigne';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Genre'>;
};

export const Genre: React.FC<HomeProps> = ({navigation}) => {
  const [genre, setState] = useState<string>();
  const [buttonPressed, setButtonPressed] = useState<boolean>();

  // console.log('Genre: ' + genre);

  useEffect(() => {
    handleGetData();
  }, []);

  const handleStoreData = async (key: string, value: string) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.log('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetData = async () => {
    try {
      const userGenre = await getData('genre');
      setState(userGenre || '');
      // console.log(consent);
    } catch (error) {
      console.log('Erreur lors de la récupération des données :', error);
    }
  };

  return (
    <View style={StylesGenre.container}>
      <ImageBackground
        style={StylesGenre.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[StylesGenre.viewContent]}>
          <TitreUneLigne
            txtTitle="VOTRE GENRE ?"
            textAlign="center"
            top={140}
            left={undefined}
            fontFamily={2}
          />
          <View style={[StylesGenre.ViewBTNSelect]}>
            <TouchableOpacity
              style={[StylesGenre.BtnSelect]}
              onPress={() => setState('Femme')}
              accessibilityLabel="Femme">
              <Text
                style={[
                  StylesGenre.TextSelect,
                  {
                    color: genre === 'Femme' ? '#0019A7' : '#FFF',
                    fontFamily:
                      genre === 'Femme' ? 'Comfortaa-Bold' : 'Comfortaa',
                  },
                ]}>
                Femme
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[StylesGenre.BtnSelect]}
              onPress={() => setState('Homme')}
              accessibilityLabel="Homme">
              <Text
                style={[
                  StylesGenre.TextSelect,
                  {
                    color: genre === 'Homme' ? '#0019A7' : '#FFF',
                    fontFamily:
                      genre === 'Homme' ? 'Comfortaa-Bold' : 'Comfortaa',
                  },
                ]}>
                Homme
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[StylesGenre.BtnSelect]}
              onPress={() => setState('Non binaire')}
              accessibilityLabel="Non binaire">
              <Text
                style={[
                  StylesGenre.TextSelect,
                  {
                    color: genre === 'Non binaire' ? '#0019A7' : '#FFF',
                    fontFamily:
                      genre === 'Non binaire' ? 'Comfortaa-Bold' : 'Comfortaa',
                  },
                ]}>
                Non binaire
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={[StylesGenre.textWhite]}>Choix unique.</Text>
        </View>
        <TouchableOpacity
          style={StylesGenre.ViewBtn}
          onPress={() => {
            navigation.navigate('Date_de_naissance');
            handleStoreData('genre', genre ?? '');
            setButtonPressed(true);
          }}
          accessibilityLabel="Continuer">
          <Text
            style={[
              StylesGenre.TxtBtn,
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Continuer
          </Text>
          <Image
            style={[StylesGenre.imgBtn]}
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
