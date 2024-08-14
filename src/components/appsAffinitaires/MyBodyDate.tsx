import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RouteType} from '../../../types/routes/RouteType';
import {NavigationProp} from '@react-navigation/native';

interface MyBodyDateProps {
  navigation: NavigationProp<RouteType, keyof RouteType>;
  menu: boolean;
}

export const MyBodyDate: React.FC<MyBodyDateProps> = ({navigation, menu}) => {
  const [radioValue, setRadioValue] = useState<boolean>(false);

  const handleRadioChange = (value: boolean) => {
    setRadioValue(value);
  };

  return (
    <ImageBackground
      resizeMode="contain"
      source={require('../../../assets/images/Background2.png')}
      style={{width: '100%', height: '100%'}}>
      <Image
        source={require('../../../assets/logos/logo-blanc.png')}
        style={{
          position: 'absolute',
          top: menu === true ? 60 : 140,
          width: 300,
          height: 36,
          alignSelf: 'center',
          resizeMode: 'contain',
          zIndex: 2,
        }}
      />
      <LinearGradient
        start={{x: 0.6, y: -0.27}}
        end={{x: -0.4, y: 0.0}}
        colors={[
          'rgba(251, 129, 211, 0.6)',
          'rgba(113, 48, 180, 0.7)',
          'rgba(8, 33, 170, 0.8)',
        ]}
        style={{
          width: '100%',
          height: menu === true ? '95%' : '100%',
          position: 'relative',
          zIndex: 1,
        }}>
        <Text
          style={{
            top: menu === true ? 200 : 250,
            left: 20,
            color: '#fff',
            fontFamily: 'Gilory-Bold',
            textAlign: 'left',
            fontSize: 48,
            fontStyle: 'normal',
            fontWeight: 700,
          }}>
          MyBodyDate
        </Text>
        <Text
          style={[
            {
              top: menu === true ? 240 : 280,
              width: '90%',
              color: '#FFF',
              alignSelf: 'center',
              fontFamily: 'Comfortaa-Bold',
              fontSize: 18,
              fontStyle: 'normal',
            },
          ]}>
          Un coup de coeur n'attend pas, il trace son chemin vers l'amour,
          l'amitié ou le succès professionnel.
        </Text>
        <Text
          style={[
            {
              top: menu === true ? 250 : 300,
              width: '90%',
              color: '#FFF',
              alignSelf: 'center',
              fontFamily: 'Comfortaa-Bold',
              fontSize: 18,
              fontStyle: 'normal',
            },
          ]}>
          Osez saisir ces rencontres inattendues et laissez votre cœur guider
          votre destinée vers de belles connections, qu'elles soient amoureuses,
          amicales ou professionnelles.
        </Text>
        <TouchableOpacity onPress={() => handleRadioChange(!radioValue)}>
          <View
            style={[
              {
                top: menu === true ? 300 : 350,
                flexDirection: 'row',
                width: '90%',
                alignItems: 'center',
                marginVertical: 5,
                alignSelf: 'center',
              },
            ]}>
            <Image
              source={
                radioValue
                  ? require('../../../assets/images/radio_selected.png')
                  : require('../../../assets/images/radio_unselected.png')
              }
              style={{width: 20, height: 20}}
            />
            <Text style={[{color: '#FFF', fontSize: 14, padding: 15}]}>
              Je souhaite m’inscrire à cette application
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            top: menu === true ? 300 : 350,
            left: '80%',
            width: 50,
            height: 50,
            borderRadius: 100,
            backgroundColor: 'red',
          }}>
          <Image
            source={require('../../../assets/boutons/Passer.png')}
            style={{width: 50, height: 50, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
};
