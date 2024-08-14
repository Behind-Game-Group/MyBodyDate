import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Switch,
} from 'react-native';
import StyleAutorisationsNecessaires from '../../../assets/style/styleScreens/styleSettings/StyleParemetresConfident';
import StyleParemetresConfident from '../../../assets/style/styleScreens/styleSettings/StyleParemetresConfident';
import MenuSlide from '../../components/menus/MenuSlide';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {
  getDatas,
  storeData,
  // storeData
} from '../../services/storage';
import {
  StorageValue,
  StorageValueMap,
} from '../../../interfaces/StorageValueInterface';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Parametre_de_confidentialites'>;
  route: RouteProp<RouteType, 'Parametre_de_confidentialites'>;
};

export const ParametresConfident: React.FC<HomeProps> = ({navigation}) => {
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  const [isEnabledLocalisation, setIsEnabledLocalisation] =
    useState<boolean>(false);
  const toggleSwitchLocalisation = () => {
    setIsEnabledLocalisation(previousState => !previousState);
    handleStoreData('settingsLocalisation', isEnabledLocalisation);
  };
  const [isEnabledInfoPerso, setIsEnabledInfoPerso] = useState<boolean>(false);
  const toggleSwitchInfoPerso = () => {
    setIsEnabledInfoPerso(previousState => !previousState);
    handleStoreData('settingsInfoPerso', isEnabledInfoPerso);
  };
  const [isEnabledHistorique, setIsEnabledHistorique] =
    useState<boolean>(false);
  const toggleSwitchHistorique = () => {
    setIsEnabledHistorique(previousState => !previousState);
    handleStoreData('settingsHistorique', isEnabledHistorique);
  };

  const handleStoreData = async (key: string, value: boolean) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const keysToRetrieve: string[] = [
    'settingsLocalisation',
    'settingsInfoPerso',
    'settingsHistorique',
  ];

  const getMultipleValues = async () => {
    try {
      const retrievedValues: StorageValue[] = await getDatas(keysToRetrieve);

      const result: StorageValueMap = {};
      retrievedValues.forEach(item => {
        result[item.key] = item.value;
      });

      setIsEnabledHistorique(result.settingsHistorique as boolean);
      setIsEnabledInfoPerso(result.settingsInfoPerso as boolean);
      setIsEnabledLocalisation(result.settingsLocalisation as boolean);
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
      style={StyleAutorisationsNecessaires.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        backgroundColor={'white'}
        settingsNavigation={'Securite_et_privee'}
        backButton={'Retour'}
      />
      <View style={{flex: 6}}>
        <Text style={StyleAutorisationsNecessaires.title}>
          Paramètres de confidentialités
        </Text>
        <View style={StyleAutorisationsNecessaires.separator} />
        <View
          style={StyleAutorisationsNecessaires.parametresConfidentContainer}>
          <View style={StyleAutorisationsNecessaires.viewItem}>
            <Text style={StyleAutorisationsNecessaires.titleItem}>
              Localisation
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={StyleAutorisationsNecessaires.textItem}>
                Vous pouvez choisir de partager votre localisation ou non.
              </Text>
              <Switch
                trackColor={{false: '#BEC8FF', true: '#17ff58'}}
                thumbColor={isEnabledLocalisation ? '#BEC8FF' : '#f4f3f4'}
                ios_backgroundColor="#f4f3f4"
                onValueChange={toggleSwitchLocalisation}
                value={isEnabledLocalisation}
                // style={{
                //   top: 0,
                //   alignSelf: 'end',
                //   left: 20,
                // }}
              />
            </View>
          </View>

          <View style={StyleAutorisationsNecessaires.viewItem}>
            <Text style={StyleAutorisationsNecessaires.titleItem}>
              Informations personnelles
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={StyleAutorisationsNecessaires.textItem}>
                Masquer certaines informations sensibles.
              </Text>
              <Switch
                trackColor={{false: '#BEC8FF', true: '#17ff58'}}
                thumbColor={isEnabledInfoPerso ? '#BEC8FF' : '#f4f3f4'}
                ios_backgroundColor="#f4f3f4"
                onValueChange={toggleSwitchInfoPerso}
                value={isEnabledInfoPerso}
                // style={{
                //   top: 0,
                //   alignSelf: 'end',
                //   left: 20,
                // }}
              />
            </View>
          </View>

          <View style={StyleAutorisationsNecessaires.viewItem}>
            <Text style={StyleAutorisationsNecessaires.titleItem}>
              Historique des discussions
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={StyleAutorisationsNecessaires.textItem}>
                Supprimer ou d'archiver les conversations précédentes pour
                garder votre messagerie organisée et protéger votre vie privée.
              </Text>
              <Switch
                trackColor={{false: '#BEC8FF', true: '#17ff58'}}
                thumbColor={isEnabledHistorique ? '#BEC8FF' : '#f4f3f4'}
                ios_backgroundColor="#f4f3f4"
                onValueChange={toggleSwitchHistorique}
                value={isEnabledHistorique}
                // style={{
                //   top: 0,
                //   alignSelf: 'end',
                //   left: 20,
                // }}
              />
            </View>
          </View>
          <TouchableOpacity
            style={{top: 20}}
            accessibilityLabel="Autorisations nécessaires"
            onPress={() =>
              navigation.navigate('SettingsNavigator', {
                SettingsRoute: 'Autorisations_necessaires',
              })
            }>
            <View style={StyleAutorisationsNecessaires.viewItem2}>
              <Text style={StyleAutorisationsNecessaires.textItem2}>
                Autorisations nécessaires
              </Text>
              <Image
                style={StyleAutorisationsNecessaires.imgItem}
                source={require('../../../assets/images/fleche-blue.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={StyleParemetresConfident.containerBack}
          onPress={() => {
            setButtonPressed(true);
            navigation.navigate('SettingsNavigator', {
              SettingsRoute: 'Securite_et_privee',
            });
          }}>
          <Image
            style={StyleParemetresConfident.backButton}
            source={
              buttonPressed
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc-Border.png')
            }
          />
          <Text
            style={[
              StyleParemetresConfident.backButtonText,
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Retour sécurité & vie privée
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
