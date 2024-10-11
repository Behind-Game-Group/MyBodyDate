import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import {storeData, getData} from '../../services/storage';
import StylesOrigine from '../../../assets/style/StyleComposants/styleEdit/StyleOrigine';

export const Origine = () => {
  const [modalEthnicityVisible, setModalEthnicityVisible] =
    useState<boolean>(false);

  const [viewEthnicity, setViewEthnicity] = useState<boolean>(false);

  const [userEthnicity, setUserEthnicity] = useState<string[]>([]);

  // console.log(userEthnicity);

  const origine: string[] = [
    'Asiatique',
    'Blanc/Caucasien.ne',
    'Indien.ne',
    'Latino/Hispanique',
    'Noir.e/Africain.ne',
    'Originaire du Moyen Orient',
    'Métis.se',
  ];

  const handleEthnicity = (value: string) => {
    let newUserEthnicity = [...userEthnicity];

    if (newUserEthnicity.includes(value)) {
      newUserEthnicity = newUserEthnicity.filter(item => item !== value);
    } else {
      newUserEthnicity.push(value);
    }
    setUserEthnicity(newUserEthnicity);
    handleStoreData('user_ethnicity', newUserEthnicity);
  };

  const storageKey: string = 'user_morphology';

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
        setUserEthnicity(JSON.parse(storedData));
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
          setModalEthnicityVisible(true);
        }}
        style={[StylesOrigine.btnModal]}>
        <Image
          source={require('../../../assets/images/Origine.png')}
          style={[StylesOrigine.icoBtnModal]}
        />
        <Text style={[StylesOrigine.txtBtnModal]}>Ethnicity</Text>
        <Image
          style={[StylesOrigine.plusBtnModal]}
          source={
            !userEthnicity
              ? require('../../../assets/images/add_ra_vide.png')
              : require('../../../assets/images/PlusActivite.png')
          }
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalEthnicityVisible}
        onRequestClose={() => {
          setModalEthnicityVisible(false);
        }}>
        {/* Arrière-plan semi-transparent */}
        <View style={StylesOrigine.containerModal}>
          <TouchableOpacity
            style={StylesOrigine.btnClose}
            onPress={() => setModalEthnicityVisible(false)}
            accessibilityLabel="Fermer la fenêtre"
          />
          {/* Contenu de la modal */}
          <View style={StylesOrigine.viewModal}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../../assets/images/Origine.png')}
                style={StylesOrigine.icoModal}
              />
              <Text style={StylesOrigine.txtTitleModal}>Origine ethnique</Text>
            </View>
            <View>
              <Text style={StylesOrigine.subTxtModal}>
                Sélectionnez vos origines.
              </Text>
            </View>
            <View
              style={{
                top: 140,
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column'}}>
                  <TouchableOpacity
                    onPress={() => {
                      viewEthnicity
                        ? setViewEthnicity(false)
                        : setViewEthnicity(true);
                    }}
                    style={{width: 276, alignSelf: 'center'}}>
                    <Text style={[StylesOrigine.txtOptionSelected]}>
                      Sélectionnez les origines
                    </Text>
                  </TouchableOpacity>
                  {viewEthnicity ? (
                    <View style={[StylesOrigine.viewOption]}>
                      {origine.map((item, index) => (
                        <TouchableOpacity
                          key={index}
                          style={{}}
                          onPress={() => {
                            handleEthnicity(item);
                          }}>
                          <Text
                            key={index}
                            style={[
                              StylesOrigine.txtOption,
                              {
                                fontWeight: userEthnicity.includes(item)
                                  ? 700
                                  : 500,
                              },
                            ]}>
                            {item}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  ) : null}
                </View>
                <TouchableOpacity
                  onPress={() => {
                    viewEthnicity
                      ? setViewEthnicity(false)
                      : setViewEthnicity(true);
                  }}>
                  <Image
                    source={require('../../../assets/images/FlecheEditRA.png')}
                    style={[
                      StylesOrigine.icoViewOption,
                      {
                        transform: [
                          {rotate: viewEthnicity ? '180deg' : '0deg'},
                        ],
                      },
                    ]}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                top: 360,
                left: 40,
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                fontSize: 12,
              }}>
              Choix multiples
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Origine;
