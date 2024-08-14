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
import StylesFilm from '../../../assets/style/StyleComposants/styleEdit/StyleFilm';

export const Film = () => {
  const [modalFilmlVisible, setModalFilmlVisible] = useState<boolean>(false);
  const [userFilm, setUserFilm] = useState<string[]>([]);

  const storageKey: string = 'user_film';

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
        setUserFilm(JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const handleButtonPress = (value: string) => {
    let newUserFilm = [...userFilm];

    if (newUserFilm.includes(value)) {
      newUserFilm = newUserFilm.filter(item => item !== value);
    } else {
      newUserFilm.push(value);
    }

    handleStoreData(storageKey, newUserFilm);
    setUserFilm(newUserFilm);
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
          setModalFilmlVisible(true);
        }}
        style={[StylesFilm.btnModal]}>
        <Image
          style={[StylesFilm.icoBtnModal]}
          source={require('../../../assets/images/popcorn.png')}
        />
        <Text style={[StylesFilm.txtBtnModal]}>
          Les films que je ne me lasse {'\n'}pas de revoir...
        </Text>
        <Image
          style={[StylesFilm.plusBtnModal]}
          source={
            userFilm.length > 0
              ? require('../../../assets/images/add_plein.png')
              : require('../../../assets/images/add_vide.png')
          }
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalFilmlVisible}
        statusBarTranslucent={true}>
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
              setModalFilmlVisible(false);
            }}
            accessibilityLabel="Ferme la fenêtre"
          />
          <View
            style={{
              top: 80,
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
                source={require('../../../assets/images/popcorn.png')}
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
                Les films que je ne me lasse{'\n'}pas de revoir...
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
                  left: 30,
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
                  defaultValue="Films, genre, ..."
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
                    handleButtonPress('Transformers');
                  }}>
                  <ImageBackground
                    source={require('../../../assets/images/Transform.png')}
                    style={{
                      width: 160,
                      height: 160,
                      right: 10,
                      borderWidth: userFilm.includes('Transformers') ? 2 : 0,
                      borderColor: '#9424FA',
                      borderRadius: userFilm.includes('Transformers') ? 33 : 0,
                    }}>
                    <Image
                      source={
                        userFilm.includes('Transformers')
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
                    Transformers
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleButtonPress('Le voyage de Shihiro');
                  }}>
                  <ImageBackground
                    source={require('../../../assets/images/Shiro.png')}
                    style={{
                      width: 160,
                      height: 160,
                      left: 10,
                      borderWidth: userFilm.includes('Le voyage de Shihiro')
                        ? 2
                        : 0,
                      borderColor: '#9424FA',
                      borderRadius: userFilm.includes('Le voyage de Shihiro')
                        ? 33
                        : 0,
                    }}>
                    <Image
                      source={
                        userFilm.includes('Le voyage de Shihiro')
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
                    Le voyage de Shihiro
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
                    handleButtonPress('Baby Boy');
                  }}>
                  <ImageBackground
                    source={require('../../../assets/images/BadBoy.png')}
                    style={{
                      width: 160,
                      height: 160,
                      right: 10,
                      borderWidth: userFilm.includes('Baby Boy') ? 2 : 0,
                      borderColor: '#9424FA',
                      borderRadius: userFilm.includes('Baby Boy') ? 33 : 0,
                    }}>
                    <Image
                      source={
                        userFilm.includes('Baby Boy')
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
                    Baby Boy
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleButtonPress('Avengers');
                  }}>
                  <ImageBackground
                    source={require('../../../assets/images/Aveng.png')}
                    style={{
                      width: 160,
                      height: 160,
                      left: 10,
                      borderWidth: userFilm.includes('Avengers') ? 2 : 0,
                      borderColor: '#9424FA',
                      borderRadius: userFilm.includes('Avengers') ? 33 : 0,
                    }}>
                    <Image
                      source={
                        userFilm.includes('Avengers')
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
                    Avengers
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

export default Film;
