import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {RouteType} from '../../types/routes/RouteType';
import {ProfilMeRP} from '../pages/profil/ProfilMeRP';
import {ProfilMeCA} from '../pages/profil/ProfilMeCA';
import {ProfilMeRA} from '../pages/profil/ProfilMeRA';
import NotificationsNavigator from './NotificationsNavigator';

type TabProfilNavigatorProps = {
  route: RouteProp<RouteType, 'TabProfilNavigator'>;
};

function TabProfilNavigator({route}: TabProfilNavigatorProps) {
  const {TabProfilRoute} = route.params;

  const TabProfilStack = createNativeStackNavigator();
  console.log(TabProfilRoute);

  return (
    <TabProfilStack.Navigator initialRouteName={TabProfilRoute}>
      {/* Profil */}
      <TabProfilStack.Screen
        name="ProfilMeRP"
        component={ProfilMeRP}
        options={{headerShown: false}}
      />
      <TabProfilStack.Screen
        name="ProfilMeCA"
        component={ProfilMeCA}
        options={{headerShown: false}}
      />
      <TabProfilStack.Screen
        name="ProfilMeRA"
        component={ProfilMeRA}
        options={{headerShown: false}}
      />
      <TabProfilStack.Screen
        name="NotificationsNavigator"
        component={NotificationsNavigator}
        options={{headerShown: false}}
        initialParams={{NotificationsRoute: 'Notifications'}}
      />
    </TabProfilStack.Navigator>
  );
}

export default TabProfilNavigator;
