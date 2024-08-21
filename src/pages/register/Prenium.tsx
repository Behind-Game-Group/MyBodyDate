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
import {getData} from '../../services/storage';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
import {BtnNext} from '../../components/boutons/BtnNext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Prenium'>;
};

export const Prenium: React.FC<HomeProps> = ({navigation}) => {
  const [prenom, setPrenom] = useState<string>();
  const [pseudo, setPseudo] = useState<string>();
  const [showFirstname, setShowFirstname] = useState<boolean>();
  const [radioValue, setRadioValue] = useState<boolean>(false);

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
        <TitreUneLigne
          txtTitle="ABONNEMENT PRENIUM"
          textAlign="center"
          top={100}
          left={undefined}
          fontFamily={undefined}
          color={undefined}
          fontWeight={undefined}
          fontSize={24}
        />
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
        <BtnNext
          navigation={navigation}
          navigateTo="Prenium"
          propName="RegisterRoute"
          propRoute="Prenium"
          txt="Voir les conditions d'abonnement Prenium"
          handleStore={undefined}
          postInfo={undefined}
          color={undefined}
          background={undefined}
          top={280}
          left={0}
          fontSize={18}
          fontFamily={undefined}
          fontWeight="500"
        />
        <BtnNext
          navigation={navigation}
          navigateTo="Compte"
          propName="RegisterRoute"
          propRoute="Compte"
          txt="Continuer"
          handleStore={{key: 'prenium', value: radioValue ?? ''}}
          postInfo={undefined}
          color="#0019A7"
          background="White"
          top={120}
          left={0}
          fontSize={18}
          fontFamily={undefined}
          fontWeight="700"
        />
      </ImageBackground>
    </View>
  );
};
