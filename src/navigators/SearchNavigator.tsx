/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {RouteType} from '../../types/routes/RouteType';
import Research from '../pages/research/Research';
import AdvancedFiltre from '../pages/research/AdvancedFiltre';
import SaTaille from '../pages/research/SaTaille';
import SaMorphologie from '../pages/research/SaMorphologie';
import OrigineEthnique from '../pages/research/OrigineEthnique';
import NiveauEtudeResearch from '../pages/research/NiveauEtudeResearch';
import Metier from '../pages/research/Metier';
import Religion from '../pages/research/Religion';
import SigneAstrologie from '../pages/research/SigneAstrologie';
import OrientationPolitique from '../pages/research/OrientationPolitique';
import Tabac from '../pages/research/Tabac';
import Alcool from '../pages/research/Alcool';
import PratiqueSportive from '../pages/research/PratiqueSportive';
import Enfants from '../pages/research/Enfants';
import Revenus from '../pages/research/Revenus';
import SearchPulse from '../pages/research/SearchPulse';

const SearchStack = createNativeStackNavigator<RouteType>();

type SearchNavigatorProps = {
  route: RouteProp<RouteType, 'SearchNavigator'>;
};

function SearchNavigator({route}: SearchNavigatorProps) {
  const {SearchRoute} = route.params;
  return (
    <SearchStack.Navigator initialRouteName={SearchRoute as keyof RouteType}>
      {/* Search */}
      <SearchStack.Screen
        name="Recherche"
        component={Research}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Filtres_avances"
        component={AdvancedFiltre}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Sa_taille"
        component={SaTaille}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Sa_morphologie"
        component={SaMorphologie}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Origine_ethnique"
        component={OrigineEthnique}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Niveau_etude"
        component={NiveauEtudeResearch}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Metier"
        component={Metier}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Religion"
        component={Religion}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Signe_astro"
        component={SigneAstrologie}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Orientation_politique"
        component={OrientationPolitique}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Tabac"
        component={Tabac}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Alcool"
        component={Alcool}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Pratique_sportive"
        component={PratiqueSportive}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Enfants"
        component={Enfants}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Revenus"
        component={Revenus}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Search_pulse"
        component={SearchPulse}
        options={{headerShown: false}}
      />
    </SearchStack.Navigator>
  );
}

export default SearchNavigator;
