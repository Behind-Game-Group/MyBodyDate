import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {getData} from '../../services/storage';
import StylesVille from '../../../assets/style/styleScreens/styleRegister/StyleVille';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
import {BtnNext} from '../../components/boutons/BtnNext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Ville'>;
};

export const Ville: React.FC<HomeProps> = ({navigation}) => {
  const [userCity, setVille] = useState<string>();

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    try {
      const ville = await getData('city');
      setVille(ville || '');
      // console.log(consent);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  return (
    <View style={StylesVille.container}>
      <ImageBackground
        style={StylesVille.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[StylesVille.viewContent]}>
          <TitreUneLigne
            txtTitle="VOTRE VILLE ?"
            textAlign="center"
            top={140}
            left={undefined}
            fontFamily={undefined}
            color={undefined}
            fontWeight={undefined}
            fontSize={24}
          />
          <SafeAreaView style={[StylesVille.ViewInput]}>
            <TextInput
              style={StylesVille.TextInput}
              keyboardType="default"
              placeholder="Entrez votre ville"
              placeholderTextColor="#FFF"
              maxLength={100}
              onChangeText={userCity => setVille(userCity)}
              value={userCity}
            />
            <Text
              style={[
                {
                  top: 170,
                  left: 40,
                  color: '#FFF',
                  fontFamily: 'Comfortaa-Bold',
                  fontSize: 12,
                },
              ]}>
              Faites des rencontres locales.
            </Text>
          </SafeAreaView>
        </View>
        <BtnNext
          navigation={navigation}
          navigateTo="Acces_Position"
          propName="RegisterRoute"
          propRoute="Acces_Position"
          txt="Continuer"
          handleStore={{key: 'city', value: userCity ?? ''}}
          postInfo={undefined}
          color="#0019A7"
          background="White"
          top={100}
          left={0}
          fontSize={18}
          fontFamily={undefined}
          fontWeight="700"
        />
      </ImageBackground>
    </View>
  );
};
