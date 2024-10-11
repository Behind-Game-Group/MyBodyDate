/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EvenBio} from '../pages/even/EvenBio';
import {Even} from '../pages/even/Even';

const EvenStack = createNativeStackNavigator();

function EventNavigator({route}) {
  const {EvenRoute} = route.params;
  return (
    <EvenStack.Navigator initialRouteName={EvenRoute}>
      {/* Even */}
      <EvenStack.Screen
        name="Evenements"
        component={Even}
        options={{headerShown: false}}
      />
      <EvenStack.Screen
        name="Evenements_Bio"
        component={EvenBio}
        options={{headerShown: false}}
      />
    </EvenStack.Navigator>
  );
}

export default EventNavigator;
