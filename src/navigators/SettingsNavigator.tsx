/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteType} from '../../types/routes/RouteType';
import {RouteProp} from '@react-navigation/native';
import {NotificationsSettings} from '../pages/settings/NotificationsSettings';
import {SecurityAndPrivate} from '../pages/settings/SecurityAndPrivate';
import {ContactAndFAQ} from '../pages/settings/ContactAndFAQ';
import {Settings} from '../pages/settings/Settings';
import {Aide} from '../pages/settings/Aide';
import {CentreSecurite} from '../pages/settings/CentreSecurite';
import {NousContactez} from '../pages/settings/NousContactez';
import {Emplacement} from '../pages/settings/Emplacement';
import {ModeInvisible} from '../pages/settings/ModeInvisible';
import {ModeVoyage} from '../pages/settings/ModeVoyage';
import {ModeDeConnexion} from '../pages/settings/ModeDeConnexion';
import {ChangerLocalisation} from '../pages/settings/ChangerLocalisation';
import {ParametresConfident} from '../pages/settings/ParamtresConfident';
import {AutorisationsNecessaires} from '../pages/settings/AutorisationsNecessaires';
import {BloquerContacts} from '../pages/settings/BloquerContacts';
import SupprimerCompte from '../pages/settings/SupprimerCompte';
import CompteNonTrouve from '../pages/settings/CompteNonTrouve';
import {FAQ} from '../pages/settings/FAQ';
import MettreEnPause from '../pages/settings/MettreEnPause';

type SettingsNavigatorProps = {
  route: RouteProp<RouteType, 'SettingsNavigator'>;
};

const SettingsStack = createNativeStackNavigator<RouteType>();

function SettingsNavigator({route}: SettingsNavigatorProps) {
  const SettingsRoute = route?.params?.SettingsRoute ?? 'Settings';
  return (
    <SettingsStack.Navigator initialRouteName={SettingsRoute}>
      {/* SETTINGS SCREENS */}
      <SettingsStack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Notifications_settings"
        component={NotificationsSettings}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Securite_et_privee"
        component={SecurityAndPrivate}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Contact_et_FAQ"
        component={ContactAndFAQ}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Aide"
        component={Aide}
        // initialParams={{imagePath: imagePath, tabPath: tabPath}}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Centre_de_securite"
        component={CentreSecurite}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Nous_contactez"
        component={NousContactez}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="FAQ"
        component={FAQ}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Emplacement"
        component={Emplacement}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Mode_invisible"
        component={ModeInvisible}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Mode_voyage"
        component={ModeVoyage}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Mettre_en_pause"
        component={MettreEnPause}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Mode_de_connexion"
        component={ModeDeConnexion}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Changer_localisation"
        component={ChangerLocalisation}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Parametre_de_confidentialites"
        component={ParametresConfident}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Autorisations_necessaires"
        component={AutorisationsNecessaires}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Bloquer_contacts"
        component={BloquerContacts}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Supprimer_mon_compte"
        component={SupprimerCompte}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Compte_non_trouve"
        component={CompteNonTrouve}
        options={{headerShown: false}}
      />
    </SettingsStack.Navigator>
  );
}

export default SettingsNavigator;
