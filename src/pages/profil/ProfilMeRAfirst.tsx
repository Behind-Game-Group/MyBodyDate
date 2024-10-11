import React, {useEffect, useState} from 'react';
import {StatusBar, TextInput} from 'react-native';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {
  ImageLibraryOptions,
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import StylesProfileMeRa from '../../../assets/style/styleScreens/styleProfil/StyleProfileMeRa';
import {SafeAreaView} from 'react-native-safe-area-context';
import {storeData, getDatas} from '../../services/storage';
import MenuSlide from '../../components/menus/MenuSlide';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import Religion from '../../components/edit/Religion';
import Enfant from '../../components/edit/Enfant';
import Morphologie from '../../components/edit/Morphologie';
import Origine from '../../components/edit/Origine';
import Astrologie from '../../components/edit/Astrologie';
import Politique from '../../components/edit/Politique';
import Fumer from '../../components/edit/Fumer';
import Alcool from '../../components/edit/Alcool';
import Sport from '../../components/edit/Sport';

type RetrievedValues = {
  user_description?: string;
  image_amour?: string[];
  image_explicit?: string[];
};

type HomeProps = {
  navigation: NavigationProp<RouteType, 'ProfilMeRAfirst'>;
};

export const ProfilMeRAfirst: React.FC<HomeProps> = ({navigation}) => {
  const contentDeleteImage = (index: number, info: string) => {
    if (info === 'img') {
      setImgPath(prevImg => {
        const newImgPath = [...prevImg];
        newImgPath[index] = '';
        return newImgPath;
      });
    } else {
      setExplicitPath(prevImg => {
        const newImgPath = [...prevImg];
        newImgPath[index] = '';
        return newImgPath;
      });
    }
  };

  const img = 'img';
  const explicit = 'explicit';
  const [imgPath, setImgPath] = useState<string[]>(['', '', '', '', '', '']);

  const [explicitPath, setExplicitPath] = useState<string[]>(['', '', '']);

  const [userDescription, setUserDescrition] = useState<string>('');

  // console.log(imgPath);

  const handleStoreData = async (key: string, value: string) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const keysToRetrieve = ['user_description', 'image_amour', 'image_explicit'];

  // Appel de la fonction pour récupérer plusieurs valeurs
  const getMultipleValues = async () => {
    try {
      const retrievedValues = await getDatas(keysToRetrieve);

      if (retrievedValues) {
        const updatedValues: RetrievedValues = {};
        retrievedValues.forEach(item => {
          if (item.key === 'user_description') {
            updatedValues.user_description = item.value;
          } else if (item.key === 'image_amour') {
            updatedValues.image_amour = item.value.split(',');
          } else if (item.key === 'image_explicit') {
            updatedValues.image_explicit = item.value.split(',');
          }
        });

        // Utilisez les valeurs mises à jour
        setUserDescrition(updatedValues.user_description ?? 'Description');
        setImgPath(updatedValues.image_amour ?? imgPath);
        setExplicitPath(updatedValues.image_explicit ?? explicitPath);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const ImagePicker = (index: number, info: string) => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log("L'utilisateur a annulé la sélection de l'image.");
      } else if (response.errorCode) {
        console.log('Erreur : ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const newImg = response.assets[0].uri;
        if (info === 'explicit') {
          const newImgPath = [...explicitPath];
          newImgPath[index] = newImg as string;
          setExplicitPath(newImgPath);
          handleStoreData('image_explicit', newImgPath.toString());
          return newImgPath;
        } else {
          const newImgPath = [...imgPath];
          newImgPath[index] = newImg as string;
          setImgPath(newImgPath);
          handleStoreData('image_amour', newImgPath.toString());
          return newImgPath;
        }
      } else {
        console.log('Aucune image sélectionnée.');
      }
    });
  };

  useEffect(() => {
    getMultipleValues();
    // handleStoreData('tabPath', tabPath);
    // handleStoreData('imagePath', imagePath);
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        backButton="Retour profil amour"
        backgroundColor={'white'}
        settingsNavigation={undefined}
      />
      <ScrollView style={{height: 1200}}>
        <View>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontWeight: '700',
              fontSize: 24,
              color: '#0019A7',
              alignSelf: 'center',
              textAlign: 'center',
            }}>
            Profil éditer
          </Text>
        </View>
        <View style={{left: 20, top: 20}}>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontWeight: '700',
              fontSize: 20,
              color: '#0019A7',
              left: 5,
            }}>
            Photos
          </Text>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 14,
              color: '#0019A7',
              top: 15,
            }}>
            Affichez votre lifestyle. Ajoutez jusqu'à 6{'\n'}photos de vous pour
            gagner en visibilité.
          </Text>
        </View>
        <View style={[StylesProfileMeRa.viewPhoto]}>
          {imgPath.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                item === null
                  ? ImagePicker(index, img)
                  : contentDeleteImage(index, img);
              }}
              style={[
                StylesProfileMeRa.btnAddPhoto,
                {
                  width: index === 0 && item !== null ? 129 : 82,
                  height: index === 0 && item !== null ? 129 : 82,
                },
              ]}>
              {item ? (
                <View
                  style={[
                    StylesProfileMeRa.viewUserPhoto,
                    {
                      width: index === 0 && item !== null ? 129 : 82,
                      height: index === 0 && item !== null ? 129 : 82,
                    },
                  ]}>
                  <Image
                    source={{uri: imgPath[index]}}
                    style={[
                      StylesProfileMeRa.userPhoto,
                      {
                        width: index === 0 && item !== null ? 129 : 82,
                        height: index === 0 && item !== null ? 129 : 82,
                      },
                    ]}
                  />
                  <View
                    style={[
                      StylesProfileMeRa.contentDeleteImage,
                      {bottom: index === 0 ? 80 : 55},
                    ]}>
                    <Image
                      source={require('../../../assets/boutons/poubelle.png')}
                      style={[StylesProfileMeRa.imageDelete]}
                    />
                  </View>
                </View>
              ) : (
                <Text style={[StylesProfileMeRa.txtAddImage]}>+</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
        <View style={{top: 200}}>
          <View
            style={{
              top: 10,
              width: '80%',
              height: 2,
              backgroundColor: '#0019A7',
              alignSelf: 'center',
            }}
          />

          <Text
            style={{
              fontFamily: 'Gilory',
              fontWeight: '700',
              fontSize: 20,
              color: '#0019A7',
              top: 40,
              left: 15,
            }}>
            Photos explicites
          </Text>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 14,
              color: '#0019A7',
              top: 50,
              left: 15,
            }}>
            Photos floues sur profil, visibles sur demande{'\n'}individuelle
            restreinte et révocable.
          </Text>
          <View style={[StylesProfileMeRa.viewPhoto2]}>
            {explicitPath.map((item: string, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  item === null
                    ? ImagePicker(index, explicit)
                    : contentDeleteImage(index, explicit);
                }}
                style={[
                  StylesProfileMeRa.btnAddPhoto2,
                  {
                    width: 82,
                    height: 82,
                  },
                ]}>
                {item ? (
                  <View
                    style={[
                      StylesProfileMeRa.viewUserPhoto,
                      {
                        width: 84,
                        height: 84,
                      },
                    ]}>
                    <Image
                      blurRadius={8}
                      source={{uri: explicitPath[index]}}
                      style={[
                        StylesProfileMeRa.userPhoto,
                        {
                          borderRadius: 30,
                          borderColor: '#D40000',
                          borderWidth: 1,
                          width: 82,
                          height: 82,
                        },
                      ]}
                    />
                    <View
                      style={[
                        StylesProfileMeRa.contentDeleteImage,
                        {bottom: 55},
                      ]}>
                      <Image
                        source={require('../../../assets/boutons/cadenas.png')}
                        style={[StylesProfileMeRa.imageDelete]}
                      />
                    </View>
                  </View>
                ) : (
                  <Text style={[StylesProfileMeRa.txtAddImage2]}>+</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View
          style={{
            top: 260,
            height: 1100,
          }}>
          <View>
            <Text
              style={{
                fontFamily: 'Gilroy',
                fontWeight: '700',
                fontSize: 20,
                color: '#0019A7',
                left: 20,
              }}>
              Quelques mots sur moi
            </Text>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 14,
                color: '#0019A7',
                top: 10,
                left: 20,
              }}>
              Lorem ipsum
            </Text>
            <SafeAreaView
              style={{
                alignSelf: 'center',
                width: '100%',
              }}>
              <TextInput
                placeholder={userDescription ?? 'Description'}
                multiline={true}
                scrollEnabled={true}
                onChangeText={text => {
                  setUserDescrition(text);
                  handleStoreData('user_description', text);
                }}
                style={{
                  borderWidth: 1,
                  borderColor: '#E0BDFF',
                  borderRadius: 30,
                  alignSelf: 'center',
                  top: 30,
                  width: '90%',
                  maxHeight: 111,
                  padding: 20,
                  color: '#0019A7',
                }}
              />
            </SafeAreaView>
          </View>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontWeight: '700',
              fontSize: 20,
              color: '#0019A7',
              top: 50,
              left: 20,
            }}>
            Mes infos de base
          </Text>
          <View
            style={{
              top: 450,
            }}>
            <Religion />
            <Enfant />
            <Morphologie />
            <Origine />
            <Astrologie />
            <Politique />
            <Fumer />
            <Alcool />
            <Sport />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
