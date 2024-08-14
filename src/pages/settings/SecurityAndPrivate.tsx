import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import StyleSecurityAndPrivate from '../../../assets/style/styleScreens/styleSettings/StyleSecutityAndPrivate';
import MenuSlide from '../../components/menus/MenuSlide';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Securite_et_privee'>;
  route: RouteProp<RouteType, 'Securite_et_privee'>;
};

export const SecurityAndPrivate: React.FC<HomeProps> = ({navigation}) => {
  const [buttonPressed, setButtonPressed] = useState<string>('');

  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <ImageBackground
      style={StyleSecurityAndPrivate.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        backgroundColor={'white'}
        settingsNavigation={'Settings'}
        backButton={'Retour'}
      />
      <View style={{flex: 5}}>
        <Text style={StyleSecurityAndPrivate.title}>Sécurité & vie privée</Text>
        <View style={StyleSecurityAndPrivate.separator} />
        <Text style={StyleSecurityAndPrivate.description}>
          Gérez vos modes de connexions sécurisé ?
        </Text>
        <View style={StyleSecurityAndPrivate.securityAndPrivateContainer}>
          <TouchableOpacity
            accessibilityLabel="Mode de connexion"
            onPress={() => navigation.navigate('Mode_de_connexion')}>
            <View style={StyleSecurityAndPrivate.securityAndPrivateItem}>
              <Text style={StyleSecurityAndPrivate.securityAndPrivateText}>
                Mode de connexion
              </Text>
              <Text style={StyleSecurityAndPrivate.securityAndPrivateType}>
                e-mail, Google
              </Text>
              <Image
                style={StyleSecurityAndPrivate.arrowIcon}
                source={require('../../../assets/images/fleche-blue.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Paramètre de confidentialités"
            onPress={() =>
              navigation.navigate('Parametre_de_confidentialites')
            }>
            <View style={StyleSecurityAndPrivate.securityAndPrivateItem}>
              <Text style={StyleSecurityAndPrivate.securityAndPrivateText}>
                Paramètre de confidentialités
              </Text>
              <Image
                style={StyleSecurityAndPrivate.arrowIcon}
                source={require('../../../assets/images/fleche-blue.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Bloquer les contacts"
            onPress={() => navigation.navigate('Bloquer_contacts')}>
            <View style={StyleSecurityAndPrivate.securityAndPrivateItem}>
              <Text style={StyleSecurityAndPrivate.securityAndPrivateText}>
                Bloquer les contacts
              </Text>
              <Image
                style={StyleSecurityAndPrivate.arrowIcon}
                source={require('../../../assets/images/fleche-blue.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => {
            setButtonPressed('retour');
            navigation.navigate('Settings');
          }}>
          <Image
            style={StyleSecurityAndPrivate.backButton}
            source={
              buttonPressed === 'retour'
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc-Border.png')
            }
          />
          <Text
            style={[
              StyleSecurityAndPrivate.backButtonText,
              {color: buttonPressed === 'retour' ? '#fff' : '#0019A7'},
            ]}>
            Retour paramètres
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
