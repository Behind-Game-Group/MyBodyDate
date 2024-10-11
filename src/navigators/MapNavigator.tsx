import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteType} from '../../types/routes/RouteType';
import {RouteProp} from '@react-navigation/native';
import {Map} from '../pages/map/Map';

const MapStack = createNativeStackNavigator<RouteType>();

type MapNavigatorProps = {
  route: RouteProp<RouteType, 'MapNavigator'>;
};

function MapNavigator({route}: MapNavigatorProps) {
  const {MapRoute} = route.params;
  return (
    <MapStack.Navigator initialRouteName={MapRoute}>
      {/* Messages */}
      <MapStack.Screen
        name="Map"
        component={Map}
        options={{headerShown: false}}
      />
    </MapStack.Navigator>
  );
}

export default MapNavigator;
