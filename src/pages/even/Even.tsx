import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import MenuSlide from '../../components/menus/MenuSlide';
import {MenuBottom} from '../../components/menus/MenuBottom';

import {EvenBis} from '../../components/even/EvenBis';

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
  navigation: NavigationProp<RouteType, 'Evenements'>;
  navigationTab: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  insets: EdgeInsets;
  imagePath: string;
};

export const Even: React.FC<HomeProps> = ({
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
      <EvenBis navigation={navigation} />
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
