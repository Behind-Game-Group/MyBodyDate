import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import settingsStyles from '../../../assets/style/styleScreens/styleSettings/StyleSettings';
import MenuSlide from '../../components/menus/MenuSlide';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {SettingsRoutes} from '../../../types/routes/SettingsRoutes';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
import {BtnNext} from '../../components/boutons/BtnNext';

type ItemProps = {
  label: string;
  value?: string;
  description?: string;
  settingsRoute: SettingsRoutes;
};

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Settings'>;
  route: RouteProp<RouteType, 'Settings'>;
};

const commonTextStyles = {
  fontFamily: 'Comfortaa',
  fontWeight: '700' as const,
};

export const Settings: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  const renderNotificationItem: React.FC<ItemProps> = ({
    label,
    settingsRoute,
  }) => (
    <TouchableOpacity
      accessibilityLabel={label}
      onPress={() => {
        if (settingsRoute === 'Compte_non_trouve') {
          navigation.navigate(settingsRoute);
        } else {
          navigation.navigate(settingsRoute);
        }
      }}
      key={label}>
      <View style={settingsStyles.notificationItem}>
        <Text style={{...commonTextStyles, color: '#0019A7', width: 340}}>
          {label}
        </Text>
        <Image
          style={settingsStyles.arrowIcon}
          source={require('../../../assets/images/fleche-blue.png')}
        />
      </View>
    </TouchableOpacity>
  );

  const renderLocationItem: React.FC<ItemProps> = ({
    label,
    value,
    settingsRoute,
  }) => (
    <TouchableOpacity
      accessibilityLabel={label}
      onPress={() => {
        if (settingsRoute === 'Compte_non_trouve') {
          navigation.navigate(settingsRoute);
        } else {
          navigation.navigate(settingsRoute);
        }
      }}
      key={label}>
      <View style={settingsStyles.locationItem}>
        <Text style={{...commonTextStyles, color: '#0019A7', width: 200}}>
          {label}
        </Text>
        {value && (
          <Text style={{...commonTextStyles, color: '#383A39', width: 140}}>
            {value}
          </Text>
        )}
        <Image
          style={settingsStyles.arrowIcon}
          source={require('../../../assets/images/fleche-blue.png')}
        />
      </View>
    </TouchableOpacity>
  );

  const renderModeItem: React.FC<ItemProps> = ({
    label,
    description,
    settingsRoute,
  }) => (
    <TouchableOpacity
      accessibilityLabel={label}
      onPress={() => {
        if (settingsRoute === 'Compte_non_trouve') {
          navigation.navigate(settingsRoute);
        } else {
          navigation.navigate(settingsRoute);
        }
      }}
      key={label}>
      <View style={settingsStyles.modeItem}>
        <View style={settingsStyles.modeContainer}>
          <Text style={{...commonTextStyles, color: '#0019A7', fontSize: 16}}>
            {label}
          </Text>
          {description && (
            <Text style={{...commonTextStyles, color: '#383A39', fontSize: 14}}>
              {description}
            </Text>
          )}
        </View>
        <Image
          style={settingsStyles.arrowIcon}
          source={require('../../../assets/images/fleche-blue.png')}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={settingsStyles.container}>
      <ImageBackground
        style={settingsStyles.bgGradient}
        source={require('../../../assets/images/bg-parametres.png')}>
        <MenuSlide
          navigation={navigation}
          icoPushChange={false}
          backgroundColor={'white'}
          settingsNavigation={undefined}
          backButton={'back'}
        />
        <View style={{flex: 11}}>
          <TitreUneLigne
            txtTitle="Paramètres"
            fontFamily="Comfortaa-Bold"
            color={'#0019A7'}
            fontSize={24}
            textAlign="center"
            fontWeight={'700'}
            top={15}
            left={undefined}
          />
          <View style={settingsStyles.separator} />
          <View style={settingsStyles.viewScroll}>
            <ScrollView
              style={settingsStyles.scrollView}
              contentContainerStyle={{paddingBottom: 10}}>
              {renderNotificationItem({
                label: 'Notifications settings',
                settingsRoute: 'Notifications_settings',
              })}
              {renderNotificationItem({
                label: 'Sécurité & vie privée',
                settingsRoute: 'Securite_et_privee',
              })}
              {renderNotificationItem({
                label: 'Contact & FAQ',
                settingsRoute: 'Contact_et_FAQ',
              })}
              {renderLocationItem({
                label: 'Emplacement',
                value: 'Paris, FR',
                settingsRoute: 'Emplacement',
              })}
              {renderModeItem({
                label: 'Mode invisible',
                description: 'Visitez des profils incognito',
                settingsRoute: 'Mode_invisible',
              })}
              {renderModeItem({
                label: 'Mode voyage',
                description:
                  'Pour voir plus de monde. Changez votre localisation.',
                settingsRoute: 'Mode_voyage',
              })}
              {renderNotificationItem({
                label: 'Mettre mon compte en pause',
                settingsRoute: 'Mettre_en_pause',
              })}
            </ScrollView>
          </View>
        </View>
        <View style={settingsStyles.viewBottom}>
          <BtnNext
            navigation={navigation}
            navigateTo="SettingsNavigator"
            propName="SettingsRoute"
            propRoute="Settings"
            txt="Déconnexion"
            handleStore={undefined}
            postInfo={undefined}
            background="Blue-border"
            top={0}
            left={0}
            fontSize={18}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('Supprimer_mon_compte')}>
            <Text style={settingsStyles.deleteAccountText}>
              Supprimer mon compte
            </Text>
          </TouchableOpacity>

          <Image
            style={settingsStyles.logoImage}
            source={require('../../../assets/logos/logo-mybodydate-transparent-black.png')}
          />

          <Text style={settingsStyles.versionText}>Version 1.0</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Settings;
