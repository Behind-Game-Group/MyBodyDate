import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LinksLogIn} from '../pages/login/LinksLogIn';
import ConfirmationNumero from '../pages/signIn/ConfirmationNumero';
import {ConfirmationEmail} from '../pages/signIn/ConfirmationEmail';
import {RecuperationCompte} from '../pages/login/RecuperationCompte';
import {RouteProp} from '@react-navigation/native';
import {RouteType} from '../../types/routes/RouteType';

const LogInStack = createNativeStackNavigator<RouteType>();

type LogInNavigatorProps = {
  route: RouteProp<RouteType, 'LogInNavigator'>;
};

function LogInNavigator({route}: LogInNavigatorProps) {
  const LoginRoute = route?.params?.LoginRoute ?? 'Liens_de_connexion';

  return (
    <LogInStack.Navigator initialRouteName={LoginRoute ?? 'Liens_de_connexion'}>
      <LogInStack.Screen
        name="Liens_de_connexion"
        component={LinksLogIn}
        options={{headerShown: false}}
      />
      <LogInStack.Screen
        name="Recuperation_email"
        component={RecuperationCompte}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTitleStyle: {
            color: '#FFF',
          },
        }}
      />
      <LogInStack.Screen
        name="Confirmation_numero"
        component={ConfirmationNumero}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTitleStyle: {
            color: '#FFF',
          },
        }}
      />
      <LogInStack.Screen
        name="Recuperation_compte"
        component={RecuperationCompte}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTitleStyle: {
            color: '#FFF',
          },
        }}
      />
      <LogInStack.Screen
        name="Confirmation_email"
        component={ConfirmationEmail}
        options={{
          headerShown: true,
          title: 'Retour',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTitleStyle: {
            color: '#FFF',
          },
        }}
      />
    </LogInStack.Navigator>
  );
}

export default LogInNavigator;
