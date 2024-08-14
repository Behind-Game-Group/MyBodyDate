import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import MenuSlide from '../../components/menus/MenuSlide';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import NotificationsStyles from '../../../assets/style/styleScreens/styleSettings/StyleNotification';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Notifications_settings'>;
  route: RouteProp<RouteType, 'Notifications_settings'>;
};

export const NotificationsSettings: React.FC<HomeProps> = ({navigation}) => {
  const [buttonPressed, setButtonPressed] = useState<string>('');

  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <ImageBackground
      style={NotificationsStyles.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        backgroundColor={'white'}
        settingsNavigation={'Settings'}
        backButton={'Retour'}
      />
      <View style={{flex: 10}}>
        <Text style={NotificationsStyles.title}>Notifications</Text>
        <View style={NotificationsStyles.separator} />
        <Text style={NotificationsStyles.description}>
          Choisissez le type de notification que vous souhaitez recevoir.
        </Text>
        <View style={NotificationsStyles.notificationContainer}>
          <TouchableOpacity
            accessibilityLabel="Message reçues"
            onPress={() => navigation.navigate('Settings')}>
            <View style={NotificationsStyles.notificationItem}>
              <Text style={NotificationsStyles.notificationText}>
                Message reçues
              </Text>
              <Text style={NotificationsStyles.notificationType}>
                Push, e-mail
              </Text>
              <Image
                style={NotificationsStyles.arrowIcon}
                source={require('../../../assets/images/fleche-blue.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Nouvelles visites"
            onPress={() => navigation.navigate('Settings')}>
            <View style={NotificationsStyles.notificationItem}>
              <Text style={NotificationsStyles.notificationText}>
                Nouvelles visites
              </Text>
              <Text style={NotificationsStyles.notificationType}>
                Push, e-mail
              </Text>
              <Image
                style={NotificationsStyles.arrowIcon}
                source={require('../../../assets/images/fleche-blue.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Nouveaux Likes"
            onPress={() => navigation.navigate('Settings')}>
            <View style={NotificationsStyles.notificationItem}>
              <Text style={NotificationsStyles.notificationText}>
                Nouveaux Likes
              </Text>
              <Text style={NotificationsStyles.notificationType}>
                Push, e-mail
              </Text>
              <Image
                style={NotificationsStyles.arrowIcon}
                source={require('../../../assets/images/fleche-blue.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Sélection, de célibataires du moment"
            onPress={() => navigation.navigate('Settings')}>
            <View style={NotificationsStyles.notificationItem}>
              <View style={NotificationsStyles.notificationTextCol}>
                <Text style={NotificationsStyles.notificationText}>
                  Sélection, de célibataires
                </Text>
                <Text style={NotificationsStyles.notificationText}>
                  du moment (spotlight)
                </Text>
              </View>
              <Text style={NotificationsStyles.notificationType}>
                Push, e-mail
              </Text>
              <Image
                style={NotificationsStyles.arrowIcon}
                source={require('../../../assets/images/fleche-blue.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Invitations à de nouveaux évènements"
            onPress={() => navigation.navigate('Settings')}>
            <View style={NotificationsStyles.notificationItem}>
              <View style={NotificationsStyles.notificationTextCol}>
                <Text style={NotificationsStyles.notificationText}>
                  Invitations nouveaux
                </Text>
                <Text style={NotificationsStyles.notificationText}>
                  événements
                </Text>
              </View>
              <Text style={NotificationsStyles.notificationType}>
                Push, e-mail
              </Text>
              <Image
                style={NotificationsStyles.arrowIcon}
                source={require('../../../assets/images/fleche-blue.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Offres promotionnelles"
            onPress={() => navigation.navigate('Settings')}>
            <View style={NotificationsStyles.notificationItem}>
              <Text style={NotificationsStyles.notificationText}>
                Offres promotionnelles
              </Text>
              <Text style={NotificationsStyles.notificationType}>
                Push, e-mail
              </Text>
              <Image
                style={NotificationsStyles.arrowIcon}
                source={require('../../../assets/images/fleche-blue.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 2}}>
        <TouchableOpacity
          onPress={() => {
            setButtonPressed('retour');
            navigation.navigate('Settings');
          }}>
          <Image
            style={NotificationsStyles.backButton}
            source={
              buttonPressed === 'retour'
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc-Border.png')
            }
          />
          <Text style={NotificationsStyles.backButtonText}>
            Retour paramètres
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
