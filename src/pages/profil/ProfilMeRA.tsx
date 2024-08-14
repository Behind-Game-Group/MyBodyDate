import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {MenuSlide} from '../../components/menus/MenuSlide';
import StylesProfileMeRa from '../../../assets/style/styleScreens/styleProfil/StyleProfileMeRa';
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
  navigation: NavigationProp<RouteType, 'ProfilMeRA'>;
};

export const ProfilMeRA: React.FC<HomeProps> = ({navigation}) => {
  const {cercle} = useMainContext();
  const [userPrenom, setUserPrenom] = useState<string>();
  const [userBirth, setUserBirth] = useState<number>();
  const [userCity, setUserCity] = useState<string>();
  const [showFirstname, setShowFirstname] = useState<boolean>();
  const [userName, setUserName] = useState<string>();
  const [avatar, setAvatar] = useState<string>();
  const today: Date = new Date();

  // console.log(userPrenom, userName, showFirstname, userBirth, userCity);

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

  const keysToRetrieve: string[] = [
    'firstname',
    'username',
    'date_of_birth',
    'city',
    'show_firstname',
    'avatar',
  ];

  // const handleStoreData = async (key: string, value: string) => {
  //   try {
  //     await storeData(key, value);
  //   } catch (error) {
  //     console.error('Erreur lors du stockage des données :', error);
  //   }
  // };

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

  useEffect(() => {
    getMultipleValues();
  }, []);

  const [boxPressed, setBoxPressed] = useState<number>(0);

  // Obtenir et formater la date courante en utilisant la méthode Date()
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString(); // année sur 4 chiffres
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // mois sur 2 chiffres
  const day = ('0' + currentDate.getDate()).slice(-2); // jour sur 2 chiffres

  const formattedDate = `${year}${month}${day}`; // Constant récupérant l'année, le mois et le jour courant

  let avatarPath;
  if (!avatar) {
    avatarPath = require('../../../assets/images/Ellipse44.png');
  } else {
    avatarPath = {uri: avatar};
    // console.log(avatar);
  }

  return (
    <ImageBackground
      style={StylesProfileMeRa.bgGradient}
      source={require('../../../assets/images/MicrosoftTeams-image.png')}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        settingsNavigation={undefined}
        backButton={undefined}
        backgroundColor={'white'}
      />
      <View style={StylesProfileMeRa.userInfo}>
        <View style={StylesProfileMeRa.viewCol}>
          <Image
            accessibilityLabel="Avatar"
            source={avatarPath}
            style={StylesProfileMeRa.userAvatar}
          />
          <Text style={StylesProfileMeRa.userId}>ID.{formattedDate}.(id)</Text>
          <View style={StylesProfileMeRa.viewCol2}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../../assets/images/quality-2.png')}
                style={StylesProfileMeRa.userQuality}
              />
              <Image
                source={require('../../../assets/images/Médaille.png')}
                style={StylesProfileMeRa.userMedaille}
              />
            </View>
            <Text style={StylesProfileMeRa.userName}>
              {showFirstname ? userPrenom : userName}
            </Text>
            <Text style={StylesProfileMeRa.userBC}>
              {!userBirth ? '43' : userBirth}, {!userCity ? 'Paris' : userCity}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProfilNavigator', {
                  ProfilRoute: 'ProfilMeRAfirst',
                });
              }}
              style={StylesProfileMeRa.boxEditBtn}>
              <Image
                source={require('../../../assets/boutons/Bouton-Bleu-Court.png')}
                style={StylesProfileMeRa.imgEditBtn}
              />
              <Text style={StylesProfileMeRa.txtEditBtn}>Éditer</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={StylesProfileMeRa.viewCol3}>
          <TouchableOpacity style={StylesProfileMeRa.boxBtn}>
            <Image
              source={require('../../../assets/images/préférence_profil.png')}
              style={StylesProfileMeRa.icoBtn}
            />
          </TouchableOpacity>
          <TouchableOpacity style={StylesProfileMeRa.boxBtn}>
            <Image
              source={require('../../../assets/images/heart2.png')}
              style={StylesProfileMeRa.icoBtn}
            />
            <Text style={StylesProfileMeRa.txtBtn}>21</Text>
          </TouchableOpacity>
          <TouchableOpacity style={StylesProfileMeRa.boxBtn}>
            <Image
              source={require('../../../assets/images/image116.png')}
              style={StylesProfileMeRa.icoBtn}
            />
            <Text style={StylesProfileMeRa.txtBtn}>7</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BtnReadRecord tabPath={cercle} top={100} left={20} />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PassNavigator', {
            PassRoute: 'Prend_pass',
          })
        }
        style={StylesProfileMeRa.boxPass}>
        <Image
          source={require('../../../assets/images/validation-du-ticket-1.png')}
          style={StylesProfileMeRa.imgPass}
        />
        <View style={{bottom: 11}}>
          <Text style={StylesProfileMeRa.txtPass}>Je prends mon pass</Text>
          <View style={StylesProfileMeRa.line} />
        </View>
      </TouchableOpacity>
      <ScrollView
        style={StylesProfileMeRa.scrollView}
        contentContainerStyle={{paddingVertical: 20}}>
        <View style={StylesProfileMeRa.viewCol4}>
          <TouchableOpacity
            onPress={() => {
              setBoxPressed(1);
              navigation.navigate('PulseNavigator', {
                PulseRoute: 'Pulse_spotlight',
              });
            }}
            accessibilityLabel="Vibrez en illimité"
            style={[
              StylesProfileMeRa.boxOffre,
              {
                backgroundColor: boxPressed === 1 ? '#0019A7' : '#fff',
              },
            ]}>
            <View style={StylesProfileMeRa.titleOffre}>
              <Text style={StylesProfileMeRa.txtTitle1}>My Body Date</Text>
              <Text
                style={[
                  StylesProfileMeRa.txtTitle12,
                  {
                    color: boxPressed === 1 ? '#fff' : '#0019A7',
                  },
                ]}>
                Premium
              </Text>
            </View>
            <Text
              style={[
                StylesProfileMeRa.txtTitle13,
                {
                  color: boxPressed === 1 ? '#fff' : '#0019A7',
                },
              ]}>
              Un coup de coeur n'attend pas.{'\n'}Vibrez en illimité !
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setBoxPressed(2);
              navigation.navigate('PulseNavigator', {
                PulseRoute: 'Pulse_profil',
              });
            }}
            accessibilityLabel="Décrochez plus de visiteurs"
            style={[
              StylesProfileMeRa.boxOffre2,
              {
                backgroundColor: boxPressed === 2 ? '#0019A7' : '#fff',
              },
            ]}>
            <Text style={StylesProfileMeRa.txtTitle2}>Profil à succès</Text>
            <Text
              style={[
                StylesProfileMeRa.txtTitle22,
                {
                  color: boxPressed === 2 ? '#fff' : '#0019A7',
                },
              ]}>
              Mettez votre profil en avant. Décrochez plus de visiteurs !
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setBoxPressed(3);
              navigation.navigate('PulseNavigator', {
                PulseRoute: 'Pulse_recherche',
              });
            }}
            accessibilityLabel="Éclipsez-vous des regards"
            style={[
              StylesProfileMeRa.boxOffre3,
              {
                backgroundColor: boxPressed === 3 ? '#0019A7' : '#fff',
              },
            ]}>
            <Text style={StylesProfileMeRa.txtTitle3}>
              Éclipsez-vous des regards
            </Text>
            <Text
              style={[
                StylesProfileMeRa.txtTitle22,
                {color: boxPressed === 3 ? '#fff' : '#0019A7'},
              ]}>
              Éclipsez-vous des regards sur commande.
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* <MenuBottom navigation={navigation} tabPath={'Amour'} active={'Moi'} /> */}
    </ImageBackground>
  );
};
