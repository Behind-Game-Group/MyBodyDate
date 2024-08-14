import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MenuSlide from '../../components/menus/MenuSlide';
import {MenuBottom} from '../../components/menus/MenuBottom';
import {
  NavigationHelpers,
  NavigationProp,
  ParamListBase,
  RouteProp,
  TabNavigationState,
} from '@react-navigation/native';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import {EdgeInsets} from 'react-native-safe-area-context';
import {BottomTabDescriptorMap} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {RouteType} from '../../../types/routes/RouteType';
import {getDatas} from '../../services/storage';

interface RetrievedValue {
  key: string;
  value: string | boolean | number | undefined;
}

interface RetrievedValuesMap {
  [key: string]: string | boolean | number | undefined;
}

type PrendPassProps = {
  navigation: NavigationProp<RouteType, 'Prend_pass'>;
  route: RouteProp<RouteType, 'Prend_pass'>;
  navigationTab: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  insets: EdgeInsets;
};

export const PrendPass: React.FC<PrendPassProps> = ({
  navigation,
  navigationTab,
  state,
  descriptors,
  insets,
}) => {
  const [boxPressed, setBoxPressed] = useState<string>('');
  const [tabPath, setTabPath] = useState<string>('');
  const [imagePath, setImagePath] = useState<string>('');

  const keysToRetrieve: string[] = ['imagePath', 'tabPath'];

  const getMultipleValues = async () => {
    try {
      const retrievedValues: RetrievedValue[] = await getDatas(keysToRetrieve);

      const result: RetrievedValuesMap = {};
      retrievedValues.forEach(item => {
        result[item.key] = item.value;
      });

      setImagePath(result.imagePath as string);
      setTabPath(result.tabPath as string);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  useEffect(() => {
    getMultipleValues();
  }, []);

  return (
    <ImageBackground
      source={require('../../../assets/images/bg-parametres.png')}
      style={{flex: 1}}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        backButton="Retour profil"
        imagePath={imagePath}
        tabPath={tabPath}
        backgroundColor={'white'}
        settingsNavigation={undefined}
      />
      <View style={{height: 'auto'}}>
        <ScrollView
          style={{
            width: '100%',
            backgroundColor: 'transparent',
            height: 750,
          }}
          contentContainerStyle={{paddingBottom: 20}}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#0019A7',
              alignSelf: 'center',
              textAlign: 'center',
              margin: 30,
            }}>
            Je prends mon pass
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#0019A7',
              alignSelf: 'center',
              textAlign: 'center',
              marginBottom: 30,
            }}>
            Sélectionnez les critères essentiels{'\n'}pour vous
          </Text>
          <View style={{top: 20}}>
            <TouchableOpacity
              onPress={() => {
                setBoxPressed('1');
                navigation.navigate('PulseNavigator', {
                  PulseRoute: 'Pulse_spotlight',
                });
              }}
              accessibilityLabel="Propulsez vos échanges"
              style={{
                flexDirection: 'column',
                alignSelf: 'center',
                justifyContent: 'space-between',
                width: 358,
                height: 151,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#0019A7',
                padding: 30,
                marginBottom: 20,
                backgroundColor: boxPressed === '1' ? '#0019A7' : 'transparent',
              }}>
              <Text
                style={{
                  color: '#FF84D7',
                  textAlign: 'center',
                  fontFamily: 'Gilroy',
                  fontSize: 20,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Propulsez vos échanges
              </Text>
              <Text
                style={{
                  color: boxPressed === '1' ? '#fff' : '#0019A7',
                  textAlign: 'center',
                  fontFamily: 'Comfortaa',
                  fontSize: 15,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Propulsez votre profil en le mettant en avant grâce au Pulse
                Spolight
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setBoxPressed('2');
                navigation.navigate('PulseNavigator', {
                  PulseRoute: 'Pulse_profil',
                });
              }}
              accessibilityLabel="Faites-vous remarquer"
              style={{
                flexDirection: 'column',
                alignSelf: 'center',
                justifyContent: 'space-between',
                width: 358,
                height: 151,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#0019A7',
                padding: 30,
                marginBottom: 20,
                backgroundColor: boxPressed === '2' ? '#0019A7' : 'transparent',
              }}>
              <Text
                style={{
                  color: '#FF84D7',
                  textAlign: 'center',
                  fontFamily: 'Gilroy',
                  fontSize: 20,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Faites-vous remarquer
              </Text>
              <Text
                style={{
                  color: boxPressed === '2' ? '#fff' : '#0019A7',
                  textAlign: 'center',
                  fontFamily: 'Comfortaa',
                  fontSize: 15,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Multipliez vos contacts en un clin d'oeil avec le Pulse Profil
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setBoxPressed('3');
                navigation.navigate('PulseNavigator', {
                  PulseRoute: 'Pulse_recherche',
                });
              }}
              accessibilityLabel="Éclipsez-vous des regards"
              style={{
                flexDirection: 'column',
                alignSelf: 'center',
                justifyContent: 'space-between',
                width: 358,
                height: 151,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#0019A7',
                padding: 30,
                marginBottom: 20,
                backgroundColor: boxPressed === '3' ? '#0019A7' : 'transparent',
              }}>
              <Text
                style={{
                  color: '#FF84D7',
                  textAlign: 'center',
                  fontFamily: 'Gilroy',
                  fontSize: 20,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Éclipsez-vous des regards
              </Text>
              <Text
                style={{
                  color: boxPressed === '3' ? '#fff' : '#0019A7',
                  textAlign: 'center',
                  fontFamily: 'Comfortaa',
                  fontSize: 15,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Éclipsez-vous des regards sur commande.
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <MenuBottom
        navigation={navigationTab}
        tabPath={tabPath}
        state={state}
        descriptors={descriptors}
        insets={insets}
      />
    </ImageBackground>
  );
};
