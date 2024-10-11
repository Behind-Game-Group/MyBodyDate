import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {WebSocketProvider} from './src/context/WebSocketContext';
import BaseNavigator from './src/navigators/BaseNavigator';

function App() {
  return (
    <NavigationContainer>
      <WebSocketProvider>
        <StatusBar translucent backgroundColor="transparent" />
        <BaseNavigator />
      </WebSocketProvider>
    </NavigationContainer>
  );
}

export default App;
