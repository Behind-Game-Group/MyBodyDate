import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import {storeData, getData} from '../../services/storage';
import StylesSport from '../../../assets/style/StyleComposants/styleEdit/StyleSport';

export const Sport = () => {
  const [modalSprotVisible, setModalSportVisible] = useState<boolean>(false);

  const [viewSprot, setViewASport] = useState<boolean>(false);

  const [userSport, setUserSport] = useState<string>();

  // console.log(userSport);

  const sport: string[] = ['Souvent', 'Parfois', 'Très peu', 'Jamais'];

  const storageKey: string = 'user_sport';

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
        setUserSport(JSON.parse(storedData));
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
          setModalSportVisible(true);
        }}
        style={[StylesSport.btnModal]}>
        <Image
          source={require('../../../assets/images/Sport.png')}
          style={[StylesSport.icoBtnModal]}
        />
        <Text style={[StylesSport.txtBtnModal]}>Activité sportive</Text>
        <Image
          style={[StylesSport.plusBtnModal]}
          source={
            !userSport
              ? require('../../../assets/images/add_ra_vide.png')
              : require('../../../assets/images/PlusActivite.png')
          }
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalSprotVisible}
        onRequestClose={() => {
          setModalSportVisible(false);
        }}>
        {/* Arrière-plan semi-transparent */}
        <View style={StylesSport.containerModal}>
          <TouchableOpacity
            style={StylesSport.btnClose}
            onPress={() => setModalSportVisible(false)}
            accessibilityLabel="Fermer la fenêtre"
          />
          {/* Contenu de la modal */}
          <View style={StylesSport.viewModal}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../../assets/images/Sport.png')}
                style={StylesSport.icoModal}
              />
              <Text style={StylesSport.txtTitleModal}>Activité sportive</Text>
            </View>
            <View>
              <Text style={StylesSport.subTxtModal}>
                Sélectionnez la fréquence de votre activité sportive.
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
                      viewSprot ? setViewASport(false) : setViewASport(true);
                    }}
                    style={{width: 276, alignSelf: 'center'}}>
                    <Text style={[StylesSport.txtOptionSelected]}>
                      {userSport ? userSport : 'Activité sportive'}
                    </Text>
                  </TouchableOpacity>
                  {viewSprot ? (
                    <View style={[StylesSport.viewOption]}>
                      {sport.map((item, index) => (
                        <TouchableOpacity
                          key={index}
                          style={{}}
                          onPress={() => {
                            setUserSport(item);
                            handleStoreData(storageKey, item);
                            setViewASport(false);
                          }}>
                          <Text
                            key={index}
                            style={[
                              StylesSport.txtOption,
                              {fontWeight: userSport === item ? 700 : 500},
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
                    viewSprot ? setViewASport(false) : setViewASport(true);
                  }}>
                  <Image
                    source={require('../../../assets/images/FlecheEditRA.png')}
                    style={[
                      StylesSport.icoViewOption,
                      {
                        transform: [{rotate: viewSprot ? '180deg' : '0deg'}],
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

export default Sport;
