/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {RouteType} from '../../types/routes/RouteType';
import {VoixDuJour} from '../pages/game/VoixDuJour';
import {VoixDuJour2} from '../pages/game/VoixDuJour2';
import {CarteBriseGlace} from '../pages/game/CarteBriseGlace';
import {CarteMagique} from '../pages/game/CarteMagique';

const GameStack = createNativeStackNavigator<RouteType>();

type GameStackProps = {
  route: RouteProp<RouteType, 'GameNavigator'>;
};

function GameNavigator({route}: GameStackProps) {
  const GameRoute = route?.params?.GameRoute ?? 'Voix_du_jour';

  return (
    <GameStack.Navigator initialRouteName={GameRoute}>
      {/* Game */}
      <GameStack.Screen
        name="Voix_du_jour"
        component={VoixDuJour}
        options={{headerShown: false}}
      />
      <GameStack.Screen
        name="Voix_du_jour2"
        component={VoixDuJour2}
        options={{headerShown: false}}
      />
      <GameStack.Screen
        name="Carte_brise_glace"
        component={CarteBriseGlace}
        options={{headerShown: false}}
      />
      <GameStack.Screen
        name="Carte_magique"
        component={CarteMagique}
        options={{headerShown: false}}
      />
    </GameStack.Navigator>
  );
}

export default GameNavigator;
