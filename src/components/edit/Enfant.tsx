import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import {storeData, getData} from '../../services/storage';
import StylesEnfant from '../../../assets/style/StyleComposants/styleEdit/StyleEnfant';

export const Enfant = () => {
  const [modalEnfantVisible, setModalEnfantVisible] = useState<boolean>(false);

  const [viewEnfant, setViewEnfant] = useState<boolean>(false);

  const [userEnfant, setUserEnfant] = useState<string>('');

  const storageKey: string = 'user_child';

  // console.log(userEnfant);

  const enfant = [
    "J'aimerais en avoir",
    "Je n'en veux pas",
    'J’en ai et j’en veux d’autres',
    'J’en ai et j’en veux plus',
    'Je ne sais pas trop',
    'J’ai des enfants',
    'J’aimerais avoir des enfants',
  ];

  const handleStoreData = async (key: string, value: string) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetData = async () => {
    try {
      const userEnfant = await getData(storageKey);
      setUserEnfant(userEnfant || '');
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
          setModalEnfantVisible(true);
        }}
        style={[StylesEnfant.btnModal]}>
        <Image
          source={require('../../../assets/images/Biberon.png')}
          style={[StylesEnfant.icoBtnModal]}
        />
        <Text style={[StylesEnfant.txtBtnModal]}>Enfant</Text>
        <Image
          style={[StylesEnfant.plusBtnModal]}
          source={
            !userEnfant
              ? require('../../../assets/images/add_ra_vide.png')
              : require('../../../assets/images/PlusActivite.png')
          }
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalEnfantVisible}
        onRequestClose={() => {
          setModalEnfantVisible(false);
        }}>
        {/* Arrière-plan semi-transparent */}
        <View style={StylesEnfant.containerModal}>
          <TouchableOpacity
            style={StylesEnfant.btnClose}
            onPress={() => setModalEnfantVisible(false)}
            accessibilityLabel="Fermer la fenêtre"
          />
          {/* Contenu de la modal */}
          <View style={StylesEnfant.viewModal}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../../assets/images/Biberon.png')}
                style={StylesEnfant.icoModal}
              />
              <Text style={StylesEnfant.txtTitleModal}>Enfant</Text>
            </View>
            <View>
              <Text style={StylesEnfant.subTxtModal}>
                Sélectionnez votre opinion concernant les enfants.
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
                      viewEnfant ? setViewEnfant(false) : setViewEnfant(true);
                    }}
                    style={{width: 276, alignSelf: 'center'}}>
                    <Text style={[StylesEnfant.txtOptionSelected]}>
                      {userEnfant ? userEnfant : 'Enfants'}
                    </Text>
                  </TouchableOpacity>
                  {viewEnfant ? (
                    <View style={[StylesEnfant.viewOption]}>
                      {enfant.map((item, index) => (
                        <TouchableOpacity
                          key={index}
                          style={{}}
                          onPress={() => {
                            setUserEnfant(item);
                            handleStoreData('user_child', item);
                            setViewEnfant(false);
                          }}>
                          <Text key={index} style={[StylesEnfant.txtOption]}>
                            {item}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  ) : null}
                </View>
                <TouchableOpacity
                  onPress={() => {
                    viewEnfant ? setViewEnfant(false) : setViewEnfant(true);
                  }}>
                  <Image
                    source={require('../../../assets/images/FlecheEditRA.png')}
                    style={[
                      StylesEnfant.icoViewOption,
                      {
                        transform: [{rotate: viewEnfant ? '180deg' : '0deg'}],
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

export default Enfant;
