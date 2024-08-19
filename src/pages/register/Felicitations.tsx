import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import {getData} from '../../services/storage';
import StylesFelicitation from '../../../assets/style/styleScreens/styleRegister/StyleFelicitation';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {BtnNext} from '../../components/boutons/BtnNext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Felicitations'>;
};

export const Felicitations: React.FC<HomeProps> = ({navigation}) => {
  const [buttonPressed, setButtonPressed] = useState<string>('');
  const [userPrenom, setUserPrenom] = useState<string>();

  const handleGetData = async () => {
    try {
      const prenom = await getData('firstname');
      setUserPrenom(prenom);
      // console.log(prenom);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <ImageBackground
      style={[StylesFelicitation.bgGradient]}
      source={require('../../../assets/images/bg-congrats.png')}>
      <View style={[Styles.ViewText, {top: 100, left: 0}]}>
        <TouchableOpacity
          style={[{left: 0}]}
          onPress={() =>
            navigation.navigate('DiscoverNavigator', {
              DiscoverRoute: 'Discover',
            })
          }
          accessibilityLabel="Passer">
          <Text style={[StylesFelicitation.TxtBtn]}>Découvrir les profils</Text>
        </TouchableOpacity>
        <Text style={[StylesFelicitation.TxtTitle]}>FÉLICITATIONS !{'\n'}</Text>
        <Text style={[StylesFelicitation.txtWhite]}>
          {userPrenom}, VOUS AVEZ 7 JOURS POUR AVOIR UN PROFIL VÉRIFIÉ
        </Text>
        <Text style={[StylesFelicitation.txtWhite2]}>
          Notre site de rencontre n’accepte que des profils vérifiés dans les 7
          jours suivant l’inscription. Au-delà de ce délai, votre compte est
          suspendu
        </Text>
        <Text style={[StylesFelicitation.txtWhite3]}>
          Nous sommes conforme au RGPD, règlement général à la protection des
          données.
        </Text>
      </View>
      <View style={{height: 50, bottom: 50}}>
        <BtnNext
          navigation={navigation}
          navigateTo="TabNavigator"
          propName="TabNavigator"
          propRoute="TabNavigator"
          txt="Vérifier mon profil"
          handleStore={undefined}
          postInfo={undefined}
          background="White"
          top={0}
          left={0}
        />
      </View>
    </ImageBackground>
  );
};
