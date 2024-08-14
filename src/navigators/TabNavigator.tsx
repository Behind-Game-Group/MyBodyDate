import React from // useState // useEffect,
'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MenuBottom from '../components/menus/MenuBottom';
import DiscoverNavigator from './DiscoverNavigator';
import TalkNavigator from './TalkNavigator';
import MessageNavigator from './MessageNavigator';
import MapNavigator from './MapNavigator';
import {RouteProp} from '@react-navigation/native';
import {RouteType} from '../../types/routes/RouteType';
// import {DiscoverRoutes} from '../../types/routes/DiscoverRoutes';
// import {TabProfilRoutes} from '../../types/routes/TabProfilRoutes';
// import {useMainContext} from '../context/MainContext ';
import TabProfilNavigator from './TabProfilNavigator';

type TabNavigatorProps = {
  route: RouteProp<RouteType, 'TabNavigator'>;
};

const Tab = createBottomTabNavigator();

function TabNavigator({route}: TabNavigatorProps) {
  // const {cercle} = useMainContext();
  // const [tabPathDiscover, setTabPathDiscover] =
  //   useState<DiscoverRoutes>('Discover');
  // const [tabPathMoi, setTabPathMoi] = useState<TabProfilRoutes>('ProfilMeRA');
  const DiscoverRoute = route?.params ?? 'Discover';
  const TabProfilRoute = route?.params ?? 'ProfilMeRA';

  // Logique de détermination de l'écran en fonction de tabPath
  // useEffect(() => {
  //   cercle === 'Amour'
  //     ? [setTabPathDiscover('Discover'), setTabPathMoi('ProfilMeRA')]
  //     : cercle === 'Ami'
  //     ? [setTabPathDiscover('DiscoverCA'), setTabPathMoi('ProfilMeCA')]
  //     : cercle === 'Professionnel'
  //     ? [setTabPathDiscover('DiscoverRP'), setTabPathMoi('ProfilMeRP')]
  //     : [setTabPathDiscover('Discover'), setTabPathMoi('ProfilMeRA')];
  // }, [cercle]);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [{display: 'flex'}, null],
      }}
      tabBar={props => (
        <MenuBottom
          {...props}
          // tabPathDiscover={tabPathDiscover}
          // tabPathMoi={tabPathMoi}
        />
      )}>
      <Tab.Screen
        name="DiscoverNavigator"
        component={DiscoverNavigator}
        options={{headerShown: false}}
        initialParams={{DiscoverRoute: DiscoverRoute}}
        key="discover"
      />
      <Tab.Screen
        name="TalkNavigator"
        component={TalkNavigator}
        options={{headerShown: false}}
        initialParams={{TalkRoute: 'TalkChat'}}
        key="talk"
      />
      <Tab.Screen
        name="MessageNavigator"
        component={MessageNavigator}
        options={{headerShown: false}}
        initialParams={{MessageRoute: 'Messages'}}
        key="messages"
      />
      <Tab.Screen
        name="MapNavigator"
        component={MapNavigator}
        options={{headerShown: false}}
        initialParams={{MapRoute: 'Map'}}
        key="map"
      />
      <Tab.Screen
        name="TabProfilNavigator"
        component={TabProfilNavigator}
        options={{headerShown: false}}
        initialParams={{TabProfilRoute: TabProfilRoute}}
        key="moi"
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
