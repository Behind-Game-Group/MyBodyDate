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

interface OpenBetweenProps {
  navigation: NavigationProp<RouteType, keyof RouteType>;
  background: string;
  menu: boolean;
}

export const OpenBetween: React.FC<OpenBetweenProps> = ({
  navigation,
  menu,
  background,
}) => {
  const [radioValue, setRadioValue] = useState<boolean>(false);

  const handleRadioChange = (value: boolean) => {
    setRadioValue(value);
  };

  return (
    <ImageBackground
      resizeMode="contain"
      source={require('../../../assets/images/bg-openbetween.png')}
      style={{width: '100%', height: '100%'}}>
      <LinearGradient
        start={{x: 0.3, y: -0.25}}
        end={{x: -0.66, y: 0.35}}
        colors={
          background === '1'
            ? [
                'rgba(196, 53, 87, 0.8)',
                'rgba(196, 53, 87, 0.85)',
                'rgba(0, 0, 0, 0.8)',
              ]
            : [
                'rgba(251, 129, 211, 0.6)',
                'rgba(113, 48, 180, 0.7)',
                'rgba(8, 33, 170, 0.8)',
              ]
        }
        style={{width: '100%', height: '100%'}}>
        <Image
          source={require('../../../assets/images/openbetween-card.png')}
          style={{
            position: 'absolute',
            top: menu === true ? 50 : 100,
            width: 215,
            height: 95,
            alignSelf: 'center',
            resizeMode: 'cover',
            zIndex: 1,
          }}
        />
        <Text
          style={{
            top: menu === true ? 200 : 340,
            left: 30,
            color: '#fff',
            fontFamily: 'Gilory-Bold',
            textAlign: 'left',
            fontSize: 48,
            fontStyle: 'normal',
            fontWeight: 700,
          }}>
          OpenBetween
        </Text>
        <View
          style={{
            width: '100%',
            height: '60%',
            top: menu === true ? 240 : 320,
          }}>
          <Text
            style={[
              {
                top: 50,
                width: '90%',
                color: '#FFF',
                alignSelf: 'center',
                fontFamily: 'Comfortaa-Bold',
                fontSize: 15,
                fontStyle: 'normal',
              },
            ]}>
            Ose explorer ta sensualité et vivre des expériences inoubliables
            avec des âmes libres et éprises de plaisir.
          </Text>
          <Text
            style={[
              {
                top: 60,
                width: '90%',
                color: '#FFF',
                alignSelf: 'center',
                fontFamily: 'Comfortaa-Bold',
                fontSize: 15,
                fontStyle: 'normal',
              },
            ]}>
            Rejoins-nous pour une aventure libertine où les limites sont
            repoussées et où les passions s'épanouissent dans le respect des
            choix de chacun.
          </Text>
          <TouchableOpacity onPress={() => handleRadioChange(!radioValue)}>
            <View
              style={[
                {
                  top: 160,
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
              top: 160,
              left: '80%',
              width: 50,
              height: 50,
              borderRadius: 100,
              backgroundColor: 'red',
            }}>
            <Image
              source={require('../../../assets/boutons/btn-next-open.png')}
              style={{width: 50, height: 50, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};
