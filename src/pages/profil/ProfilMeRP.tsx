import React, {useEffect, useState} from 'react';
import {ImageRequireSource, StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {MenuSlide} from '../../components/menus/MenuSlide';
import StylesProfileMeRp from '../../../assets/style/styleScreens/styleProfil/StyleProfileMeRp';
import BtnReadRecord from '../../components/boutons/BtnReadRecord';

import {RouteType} from '../../../types/routes/RouteType';
import {NavigationProp} from '@react-navigation/native';
import {
  getDatas,
  // storeData
} from '../../services/storage';
import {useMainContext} from '../../context/MainContext ';

interface RetrievedValue {
  key: string;
  value: string | boolean | number | undefined;
}

interface RetrievedValuesMap {
  [key: string]: string | boolean | number | undefined;
}

type HomeProps = {
  navigation: NavigationProp<RouteType, 'ProfilMeRP'>;
};

export const ProfilMeRP: React.FC<HomeProps> = ({navigation}) => {
  const [userPrenom, setUserPrenom] = useState<string>();
  const [userBirth, setUserBirth] = useState<number>();
  const [userCity, setUserCity] = useState<string>();
  const [showFirstname, setShowFirstname] = useState<boolean>();
  const [userName, setUserName] = useState<string>();
  const defaultAvatar: ImageRequireSource = require('../../../assets/images/Capture-d-ecran-Raluca.png');
  const [avatar, setAvatar] = useState<string>();
  const today: Date = new Date();
  const {cercle} = useMainContext();

  const keysToRetrieve: string[] = [
    'firstname',
    'username',
    'date_of_birth',
    'city',
    'show_firstname',
    'avatar',
  ];

  const calculateAge = (birthdate: string) => {
    console.log('calculate age appelé');
    const birthdateDate = new Date(birthdate);
    const birthYear = birthdateDate.getFullYear();
    console.log(birthYear, birthdate);
    let age = today.getFullYear() - birthYear;
    const monthDiff = today.getMonth() - birthdateDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthdateDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const getMultipleValues = async () => {
    try {
      const retrievedValues: RetrievedValue[] = await getDatas(keysToRetrieve);

      const result: RetrievedValuesMap = {};
      retrievedValues.forEach(item => {
        result[item.key] = item.value;
      });

      setUserPrenom(result.firstname as string);
      setUserName(result.username as string);
      setUserBirth(calculateAge(result.date_of_birth as string));
      setUserCity(result.city as string);
      setShowFirstname(result.show_firstname as boolean);
      setAvatar(result.avatar as string);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  // const handleStoreData = async (key: string, value: string) => {
  //   try {
  //     await storeData(key, value);
  //   } catch (error) {
  //     console.error('Erreur lors du stockage des données :', error);
  //   }
  // };

  useEffect(() => {
    getMultipleValues();
    // handleStoreData('tabPath', tabPath);
    // handleStoreData('imagePath', imagePath);
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  const skills = [
    'Relations publiques',
    'Arts visuels',
    'Arts de la scène',
    'Prise de parole',
    'Coaching',
    'Actrice',
  ];

  return (
    <View style={StylesProfileMeRp.container}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        settingsNavigation={undefined}
        backButton={undefined}
        backgroundColor={'white'}
      />
      <ScrollView style={{marginBottom: 80}}>
        <ImageBackground
          source={avatar ? {uri: avatar} : defaultAvatar}
          style={StylesProfileMeRp.background}>
          <TouchableOpacity style={StylesProfileMeRp.boxPreference}>
            <Image
              source={require('../../../assets/images/image-177.png')}
              style={StylesProfileMeRp.icoPreference}
            />
          </TouchableOpacity>
          <View style={StylesProfileMeRp.viewCol}>
            <View style={StylesProfileMeRp.viewRow}>
              <Text style={StylesProfileMeRp.userName}>
                {userPrenom && showFirstname
                  ? userPrenom
                  : userName && !showFirstname
                  ? userName
                  : 'Non définie'}
              </Text>
              <Image
                source={require('../../../assets/images/quality-2-2.png')}
                style={StylesProfileMeRp.icoQuality}
              />
              <Image
                source={require('../../../assets/images/Médaille.png')}
                style={StylesProfileMeRp.icoMedaille}
              />
            </View>
            <Text style={StylesProfileMeRp.userCity}>
              {userBirth ? userBirth : '43'}, {userCity ? userCity : 'Paris'}
            </Text>
          </View>
        </ImageBackground>
        <View style={StylesProfileMeRp.viewRow2}>
          <Text style={StylesProfileMeRp.userId}>ID.20230510.88</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProfilNavigator', {
                ProfilRoute: 'ProfilMeRPfirst',
              })
            }>
            <ImageBackground
              source={require('../../../assets/images/bouton_continuer.png')}
              style={StylesProfileMeRp.boxEdit}>
              <Text style={StylesProfileMeRp.txtEdit}>Éditer</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <>
          <BtnReadRecord tabPath={cercle} top={0} left={20} />
        </>
        <Text style={StylesProfileMeRp.txtTitleAbout}>À propos de moi</Text>
        <View style={StylesProfileMeRp.viewRow4}>
          <Text style={StylesProfileMeRp.txtAbout}>
            Lorem ipsum dolor sit amet, consectetur
          </Text>
        </View>
        <View style={StylesProfileMeRp.viewRow4}>
          <Image
            source={require('../../../assets/images/validation-du-ticket1.png')}
            style={StylesProfileMeRp.icoPass}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('PassNavigator', {
                PassRoute: 'Prend_pass',
              })
            }
            style={{top: 5}}>
            <Text style={StylesProfileMeRp.txtPass}>Je prends mon pass</Text>
            <View style={StylesProfileMeRp.line} />
          </TouchableOpacity>
          <TouchableOpacity style={StylesProfileMeRp.boxCommunity}>
            <Image
              source={require('../../../assets/images/icoCommunity.png')}
              style={StylesProfileMeRp.icoCommunity}
            />
            <Text style={StylesProfileMeRp.txtCommunity}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={StylesProfileMeRp.boxHeart}>
            <Image
              source={require('../../../assets/images/heart1.png')}
              style={StylesProfileMeRp.icoHeart}
            />
          </TouchableOpacity>
        </View>
        <View style={StylesProfileMeRp.line2} />
        <Text style={StylesProfileMeRp.skillTitle}>Mes Compétences</Text>
        <View style={StylesProfileMeRp.viewGap}>
          {skills.map((skill, index) => (
            <Text key={index} style={StylesProfileMeRp.txtSkill}>
              {skill}
            </Text>
          ))}
        </View>
        <View style={StylesProfileMeRp.viewDetails}>
          <View style={StylesProfileMeRp.viewDetails2}>
            <Image
              source={require('../../../assets/images/statut.png')}
              style={StylesProfileMeRp.icoDetails}
            />
            <Text style={StylesProfileMeRp.titleDetails}>Statut</Text>
          </View>
          <Text style={StylesProfileMeRp.txtDetails}>Libéral</Text>
          <View style={StylesProfileMeRp.viewDetails2}>
            <Image
              source={require('../../../assets/images/recherche_emploi.png')}
              style={StylesProfileMeRp.icoDetails}
            />
            <Text style={StylesProfileMeRp.titleDetails}>Recherche</Text>
          </View>
          <Text style={StylesProfileMeRp.txtDetails}>
            Recherche d'un.e salarié.e
          </Text>
          <View style={StylesProfileMeRp.viewDetails2}>
            <Image
              source={require('../../../assets/images/publier__offre.png')}
              style={StylesProfileMeRp.icoDetails}
            />
            <Text style={StylesProfileMeRp.titleDetails}>Mon offre</Text>
          </View>
          <Text style={StylesProfileMeRp.txtDetails}>RH H/F</Text>
          <Text style={StylesProfileMeRp.txtDetails2}>
            Le responsable des ressources humaines est chargé(e){'\n'}de gérer
            l'ensemble des activités liées aux ressources humaines{'\n'}au sein
            de l'entreprise. Il/elle joue un rôle clé dans le{'\n'}développement
            et la mise en œuvre des politiques RH pour{'\n'}soutenir les
            objectifs organisationnels tout en veillant au{'\n'}bien-être des
            employés...
          </Text>
          <View style={StylesProfileMeRp.viewDetails2}>
            <Image
              source={require('../../../assets/images/langue_pro.png')}
              style={StylesProfileMeRp.icoDetails}
            />
            <Text style={StylesProfileMeRp.titleDetails}>
              Je parle couramment
            </Text>
          </View>
          <Text style={StylesProfileMeRp.txtDetails}>Français, Anglais</Text>
          <View style={StylesProfileMeRp.viewDetails2}>
            <Image
              source={require('../../../assets/images/distinctions.png')}
              style={StylesProfileMeRp.icoDetails}
            />
            <Text style={StylesProfileMeRp.titleDetails}>Mes distinctions</Text>
          </View>
          <Text style={StylesProfileMeRp.txtDetails}>Lorem ipsum</Text>
          <View style={StylesProfileMeRp.viewDetails2}>
            <Image
              source={require('../../../assets/images/distinctions.png')}
              style={StylesProfileMeRp.icoDetails}
            />
            <Text style={StylesProfileMeRp.titleDetails}>
              Mes offres d'emploi
            </Text>
          </View>
          <Text style={StylesProfileMeRp.txtDetails}>Lorem ipsum</Text>
        </View>
      </ScrollView>
    </View>
  );
};
