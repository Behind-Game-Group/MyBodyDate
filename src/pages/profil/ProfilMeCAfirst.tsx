import React, {useEffect, useState} from 'react';
import {StatusBar, TextInput} from 'react-native';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {NiveauDEtudes} from '../../components/edit/NiveauDEtudes';
import {JeParle} from '../../components/edit/JeParle';
import {Activite} from '../../components/edit/Activite';
import {MaCuisine} from '../../components/edit/MaCuisine';
import {Ami} from '../../components/edit/Ami';
import {Film} from '../../components/edit/Film';
import {Spotify} from '../../components/edit/Spotify';
import StylesProfileMeCafirst from '../../../assets/style/styleScreens/styleProfil/StyleProfileMeCafirst';
import {SafeAreaView} from 'react-native-safe-area-context';
import MenuSlide from '../../components/menus/MenuSlide';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
// import {storeData} from '../../services/storage';
type HomeProps = {
  navigation: NavigationProp<RouteType, 'ProfilMeCAfirst'>;
};
export const ProfilMeCAfirst: React.FC<HomeProps> = ({navigation}) => {
  const [buttonPressed, setButtonPressed] = useState<string>('');

  // const handleStoreData = async (key: string, value: string) => {
  //   try {
  //     await storeData(key, value);
  //   } catch (error) {
  //     console.error('Erreur lors du stockage des données :', error);
  //   }
  // };

  const deleteAvatar = (index: number) => {
    setAvatarPath(prevAvatar => {
      const newAvatarPath = [...prevAvatar];
      newAvatarPath[index] = '';
      return newAvatarPath;
    });
  };

  const [avatarPath, setAvatarPath] = useState<string[]>(['', '', '']);

  // console.log(avatarPath);

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
        const newAvatarPath: string[] = [...avatarPath];
        newAvatarPath[index] = newAvatar;
        setAvatarPath(newAvatarPath);
      }
    });
  };

  // const [userIntitulate, SetUserIntitulate] = useState();

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
    <View style={[StylesProfileMeCafirst.container]}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        settingsNavigation={undefined}
        backButton="Retour profil ami"
        backgroundColor={'white'}
      />
      <ScrollView style={{height: 1200}}>
        <Text style={[StylesProfileMeCafirst.txtTitle]}>Profil éditer</Text>
        <View style={{left: 20, top: 20}}>
          <Text style={StylesProfileMeCafirst.txtSubTitle}>Photos</Text>
          <Text style={[StylesProfileMeCafirst.txtDescription]}>
            Ajoutez jusqua 3 photos de vous, pour{'\n'}agrandir votre cercle
            social.
          </Text>
        </View>
        <View style={[StylesProfileMeCafirst.viewPhoto]}>
          {avatarPath.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                item === null ? ImagePicker(index) : deleteAvatar(index);
              }}
              style={[
                StylesProfileMeCafirst.btnAddPhoto,
                {
                  width: index === 0 && item !== null ? 129 : 82,
                  height: index === 0 && item !== null ? 129 : 82,
                },
              ]}>
              {item ? (
                <View
                  style={[
                    StylesProfileMeCafirst.viewUserPhoto,
                    {
                      width: index === 0 && item !== null ? 129 : 82,
                      height: index === 0 && item !== null ? 129 : 82,
                    },
                  ]}>
                  <Image
                    source={{uri: avatarPath[index]}}
                    style={[
                      StylesProfileMeCafirst.userPhoto,
                      {
                        width: index === 0 && item !== null ? 129 : 82,
                        height: index === 0 && item !== null ? 129 : 82,
                      },
                    ]}
                  />
                  <View
                    style={[
                      StylesProfileMeCafirst.contentDeleteImage,
                      {bottom: index === 0 ? 80 : 55},
                    ]}>
                    <Image
                      source={require('../../../assets/boutons/poubelle.png')}
                      style={[StylesProfileMeCafirst.imageDelete]}
                    />
                  </View>
                </View>
              ) : (
                <Text style={[StylesProfileMeCafirst.txtAddImage]}>+</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View
          style={[
            StylesProfileMeCafirst.line,
            {top: avatarPath[0] !== null ? 90 : 70},
          ]}
        />
        <Text style={[StylesProfileMeCafirst.txtInfo]}>
          Pour plus de photos sur votre profil,
        </Text>
        <Text style={[StylesProfileMeCafirst.txtInfo]}>
          ajoutez votre flux Instagram ou Facebook.
        </Text>
        <View style={[StylesProfileMeCafirst.viewCol]}>
          <TouchableOpacity
            onPress={() => {
              setButtonPressed('Insta');
            }}
            style={{
              width: 336,
              height: 56,
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Image
              style={[StylesProfileMeCafirst.imgBtn]}
              source={
                buttonPressed === 'Go'
                  ? require('../../../assets/boutons/import-insta-rouge.png')
                  : require('../../../assets/boutons/import-insta.png')
              }
            />
            <Text
              style={[
                StylesProfileMeCafirst.TxtBtn,
                {zIndex: 1, bottom: 24, left: 20},
              ]}>
              Importer votre feed Instagram
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{}}
            onPress={() => {
              setButtonPressed('Meta');
            }}>
            <Text style={[StylesProfileMeCafirst.TxtBtn, {zIndex: 1, top: 57}]}>
              Meta (Facebook)
            </Text>
            <Image
              style={[StylesProfileMeCafirst.imgBtn]}
              source={
                buttonPressed === 'Meta'
                  ? require('../../../assets/boutons/Bouton-Rouge-Meta.png')
                  : require('../../../assets/boutons/Bouton-Noir-Meta.png')
              }
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            top: 100,
            height: 850,
          }}>
          <SafeAreaView style={[StylesProfileMeCafirst.viewContent]}>
            <Text style={[StylesProfileMeCafirst.txtSubTitle]}>
              Quelques mots sur moi
            </Text>
            <Text style={[StylesProfileMeCafirst.intitulateInput]}>
              Description
            </Text>
            <TextInput
              placeholder={userDescription ?? 'Description'}
              placeholderTextColor={'#9424FA'}
              allowFontScaling={true}
              editable={true}
              multiline={true}
              scrollEnabled={true}
              onSubmitEditing={event =>
                SetUserDescription(event.nativeEvent.text)
              }
              style={[StylesProfileMeCafirst.descriptionInput]}
            />
          </SafeAreaView>
          <Text style={[StylesProfileMeCafirst.txtSubTitle, {top: 45}]}>
            Mes infos de base
          </Text>
          <View
            style={{
              top: 450,
            }}>
            <NiveauDEtudes />
            <JeParle />
            <Activite />
            <MaCuisine />
            <Ami />
            <Film />
            <Spotify />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
