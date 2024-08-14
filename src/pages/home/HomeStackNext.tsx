import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  storeData,
  // getData
} from '../../services/storage';
import Styles from '../../../assets/style/Styles';
import {RouteType} from '../../../types/routes/RouteType';
import {NavigationProp} from '@react-navigation/native';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'HomeNext'>;
};

export const HomeStackNext: React.FC<HomeProps> = ({navigation}) => {
  const [buttonPressed, setButtonPressed] = useState<string>();

  const handleStoreData = async (key: string, value: string) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background2.png')}>
        <View style={[Styles.ViewLogo3]}>
          <Image
            style={Styles.logo3}
            source={require('../../../assets/logos/logo-row-mybodydate-transparent.png')}
          />
        </View>
        <View style={[Styles.ViewText2, {top: 200}]}>
          <Text style={[Styles.textBlue2]}>UN COUP DE COEUR N'ATTEND PAS</Text>
          <Text style={[Styles.textBlue22, {top: 20}]}>
            NE PERDEZ PLUS RIEN...{' '}
          </Text>
        </View>
        <View style={[{top: -50}]}>
          <TouchableOpacity
            style={[{top: 0, height: 60, width: '90%', alignSelf: 'center'}]}
            accessibilityLabel="S'inscrire"
            onPress={() => {
              setButtonPressed('inscription');
              handleStoreData('route_choice', 'inscription');
              navigation.navigate('RegisterNavigator', {
                RegisterRoute: 'Bienvenue',
              });
              // navigation.navigate('TabProfilNavigator', {
              //   TabProfilRoute: 'ProfilMeRA',
              // });
            }}>
            <Text style={[Styles.textBtn6, {zIndex: 1, top: 10}]}>
              S'inscrire
            </Text>
            <Image
              style={[
                {
                  top: -34,
                  width: '100%',
                  height: 60,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                },
              ]}
              source={
                buttonPressed === 'inscription'
                  ? require('../../../assets/boutons/Bouton-Rouge.png')
                  : require('../../../assets/boutons/Bouton-Bleu.png')
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[{top: 20, height: 60, width: '90%', alignSelf: 'center'}]}
            accessibilityLabel="Se connecter"
            onPress={() => {
              setButtonPressed('connexion');
              handleStoreData('route_choice', 'connexion');
              navigation.navigate('LogInNavigator', {
                LoginRoute: 'Liens_de_connexion',
              });
            }}>
            <Text style={[Styles.textBtn6, {zIndex: 2, top: 10}]}>
              Se connecter
            </Text>
            <Image
              style={[
                {
                  top: -34,
                  width: '100%',
                  height: 60,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                },
              ]}
              source={
                buttonPressed === 'connexion'
                  ? require('../../../assets/boutons/Bouton-Rouge.png')
                  : require('../../../assets/boutons/Bouton-Bleu.png')
              }
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
