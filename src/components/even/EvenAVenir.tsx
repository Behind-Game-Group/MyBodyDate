import React from 'react';
import {View, Text, Image, ImageBackground, TextInput} from 'react-native';
import MenuSlide from '../../components/menus/MenuSlide';
import {MenuBottom} from '../../components/menus/MenuBottom';
import {
  NavigationHelpers,
  NavigationProp,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import {BottomTabDescriptorMap} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {EdgeInsets} from 'react-native-safe-area-context';

type HomeProps = {
  navigation: NavigationProp<RouteType, keyof RouteType>;
  navigationTab: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  insets: EdgeInsets;
  imagePath: string;
};

export const EventAVenir: React.FC<HomeProps> = ({
  navigation,
  imagePath,
  navigationTab,
  state,
  descriptors,
  insets,
}) => {
  return (
    <View style={{flex: 1}}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        backButton="Retour"
        imagePath={imagePath}
        tabPath={imagePath}
        backgroundColor={'white'}
        settingsNavigation={undefined}
      />
      <View
        style={{
          height: 75,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row',
        }}>
        <Image
          source={require('../../../assets/images/Line-113.png')}
          style={{
            width: 145,
            height: 1,
            top: 45,
            position: 'absolute',
            right: 30,
          }}
        />
        <Text
          style={{
            fontSize: 24,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#0019A7',
          }}>
          Événements
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TextInput
            style={{
              fontSize: 12,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#929EDE',
              padding: 5,
            }}
            defaultValue="Rechercher un évent"
            // Vous pouvez ajouter des gestionnaires d'événements ici pour gérer les changements de texte, etc.
          />
          <Image
            source={require('../../../assets/images/Loupe.png')}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </View>
      </View>
      <ImageBackground
        source={require('../../../assets/images/bg-parametres.png')}
        style={{flex: 1}}>
        <View
          style={{
            alignItems: 'center',
            top: 20,
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#0019A7',
              }}>
              Événements à venir
            </Text>
            <Image
              source={require('../../../assets/images/Line-107.png')}
              style={{
                right: 18,
                width: 195,
                height: 3,
                top: 10,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#0019A7',
            }}>
            Mes événements
          </Text>
        </View>
        <View
          style={{
            left: 30,
            top: 50,
            justifyContent: 'space-around',
          }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#0019A7',
            }}>
            Événements à venir
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#929EDE',
            }}>
            Mes prochaines dates
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            top: 80,
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <View>
            <Image
              source={require('../../../assets/images/Event1.png')}
              style={{
                width: 187,
                height: 152,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Gilory',
                fontWeight: '700',
                color: '#FF84D7',
                marginBottom: 5,
              }}>
              Paris
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Gilory',
                fontWeight: '700',
                color: '#0019A7',
                marginBottom: 5,
              }}>
              Soire rouge
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Gilory',
                fontWeight: '700',
                color: '#FF84D7',
                marginBottom: 45,
              }}>
              30 Juin 2023
            </Text>
            <View
              style={{
                left: 15,
              }}>
              <Image
                source={require('../../../assets/images/Reserver.png')}
                style={{
                  width: 115,
                  height: 33,
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            top: 100,
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <View>
            <Image
              source={require('../../../assets/images/Event2.png')}
              style={{
                width: 187,
                height: 152,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Gilory',
                fontWeight: '700',
                color: '#D40000',
                marginBottom: 5,
              }}>
              Live
            </Text>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../../assets/images/PointR.png')}
                style={{
                  width: 9,
                  height: 9,
                }}
              />
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 20,
                  fontFamily: 'Gilory',
                  fontWeight: '700',
                  color: '#0019A7',
                  marginBottom: 5,
                }}>
                Karaoké
              </Text>
            </View>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Gilory',
                fontWeight: '700',
                color: '#FF84D7',
                marginBottom: 45,
              }}>
              2 Juin 2023
            </Text>
            <View
              style={{
                left: 15,
              }}>
              <Image
                source={require('../../../assets/images/Reserver.png')}
                style={{
                  width: 115,
                  height: 33,
                }}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
      <MenuBottom
        navigation={navigationTab}
        tabPath={'Discover'}
        state={state}
        descriptors={descriptors}
        insets={insets}
      />
    </View>
  );
};
