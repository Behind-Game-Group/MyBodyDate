import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteType} from '../../types/routes/RouteType';
import {RouteProp} from '@react-navigation/native';
import {Messages} from '../pages/messages/Messages';

const MessageStack = createNativeStackNavigator<RouteType>();

type MessageNavigatorProps = {
  route: RouteProp<RouteType, 'MessageNavigator'>;
};

function MessageNavigator({route}: MessageNavigatorProps) {
  const {MessageRoute} = route.params;
  return (
    <MessageStack.Navigator initialRouteName={MessageRoute}>
      {/* Messages */}
      <MessageStack.Screen
        name="Messages"
        component={Messages}
        options={{headerShown: false}}
      />
    </MessageStack.Navigator>
  );
}

export default MessageNavigator;
