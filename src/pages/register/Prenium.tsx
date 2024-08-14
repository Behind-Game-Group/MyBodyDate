import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
// import Styles from '../../../assets/style/Styles';
import StylesPrenium from '../../../assets/style/styleScreens/styleRegister/StylePrenium';
import {storeData, getData} from '../../services/storage';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Prenium'>;
};

/* Screen 2 */

export const Prenium: React.FC<HomeProps> = ({navigation}) => {
  const [prenom, setPrenom] = useState<string>();
  const [pseudo, setPseudo] = useState<string>();
  const [showFirstname, setShowFirstname] = useState<boolean>();
  const [radioValue, setRadioValue] = useState<boolean>(false);

  const handleStoreData = async (key: string, value: boolean) => {
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
      setShowFirstname(showFistrname || '');
      // console.log('show_firstname : ' + showFistrname);
      const prenium = await getData('prenium');
      setRadioValue(prenium || '');
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const [buttonPressed, setButtonPressed] = useState<boolean>();

  // Obtenir et formater la date courante en utilisant la méthode Date()
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString(); // année sur 4 chiffres
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // mois sur 2 chiffres
  const day = ('0' + currentDate.getDate()).slice(-2); // jour sur 2 chiffres
  // Constant récupérant l'année, le mois et le jour courant
  const formattedDate = `${year}${month}${day}`;

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <View style={StylesPrenium.container}>
      <ImageBackground
        style={StylesPrenium.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <Text style={[StylesPrenium.TxtTitle]}>ABONNEMENT PRENIUM</Text>
        <Text style={[StylesPrenium.textWhiteRound]}>
          {showFirstname && pseudo
            ? pseudo
            : !showFirstname && prenom
            ? prenom
            : 'Non communiqué'}
        </Text>
        {/* Parenthèse (id) à changer par n° id_user de la bdd */}
        <Text style={[StylesPrenium.textBlueCenter]}>
          ID.{formattedDate}.(id)
        </Text>
        <Text style={[StylesPrenium.textWhite]}>
          Grâce à l&apos;abonnement, obtenez{'\n'}
          notre carte de visite avec votre {'\n'}
          numéro d&apos;identification.{'\n'}
          Donnez cette carte à un.e{'\n'}
          inconnu.e dans le rue pour qu&apos;il{'\n'}
          vous retouve sur notre application.
        </Text>
        <TouchableOpacity style={[StylesPrenium.ViewImgCard]}>
          <Image
            style={[StylesPrenium.imgCard]}
            source={require('../../../assets/images/carte-visite.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            radioValue ? setRadioValue(false) : setRadioValue(true);
          }}
          style={[StylesPrenium.radioInputContainer]}>
          <Image
            source={
              radioValue
                ? require('../../../assets/images/radio_selected.png')
                : require('../../../assets/images/radio_unselected.png')
            }
            style={{width: 20, height: 20}}
          />
          <Text style={[StylesPrenium.TextInput]}>
            Cocher, pour obtenir votre abnnement Prenium
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[]}
          onPress={() => {
            navigation.navigate('Prenium');
          }}
          accessibilityLabel="Voir les conditions d'abonnement Prenium<">
          <Text style={[StylesPrenium.textWhite2]}>
            Voir les conditions d&apos;abonnement Prenium
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={StylesPrenium.ViewBtn}
          onPress={() => {
            navigation.navigate('Compte');
            handleStoreData('prenium', radioValue);
            setButtonPressed(true);
          }}
          accessibilityLabel="Continuer">
          <Text
            style={[
              StylesPrenium.TxtBtn,
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Continuer
          </Text>
          <Image
            style={[StylesPrenium.imgBtn]}
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
