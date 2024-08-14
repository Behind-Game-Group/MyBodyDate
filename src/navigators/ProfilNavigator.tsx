import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {RouteType} from '../../types/routes/RouteType';
import {ProfilMeRPfirst} from '../pages/profil/ProfilMeRPfirst';
import {ProfilMeCAfirst} from '../pages/profil/ProfilMeCAfirst';
import {ProfilMeRAfirst} from '../pages/profil/ProfilMeRAfirst';

type ProfilNavigatorProps = {
  route: RouteProp<RouteType, 'ProfilNavigator'>;
};

function ProfilNavigator({route}: ProfilNavigatorProps) {
  const {ProfilRoute} = route.params;

  const ProfilStack = createNativeStackNavigator();
  console.log(ProfilRoute);

  return (
    <ProfilStack.Navigator initialRouteName={ProfilRoute}>
      {/* Profil */}
      <ProfilStack.Screen
        name="ProfilMeRPfirst"
        component={ProfilMeRPfirst}
        options={{headerShown: false}}
      />
      <ProfilStack.Screen
        name="ProfilMeCAfirst"
        component={ProfilMeCAfirst}
        options={{headerShown: false}}
      />
      <ProfilStack.Screen
        name="ProfilMeRAfirst"
        component={ProfilMeRAfirst}
        options={{headerShown: false}}
      />
    </ProfilStack.Navigator>
  );
}

export default ProfilNavigator;
