import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import {storeData, getData} from '../../services/storage';
import StylesAlcool from '../../../assets/style/StyleComposants/styleEdit/StyleAlcool';

export const Alcool = () => {
  const [modalAlcoolVisible, setModalAlcoolVisible] = useState<boolean>(false);

  const [viewAlcool, setViewAlcool] = useState<boolean>(false);

  const [userAlcool, setUserAlcool] = useState<string>('');

  // console.log(userAlcool);

  const fumette = [
    'À l’occasion',
    'Régulièrement',
    'Rarement',
    'Jamais',
    'J’ai arrêté',
  ];

  const handleStoreData = async (key: string, value: string) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  // Appel de la fonction pour récupérer plusieurs valeurs
  const handleGetData = async () => {
    try {
      const userAlcool = await getData('user_alcool');
      setUserAlcool(userAlcool || '');
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
          setModalAlcoolVisible(true);
        }}
        style={[StylesAlcool.btnModal]}>
        <Image
          source={require('../../../assets/images/AlcoolEdit.png')}
          style={[StylesAlcool.icoBtnModal]}
        />
        <Text style={[StylesAlcool.txtBtnModal]}>Alcool</Text>
        <Image
          style={[StylesAlcool.plusBtnModal]}
          source={
            !userAlcool
              ? require('../../../assets/images/add_ra_vide.png')
              : require('../../../assets/images/PlusActivite.png')
          }
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalAlcoolVisible}
        onRequestClose={() => {
          setModalAlcoolVisible(false);
        }}>
        {/* Arrière-plan semi-transparent */}
        <View style={StylesAlcool.containerModal}>
          <TouchableOpacity
            style={StylesAlcool.btnClose}
            onPress={() => setModalAlcoolVisible(false)}
            accessibilityLabel="Fermer la fenêtre"
          />
          {/* Contenu de la modal */}
          <View style={StylesAlcool.viewModal}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../../assets/images/AlcoolEdit.png')}
                style={StylesAlcool.icoModal}
              />
              <Text style={StylesAlcool.txtTitleModal}>Alcool</Text>
            </View>
            <View>
              <Text style={StylesAlcool.subTxtModal}>
                Sélectionnez vos habitudes de consommation d’alcool.
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
                      viewAlcool ? setViewAlcool(false) : setViewAlcool(true);
                    }}
                    style={{width: 276, alignSelf: 'center'}}>
                    <Text style={[StylesAlcool.txtOptionSelected]}>
                      {userAlcool ? userAlcool : 'Consommation d’alcool'}
                    </Text>
                  </TouchableOpacity>
                  {viewAlcool ? (
                    <View style={[StylesAlcool.viewOption]}>
                      {fumette.map((item, index) => (
                        <TouchableOpacity
                          key={index}
                          style={{}}
                          onPress={() => {
                            setUserAlcool(item);
                            handleStoreData('user_alcool', item);
                            setViewAlcool(false);
                          }}>
                          <Text
                            key={index}
                            style={[
                              StylesAlcool.txtOption,
                              {fontWeight: userAlcool === item ? 700 : 500},
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
                    viewAlcool ? setViewAlcool(false) : setViewAlcool(true);
                  }}>
                  <Image
                    source={require('../../../assets/images/FlecheEditRA.png')}
                    style={[
                      StylesAlcool.icoViewOption,
                      {
                        transform: [{rotate: viewAlcool ? '180deg' : '0deg'}],
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
              Choix unique
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Alcool;
