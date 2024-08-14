/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteType} from '../../types/routes/RouteType';
import {RouteProp} from '@react-navigation/native';
import {PulseRecherche} from '../pages/pulse/PulseRecherche';
import SearchPulse from '../pages/research/SearchPulse';
import SearchPulseSettings from '../pages/research/SearchPulseSettings';
import {PulseSpotlight} from '../pages/pulse/PulseSpotlight';
import {PulseLike} from '../pages/pulse/PulseLike';
import {PulseProfil} from '../pages/pulse/PulseProfil';

const PulseStack = createNativeStackNavigator<RouteType>();

type PulseNavigatorProps = {
  route: RouteProp<RouteType, 'PulseNavigator'>;
};

function PulseNavigator({route}: PulseNavigatorProps) {
  const {PulseRoute} = route.params;
  return (
    <PulseStack.Navigator initialRouteName={PulseRoute}>
      {/* Pulse */}
      <PulseStack.Screen
        name="Pulse_recherche"
        component={PulseRecherche}
        options={{headerShown: false}}
      />
      <PulseStack.Screen
        name="Search_pulse"
        component={SearchPulse}
        options={{headerShown: false}}
      />
      <PulseStack.Screen
        name="Search_pulse_settings"
        component={SearchPulseSettings}
        options={{headerShown: false}}
      />
      <PulseStack.Screen
        name="Pulse_spotlight"
        component={PulseSpotlight}
        options={{headerShown: false}}
      />
      <PulseStack.Screen
        name="Pulse_like"
        component={PulseLike}
        options={{headerShown: false}}
      />
      <PulseStack.Screen
        name="Pulse_profil"
        component={PulseProfil}
        options={{headerShown: false}}
      />
    </PulseStack.Navigator>
  );
}

export default PulseNavigator;
