import React, {useEffect, useState} from 'react';
import {StatusBar, TextInput} from 'react-native';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import StylesProfileMeRpfirst from '../../../assets/style/styleScreens/styleProfil/StyleProfileMeRpfirst';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import MenuSlide from '../../components/menus/MenuSlide';
import LinkedIn from '../../components/edit/LinkedIn';
import Competence from '../../components/edit/Competence';
import Distinct from '../../components/edit/Distinct';
import Langue from '../../components/edit/Langue';
import Offre from '../../components/edit/Offre';
import VotreRecherche from '../../components/edit/VotreRecherche';
import Statut from '../../components/edit/Statut';
// import {storeData} from '../../services/storage';
type HomeProps = {
  navigation: NavigationProp<RouteType, 'ProfilMeRPfirst'>;
};
export const ProfilMeRPfirst: React.FC<HomeProps> = ({navigation}) => {
  // const handleStoreData = async (key: string, value: string) => {
  //   try {
  //     await storeData(key, value);
  //   } catch (error) {
  //     console.error('Erreur lors du stockage des données :', error);
  //   }
  // };

  const contentDeleteImage = (index: number) => {
    setImgPath(prevImg => {
      const newImgPath = [...prevImg];
      newImgPath[index] = '';
      return newImgPath;
    });
  };

  const [imgPath, setImgPath] = useState<string[]>(['', '', '']);

  // console.log(imgPath);

  const ImagePicker = (index: number) => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log("L'utilisateur a annulé la sélection de l'image.");
      } else if (response.errorCode) {
        console.log('Erreur : ', response.errorMessage);
      } else {
        const newAvatar: string =
          (response.assets && response.assets[0]?.uri) || '';
        const newImgPath: string[] = [...imgPath];
        newImgPath[index] = newAvatar;
        setImgPath(newImgPath);
      }
    });
  };

  const [userIntitulate, SetUserIntitulate] = useState<string>();

  const [userDescription, SetUserDescription] = useState<string>();

  useEffect(() => {
    // handleStoreData('tabPath', tabPath);
    // handleStoreData('imagePath', imagePath);
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <View style={[StylesProfileMeRpfirst.container]}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        settingsNavigation={undefined}
        backButton="Retour profil pro"
        backgroundColor={'white'}
      />
      <ScrollView>
        <Text style={[StylesProfileMeRpfirst.txtTitle]}>Profil éditer</Text>
        <View style={[StylesProfileMeRpfirst.viewContent]}>
          <Text style={[StylesProfileMeRpfirst.txtSubTitle]}>Photos</Text>
          <Text style={[StylesProfileMeRpfirst.txtDescription]}>
            Ajoutez jusqu'à 3 photos professionnelles de{'\n'}vous pour gagner
            en crédibilité.
          </Text>
          <View style={[StylesProfileMeRpfirst.viewPhoto]}>
            {imgPath.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  item === null
                    ? ImagePicker(index)
                    : contentDeleteImage(index);
                }}
                style={[
                  StylesProfileMeRpfirst.btnAddPhoto,
                  {
                    width: index === 0 && item !== null ? 129 : 82,
                    height: index === 0 && item !== null ? 129 : 82,
                  },
                ]}>
                {item ? (
                  <View
                    style={[
                      StylesProfileMeRpfirst.viewUserPhoto,
                      {
                        width: index === 0 && item !== null ? 129 : 82,
                        height: index === 0 && item !== null ? 129 : 82,
                      },
                    ]}>
                    <Image
                      source={
                        imgPath[index]
                          ? {uri: imgPath[index]}
                          : require('../../../assets/images/placeholder.png')
                      }
                      style={[
                        StylesProfileMeRpfirst.userPhoto,
                        {
                          width: index === 0 && item !== null ? 129 : 82,
                          height: index === 0 && item !== null ? 129 : 82,
                        },
                      ]}
                    />
                    <View
                      style={[
                        StylesProfileMeRpfirst.contentDeleteImage,
                        {bottom: index === 0 ? 80 : 55},
                      ]}>
                      <Image
                        source={require('../../../assets/boutons/poubelle.png')}
                        style={[StylesProfileMeRpfirst.imageDelete]}
                      />
                    </View>
                  </View>
                ) : (
                  <Text style={[StylesProfileMeRpfirst.txtAddImage]}>+</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <SafeAreaView style={[StylesProfileMeRpfirst.viewContent]}>
          <Text style={[StylesProfileMeRpfirst.txtSubTitle]}>
            À propos de moi
          </Text>
          <TextInput
            onSubmitEditing={event => SetUserIntitulate(event.nativeEvent.text)}
            placeholder={userIntitulate ?? 'Écrivez votre intitulé impactant.'}
            style={[StylesProfileMeRpfirst.intitulateInput]}
          />
          <TextInput
            placeholder={
              userDescription ??
              'Partagez le meilleur votre expérience, en résumé . . . '
            }
            allowFontScaling={true}
            editable={true}
            multiline={true}
            scrollEnabled={true}
            onSubmitEditing={event =>
              SetUserDescription(event.nativeEvent.text)
            }
            style={[StylesProfileMeRpfirst.descriptionInput]}
          />
        </SafeAreaView>
        <View style={[StylesProfileMeRpfirst.viewContent]}>
          <Text style={[StylesProfileMeRpfirst.txtSubTitle]}>
            Mes infos de base
          </Text>
          <View style={[StylesProfileMeRpfirst.contentInfo]}>
            <Statut />
            <VotreRecherche />
            <Offre />
            <Langue />
            <Distinct />
            <Competence />
            <LinkedIn />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
