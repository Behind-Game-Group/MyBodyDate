import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import StylesStatut from '../../../assets/style/StyleComposants/styleEdit/StyleStatut';
import {storeData, getData} from '../../services/storage';

export const Statut = () => {
  const [openModalStatut, setOpenModalStatut] = useState<boolean>(false);

  const [viewStatut, setViewStatut] = useState<boolean>(false);

  const [userStatut, setUserStatut] = useState<string>();

  const statut: string[] = [
    'Apprenti',
    'Artisan',
    'Commerçant',
    'Fonctionnaire',
    'Intérimaire',
    'Libéral',
    'Salarié',
  ];

  const storageKey: string = 'user_statut';

  const handleStoreData = async (key: string, value: string) => {
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
        setUserStatut(JSON.parse(storedData));
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
    <View>
      <TouchableOpacity
        onPress={() => {
          setOpenModalStatut(true);
        }}
        style={[StylesStatut.btnModal]}>
        <Image
          source={require('../../../assets/images/statut.png')}
          style={[StylesStatut.icoBtnModal]}
        />
        <Text style={[StylesStatut.txtBtnModal]}>Statut</Text>
        <Image
          style={[StylesStatut.plusBtnModal]}
          source={
            userStatut
              ? require('../../../assets/images/add_pro_plein.png')
              : require('../../../assets/images/add_pro_vide.png')
          }
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={openModalStatut}
        statusBarTranslucent={true}>
        {/* Arrière-plan semi-transparent */}
        <View style={[StylesStatut.containerModal]}>
          <TouchableOpacity
            style={[StylesStatut.btnClose]}
            onPress={() => {
              setOpenModalStatut(false);
            }}
            accessibilityLabel="Ferme la fenêtre"
          />
          {/* Contenu de la modal */}
          <View style={[StylesStatut.viewModal]}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../../assets/images/ChemiseEditRP.png')}
                style={[StylesStatut.icoModal]}
              />
              <Text style={[StylesStatut.txtTitleModal]}>Statut</Text>
            </View>
            <View>
              <Text style={[StylesStatut.subTxtModal]}>
                Sélectionnez votre statut professionnel.
              </Text>
            </View>
            <View
              style={{
                top: 180,
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column'}}>
                  <TouchableOpacity
                    onPress={() => {
                      viewStatut ? setViewStatut(false) : setViewStatut(true);
                    }} // Show the second code on click
                    style={{width: 276, alignSelf: 'center'}}>
                    <Text style={[StylesStatut.txtOptionSelected]}>
                      {userStatut ? userStatut : 'Votre statut professionnel'}
                    </Text>
                  </TouchableOpacity>
                  {viewStatut ? (
                    <View style={[StylesStatut.viewOption]}>
                      {statut.map((item, index) => (
                        <TouchableOpacity
                          key={index}
                          style={{}}
                          onPress={() => {
                            setUserStatut(item);
                            handleStoreData(storageKey, item);
                            setViewStatut(false);
                          }}>
                          <Text key={index} style={[StylesStatut.txtOption]}>
                            {item}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  ) : null}
                </View>
                <TouchableOpacity
                  onPress={() => {
                    viewStatut ? setViewStatut(false) : setViewStatut(true);
                  }}>
                  <Image
                    source={require('../../../assets/images/FlecheEditRP.png')}
                    style={[
                      StylesStatut.icoViewOption,
                      {
                        transform: [{rotate: viewStatut ? '180deg' : '0deg'}],
                      },
                    ]}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={[
                StylesStatut.txtChoice,
                {
                  top: viewStatut ? 50 : 350,
                },
              ]}>
              Choix unique.
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Statut;
