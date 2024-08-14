import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
type HomeProps = {
  navigation: NavigationProp<RouteType, 'Voix_du_jour2'>;
  route: RouteProp<RouteType, 'Voix_du_jour2'>;
};
export const VoixDuJour2: React.FC<HomeProps> = ({navigation}) => {
  const [selectedButton, setSelectedButton] = useState<string>('');

  function OnSelectedButton() {
    selectedButton === 'Play'
      ? setSelectedButton('')
      : setSelectedButton('Play');
  }

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../../assets/images/Background.png')}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            left: 330,
            top: 50,
            width: 20,
          }}>
          <Image
            source={require('../../../assets/images/Group-58.png')}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#FFF',
              alignSelf: 'center',
              textAlign: 'center',
              top: 50,
            }}>
            La voix du jour
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Comfortaa',
              fontWeight: '400',
              color: '#FFF',
              alignSelf: 'center',
              textAlign: 'center',
              top: 100,
            }}>
            Envie d'en savoir plus sur{'\n'}Rachel ?
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Comfortaa',
              fontWeight: '400',
              color: '#FFF',
              alignSelf: 'center',
              textAlign: 'center',
              top: 120,
            }}>
            Découvrez sa voix !
          </Text>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center',
              top: 140,
            }}>
            <TouchableOpacity
              onPress={() => {
                OnSelectedButton();
              }}>
              <Image
                source={
                  selectedButton === 'Play'
                    ? require('../../../assets/boutons/Stop-P.png')
                    : require('../../../assets/boutons/Play-P.png')
                }
                style={{
                  width: 40,
                  height: 40,
                }}
              />
            </TouchableOpacity>
            <Image
              source={require('../../../assets/images/Ondes-Sonores.png')}
              style={{
                width: 60,
                height: 60,
                left: 15,
              }}
            />
            <Image
              source={require('../../../assets/images/Ondes-Sonores.png')}
              style={{
                width: 60,
                height: 60,
              }}
            />
          </View>
          <View
            style={{
              width: 238,
              height: 238,
              top: 175,
              borderRadius: 120,
              backgroundColor: '#fff',
            }}
          />
          <Image
            source={require('../../../assets/images/VoixRac.png')}
            style={{
              bottom: 63,
              width: 237,
              height: 237,
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            color: '#FFF',
            bottom: 50,
            alignSelf: 'center',
            textAlign: 'center',
          }}>
          Rachel
        </Text>
        <TouchableOpacity
          onPress={() => {
            setSelectedButton('Continuer');
          }}
          style={{height: 56, width: '90%', bottom: 30, alignSelf: 'center'}}>
          <Image
            source={
              selectedButton === 'Continuer'
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc.png')
            }
            style={{
              height: 56,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              bottom: 45,
              color: selectedButton === 'Continuer' ? '#fff' : '#0019A7',
              textAlign: 'center',
              fontFamily: 'Comfortaa-Bold',
              fontSize: 18,
              fontStyle: 'normal',
            }}>
            Découvrir son profil{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelectedButton('Rejouer');
            navigation.navigate('GameNavigator', {GameRoute: 'Voix_du_jour'});
          }}
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            width: 80,
            bottom: 15,
          }}>
          <Image
            source={
              selectedButton === 'Rejouer'
                ? require('../../../assets/boutons/Rejouer-B.png')
                : require('../../../assets/boutons/Rejouer.png')
            }
            style={{
              width: 20,
              height: 20,
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Comfortaa',
              fontWeight: '400',
              color: selectedButton === 'Rejouer' ? '#0019A7' : '#FFF',
              left: 20,
            }}>
            Rejouer
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
