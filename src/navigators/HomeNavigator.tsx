import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '../pages/home/Home';
import {HomeStackNext} from '../pages/home/HomeStackNext';
import {RouteProp} from '@react-navigation/native';
import {RouteType} from '../../types/routes/RouteType';

const HomeStack = createNativeStackNavigator<RouteType>();

type HomeNavigatorProps = {
  route?: RouteProp<RouteType, 'HomeNavigator'>;
};

function HomeNavigator({route}: HomeNavigatorProps) {
  const HomeRoute = route?.params?.HomeRoute ?? 'Home';

  return (
    <HomeStack.Navigator initialRouteName={HomeRoute}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="HomeNext"
        component={HomeStackNext}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
