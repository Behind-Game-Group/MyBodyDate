import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../../assets/style/StyleComposants/StyleMenuBottom';
import {NavigationHelpers, ParamListBase} from '@react-navigation/native';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import {DiscoverRoutes} from '../../../types/routes/DiscoverRoutes';
import {useMainContext} from '../../context/MainContext ';
import {TabProfilRoutes} from '../../../types/routes/TabProfilRoutes';

type MenuBottomProps = {
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

export const MenuBottom: React.FC<MenuBottomProps> = ({navigation}) => {
  const {cercle, tabPath, setTabPath} = useMainContext();
  const [tabPathDiscover, setTabPathDiscover] =
    useState<DiscoverRoutes>('Discover');
  const [tabPathMoi, setTabPathMoi] = useState<TabProfilRoutes>('ProfilMeRA');

  if (!navigation) {
    return null;
  }

  // Logique de détermination de l'écran en fonction de tabPath
  useEffect(() => {
    cercle === 'Amour'
      ? [setTabPathDiscover('Discover'), setTabPathMoi('ProfilMeRA')]
      : cercle === 'Ami'
      ? [setTabPathDiscover('DiscoverCA'), setTabPathMoi('ProfilMeCA')]
      : cercle === 'Professionnel'
      ? [setTabPathDiscover('DiscoverRP'), setTabPathMoi('ProfilMeRP')]
      : [setTabPathDiscover('Discover'), setTabPathMoi('ProfilMeRA')];
  }, [cercle]);

  // console.log(tabPathDiscover, '', tabPathMoi);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setTabPath('Discover');
          navigation.navigate(tabPathDiscover);
        }}>
        <Image
          source={require('../../../assets/boutons/explorateur.png')}
          style={styles.tabImage}
        />
        <Text style={styles.tabText}>Découvrir</Text>
        {tabPath === 'Discover' ? (
          <View style={styles.activeIndicator} />
        ) : null}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setTabPath('Talk');
          navigation.navigate('TalkNavigator', {TalkRoute: 'TalkChat'});
        }}>
        <Image
          source={require('../../../assets/boutons/chat.png')}
          style={styles.tabImage}
        />
        <Text style={styles.tabText}>Talk</Text>
        {tabPath === 'Talk' ? <View style={styles.activeIndicator} /> : null}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setTabPath('Messages');
          navigation.navigate('MessageNavigator', {
            MessagesRoutes: 'Messages',
          });
        }}>
        <Image
          source={require('../../../assets/boutons/email.png')}
          style={styles.tabImage}
        />
        <Text style={styles.tabText}>Messages</Text>
        {tabPath === 'Messages' ? (
          <View style={styles.activeIndicator} />
        ) : null}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setTabPath('Map');
          navigation.navigate('MapNavigator', {MapRoute: 'Map'});
        }}>
        <Image
          source={require('../../../assets/boutons/locator.png')}
          style={styles.tabImage}
        />
        <Text style={styles.tabText}>Map</Text>
        {tabPath === 'Map' ? <View style={styles.activeIndicator} /> : null}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setTabPath('Moi');
          navigation.navigate(tabPathMoi);
          // navigation.navigate('TabProfilNavigator', {
          //   TabProfilRoute: tabPathMoi,
          // });
        }}>
        <Image
          source={require('../../../assets/boutons/user.png')}
          style={styles.tabImage}
        />
        <Text style={styles.tabText}>Moi</Text>
        {tabPath === 'Moi' ? <View style={styles.activeIndicator} /> : null}
      </TouchableOpacity>
    </View>
  );
};

export default MenuBottom;
