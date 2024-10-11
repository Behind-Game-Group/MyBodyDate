/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {RouteType} from '../../types/routes/RouteType';
import TalkChat from '../pages/talk/TalkChat';
import {TalkPhone} from '../pages/talk/TalkPhone';
import {TalkPhoneAccept} from '../pages/talk/TalkPhoneAccept';
import {TalkVideo} from '../pages/talk/TalkVideo';
import {TalkVideoAccept} from '../pages/talk/TalkVideoAccept';

type TalkNavigatorProps = {
  route: RouteProp<RouteType, 'TalkNavigator'>;
};

function TalkNavigator({route}: TalkNavigatorProps) {
  const {TalkRoute} = route.params ?? 'TalkChat';

  const TalkStack = createNativeStackNavigator<RouteType>();

  return (
    <TalkStack.Navigator initialRouteName={TalkRoute}>
      {/* Talk */}
      <TalkStack.Screen
        name="TalkChat"
        component={TalkChat}
        options={{headerShown: false}}
      />
      <TalkStack.Screen
        name="TalkPhone"
        component={TalkPhone}
        options={{headerShown: false}}
      />
      <TalkStack.Screen
        name="TalkPhoneAccept"
        component={TalkPhoneAccept}
        options={{headerShown: false}}
      />
      <TalkStack.Screen
        name="TalkVideo"
        component={TalkVideo}
        options={{headerShown: false}}
      />
      <TalkStack.Screen
        name="TalkVideoAccept"
        component={TalkVideoAccept}
        options={{headerShown: false}}
      />
    </TalkStack.Navigator>
  );
}

export default TalkNavigator;
