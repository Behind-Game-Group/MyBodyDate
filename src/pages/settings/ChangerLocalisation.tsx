import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TextInput,
} from 'react-native';
import StyleChangerLocalisation from '../../../assets/style/styleScreens/styleSettings/StyleChangerLocalisation';
import MenuSlide from '../../components/menus/MenuSlide';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {getDatas, storeData} from '../../services/storage';
import {BtnNext} from '../../components/boutons/BtnNext';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';

interface RetrievedValue {
  key: string;
  value: string | boolean | number | undefined;
}

interface RetrievedValuesMap {
  [key: string]: string | boolean | number | undefined;
}

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Changer_localisation'>;
  route: RouteProp<RouteType, 'Changer_localisation'>;
};

export const ChangerLocalisation: React.FC<HomeProps> = ({navigation}) => {
  const [newCity, setNewCity] = useState<string>();

  const keysToRetrieve: string[] = ['userCity'];

  const handleStoreData = async (key: string, value: string) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const getMultipleValues = async () => {
    try {
      const retrievedValues: RetrievedValue[] = await getDatas(keysToRetrieve);

      const result: RetrievedValuesMap = {};
      retrievedValues.forEach(item => {
        result[item.key] = item.value;
      });

      setNewCity(result.userCity as string);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    getMultipleValues();
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <ImageBackground
      style={StyleChangerLocalisation.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        backgroundColor={'white'}
        settingsNavigation={'Mode_voyage'}
        backButton={'Retour'}
      />
      <View style={{flex: 5}}>
        <TitreUneLigne
          txtTitle="Changer ma localisation"
          fontFamily="Comfortaa-Bold"
          color={'#0019A7'}
          fontSize={24}
          textAlign="center"
          fontWeight={'700'}
          top={25}
          left={undefined}
        />
        <View style={StyleChangerLocalisation.separator} />
        <Text style={StyleChangerLocalisation.description}>
          Utilisez le mode voyage pour changez votre emplacement et découvrir de
          nouvelles personnes. HEIN?
        </Text>

        <SafeAreaView style={StyleChangerLocalisation.boxInputCity}>
          <TextInput
            style={StyleChangerLocalisation.inputCity}
            onChangeText={text => {
              setNewCity(text);
              handleStoreData('userCity', text);
            }}
            value={newCity}
            placeholder="Entrez votre ville"
            placeholderTextColor={'#0019A7'}
          />
        </SafeAreaView>
      </View>
      <View style={{flex: 1}}>
        <BtnNext
          navigation={navigation}
          navigateTo="Mode_voyage"
          propName="SettingsRoute"
          propRoute="Mode_voyage"
          txt="Retour mode voyage"
          handleStore={undefined}
          postInfo={undefined}
          color="#0019A7"
          background="Blue-border"
          top={0}
          left={0}
          fontSize={18}
          fontFamily={undefined}
          fontWeight="700"
        />
      </View>
    </ImageBackground>
  );
};
