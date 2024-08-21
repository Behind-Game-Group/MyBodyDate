import React, {useEffect} from 'react';
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
import {BtnNext} from '../../components/boutons/BtnNext';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Securite_et_privee'>;
  route: RouteProp<RouteType, 'Securite_et_privee'>;
};

export const SecurityAndPrivate: React.FC<HomeProps> = ({navigation}) => {
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
        <TitreUneLigne
          txtTitle="Sécurité & vie privée"
          fontFamily="Comfortaa-Bold"
          color={'#0019A7'}
          fontSize={24}
          textAlign="center"
          fontWeight={'700'}
          top={25}
          left={undefined}
        />
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
        <BtnNext
          navigation={navigation}
          navigateTo="Settings"
          propName="SettingsRoute"
          propRoute="Settings"
          txt="Retour paramètres"
          handleStore={undefined}
          postInfo={undefined}
          color="#0019A7"
          background="Blue-border"
          top={0}
          left={0}
          fontSize={18}
          fontFamily={undefined}
          fontWeight="700"
        />
      </View>
    </ImageBackground>
  );
};
