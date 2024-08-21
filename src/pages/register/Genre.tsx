import React, {useEffect} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {getData} from '../../services/storage';
import StylesGenre from '../../../assets/style/styleScreens/styleRegister/StyleGenre';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
import {BtnNext} from '../../components/boutons/BtnNext';
import {useGenreContext} from '../../context/GenreContext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Genre'>;
};

export const Genre: React.FC<HomeProps> = ({navigation}) => {
  const {genre, setGenre} = useGenreContext();

  // console.log('Genre: ' + genre);

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    try {
      const userGenre = await getData('genre');
      setGenre(userGenre || '');
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
            fontFamily={undefined}
            color={undefined}
            fontWeight={undefined}
            fontSize={24}
          />
          <View style={[StylesGenre.ViewBTNSelect]}>
            <TouchableOpacity
              style={[StylesGenre.BtnSelect]}
              onPress={() => setGenre('Femme')}
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
              onPress={() => setGenre('Homme')}
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
              onPress={() => setGenre('Non binaire')}
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
        <BtnNext
          navigation={navigation}
          navigateTo="Date_de_naissance"
          propName="RegisterRoute"
          propRoute="Date_de_naissance"
          txt="Continuer"
          handleStore={{key: 'genre', value: genre ?? ''}}
          postInfo={undefined}
          color="#0019A7"
          background="White"
          top={120}
          left={0}
          fontSize={18}
          fontFamily={undefined}
          fontWeight="700"
        />
      </ImageBackground>
    </View>
  );
};
