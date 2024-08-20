import React, {useState, useEffect} from 'react';
import {StatusBar, Switch, ImageBackground, Text, View} from 'react-native';
import StyleModeInvisible from '../../../assets/style/styleScreens/styleSettings/StyleModeInvisible';
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
  navigation: NavigationProp<RouteType, 'Mode_invisible'>;
  route: RouteProp<RouteType, 'Mode_invisible'>;
};

export const ModeInvisible: React.FC<HomeProps> = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    handleStoreData('mode_invisible', isEnabled);
  };

  const keysToRetrieve: string[] = ['mode_invisible'];

  const handleStoreData = async (key: string, value: boolean) => {
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

      setIsEnabled(result.mode_invisible as boolean);
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
      style={StyleModeInvisible.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        backgroundColor={'white'}
        settingsNavigation={'Settings'}
        backButton={'Retour'}
      />
      <View style={{flex: 5}}>
        <TitreUneLigne
          txtTitle="Mode invisible"
          fontFamily="Comfortaa-Bold"
          color={'#0019A7'}
          fontSize={24}
          textAlign="center"
          fontWeight={'700'}
          top={25}
          left={undefined}
        />
        <View style={StyleModeInvisible.separator} />
        <Text style={StyleModeInvisible.description}>
          Seule les membres que vous aurez liké peuvent voir votre profil.
        </Text>
        <View
          style={{
            flexShrink: 0,
            alignSelf: 'center',
            top: 150,
          }}>
          <Text style={StyleModeInvisible.textBold}>
            Mettre mon compte en invisible
          </Text>
          <Switch
            trackColor={{false: '#BEC8FF', true: '#17ff58'}}
            thumbColor={isEnabled ? '#BEC8FF' : '#f4f3f4'}
            ios_backgroundColor="#f4f3f4"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={StyleModeInvisible.switchModeInvisible}
          />
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
          background="Blue-border"
          top={0}
          left={0}
          fontSize={18}
        />
      </View>
    </ImageBackground>
  );
};
