import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Search_pulse'>;
  route: RouteProp<RouteType, 'Search_pulse'>;
};

export const SearchPulse: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  const [buttonPressed, setButtonPressed] = useState<boolean>(false);

  return (
    <ImageBackground
      resizeMode="contain"
      style={{
        width: '100%',
        height: '100%',
      }}
      source={require('../../../assets/images/bg-parametres.png')}>
      <View style={{flex: 5}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{left: 350, width: 20, marginTop: 30}}>
          <Image
            source={require('../../../assets/images/Group-58.png')}
            style={{
              top: 4,
              width: 20,
              height: 18,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            top: 50,
            width: 300,
            alignSelf: 'center',
            color: '#0019A7',
            textAlign: 'center',
            fontFamily: 'Gilroy',
            fontSize: 24,
            fontStyle: 'normal',
            fontWeight: 700,
          }}>
          Pulse recherche
        </Text>
        <Text
          style={{
            top: 100,
            width: 340,
            alignSelf: 'center',
            color: '#0019A7',
            textAlign: 'center',
            fontFamily: 'Comfortaa',
            fontSize: 24,
            fontStyle: 'normal',
            fontWeight: 700,
          }}>
          Décidez qui peut vous contacter
        </Text>
        <Image
          style={{
            top: 180,
            width: 120,
            height: 120,
            alignSelf: 'center',
            resizeMode: 'contain',
          }}
          source={require('../../../assets/images/filtre.png')}
        />
        <Text
          style={{
            top: 250,
            color: '#0019A7',
            textAlign: 'center',
            fontFamily: 'Comfortaa',
            fontSize: 15,
            fontStyle: 'normal',
            fontWeight: 700,
          }}>
          Sélectionnez les critères essentiels pour vous
        </Text>
        <Text
          style={{
            top: 300,
            color: '#0019A7',
            textAlign: 'center',
            fontFamily: 'Comfortaa',
            fontSize: 15,
            fontStyle: 'normal',
            fontWeight: 700,
          }}>
          Seules les personnes concernées par vos critères pourront vous
          contacter
        </Text>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          accessibilityLabel="Continuer"
          style={{top: 50}}
          onPress={() => {
            setButtonPressed(true);
            navigation.navigate('Search_pulse_settings');
          }}>
          <Image
            style={{
              width: 331,
              height: 56,
              flexShrink: 0,
              alignSelf: 'center',
            }}
            source={
              buttonPressed
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc-Border.png')
            }
          />
          <Text
            style={[
              {
                top: -40,
                textAlign: 'center',
                alignSelf: 'center',
                fontFamily: 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
                fontWeight: 700,
              },
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Continuer
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SearchPulse;
