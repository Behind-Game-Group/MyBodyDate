import React, {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import MenuSlide from '../../components/menus/MenuSlide';
import {CheerFlakes} from '../../components/appsAffinitaires/CheerFlakes';
import {OpenBetween} from '../../components/appsAffinitaires/OpenBetween';
import {WineGap} from '../../components/appsAffinitaires/WineGap';
import {GoPride} from '../../components/appsAffinitaires/GoPride';
import {MyBodyDate} from '../../components/appsAffinitaires/MyBodyDate';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {getData} from '../../services/storage';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Apps_Affinitaires2'>;
  route: RouteProp<RouteType, 'Apps_Affinitaires2'>;
  menu: boolean;
};

export const AppsAffinitaires2: React.FC<HomeProps> = ({navigation, menu}) => {
  const [routeAffinite, setRouteAffinite] = useState<string>();

  const handleGetData = async () => {
    try {
      const routeAffinite = await getData('routeAffinite');
      setRouteAffinite(routeAffinite || 'MyBodyDate');
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}>
      {menu === true ? (
        <MenuSlide
          backgroundColor={'white'}
          backButton={'Back'}
          navigation={navigation}
          icoPushChange={false}
          settingsNavigation={undefined}
        />
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            left: 340,
            width: 30,
            height: 30,
            position: 'absolute',
            top: 50,
            zIndex: 3,
          }}>
          <Image
            source={require('../../../assets/images/Group-58.png')}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      )}
      {routeAffinite === 'WineGap' ? (
        <WineGap navigation={navigation} background={'1'} menu={menu} />
      ) : routeAffinite === 'GoPride' ? (
        <GoPride navigation={navigation} background={'1'} menu={menu} />
      ) : routeAffinite === 'CheerFlakes' ? (
        <CheerFlakes navigation={navigation} background={'1'} />
      ) : routeAffinite === 'OpenBetween' ? (
        <OpenBetween navigation={navigation} background={'1'} menu={menu} />
      ) : routeAffinite === 'MyBodyDate' ? (
        <MyBodyDate navigation={navigation} menu={menu} />
      ) : null}
    </View>
  );
};
