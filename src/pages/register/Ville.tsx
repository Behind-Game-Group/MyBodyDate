import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {storeData, getData} from '../../services/storage';
import StylesVille from '../../../assets/style/styleScreens/styleRegister/StyleVille';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/TitreUneLigne';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Ville'>;
};

export const Ville: React.FC<HomeProps> = ({navigation}) => {
  const [userCity, setVille] = useState<string>();
  // console.log('city: ' + userCity);

  const [buttonPressed, setButtonPressed] = useState<boolean>();

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
            fontFamily={2}
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
        <TouchableOpacity
          style={StylesVille.ViewBtn}
          onPress={() => {
            navigation.navigate('Acces_Position');
            handleStoreData('city', userCity ?? '');
            setButtonPressed(true);
          }}
          accessibilityLabel="Continuer">
          <Text
            style={[
              StylesVille.TxtBtn,
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Continuer
          </Text>
          <Image
            style={[StylesVille.imgBtn]}
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
