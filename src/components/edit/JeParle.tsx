import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import StylesJeParle from '../../../assets/style/StyleComposants/styleEdit/StyleJeParle';
import {storeData, getData} from '../../services/storage';

export const JeParle = () => {
  const [modalLanguelVisible, setModalLanguelVisible] =
    useState<boolean>(false);

  const lang: string[] = [
    'Allemand',
    'Anglais',
    'Arabe',
    'Chinois',
    'Espagnol',
    'Français',
    'Grec',
    'Italien',
    'Japonnais',
    'Néerlandais',
    'Portugais',
    'Polonais',
  ];

  const [viewLangue, setViewLangue] = useState<boolean>(false);

  const [userLangue, setUserLanguage] = useState<string[]>([]);

  const storageKey: string = 'user_langues';

  const handleButtonPress = (value: string) => {
    let newUserLangue = [...userLangue];

    if (newUserLangue !== null && newUserLangue.includes(value)) {
      newUserLangue = newUserLangue.filter(item => item !== value);
    } else {
      newUserLangue.push(value);
    }

    handleStoreData(storageKey, newUserLangue);
    setUserLanguage(newUserLangue);
    console.log('Langue sélectionner : ' + newUserLangue);
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
        setUserLanguage(JSON.parse(storedData));
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
          setModalLanguelVisible(true);
        }}
        style={[StylesJeParle.btnModal]}>
        <Image
          style={[StylesJeParle.icoBtnModal]}
          source={require('../../../assets/images/language.png')}
        />
        <Text style={[StylesJeParle.txtBtnModal]}>Je parle couramment</Text>
        <Image
          style={[StylesJeParle.plusBtnModal]}
          source={
            userLangue.length > 0
              ? require('../../../assets/images/add_plein.png')
              : require('../../../assets/images/add_vide.png')
          }
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalLanguelVisible}
        statusBarTranslucent={true}>
        {/* Arrière-plan semi-transparent */}
        <View style={[StylesJeParle.containerModal]}>
          <TouchableOpacity
            style={[StylesJeParle.btnClose]}
            onPress={() => setModalLanguelVisible(false)}
            accessibilityLabel="Ferme la fenêtre"
          />
          {/* Contenu de la modal */}
          <View style={StylesJeParle.viewModal}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../../assets/images/language.png')}
                style={[StylesJeParle.icoModal]}
              />
              <Text style={[StylesJeParle.txtTitleModal]}>
                Je parle couramment..
              </Text>
            </View>
            <View>
              <Text style={StylesJeParle.subTxtModal}>
                Sélectionnez vos langues parlées.
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                top: 140,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column'}}>
                  <TouchableOpacity
                    onPress={() => {
                      viewLangue ? setViewLangue(false) : setViewLangue(true);
                    }}
                    style={{width: 276, alignSelf: 'center'}}>
                    <Text style={[StylesJeParle.txtOptionSelected]}>
                      Langue
                    </Text>
                  </TouchableOpacity>
                  {viewLangue ? (
                    <View style={[StylesJeParle.viewOption]}>
                      <ScrollView
                        contentContainerStyle={{paddingBottom: 10, width: 276}}>
                        {lang.map((item, index) => (
                          <TouchableOpacity
                            key={index}
                            style={{margin: 8}}
                            onPress={() => handleButtonPress(item)}>
                            <Text key={index} style={[StylesJeParle.txtOption]}>
                              {item}
                            </Text>
                            {userLangue !== null &&
                            userLangue.includes(item) ? (
                              <View style={[StylesJeParle.lineOption]} />
                            ) : null}
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                    </View>
                  ) : null}
                </View>
                <TouchableOpacity
                  onPress={() => {
                    viewLangue ? setViewLangue(false) : setViewLangue(true);
                  }}>
                  <Image
                    source={require('../../../assets/images/Fleche-G-CA.png')}
                    style={[
                      StylesJeParle.icoViewOption,
                      {
                        transform: [{rotate: viewLangue ? '90deg' : '270deg'}],
                      },
                    ]}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={[
                StylesJeParle.txtChoice,
                {
                  top: viewLangue ? 50 : 350,
                },
              ]}>
              Choix Multiple.
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default JeParle;
