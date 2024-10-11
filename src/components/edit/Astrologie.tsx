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
import {storeData, getData} from '../../services/storage';
import StylesAstrologie from '../../../assets/style/StyleComposants/styleEdit/StyleAstrologie';

export const Astrologie = () => {
  const [modalAstrologieVisible, setModalAstrologieVisible] =
    useState<boolean>(false);

  const [viewAstrologie, setViewAstrologie] = useState<boolean>(false);

  const [userAstrologie, setUserAstrologie] = useState<string>('');

  // console.log(userAstrologie);

  const astrologie = [
    'Bélier',
    'Taureau',
    'Gémeaux',
    'Cancer',
    'Lion',
    'Vierge',
    'Balance',
    'Scorpion',
    'Sagittaire',
    'Capricorne',
    'Verseau',
    'Poissons',
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
      const userAstrolie = await getData('user_astrology');
      setUserAstrologie(userAstrolie || '');
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
          setModalAstrologieVisible(true);
        }}
        style={[StylesAstrologie.btnModal]}>
        <Image
          source={require('../../../assets/images/Astrologie.png')}
          style={[StylesAstrologie.icoBtnModal]}
        />
        <Text style={[StylesAstrologie.txtBtnModal]}>Signe astrologique</Text>
        <Image
          style={[StylesAstrologie.plusBtnModal]}
          source={
            !userAstrologie
              ? require('../../../assets/images/add_ra_vide.png')
              : require('../../../assets/images/PlusActivite.png')
          }
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalAstrologieVisible}
        onRequestClose={() => {
          setModalAstrologieVisible(false);
        }}>
        {/* Arrière-plan semi-transparent */}
        <View style={StylesAstrologie.containerModal}>
          <TouchableOpacity
            style={StylesAstrologie.btnClose}
            onPress={() => setModalAstrologieVisible(false)}
            accessibilityLabel="Fermer la fenêtre"
          />
          {/* Contenu de la modal */}
          <View style={StylesAstrologie.viewModal}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../../assets/images/Astrologie.png')}
                style={StylesAstrologie.icoModal}
              />
              <Text style={StylesAstrologie.txtTitleModal}>
                Signe astrologique
              </Text>
            </View>
            <View>
              <Text style={StylesAstrologie.subTxtModal}>
                Sélectionnez votre signe astrologique.
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
                      viewAstrologie
                        ? setViewAstrologie(false)
                        : setViewAstrologie(true);
                    }}
                    style={{width: 276, alignSelf: 'center'}}>
                    <Text style={[StylesAstrologie.txtOptionSelected]}>
                      {userAstrologie ? userAstrologie : 'Signes astrologiques'}
                    </Text>
                  </TouchableOpacity>
                  {viewAstrologie ? (
                    <View style={[StylesAstrologie.viewOption]}>
                      <ScrollView style={{width: '100%'}}>
                        {astrologie.map((item, index) => (
                          <TouchableOpacity
                            key={index}
                            style={{margin: 8}}
                            onPress={() => {
                              setUserAstrologie(item);
                              handleStoreData('user_astrology', item);
                              setViewAstrologie(false);
                            }}>
                            <Text
                              key={index}
                              style={[
                                StylesAstrologie.txtOption,
                                {
                                  fontWeight:
                                    userAstrologie === item ? 700 : 500,
                                },
                              ]}>
                              {item}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                    </View>
                  ) : null}
                </View>
                <TouchableOpacity
                  onPress={() => {
                    viewAstrologie
                      ? setViewAstrologie(false)
                      : setViewAstrologie(true);
                  }}>
                  <Image
                    source={require('../../../assets/images/FlecheEditRA.png')}
                    style={[
                      StylesAstrologie.icoViewOption,
                      {
                        transform: [
                          {rotate: viewAstrologie ? '180deg' : '0deg'},
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

export default Astrologie;
