import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import {storeData, getData} from '../../services/storage';
import StylesPolitique from '../../../assets/style/StyleComposants/styleEdit/StylePolitique';

export const Politique = () => {
  const [modalPolitiqueVisible, setModalPolitiqueVisible] =
    useState<boolean>(false);

  const [viewPolitique, setViewPolitique] = useState<boolean>(false);

  const [userPolitique, setUserPolitique] = useState<string>();

  // console.log(userPolitique);

  const politique: string[] = [
    'Apolitisme',
    'Centre',
    'Libéral(e)',
    'Gauche',
    'Droite',
  ];

  const storageKey: string = 'user_politic';

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
        setUserPolitique(JSON.parse(storedData));
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
          setModalPolitiqueVisible(true);
        }}
        style={[StylesPolitique.btnModal]}>
        <Image
          source={require('../../../assets/images/Politique.png')}
          style={[StylesPolitique.icoBtnModal]}
        />
        <Text style={[StylesPolitique.txtBtnModal]}>Politique</Text>
        <Image
          style={[StylesPolitique.plusBtnModal]}
          source={
            !userPolitique
              ? require('../../../assets/images/add_ra_vide.png')
              : require('../../../assets/images/PlusActivite.png')
          }
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalPolitiqueVisible}
        onRequestClose={() => {
          setModalPolitiqueVisible(false);
        }}>
        {/* Arrière-plan semi-transparent */}
        <View style={StylesPolitique.containerModal}>
          <TouchableOpacity
            style={StylesPolitique.btnClose}
            onPress={() => setModalPolitiqueVisible(false)}
            accessibilityLabel="Fermer la fenêtre"
          />
          {/* Contenu de la modal */}
          <View style={StylesPolitique.viewModal}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../../assets/images/Politique.png')}
                style={StylesPolitique.icoModal}
              />
              <Text style={StylesPolitique.txtTitleModal}>
                Orientation politique
              </Text>
            </View>
            <View>
              <Text style={StylesPolitique.subTxtModal}>
                Sélectionnez votre orientation politique.
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
                      viewPolitique
                        ? setViewPolitique(false)
                        : setViewPolitique(true);
                    }}
                    style={{width: 276, alignSelf: 'center'}}>
                    <Text style={[StylesPolitique.txtOptionSelected]}>
                      {userPolitique ? userPolitique : 'Orientation politique'}
                    </Text>
                  </TouchableOpacity>
                  {viewPolitique ? (
                    <View style={[StylesPolitique.viewOption]}>
                      {politique.map((item, index) => (
                        <TouchableOpacity
                          key={index}
                          style={{}}
                          onPress={() => {
                            setUserPolitique(item);
                            handleStoreData('user_politic', item);
                            setViewPolitique(false);
                          }}>
                          <Text
                            key={index}
                            style={[
                              StylesPolitique.txtOption,
                              {fontWeight: userPolitique === item ? 700 : 500},
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
                    viewPolitique
                      ? setViewPolitique(false)
                      : setViewPolitique(true);
                  }}>
                  <Image
                    source={require('../../../assets/images/FlecheEditRA.png')}
                    style={[
                      StylesPolitique.icoViewOption,
                      {
                        transform: [
                          {rotate: viewPolitique ? '180deg' : '0deg'},
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
              Choix unique
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Politique;
