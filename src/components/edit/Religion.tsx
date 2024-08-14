import React, {useEffect, useState} from 'react';
import {StatusBar, Switch} from 'react-native';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import {storeData, getData} from '../../services/storage';
import StylesReligion from '../../../assets/style/StyleComposants/styleEdit/StyleReligion';

export const Religion = () => {
  const [modalReligionVisible, setModalReligionVisible] =
    useState<boolean>(false);

  const [viewReligion, setViewReligion] = useState<boolean>(false);

  const [userReligion, setUserReligion] = useState<string>();

  const [userPractice, setUserPractice] = useState<string>();

  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  // console.log(userReligion);

  const religion: string[] = [
    'Chrétienne',
    'Hindouisme',
    'Jaïnisme',
    'Judaïsme',
    'Mormonisme',
    'Saints des derniers jours',
    'Islam',
    'Zoroastrisme',
  ];

  const storageReligion: string = 'user_religion';
  const storagePractice: string = 'user_practice';

  const handleStoreData = async (key: string, value: string) => {
    try {
      await storeData(key, JSON.stringify(value));
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetReligion = async () => {
    try {
      const storedData = await getData(storageReligion);
      if (storedData) {
        setUserReligion(JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const handleGetPractice = async () => {
    try {
      const storedData = await getData(storagePractice);
      if (storedData) {
        setUserPractice(JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const initSwitchState = (practice: string) => {
    if (practice === 'pratiquant') {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  };

  const toggleSwitch = () => {
    const newEnabled = !isEnabled;
    setIsEnabled(newEnabled);
    const newPractice = newEnabled ? 'pratiquant' : 'non pratiquant';
    handleStoreData(storagePractice, newPractice);
  };

  useEffect(() => {
    handleGetPractice();
    handleGetReligion();
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setModalReligionVisible(true);
        }}
        style={[StylesReligion.btnModal]}>
        <Image
          source={require('../../../assets/images/ReligionB.png')}
          style={[StylesReligion.icoBtnModal]}
        />
        <Text style={[StylesReligion.txtBtnModal]}>Religion</Text>
        <Image
          style={[StylesReligion.plusBtnModal]}
          source={
            !userReligion
              ? require('../../../assets/images/add_ra_vide.png')
              : require('../../../assets/images/PlusActivite.png')
          }
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalReligionVisible}
        onRequestClose={() => {
          setModalReligionVisible(false);
        }}>
        {/* Arrière-plan semi-transparent */}
        <View style={StylesReligion.containerModal}>
          <TouchableOpacity
            style={StylesReligion.btnClose}
            onPress={() => setModalReligionVisible(false)}
            accessibilityLabel="Fermer la fenêtre"
          />
          {/* Contenu de la modal */}
          <View style={StylesReligion.viewModal}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../../assets/images/ReligionB.png')}
                style={StylesReligion.icoModal}
              />
              <Text style={StylesReligion.txtTitleModal}>Religion</Text>
            </View>
            <View>
              <Text style={StylesReligion.subTxtModal}>
                Sélectionnez votre religion.
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
                      viewReligion
                        ? setViewReligion(false)
                        : setViewReligion(true);
                    }}
                    style={{width: 276, alignSelf: 'center'}}>
                    <Text style={[StylesReligion.txtOptionSelected]}>
                      {userReligion ? userReligion : 'Religion'}
                    </Text>
                  </TouchableOpacity>
                  {viewReligion ? (
                    <View style={[StylesReligion.viewOption]}>
                      {religion.map((item, index) => (
                        <TouchableOpacity
                          key={index}
                          style={{}}
                          onPress={() => {
                            setUserReligion(item);
                            handleStoreData(storageReligion, item);
                            setViewReligion(false);
                          }}>
                          <Text key={index} style={[StylesReligion.txtOption]}>
                            {item}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  ) : null}
                </View>
                <TouchableOpacity
                  onPress={() => {
                    viewReligion
                      ? setViewReligion(false)
                      : setViewReligion(true);
                  }}>
                  <Image
                    source={require('../../../assets/images/FlecheEditRA.png')}
                    style={[
                      StylesReligion.icoViewOption,
                      {
                        transform: [{rotate: viewReligion ? '180deg' : '0deg'}],
                      },
                    ]}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                top: 320,
                flexDirection: 'row',
                width: '80%',
                alignSelf: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: !isEnabled ? '#000' : '#6B6B6B',
                  fontFamily: !isEnabled ? 'Comfortaa-Bold' : 'Comfortaa',
                  fontSize: 16,
                }}>
                Non Pratiquant
              </Text>
              <Switch
                trackColor={{false: '#BEC8FF', true: '#17ff58'}}
                thumbColor={isEnabled ? '#BEC8FF' : '#f4f3f4'}
                ios_backgroundColor="#f4f3f4"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{alignSelf: 'center'}}
              />
              <Text
                style={{
                  color: isEnabled ? '#000' : '#6B6B6B',
                  fontFamily: isEnabled ? 'Comfortaa-Bold' : 'Comfortaa',
                  fontSize: 16,
                }}>
                Pratiquant
              </Text>
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

export default Religion;
