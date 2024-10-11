import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {RouteType} from '../../types/routes/RouteType';
import Notifications from '../pages/notifications/Notifications';

const NotificationsStack = createNativeStackNavigator<RouteType>();

type NotificationsNavigatorProps = {
  route?: RouteProp<RouteType, 'NotificationsNavigator'>;
};
function NotificationsNavigator({route}: NotificationsNavigatorProps) {
  const NotificationsRoute =
    route?.params?.NotificationsRoute ?? 'Notifications';
  return (
    <NotificationsStack.Navigator initialRouteName={NotificationsRoute}>
      <NotificationsStack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
    </NotificationsStack.Navigator>
  );
}

export default NotificationsNavigator;
