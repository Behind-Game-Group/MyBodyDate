import React, {useState} from 'react';
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
} from '@react-navigation/native';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
type PrendPassProps = {
  navigation: NavigationProp<RouteType, 'Prend_pass'>;
  route: RouteProp<RouteType, 'Prend_pass'>;
  navigationTab: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

export const PrendPass: React.FC<PrendPassProps> = ({
  navigation,
  navigationTab,
}) => {
  const [boxPressed, setBoxPressed] = useState<string>('');

  return (
    <ImageBackground
      source={require('../../../assets/images/bg-parametres.png')}
      style={{flex: 1}}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        backButton="Retour profil"
        backgroundColor={'white'}
        settingsNavigation={undefined}
      />
      <View style={{height: '100%'}}>
        <ScrollView
          style={{
            width: '100%',
            backgroundColor: 'transparent',
          }}
          contentContainerStyle={{paddingBottom: 100}}>
          <TitreUneLigne
            txtTitle="Je prends mon pass"
            fontFamily="Comfortaa-Bold"
            color={'#0019A7'}
            fontSize={24}
            textAlign="center"
            fontWeight={'700'}
            top={20}
            left={undefined}
          />
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#0019A7',
              alignSelf: 'center',
              textAlign: 'center',
              marginBottom: 30,
              top: 40,
            }}>
            Sélectionnez les critères essentiels{'\n'}pour vous
          </Text>
          <View style={{top: 60}}>
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
      <MenuBottom navigation={navigationTab} />
    </ImageBackground>
  );
};
