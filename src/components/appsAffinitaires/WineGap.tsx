import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RouteType} from '../../../types/routes/RouteType';
import {NavigationProp} from '@react-navigation/native';

interface WineGapProps {
  navigation: NavigationProp<RouteType, keyof RouteType>;
  background: string;
  menu: boolean;
}

export const WineGap: React.FC<WineGapProps> = ({
  navigation,
  menu,
  background,
}) => {
  const [radioValue, setRadioValue] = useState<boolean>(false);

  const handleRadioChange = (value: boolean) => {
    setRadioValue(value);
  };

  const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });

  return (
    <ImageBackground
      resizeMode="contain"
      source={require('../../../assets/images/bg-winegap.png')}
      style={{width: '100%', height: '100%'}}>
      <Image
        source={require('../../../assets/images/winegap-card.png')}
        style={{
          position: 'absolute',
          top: menu === true ? 50 : 100,
          width: 215,
          height: 95,
          alignSelf: 'center',
          resizeMode: 'cover',
          zIndex: 2,
        }}
      />
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0, 0.5, 0.6]}
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>Sign in with Facebook</Text>
      </LinearGradient>
      <LinearGradient
        start={{x: 0.6, y: -0.5}}
        end={{x: -0.4, y: 0.0}}
        colors={
          background === '1'
            ? [
                'rgba(132, 36, 22, 0.8)',
                'rgba(247, 202, 178, 0.8)',
                'rgba(120, 75, 50, 0.8)',
              ]
            : [
                'rgba(251, 129, 211, 0.6)',
                'rgba(113, 48, 180, 0.7)',
                'rgba(8, 33, 170, 0.8)',
              ]
        }
        style={{
          width: '100%',
          height: menu === true ? '95%' : '100%',
          position: 'relative',
          zIndex: 1,
        }}>
        <Text
          style={{
            top: menu === true ? 200 : 320,
            left: 30,
            color: '#fff',
            fontFamily: 'Gilory-Bold',
            textAlign: 'left',
            fontSize: 48,
            fontStyle: 'normal',
            fontWeight: 700,
          }}>
          WineGap
        </Text>
        <Text
          style={[
            {
              top: menu === true ? 240 : 340,
              width: '80%',
              color: '#FFF',
              alignSelf: 'center',
              fontFamily: 'Comfortaa-Bold',
              fontSize: 18,
              fontStyle: 'normal',
            },
          ]}>
          À la recherche de rencontres et de liens intemporels : unissons nos
          cœurs sages !
        </Text>
        <Text
          style={[
            {
              top: menu === true ? 250 : 360,
              width: '80%',
              color: '#FFF',
              alignSelf: 'center',
              fontFamily: 'Comfortaa-Bold',
              fontSize: 18,
              fontStyle: 'normal',
            },
          ]}>
          Que vous cherchiez une amitié complice, une romance vibrante ou
          simplement un compagnon de vie, notre plateforme facilite les
          rencontres entre personnes partageant les mêmes valeurs et
          aspirations.
        </Text>
        <TouchableOpacity onPress={() => handleRadioChange(!radioValue)}>
          <View
            style={[
              {
                top: menu === true ? 300 : 380,
                flexDirection: 'row',
                width: '80%',
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
            top: menu === true ? 300 : 380,
            left: '80%',
            width: 50,
            height: 50,
            borderRadius: 100,
            backgroundColor: 'red',
          }}>
          <Image
            source={require('../../../assets/boutons/btn-next-wine.png')}
            style={{width: 50, height: 50, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
};
