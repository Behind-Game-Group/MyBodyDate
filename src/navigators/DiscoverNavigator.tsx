import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Discover} from '../pages/discover/Discover';
import {DiscoverCA} from '../pages/discover/DiscoverCA';
import {DiscoverRP} from '../pages/discover/DiscoverRP';
import {DiscoverBio} from '../pages/discover/DiscoverBio';
import {CestMatch} from '../pages//discover/CestMatch';
import {RouteProp} from '@react-navigation/native';
import {RouteType} from '../../types/routes/RouteType';

const DiscoverStack = createNativeStackNavigator<RouteType>();

type DiscoverNavigatorProps = {
  route: RouteProp<RouteType, 'DiscoverNavigator'>;
};

function DiscoverNavigator({route}: DiscoverNavigatorProps) {
  const {DiscoverRoute} = route.params;
  return (
    <DiscoverStack.Navigator initialRouteName={DiscoverRoute}>
      {/* Discover */}
      <DiscoverStack.Screen
        name="Discover"
        component={Discover}
        options={{headerShown: false}}
      />
      <DiscoverStack.Screen
        name="DiscoverCA"
        component={DiscoverCA}
        options={{headerShown: false}}
      />
      <DiscoverStack.Screen
        name="DiscoverRP"
        component={DiscoverRP}
        options={{headerShown: false}}
      />
      <DiscoverStack.Screen
        name="DiscoverBio"
        component={DiscoverBio}
        options={{headerShown: false}}
      />
      <DiscoverStack.Screen
        name="C_est_match"
        component={CestMatch}
        options={{headerShown: false}}
      />
    </DiscoverStack.Navigator>
  );
}

export default DiscoverNavigator;
