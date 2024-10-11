import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {RouteType} from '../../types/routes/RouteType';
import {PrendPass} from '../pages/pass/PrendPass';
import {PassFlash21} from '../pages/pass/PassFlash21';
import {PassFlash19} from '../pages/pass/PassFlash19';

const PassStack = createNativeStackNavigator<RouteType>();

type PassNavigatorProps = {
  route: RouteProp<RouteType, 'PassNavigator'>;
};

function PassNavigator({route}: PassNavigatorProps) {
  const {PassRoute} = route.params ?? 'Prend_pass';

  return (
    <PassStack.Navigator initialRouteName={PassRoute}>
      {/* Pass */}
      <PassStack.Screen
        name="Prend_pass"
        component={PrendPass}
        options={{headerShown: false}}
      />
      <PassStack.Screen
        name="Pass_flash_21"
        component={PassFlash21}
        options={{headerShown: false}}
      />
      <PassStack.Screen
        name="Pass_flash_19"
        component={PassFlash19}
        options={{headerShown: false}}
      />
    </PassStack.Navigator>
  );
}

export default PassNavigator;
