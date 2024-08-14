import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {storeData, getData} from '../../services/storage';
import StylesProfilMultiples from '../../../assets/style/styleScreens/styleRegister/StyleProfilMultiples';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Confirmation_prenom'>;
};

/* Screen 2 */

export const ProfilMultiples: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    handleGetData();
  }, []);

  const handleStoreData = async (key: string, value: string | boolean) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetData = async () => {
    try {
      const userPrenom = await getData('firstname');
      setPrenom(userPrenom || '');
      // console.log('firstname : ' + userPrenom);
      const userPseudo = await getData('username');
      setPseudo(userPseudo || '');
      // console.log('username : ' + userPseudo);
      const showFistrname = await getData('show_firstname');
      setIsEnabled(showFistrname || '');
      // console.log('show_firstname : ' + showFistrname);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [prenom, setPrenom] = useState<string>();
  const [pseudo, setPseudo] = useState<string>();

  const [buttonPressed, setButtonPressed] = useState<boolean>();

  // Obtenir et formater la date courante en utilisant la méthode Date()
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString(); // année sur 4 chiffres
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // mois sur 2 chiffres
  const day = ('0' + currentDate.getDate()).slice(-2); // jour sur 2 chiffres
  // Constant récupérant l'année, le mois et le jour courant
  const formattedDate = `${year}${month}${day}`;

  const [radioValue, setRadioValue] = useState<boolean>(false);

  // console.log('Profil multiples: ' + radioValue);

  return (
    <View style={StylesProfilMultiples.container}>
      <ImageBackground
        style={StylesProfilMultiples.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Text style={[StylesProfilMultiples.TxtTitle]}>PROFIL MULTIPLIÉS</Text>
        <Text style={[StylesProfilMultiples.textWhiteRound]}>
          {isEnabled && pseudo ? pseudo : prenom ? prenom : 'Non communiqué'}
        </Text>
        {/* Parenthèse (id) à changer par n° id_user de la bdd */}
        <Text style={[StylesProfilMultiples.textBlueCenter]}>
          ID.{formattedDate}.(id)
        </Text>
        <Text style={[StylesProfilMultiples.textWhite]}>
          Grâce au profil multipliés,{'\n'}vous bénéficiez gratuitement d’une
          {'\n'}visibilité de votre profil auprès de{'\n'}votre communauté
          d’affinité ;{'\n'}Parent célibataire, sénior,{'\n'}Gay/lesbienne et
          libertin.
        </Text>
        <View style={[StylesProfilMultiples.ViewRow]}>
          <TouchableOpacity
            onPress={() => {
              handleStoreData('routeAffinite', 'CheerFlakes');
              navigation.navigate('AppsAffinitairesNavigator', {
                AppsAffinitairesRoute: 'Apps_Affinitaires2',
                menu: false,
              });
            }}>
            <Image
              style={[StylesProfilMultiples.btnImgApp]}
              source={require('../../../assets/images/cheerflakes-thumb.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleStoreData('routeAffinite', 'WineGap');
              navigation.navigate('AppsAffinitairesNavigator', {
                AppsAffinitairesRoute: 'Apps_Affinitaires2',
                menu: false,
              });
            }}>
            <Image
              style={[StylesProfilMultiples.btnImgApp]}
              source={require('../../../assets/images/winegap-thmb.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={[StylesProfilMultiples.ViewRow]}>
          <TouchableOpacity
            onPress={() => {
              handleStoreData('routeAffinite', 'GoPride');
              navigation.navigate('AppsAffinitairesNavigator', {
                AppsAffinitairesRoute: 'Apps_Affinitaires2',
                menu: false,
              });
            }}>
            <Image
              style={[StylesProfilMultiples.btnImgApp]}
              source={require('../../../assets/images/gopride-thumb.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleStoreData('routeAffinite', 'OpenBetween');
              navigation.navigate('AppsAffinitairesNavigator', {
                AppsAffinitairesRoute: 'Apps_Affinitaires2',
                menu: false,
              });
            }}>
            <Image
              style={[StylesProfilMultiples.btnImgApp]}
              source={require('../../../assets/images/openbetween-thumb.png')}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[StylesProfilMultiples.radioInputContainerTwo]}
          onPress={() => {
            radioValue ? setRadioValue(false) : setRadioValue(true);
          }}>
          <Image
            source={
              radioValue
                ? require('../../../assets/images/radio_selected.png')
                : require('../../../assets/images/radio_unselected.png')
            }
            style={{width: 20, height: 20}}
          />
          <Text style={[StylesProfilMultiples.TextInput]}>
            J’accepte le multi-profil GRATUIT.
          </Text>
        </TouchableOpacity>
        <Text style={[StylesProfilMultiples.textWhite2]}>
          Voir les profils dans les paramètres plus tard
        </Text>
        <TouchableOpacity
          style={[StylesProfilMultiples.ViewBtn]}
          onPress={() => {
            navigation.navigate('Prenium');
            handleStoreData('profil_multiple', radioValue);
            setButtonPressed(true);
          }}
          accessibilityLabel="Continuer">
          <Text
            style={[
              StylesProfilMultiples.TxtBtn,
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Continuer
          </Text>
          <Image
            style={[StylesProfilMultiples.imgBtn]}
            source={
              buttonPressed
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc.png')
            }
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
