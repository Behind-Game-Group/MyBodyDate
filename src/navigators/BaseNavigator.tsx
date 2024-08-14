import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeNavigator from './HomeNavigator';
import SignInNavigator from './SignInNavigator';
import LogInNavigator from './LogInNavigator';

import {RouteProp} from '@react-navigation/native';
import {RouteType} from '../../types/routes/RouteType';

import SearchNavigator from './SearchNavigator';
import TabNavigator from './TabNavigator';
import AppsAffinitairesNavigator from './AppsAffinitairesNavigator';
import EventNavigator from './EventNavigator';
import PulseNavigator from './PulseNavigator';
import PassNavigator from './PassNavigator';
import GameNavigator from './GameNavigator';
import SettingsNavigator from './SettingsNavigator';
import RegisterNavigator from './RegisterNavigator';
import {CercleContextProvider} from '../context/CercleContext';
import {UserContextProvider} from '../context/UserContext';
import TabProfilNavigator from './TabProfilNavigator';
import ProfilNavigator from './ProfilNavigator';
// import DiscoverNavigator from './DiscoverNavigator';

const BaseStack = createNativeStackNavigator<RouteType>();

type BaseNavigatorProps = {
  route?: RouteProp<RouteType, 'BaseNavigator'>;
};

function BaseNavigator({route}: BaseNavigatorProps) {
  const BaseRoute = route?.params?.BaseRoute ?? 'HomeNavigator';
  const getInitialRouteName = () => {
    switch (BaseRoute) {
      case 'AppsAffinitairesNavigator':
        return 'AppsAffinitairesNavigator';
      case 'SettingsNavigator':
        return 'SettingsNavigator';
      case 'SearchNavigator':
        return 'SearchNavigator';
      case 'GameNavigator':
        return 'GameNavigator';
      case 'SignInNavigator':
        return 'SignInNavigator';
      case 'LogInNavigator':
        return 'LogInNavigator';
      case 'RegisterNavigator':
        return 'RegisterNavigator';
      case 'TabNavigator':
        return 'TabNavigator';
      case 'EventNavigator':
        return 'EventNavigator';
      case 'PulseNavigator':
        return 'PulseNavigator';
      case 'PassNavigator':
        return 'PassNavigator';
      case 'HomeNavigator':
      default:
        return 'HomeNavigator';
    }
  };

  const initialRouteName = getInitialRouteName();

  return (
    <CercleContextProvider>
      <UserContextProvider>
        <BaseStack.Navigator initialRouteName={initialRouteName}>
          <BaseStack.Screen
            name="HomeNavigator"
            component={HomeNavigator}
            options={{headerShown: false}}
          />
          <BaseStack.Screen
            name="RegisterNavigator"
            component={RegisterNavigator}
            options={{headerShown: false}}
          />
          <BaseStack.Screen
            name="SettingsNavigator"
            component={SettingsNavigator}
            options={{headerShown: false}}
          />
          <BaseStack.Screen
            name="SignInNavigator"
            component={SignInNavigator}
            options={{headerShown: false}}
          />
          <BaseStack.Screen
            name="LogInNavigator"
            component={LogInNavigator}
            options={{headerShown: false}}
          />

          {/* {Tabs} */}
          <BaseStack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{headerShown: false}}
          />

          {/* {TabProfil} */}
          <BaseStack.Screen
            name="TabProfilNavigator"
            component={TabProfilNavigator}
            options={{headerShown: false}}
          />

          {/* Even */}
          <BaseStack.Screen
            name="EventNavigator"
            component={EventNavigator}
            options={{headerShown: false}}
          />

          {/* {Search} */}
          <BaseStack.Screen
            name="SearchNavigator"
            component={SearchNavigator}
            options={{headerShown: false}}
          />

          {/* Pulse */}
          <BaseStack.Screen
            name="PulseNavigator"
            component={PulseNavigator}
            options={{headerShown: false}}
          />

          {/* Pass */}
          <BaseStack.Screen
            name="PassNavigator"
            component={PassNavigator}
            options={{headerShown: false}}
          />

          {/* Game */}
          <BaseStack.Screen
            name="GameNavigator"
            component={GameNavigator}
            options={{headerShown: false}}
          />

          {/* Apps Affinitires */}
          <BaseStack.Screen
            name="AppsAffinitairesNavigator"
            component={AppsAffinitairesNavigator}
            options={{headerShown: false}}
          />

          {/* Notifications */}
          {/* <BaseStack.Screen
            name="NotificationsNavigator"
            component={NotificationsNavigator}
            options={{headerShown: false}}
          /> */}

          {/* Discover */}
          {/* <BaseStack.Screen
            name="DiscoverNavigator"
            component={DiscoverNavigator}
            options={{headerShown: false}}
          /> */}

          {/* Profil */}
          <BaseStack.Screen
            name="ProfilNavigator"
            component={ProfilNavigator}
            options={{headerShown: false}}
          />

          {/* Talk */}
          {/* <BaseStack.Screen
        name="TalkNavigator"
        component={TalkNavigator}
        options={{headerShown: false}}
      /> */}

          {/* Message */}
          {/* <BaseStack.Screen
        name="MessageNavigator"
        component={MessageNavigator}
        options={{headerShown: false}}
      /> */}
        </BaseStack.Navigator>
      </UserContextProvider>
    </CercleContextProvider>
  );
}

export default BaseNavigator;
