import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import StyleEmplacement from '../../../assets/style/styleScreens/styleSettings/StyleEmplacement';
import MenuSlide from '../../components/menus/MenuSlide';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {
  getDatas,
  // storeData
} from '../../services/storage';
import {
  StorageValue,
  StorageValueMap,
} from '../../../interfaces/StorageValueInterface';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
import {BtnNext} from '../../components/boutons/BtnNext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Emplacement'>;
  route: RouteProp<RouteType, 'Emplacement'>;
};

export const Emplacement: React.FC<HomeProps> = ({navigation}) => {
  const [userCity, setUserCity] = useState<string>('');
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  const keysToRetrieve: string[] = ['userCity'];

  // const handleStoreData = async (key: string, value: string) => {
  //   try {
  //     await storeData(key, value);
  //   } catch (error) {
  //     console.error('Erreur lors du stockage des données :', error);
  //   }
  // };

  const getMultipleValues = async () => {
    try {
      const retrievedValues: StorageValue[] = await getDatas(keysToRetrieve);

      const result: StorageValueMap = {};
      retrievedValues.forEach(item => {
        result[item.key] = item.value;
      });

      setUserCity(result.userCity as string);
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
      style={StyleEmplacement.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        backgroundColor={'white'}
        settingsNavigation={undefined}
        backButton={'back'}
      />
      <TitreUneLigne
        txtTitle="Emplacement"
        fontFamily="Comfortaa-Bold"
        color={'#0019A7'}
        fontSize={24}
        textAlign="center"
        fontWeight={'700'}
        top={25}
        left={undefined}
      />
      <View style={StyleEmplacement.separator} />
      <View style={{flex: 5}}>
        <Text style={StyleEmplacement.description}>
          Il possible de modifier cette fonctionnalité uniquement en mode voyage
          ainsi que si vous disposez d’un papier attestant...
        </Text>
        <View style={StyleEmplacement.itemEmplacement}>
          <TouchableOpacity
            accessibilityLabel="Emplacement"
            onPress={() =>
              navigation.navigate('SettingsNavigator', {
                SettingsRoute: 'Emplacement',
              })
            }>
            <View style={StyleEmplacement.boxItemEmplacement}>
              <Text style={StyleEmplacement.textItemEmplacement}>
                Emplacement
              </Text>
              <Text style={StyleEmplacement.secondTextItemEmplacement}>
                {userCity ?? 'Non définie'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1}}>
        <BtnNext
          navigation={navigation}
          navigateTo="Settings"
          propName="SettingsRoute"
          propRoute="Settings"
          txt="Retour paramètres"
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
