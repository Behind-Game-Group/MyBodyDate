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
import StylesActivite from '../../../assets/style/StyleComposants/styleEdit/StyleActivite';

export const Activite = () => {
  const [modalActivitelVisible, setModalActivitelVisible] =
    useState<boolean>(false);

  const handleButtonPress = (value: string) => {
    let newUserActivity = [...userActivity];

    if (newUserActivity !== null && newUserActivity.includes(value)) {
      newUserActivity = newUserActivity.filter(item => item !== value);
      handleStoreData('user_activity', newUserActivity);
    } else {
      newUserActivity.push(value);
      handleStoreData('user_activity', newUserActivity);
    }

    setUserAvtivity(newUserActivity);
    console.log('user_activity : ' + newUserActivity);
  };

  const [userActivity, setUserAvtivity] = useState<string[]>([]);

  const handleStoreData = async (key: string, value: string[]) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  // Appel de la fonction pour récupérer plusieurs valeurs
  const handleGetData = async () => {
    try {
      const userActivitys = await getData('user_activity');
      setUserAvtivity(userActivitys || '');
      // console.log('Recherche 2 : ' + userRecherche2);
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
          setModalActivitelVisible(true);
        }}
        style={[StylesActivite.btnModal]}>
        <Image
          style={[StylesActivite.icoBtnModal]}
          source={require('../../../assets/images/activité.png')}
        />
        <Text style={[StylesActivite.txtBtnModal]}>
          Mon activité favorite...
        </Text>
        <Image
          style={[StylesActivite.plusBtnModal]}
          source={
            userActivity
              ? require('../../../assets/images/add_plein.png')
              : require('../../../assets/images/add_vide.png')
          }
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        statusBarTranslucent={true}
        visible={modalActivitelVisible}>
        {/* Arrière-plan semi-transparent */}
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
            onPress={() => {
              setModalActivitelVisible(false);
            }}
            accessibilityLabel="Ferme la fenêtre"
          />
          {/* Contenu de la modal */}
          <View
            style={{
              top: 95,
              width: '100%',
              height: 750,
              backgroundColor: 'white',
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
            }}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../../assets/images/activité.png')}
                style={{
                  width: 78,
                  height: 84,
                  top: 30,
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
                Mon activité favorite...
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 14,
                  color: '#9424FA',
                  top: 45,
                  left: 40,
                }}>
                Sélectionnez vos passe temps favoris.
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
                  defaultValue="Émissions de télé, sports, livres,..."
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
              Intérêts populaires :
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
                    handleButtonPress('Marvel');
                  }}>
                  <ImageBackground
                    source={require('../../../assets/images/Marvel.png')}
                    style={{
                      width: 160,
                      height: 160,
                      right: 10,
                      borderWidth: userActivity.includes('Marvel') ? 2 : 0, // Ajout du border conditionnel
                      borderColor: '#9424FA', // Couleur du border (modifiable)
                      borderRadius: userActivity.includes('Marvel') ? 33 : 0, // Ajout du border radius conditionnel
                    }}>
                    <Image
                      source={
                        userActivity.includes('Marvel')
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
                    Marvel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleButtonPress('Basket');
                  }}>
                  <ImageBackground
                    source={require('../../../assets/images/Basket.png')}
                    style={{
                      width: 160,
                      height: 160,
                      left: 10,
                      borderWidth: userActivity.includes('Basket') ? 2 : 0, // Ajout du border conditionnel
                      borderColor: '#9424FA', // Couleur du border (modifiable)
                      borderRadius: userActivity.includes('Basket') ? 33 : 0, // Ajout du border radius conditionnel
                    }}>
                    <Image
                      source={
                        userActivity.includes('Basket')
                          ? require('../../../assets/images/PlusActiviteCA.png')
                          : require('../../../assets/images/MoinActivite.png')
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
                    Basket
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
                    handleButtonPress('Harry Potter');
                  }}>
                  <ImageBackground
                    source={require('../../../assets/images/HarryP.png')}
                    style={{
                      width: 160,
                      height: 160,
                      right: 10,
                      borderWidth: userActivity.includes('Harry Potter')
                        ? 2
                        : 0, // Ajout du border conditionnel
                      borderColor: '#9424FA', // Couleur du border (modifiable)
                      borderRadius: userActivity.includes('Harry Potter')
                        ? 33
                        : 0, // Ajout du border radius conditionnel
                    }}>
                    <Image
                      source={
                        userActivity.includes('Harry Potter')
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
                    Harry Potter
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleButtonPress('Shopping');
                  }}>
                  <ImageBackground
                    source={require('../../../assets/images/Shop.png')}
                    style={{
                      width: 160,
                      height: 160,
                      left: 10,
                      borderWidth: userActivity.includes('Shopping') ? 2 : 0, // Ajout du border conditionnel
                      borderColor: '#9424FA', // Couleur du border (modifiable)
                      borderRadius: userActivity.includes('Shopping') ? 33 : 0, // Ajout du border radius conditionnel
                    }}>
                    <Image
                      source={
                        userActivity.includes('Shopping')
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
                    Shopping
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

export default Activite;
