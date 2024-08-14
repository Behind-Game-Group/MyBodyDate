import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {MenuSlide} from '../../components/menus/MenuSlide';
import NotifcationsStyles from '../../../assets/style/styleScreens/StylesNotifications';
import MenuBottom from '../../components/menus/MenuBottom';
import {
  NavigationHelpers,
  NavigationProp,
  ParamListBase,
  RouteProp,
  TabNavigationState,
} from '@react-navigation/native';
import {getDatas} from '../../services/storage';
import {
  StorageValue,
  StorageValueMap,
} from '../../../interfaces/StorageValueInterface';
import {RouteType} from '../../../types/routes/RouteType';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import {BottomTabDescriptorMap} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {EdgeInsets} from 'react-native-safe-area-context';
import {useMainContext} from '../../context/MainContext ';

type NotificationsProps = {
  navigation: NavigationProp<RouteType, 'Notifications'>;
  // navigationTab: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  // state: TabNavigationState<ParamListBase>;
  // descriptors: BottomTabDescriptorMap;
  // insets: EdgeInsets;
};

const Notifications: React.FC<NotificationsProps> = ({
  navigation,
  // navigationTab,
  // state,
  // descriptors,
  // insets,
}) => {
  const {setTabPath} = useMainContext();

  useEffect(() => {
    setTabPath('Moi');
  }, []);

  const getAvatarImage = (avatar: string) => {
    switch (avatar) {
      case 'lisa':
        return require('../../../assets/images/lisa-ellipse.png');
      case 'beverly':
        return require('../../../assets/images/beverly-ellipse.png');
      case 'kolia':
        return require('../../../assets/images/kolia-ellipse.png');
      case 'staff':
        return require('../../../assets/images/staff-ellipse.png');
      default:
        return require('../../../assets/images/staff-ellipse.png');
    }
  };

  const notifications = [
    {
      type: 'Professionnel',
      userName: 'Lisa',
      avatar: 'lisa',
      text: 'À visité votre profil',
      unread: false,
      prenium: false,
      certified: true,
      dateTime: '2023-08-07T12:30:00.000Z',
    },
    {
      type: "Cercle d'ami",
      userName: 'Beverly',
      avatar: 'beverly',
      text: 'A liké votre profil',
      unread: true,
      prenium: false,
      certified: true,
      dateTime: '2023-08-09T10:15:00.000Z',
    },
    // ... autres notifications ...
  ];

  const sortedNotifications = notifications.sort(
    (nouveau, ancien) =>
      new Date(ancien.dateTime).getTime() -
      new Date(nouveau.dateTime).getTime(),
  );

  const getTitleForDate = (date: Date) => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const dayBeforeYesterday = new Date();
    dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2);

    if (date.toDateString() === today.toDateString()) {
      return "Aujourd'hui";
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Hier';
    } else if (date.toDateString() === dayBeforeYesterday.toDateString()) {
      return 'Avant-hier';
    } else {
      const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
      };
      return date.toLocaleDateString('fr-FR', options);
    }
  };

  return (
    <View style={NotifcationsStyles.container}>
      <View style={{flex: 2, backgroundColor: '#fff'}}>
        <MenuSlide
          navigation={navigation}
          icoPushChange={true}
          backButton={undefined}
          backgroundColor={'white'}
          settingsNavigation={undefined}
        />
        <View style={NotifcationsStyles.viewTtitle}>
          <Text style={NotifcationsStyles.title}>Notifications</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Recherche')}>
            <Image
              source={require('../../../assets/boutons/icon-recherche.png')}
              style={NotifcationsStyles.icoRecherche}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flex: 8}}>
        <ImageBackground
          style={NotifcationsStyles.bgGradient}
          source={require('../../../assets/images/bg-parametres.png')}>
          <View style={NotifcationsStyles.viewSuggest}>
            <Text style={NotifcationsStyles.textSuggest}>
              Bénéficiez du Premium et profitez complètement de vos
              notifications !
            </Text>
            <Text style={NotifcationsStyles.textSuggestBold}>
              Obtenir Premium ?
            </Text>
          </View>
          <View style={NotifcationsStyles.viewScroll}>
            <ScrollView
              style={NotifcationsStyles.scrollView}
              contentContainerStyle={{paddingBottom: 40}}>
              {sortedNotifications.map((notification, index) => {
                const notificationDate = new Date(notification.dateTime);
                const title = getTitleForDate(notificationDate);

                return (
                  <View key={index}>
                    {index === 0 ||
                    title !==
                      getTitleForDate(
                        new Date(sortedNotifications[index - 1].dateTime),
                      ) ? (
                      <Text style={NotifcationsStyles.dateNotification}>
                        {title}
                      </Text>
                    ) : null}

                    <View>
                      <TouchableOpacity
                        key={index}
                        style={[
                          NotifcationsStyles.boxNotification,
                          {
                            backgroundColor:
                              notification.unread === true
                                ? 'rgba(0, 25, 167, 0.13)'
                                : 'transparent',
                          },
                        ]}>
                        <Image
                          source={getAvatarImage(notification.avatar)}
                          style={[
                            NotifcationsStyles.notificationAvatar,
                            {
                              borderColor:
                                notification.type === 'Professionnel'
                                  ? '#000'
                                  : notification.type === "Cercle d'ami"
                                  ? '#9424FA'
                                  : notification.type === 'Relation amoureuse'
                                  ? '#FF84D7'
                                  : notification.type === 'Staff'
                                  ? '#0019A7'
                                  : '#0019A7',
                            },
                          ]}
                        />
                        <View style={NotifcationsStyles.notificationBoxCol}>
                          <View style={NotifcationsStyles.notificationBoxRow}>
                            <Text
                              style={NotifcationsStyles.notificationUsername}>
                              {notification.userName}
                            </Text>
                            {notification.certified === true ? (
                              <Image
                                source={require('../../../assets/images/quality3.png')}
                                style={NotifcationsStyles.notificationCertified}
                              />
                            ) : null}
                            {notification.prenium === true ? (
                              <Image
                                source={require('../../../assets/images/ico-prenium.png')}
                                style={NotifcationsStyles.notificationPrenium}
                              />
                            ) : null}
                          </View>
                          <Text style={NotifcationsStyles.notificationText}>
                            {notification.text}
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <View style={NotifcationsStyles.notificationSeparator} />
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          {/* <MenuBottom 
            state={state}
            descriptors={descriptors}
            navigation={navigation}
            insets={insets}
          /> */}
        </ImageBackground>
      </View>
    </View>
  );
};

export default Notifications;
