import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LinksSignIn} from '../pages/signIn/LinksSignIn';
import {SignInMail} from '../pages/signIn/SinscrireMail';
import {SignInPhone} from '../pages/signIn/SinscrirePhone';
import ConfirmationNumero from '../pages/signIn/ConfirmationNumero';
import {ConfirmationEmail} from '../pages/signIn/ConfirmationEmail';
import {RouteProp} from '@react-navigation/native';
import {RouteType} from '../../types/routes/RouteType';

const SignInStack = createNativeStackNavigator<RouteType>();

type SignInNavigatorProps = {
  route: RouteProp<RouteType, 'SignInNavigator'>;
};

function SignInNavigator({route}: SignInNavigatorProps) {
  const {SignInRoute} = route.params;

  return (
    <SignInStack.Navigator initialRouteName={SignInRoute}>
      <SignInStack.Screen
        name="Liens_dinscription"
        component={LinksSignIn}
        options={{headerShown: false}}
      />
      <SignInStack.Screen
        name="S_inscrire_par_mail"
        component={SignInMail}
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
      <SignInStack.Screen
        name="S_inscrire_par_numero"
        component={SignInPhone}
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
      <SignInStack.Screen
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
      <SignInStack.Screen
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
    </SignInStack.Navigator>
  );
}

export default SignInNavigator;
