import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppsAffinitaires2} from '../pages/appsAffinitaires/AppsAffinitaires2';
import {AppsAffinitaires} from '../pages/appsAffinitaires/AppsAffinitaires';
import {RouteType} from '../../types/routes/RouteType';
import {RouteProp} from '@react-navigation/native';

const AppsAffinitairesStack = createNativeStackNavigator<RouteType>();

type AppsAffinitairesNavigatorProps = {
  route: RouteProp<RouteType, 'AppsAffinitairesNavigator'>;
};

function AppsAffinitairesNavigator({route}: AppsAffinitairesNavigatorProps) {
  const AppsAffinitairesRoute =
    route?.params?.AppsAffinitairesRoute ?? 'Apps_Affinitaires';
  const {routeAffinite, menu} = route.params;

  return (
    <AppsAffinitairesStack.Navigator initialRouteName={AppsAffinitairesRoute}>
      {/* Apps Affinitires */}
      <AppsAffinitairesStack.Screen
        name="Apps_Affinitaires"
        component={AppsAffinitaires}
        options={{headerShown: false}}
      />
      <AppsAffinitairesStack.Screen
        name="Apps_Affinitaires2"
        component={AppsAffinitaires2}
        options={{headerShown: false}}
        initialParams={{routeAffinite, menu}}
      />
    </AppsAffinitairesStack.Navigator>
  );
}

export default AppsAffinitairesNavigator;
