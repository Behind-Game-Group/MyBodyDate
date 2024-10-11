import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {storeData, getData} from '../../services/storage';
import StylesMaCuisine from '../../../assets/style/StyleComposants/styleEdit/StyleMaCuisine';

export const MaCuisine = () => {
  const [modalMaCuisinelVisible, setModalMaCuisinelVisible] =
    useState<boolean>(false);

  const [userCuisine, setUserCuisine] = useState<string[]>([]);

  const storageKey: string = 'user_cuisine';

  const handleButtonPress = (value: string) => {
    let newUserCuisine = [...userCuisine];

    if (newUserCuisine !== null && newUserCuisine.includes(value)) {
      newUserCuisine = newUserCuisine.filter(item => item !== value);
      handleStoreData(storageKey, newUserCuisine);
    } else {
      newUserCuisine.push(value);
      handleStoreData(storageKey, newUserCuisine);
    }

    setUserCuisine(newUserCuisine);
    // console.log('user_cuisine : ' + newUserCuisine);
  };

  const handleStoreData = async (key: string, value: string[]) => {
    try {
      await storeData(key, JSON.stringify(value));
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetData = async () => {
    try {
      const storedData = await getData(storageKey);
      if (storedData) {
        setUserCuisine(JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  useEffect(() => {
    handleGetData();
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setModalMaCuisinelVisible(true);
        }}
        style={[StylesMaCuisine.btnModal]}>
        <Image
          style={[StylesMaCuisine.icoBtnModal]}
          source={require('../../../assets/images/cuisine.png')}
        />
        <Text style={[StylesMaCuisine.txtBtnModal]}>
          Ma cuisine favorite...
        </Text>
        <Image
          style={[StylesMaCuisine.plusBtnModal]}
          source={
            userCuisine
              ? require('../../../assets/images/add_plein.png')
              : require('../../../assets/images/add_vide.png')
          }
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalMaCuisinelVisible}
        statusBarTranslucent={true}>
        {/* Arrière-plan semi-transparent */}
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Couleur semi-transparente
            justifyContent: 'center', // Centrer verticalement
            alignItems: 'center', // Centrer horizontalement
          }}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
            onPress={() => {
              setModalMaCuisinelVisible(false);
            }}
            accessibilityLabel="Ferme la fenêtre"
          />
          {/* Contenu de la modal */}
          <View style={[StylesMaCuisine.viewModal]}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../../assets/images/cuisine.png')}
                style={{
                  width: 82,
                  height: 84,
                  top: 30,
                  alignItems: 'center',
                  alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  fontFamily: 'Gilroy',
                  fontWeight: '700',
                  fontSize: 20,
                  color: '#9424FA',
                  top: 30,
                }}>
                Ma cuisine favorite...
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: 'Gilroy',
                  fontWeight: '700',
                  fontSize: 14,
                  color: '#9424FA',
                  top: 45,
                  left: 40,
                }}>
                Sélectionnez vos cuisines favorites.
              </Text>
            </View>
            <ImageBackground
              source={require('../../../assets/images/RectangleActivite.png')}
              style={{
                width: 354,
                height: 40,
                top: 60,
                alignSelf: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../../../assets/images/Loupe-BB.png')}
                  style={{
                    width: 20,
                    height: 20,
                    top: 10,
                    left: 10,
                  }}
                />
                <TextInput
                  style={{
                    fontSize: 14,
                    fontFamily: 'Comfortaa',
                    fontWeight: '700',
                    color: '#929EDE',
                    left: 20,
                  }}
                  defaultValue="Cuisine favorite, plats,..."
                  // Vous pouvez ajouter des gestionnaires d'événements ici pour gérer les changements de texte, etc.
                />
              </View>
            </ImageBackground>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                fontSize: 14,
                color: '#9424FA',
                left: 30,
                top: 80,
              }}>
              Cuisines populaires :
            </Text>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View
                style={{
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  alignItems: 'center',
                  top: 100,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    handleButtonPress('Française');
                  }}>
                  <ImageBackground
                    source={require('../../../assets/images/Escargo.png')}
                    style={{
                      width: 160,
                      height: 160,
                      right: 10,
                      borderWidth: userCuisine.includes('Française') ? 2 : 0, // Ajout du border conditionnel
                      borderColor: '#9424FA', // Couleur du border (modifiable)
                      borderRadius: userCuisine.includes('Française') ? 33 : 0, // Ajout du border radius conditionnel
                    }}>
                    <Image
                      source={
                        userCuisine.includes('Française')
                          ? require('../../../assets/images/MoinActivite.png')
                          : require('../../../assets/images/PlusActiviteCA.png')
                      }
                      style={{
                        width: 35,
                        height: 35,
                        left: 135,
                        top: 135,
                      }}
                    />
                  </ImageBackground>
                  <Text
                    style={{
                      fontFamily: 'Comfortaa',
                      fontWeight: '700',
                      fontSize: 14,
                      color: '#9424FA',
                      top: 10,
                      textAlign: 'center',
                    }}>
                    Française
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleButtonPress('Sushis');
                  }}>
                  <ImageBackground
                    source={require('../../../assets/images/Sushi.png')}
                    style={{
                      width: 160,
                      height: 160,
                      left: 10,
                      borderWidth: userCuisine.includes('Sushis') ? 2 : 0, // Ajout du border conditionnel
                      borderColor: '#9424FA', // Couleur du border (modifiable)
                      borderRadius: userCuisine.includes('Sushis') ? 33 : 0, // Ajout du border radius conditionnel
                    }}>
                    <Image
                      source={
                        userCuisine.includes('Sushis')
                          ? require('../../../assets/images/MoinActivite.png')
                          : require('../../../assets/images/PlusActiviteCA.png')
                      }
                      style={{
                        width: 35,
                        height: 35,
                        left: 135,
                        top: 135,
                      }}
                    />
                  </ImageBackground>
                  <Text
                    style={{
                      fontFamily: 'Comfortaa',
                      fontWeight: '700',
                      fontSize: 14,
                      color: '#9424FA',
                      top: 10,
                      textAlign: 'center',
                    }}>
                    Sushiss
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  alignItems: 'center',
                  top: 120,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    handleButtonPress('Pizza');
                  }}>
                  <ImageBackground
                    source={require('../../../assets/images/Pizza.png')}
                    style={{
                      width: 160,
                      height: 160,
                      right: 10,
                      borderWidth: userCuisine.includes('Pizza') ? 2 : 0, // Ajout du border conditionnel
                      borderColor: '#9424FA', // Couleur du border (modifiable)
                      borderRadius: userCuisine.includes('Pizza') ? 33 : 0, // Ajout du border radius conditionnel
                    }}>
                    <Image
                      source={
                        userCuisine.includes('Pizza')
                          ? require('../../../assets/images/MoinActivite.png')
                          : require('../../../assets/images/PlusActiviteCA.png')
                      }
                      style={{
                        width: 35,
                        height: 35,
                        left: 135,
                        top: 135,
                      }}
                    />
                  </ImageBackground>
                  <Text
                    style={{
                      fontFamily: 'Comfortaa',
                      fontWeight: '700',
                      fontSize: 14,
                      color: '#9424FA',
                      top: 10,
                      textAlign: 'center',
                    }}>
                    Pizza
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleButtonPress('Végétarien');
                  }}>
                  <ImageBackground
                    source={require('../../../assets/images/Salade.png')}
                    style={{
                      width: 160,
                      height: 160,
                      left: 10,
                      borderWidth: userCuisine.includes('Végétarien') ? 2 : 0, // Ajout du border conditionnel
                      borderColor: '#9424FA', // Couleur du border (modifiable)
                      borderRadius: userCuisine.includes('Végétarien') ? 33 : 0, // Ajout du border radius conditionnel
                    }}>
                    <Image
                      source={
                        userCuisine.includes('Végétarien')
                          ? require('../../../assets/images/MoinActivite.png')
                          : require('../../../assets/images/PlusActiviteCA.png')
                      }
                      style={{
                        width: 35,
                        height: 35,
                        left: 135,
                        top: 135,
                      }}
                    />
                  </ImageBackground>
                  <Text
                    style={{
                      fontFamily: 'Comfortaa',
                      fontWeight: '700',
                      fontSize: 14,
                      color: '#9424FA',
                      top: 10,
                      textAlign: 'center',
                    }}>
                    Végétarien
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default MaCuisine;
