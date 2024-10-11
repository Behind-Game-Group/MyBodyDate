import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import {storeData, getData} from '../../services/storage';
import StylesFumer from '../../../assets/style/StyleComposants/styleEdit/StyleFumer';

export const Fumer = () => {
  const [modalSmokingVisible, setModalSmokingVisible] =
    useState<boolean>(false);

  const [viewSmoking, setViewSmoking] = useState<boolean>(false);

  const [userSmoking, setUserSmoking] = useState<string>('');

  // console.log(userSmoking);

  const fumette = [
    'À l’occasion',
    'Régulièrement',
    'Rarement',
    'Jamais',
    'J’ai arrêté',
  ];

  const storageKey: string = 'user_smoking';

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
        setUserSmoking(JSON.parse(storedData));
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
          setModalSmokingVisible(true);
        }}
        style={[StylesFumer.btnModal]}>
        <Image
          source={require('../../../assets/images/Fumer.png')}
          style={[StylesFumer.icoBtnModal]}
        />
        <Text style={[StylesFumer.txtBtnModal]}>Tabac</Text>
        <Image
          style={[StylesFumer.plusBtnModal]}
          source={
            !userSmoking
              ? require('../../../assets/images/add_ra_vide.png')
              : require('../../../assets/images/PlusActivite.png')
          }
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalSmokingVisible}
        onRequestClose={() => {
          setModalSmokingVisible(false);
        }}>
        {/* Arrière-plan semi-transparent */}
        <View style={StylesFumer.containerModal}>
          <TouchableOpacity
            style={StylesFumer.btnClose}
            onPress={() => setModalSmokingVisible(false)}
            accessibilityLabel="Fermer la fenêtre"
          />
          {/* Contenu de la modal */}
          <View style={StylesFumer.viewModal}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../../assets/images/Fumer.png')}
                style={StylesFumer.icoModal}
              />
              <Text style={StylesFumer.txtTitleModal}>Tabac</Text>
            </View>
            <View>
              <Text style={StylesFumer.subTxtModal}>
                Sélectionnez votre consommation de tabac
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
                      viewSmoking
                        ? setViewSmoking(false)
                        : setViewSmoking(true);
                    }}
                    style={{width: 276, alignSelf: 'center'}}>
                    <Text style={[StylesFumer.txtOptionSelected]}>
                      {userSmoking ? userSmoking : 'Consommation tabac'}
                    </Text>
                  </TouchableOpacity>
                  {viewSmoking ? (
                    <View style={[StylesFumer.viewOption]}>
                      {fumette.map((item, index) => (
                        <TouchableOpacity
                          key={index}
                          style={{}}
                          onPress={() => {
                            setUserSmoking(item);
                            handleStoreData('user_smoking', item);
                            setViewSmoking(false);
                          }}>
                          <Text
                            key={index}
                            style={[
                              StylesFumer.txtOption,
                              {fontWeight: userSmoking === item ? 700 : 500},
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
                    viewSmoking ? setViewSmoking(false) : setViewSmoking(true);
                  }}>
                  <Image
                    source={require('../../../assets/images/FlecheEditRA.png')}
                    style={[
                      StylesFumer.icoViewOption,
                      {
                        transform: [{rotate: viewSmoking ? '180deg' : '0deg'}],
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

export default Fumer;
