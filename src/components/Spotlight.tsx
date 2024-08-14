import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {BaseRoutes} from '../../types/routes/BaseRoutes';
import {RegisterRoutes} from '../../types/routes/RegisterRoutes';
import {LogInRoutes} from '../../types/routes/LogInRoutes';
import {SignInRoutes} from '../../types/routes/SignInRoutes';
import {DiscoverRoutes} from '../../types/routes/DiscoverRoutes';
import {SearchRoutes} from '../../types/routes/SearchRoutes';
import {GameRoutes} from '../../types/routes/GameRoutes';
import {AppsAffinitairesRoutes} from '../../types/routes/AppsAffinitairesRoutes';
import {RouteType} from '../../types/routes/RouteType';
import {EventRoutes} from '../../types/routes/EventRoutes';

type ItemProps = {
  name: string;
  avatar: ImageSourcePropType;
  onPress: () => void;
};

type NavigatorParams = {
  BaseNavigator: {BaseRoute: BaseRoutes};
  RegisterNavigator: {RegisterRoute: RegisterRoutes};
  LogInNavigator: {LoginRoute: LogInRoutes};
  SignInNavigator: {SignInRoute: SignInRoutes};
  DiscoverNavigator: {DiscoverRoute: DiscoverRoutes};
  EventNavigator: {EventRoute: EventRoutes};
  ProfilNavigator: {ProfilRoute: string};
  SearchNavigator: {SearchRoute: SearchRoutes};
  GameNavigator: {GameRoute: GameRoutes};
  AppsAffinitairesNavigator: {AppsAffinitairesRoute: AppsAffinitairesRoutes};
};

type NavigatorName = keyof NavigatorParams;

type SpotlightProps = {
  navigation: NavigationProp<RouteType>;
};

export const Spotlight: React.FC<SpotlightProps> = ({navigation}) => {
  const [userPrenium, setUserPrenium] = useState(false);

  const handleItemPress = <T extends NavigatorName>(
    navigateTo: T,
    params: NavigatorParams[T],
  ) => {
    navigation.navigate(navigateTo, params);
  };

  const DATA = [
    {
      id: '1',
      name: 'Évènement',
      avatar: require('../../assets/boutons/ico-event.png'),
      navigateTo: 'EventNavigator' as keyof NavigatorParams,
      params: {EventRoute: 'Evenements' as BaseRoutes},
    },
    {
      id: '2',
      name: 'Alex',
      avatar: require('../../assets/images/Ellipse-96.png'),
      navigateTo: 'DiscoverNavigator' as keyof NavigatorParams,
      params: {DiscoverRoute: 'TabDiscover' as DiscoverRoutes},
    },
    {
      id: '3',
      name: 'Mike',
      avatar: require('../../assets/images/Ellipse-97.png'),
      navigateTo: 'DiscoverNavigator' as keyof NavigatorParams,
      params: {DiscoverRoute: 'TabDiscover' as DiscoverRoutes},
    },
    {
      id: '4',
      name: 'Beverly',
      avatar: require('../../assets/images/Ellipse-98.png'),
      navigateTo: 'DiscoverNavigator' as keyof NavigatorParams,
      params: {DiscoverRoute: 'TabDiscover' as DiscoverRoutes},
    },
    {
      id: '5',
      name: 'Alex',
      avatar: require('../../assets/images/Ellipse-96.png'),
      navigateTo: 'DiscoverNavigator' as keyof NavigatorParams,
      params: {DiscoverRoute: 'TabDiscover' as DiscoverRoutes},
    },
    {
      id: '6',
      name: 'Mike',
      avatar: require('../../assets/images/Ellipse-97.png'),
      navigateTo: 'DiscoverNavigator' as keyof NavigatorParams,
      params: {DiscoverRoute: 'TabDiscover' as DiscoverRoutes},
    },
    {
      id: '7',
      name: 'Beverly',
      avatar: require('../../assets/images/Ellipse-98.png'),
      navigateTo: 'DiscoverNavigator' as keyof NavigatorParams,
      params: {DiscoverRoute: 'TabDiscover' as DiscoverRoutes},
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextButtonPress = () => {
    setCurrentIndex((currentIndex + 1) % DATA.length);
  };

  const Item: React.FC<ItemProps> = ({name, avatar, onPress}) => (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 80,
        height: 100,
        margin: 6,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <Image
        source={avatar}
        style={{
          width: 60,
          height: 60,
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      />
      <Text
        style={{
          color: '#FFF',
          textAlign: 'center',
          fontFamily: 'Comfortaa',
          fontSize: 13,
          fontStyle: 'normal',
          fontWeight: 700,
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );

  const visibleData = DATA.slice(currentIndex, currentIndex + 4);

  return (
    <>
      {userPrenium === false ? (
        <ImageBackground
          source={require('../../assets/images/Rectangle-89.png')}
          style={{width: '100%', height: 127}}>
          <View
            style={{
              flexDirection: 'column',
              height: '100%',
              width: '100%',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              onPress={() =>
                userPrenium === false
                  ? setUserPrenium(true)
                  : setUserPrenium(false)
              }
              style={{
                flexDirection: 'row',
                width: 100,
                justifyContent: 'space-between',
                alignSelf: 'center',
                backgroundColor: 'transparent',
              }}>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  color: '#fff',
                  letterSpacing: 1,
                }}>
                Spotlight
              </Text>
              <Image
                source={require('../../assets/images/flèche.png')}
                style={{
                  width: 25,
                  height: 23,
                  resizeMode: 'contain',
                  transform: [{rotate: '90deg'}],
                }}
              />
            </TouchableOpacity>
            <SafeAreaView
              style={{
                flexDirection: 'row',
                height: 100,
                width: '100%',
              }}>
              <FlatList
                data={visibleData}
                renderItem={({item}) => (
                  <Item
                    name={item.name}
                    avatar={item.avatar}
                    onPress={() =>
                      handleItemPress(item.navigateTo, item.params)
                    }
                  />
                )}
                keyExtractor={item => item.id}
                horizontal={true}
              />
              <TouchableOpacity
                style={{
                  width: 25,
                  justifyContent: 'center',
                }}
                onPress={handleNextButtonPress}>
                <Image
                  source={require('../../assets/images/flèche.png')}
                  style={{
                    width: 25,
                    height: 23,
                    resizeMode: 'contain',
                    transform: [{rotate: '180deg'}],
                  }}
                />
              </TouchableOpacity>
            </SafeAreaView>
          </View>
        </ImageBackground>
      ) : (
        <View
          style={{
            width: '100%',
            height: 40,
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: 'white',
          }}>
          <TouchableOpacity
            onPress={() =>
              !userPrenium ? setUserPrenium(true) : setUserPrenium(false)
            }
            style={{
              flexDirection: 'row',
              width: 100,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 13,
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#0019A7',
                letterSpacing: 1,
                marginRight: 10,
              }}>
              Spotlight
            </Text>
            <Image
              source={require('../../assets/images/flèche-B.png')}
              style={{
                width: 13,
                height: 16,
                resizeMode: 'contain',
                transform: [{rotate: '-90deg'}],
              }}
            />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default Spotlight;
