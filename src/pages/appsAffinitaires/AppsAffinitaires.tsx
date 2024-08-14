import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import MenuSlide from '../../components/menus/MenuSlide';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Apps_Affinitaires'>;
  route: RouteProp<RouteType, 'Apps_Affinitaires'>;
};

export const AppsAffinitaires: React.FC<HomeProps> = ({navigation}) => {
  const [contentPressed, setContentPressed] = useState<string>();

  return (
    <ImageBackground
      source={require('../../../assets/images/Background.png')}
      style={{
        width: '100%',
        height: '100%',
      }}>
      <MenuSlide
        backgroundColor={'white'}
        navigation={navigation}
        icoPushChange={false}
        backButton={undefined}
        settingsNavigation={undefined}
      />
      <Text
        style={{
          top: 50,
          color: '#fff',
          fontFamily: 'Comfortaa-Bold',
          textAlign: 'center',
          fontSize: 29,
          fontStyle: 'normal',
        }}>
        Apps affinitaires
      </Text>
      <Text
        style={[
          {
            top: 130,
            width: '80%',
            color: '#FFF',
            alignSelf: 'center',
            fontFamily: 'Comfortaa',
            fontSize: 18,
            fontStyle: 'normal',
            fontWeight: 700,
          },
        ]}>
        Grâce au profil multipliés, vous bénéficiez gratuitement d’une
        visibilité de votre profil auprès de votre communauté d’affinité :
      </Text>
      <View
        style={{
          top: 150,
          flexDirection: 'column',
          width: '80%',
          height: 120,
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              {
                color: '#FFF',
                alignSelf: 'center',
                fontFamily: 'Comfortaa',
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 700,
              },
            ]}>
            Parent célibataire
          </Text>
          <Text
            style={[
              {
                color: '#0019A7',
                left: 10,
                alignSelf: 'center',
                fontFamily: 'Gilory-Bold',
                fontSize: 18,
                fontStyle: 'normal',
                fontWeight: 700,
              },
            ]}>
            CheerFlakes,
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              {
                color: '#FFF',
                alignSelf: 'center',
                fontFamily: 'Comfortaa',
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 700,
              },
            ]}>
            Sénior{' '}
          </Text>
          <Text
            style={[
              {
                color: '#0019A7',
                left: 10,
                alignSelf: 'center',
                fontFamily: 'Gilory-Bold',
                fontSize: 18,
                fontStyle: 'normal',
                fontWeight: 700,
              },
            ]}>
            WineGap,
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              {
                color: '#FFF',
                alignSelf: 'center',
                fontFamily: 'Comfortaa',
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 700,
              },
            ]}>
            Gay/lesbienne{' '}
          </Text>
          <Text
            style={[
              {
                color: '#0019A7',
                left: 10,
                alignSelf: 'center',
                fontFamily: 'Gilory-Bold',
                fontSize: 18,
                fontStyle: 'normal',
                fontWeight: 700,
              },
            ]}>
            GoPride
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              {
                color: '#FFF',
                alignSelf: 'center',
                fontFamily: 'Comfortaa',
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 700,
              },
            ]}>
            et libertin{' '}
          </Text>
          <Text
            style={[
              {
                color: '#0019A7',
                left: 10,
                alignSelf: 'center',
                fontFamily: 'Gilory-Bold',
                fontSize: 18,
                fontStyle: 'normal',
                fontWeight: 700,
              },
            ]}>
            OpenBetween.
          </Text>
        </View>
      </View>

      <View
        style={{
          top: 180,
          width: '100%',
          height: '30%',
          alignSelf: 'center',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            width: '100%',
            height: '40%',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => {
              setContentPressed('WineGap');
              navigation.navigate('Apps_Affinitaires2', {
                routeAffinite: 'WineGap',
                menu: true,
              });
            }}
            style={{
              width: '45%',
              height: 90,
              borderRadius: 30,
              borderWidth: contentPressed === 'WineGap' ? 3 : 1,
              borderColor: '#882b1d',
              backgroundColor:
                contentPressed === 'WineGap'
                  ? 'rgba(120, 75, 50, 0.5)'
                  : 'rgba(247, 202, 178, 0.8)',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'space-around',
              flexDirection: 'row',
              elevation: 10,
            }}>
            <Image
              source={require('../../../assets/images/winegap-card.png')}
              style={{width: 110, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setContentPressed('CheerFlakes');
              navigation.navigate('Apps_Affinitaires2', {
                routeAffinite: 'CheerFlakes',
                menu: true,
              });
            }}
            style={{
              width: '45%',
              height: 90,
              borderRadius: 30,
              borderWidth: contentPressed === 'CheerFlakes' ? 3 : 1,
              borderColor: '#fff',
              backgroundColor:
                contentPressed === 'CheerFlakes'
                  ? 'rgba(132, 36, 22, 0.85)'
                  : 'rgba(69, 192, 223, 0.8)',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'space-around',
              flexDirection: 'row',
              elevation: 10,
            }}>
            <Image
              source={require('../../../assets/images/cheerflakes-card.png')}
              style={{width: 110, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: '40%',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => {
              setContentPressed('OpenBetween');
              navigation.navigate('Apps_Affinitaires2', {
                routeAffinite: 'OpenBetween',
                menu: true,
              });
            }}
            style={{
              width: '45%',
              height: 90,
              borderRadius: 30,
              borderWidth: contentPressed === 'OpenBetween' ? 3 : 1,
              borderColor: '#c43555',
              backgroundColor:
                contentPressed === 'OpenBetween'
                  ? 'rgba(196, 53, 87, 0.4)'
                  : 'rgba(0, 0, 0, 0.76)',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'space-around',
              flexDirection: 'row',
              elevation: 10,
            }}>
            <Image
              source={require('../../../assets/images/openbetween-card.png')}
              style={{width: 110, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setContentPressed('GoPride');
              navigation.navigate('Apps_Affinitaires2', {
                routeAffinite: 'GoPride',
                menu: true,
              });
            }}
            style={{
              width: '45%',
              height: 90,
              borderRadius: 30,
              borderWidth: contentPressed === 'GoPride' ? 3 : 1,
              borderColor:
                contentPressed === 'GoPride'
                  ? 'rgba(132, 36, 22, 1)'
                  : '#db6238',
              backgroundColor:
                contentPressed === 'GoPride'
                  ? 'rgba(219, 98, 56, 0.65)'
                  : 'rgba(132, 36, 22, 0.8)',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'space-around',
              elevation: 10,
            }}>
            <Image
              source={require('../../../assets/images/gopride-card.png')}
              style={{width: 110, resizeMode: 'contain', zIndex: 1}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
