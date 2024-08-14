import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Creation} from '../pages/register/CreationEtDeveloppement';
import {LoveCoach} from '../pages/register/LoveCoach';
import {Ville} from '../pages/register/Ville';
import {AccesPosition} from '../pages/register/AccesPosition';
import {Genre} from '../pages/register/Genre';
import {DateDeNaissance} from '../pages/register/DateDeNaissance';
import {Taille} from '../pages/register/Taille';
import {LangueParler} from '../pages/register/LangueParler';
import {Situation} from '../pages/register/Situation';
import {Orientation} from '../pages/register/Orientation';
import {Recherche1} from '../pages/register/Recherche1';
import {Recherche2} from '../pages/register/Recherche2';
import {Objectifs} from '../pages/register/Objectifs';
import Affinite from '../pages/register/Affinite';
import {RythmeDeVie1} from '../pages/register/RythmeDeVie1';
import {RythmeDeVie2} from '../pages/register/RythmeDeVie2';
import {Prenom} from '../pages/register/Prenom';
import {ConfirmationPrenom} from '../pages/register/ConfirmationPrenom';
import {ProfilMultiples} from '../pages/register/ProfilMultiples';
import {Prenium} from '../pages/register/Prenium';
import Compte from '../pages/register/Compte';
import {RecuperationCode} from '../pages/register/RecuperationCode';
import ConfirmationCompte from '../pages/register/ConfirmationCompte';
import AjoutPhoto from '../pages/register/AjoutPhoto';
import {EmpreinteVocal} from '../pages/register/EmpreinteVocal';
import CharteEngagement from '../pages/register/CharteEngagement';
import {Felicitations} from '../pages/register/Felicitations';
import {RouteProp} from '@react-navigation/native';
import {RouteType} from '../../types/routes/RouteType';
import {Bienvenue} from '../pages/register/Bienvenue';

const RegisterStack = createNativeStackNavigator<RouteType>();

type RegisterNavigatorProps = {
  route: RouteProp<RouteType, 'RegisterNavigator'>;
};

function RegisterNavigator({route}: RegisterNavigatorProps) {
  const RegisterRoute = route?.params?.RegisterRoute ?? 'Bienvenue';

  return (
    <RegisterStack.Navigator
      initialRouteName={RegisterRoute as keyof RouteType}>
      <RegisterStack.Screen
        name="Bienvenue"
        component={Bienvenue}
        options={{headerShown: false}}
      />
      <RegisterStack.Screen
        name="CreationEtDeveloppement"
        component={Creation}
        options={{headerShown: false}}
      />
      <RegisterStack.Screen
        name="LoveCoach"
        component={LoveCoach}
        options={{headerShown: false}}
      />
      <RegisterStack.Screen
        name="Ville"
        component={Ville}
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
      <RegisterStack.Screen
        name="Acces_Position"
        component={AccesPosition}
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
      <RegisterStack.Screen
        name="Genre"
        component={Genre}
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
      <RegisterStack.Screen
        name="Date_de_naissance"
        component={DateDeNaissance}
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
      <RegisterStack.Screen
        name="Taille"
        component={Taille}
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
      <RegisterStack.Screen
        name="Langue_parler"
        component={LangueParler}
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
      <RegisterStack.Screen
        name="Situation"
        component={Situation}
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
      <RegisterStack.Screen
        name="Orientation"
        component={Orientation}
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
      <RegisterStack.Screen
        name="Recherche1"
        component={Recherche1}
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
      <RegisterStack.Screen
        name="Recherche2"
        component={Recherche2}
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
      <RegisterStack.Screen
        name="Objectifs"
        component={Objectifs}
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
      <RegisterStack.Screen
        name="Affinite"
        component={Affinite}
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
      <RegisterStack.Screen
        name="Rythme1"
        component={RythmeDeVie1}
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
      <RegisterStack.Screen
        name="Rythme2"
        component={RythmeDeVie2}
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
      <RegisterStack.Screen
        name="Prenom"
        component={Prenom}
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
      <RegisterStack.Screen
        name="Confirmation_prenom"
        component={ConfirmationPrenom}
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
      <RegisterStack.Screen
        name="Profil_multiples"
        component={ProfilMultiples}
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
      <RegisterStack.Screen
        name="Prenium"
        component={Prenium}
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
      <RegisterStack.Screen
        name="Compte"
        component={Compte}
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
      <RegisterStack.Screen
        name="Recuperation_code"
        component={RecuperationCode}
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
      <RegisterStack.Screen
        name="Confirmation_compte"
        component={ConfirmationCompte}
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
      <RegisterStack.Screen
        name="Ajouter_photo"
        component={AjoutPhoto}
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
      <RegisterStack.Screen
        name="Empreinte_vocal"
        component={EmpreinteVocal}
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
      <RegisterStack.Screen
        name="Charte_engagement"
        component={CharteEngagement}
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
      <RegisterStack.Screen
        name="Felicitations"
        component={Felicitations}
        options={{headerShown: false}}
      />
    </RegisterStack.Navigator>
  );
}

export default RegisterNavigator;
