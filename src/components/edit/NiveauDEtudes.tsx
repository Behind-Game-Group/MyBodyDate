import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import StylesNiveauDEtude from '../../../assets/style/StyleComposants/styleEdit/StyleNiveauDEtude';
import {storeData, getData} from '../../services/storage';

export const NiveauDEtudes = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [niveauEtude, setNiveauEtude] = useState<string>();

  console.log(niveauEtude);

  const tabEtudes = [
    'CAP, Apprentissage (boulanger,...)',
    'Lycée',
    'École commerce/technique',
    'Étudiant de 1er cycle universitaire',
    'Licence',
    'Étudiant de 2e ou 3e cycle universitaire',
    'Master ou doctorat',
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
      const userEtude = await getData('user_niveau_etude');
      setNiveauEtude(userEtude || '');
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
          setModalVisible(true);
        }}
        style={[StylesNiveauDEtude.btnModal]}>
        <Image
          style={[StylesNiveauDEtude.icoBtnModal]}
          source={require('../../../assets/images/btn_diplome.png')}
        />
        <Text style={[StylesNiveauDEtude.txtBtnModal]}>Niveau d'études</Text>
        <Image
          style={[StylesNiveauDEtude.plusBtnModal]}
          source={
            niveauEtude
              ? require('../../../assets/images/add_plein.png')
              : require('../../../assets/images/add_vide.png')
          }
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        statusBarTranslucent={true}>
        {/* Arrière-plan semi-transparent */}
        <View style={[StylesNiveauDEtude.containerModal]}>
          <TouchableOpacity
            style={[StylesNiveauDEtude.btnClose]}
            onPress={() => setModalVisible(false)}
            accessibilityLabel="Ferme la fenêtre"
          />
          {/* Contenu de la modal */}
          <View style={[StylesNiveauDEtude.viewModal]}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  top: 10,
                }}>
                <TouchableOpacity>
                  <Image
                    source={require('../../../assets/images/Fleche-G-CA.png')}
                    style={{
                      width: 10,
                      height: 20,
                      right: 100,
                    }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../../assets/images/btn_diplome.png')}
                    style={{
                      width: 78,
                      height: 84,
                      right: 15,
                      top: 30,
                    }}
                  />
                </View>
              </View>
              <Text
                style={{
                  fontFamily: 'Gilroy',
                  fontWeight: '700',
                  fontSize: 20,
                  color: '#9424FA',
                  top: 50,
                }}>
                Niveau d'études
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: 'Gilroy',
                  fontWeight: '700',
                  fontSize: 14,
                  color: '#9424FA',
                  top: 80,
                  left: 30,
                }}>
                Votre niveau d'études
              </Text>
            </View>
            <View style={{left: 30}}>
              {tabEtudes.map((label, index: number) => (
                <View
                  key={index}
                  style={{
                    top: 100 + index * 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setNiveauEtude(label);
                      handleStoreData('user_niveau_etude', label);
                    }}>
                    <Image
                      source={
                        niveauEtude === label
                          ? require('../../../assets/images/EllipsePleineCA.png')
                          : require('../../../assets/images/EllipseVideCA.png')
                      }
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: 'Comfortaa',
                      fontWeight: '700',
                      fontSize: 16,
                      color: '#9424FA',
                      left: 20,
                    }}>
                    {label}
                  </Text>
                </View>
              ))}
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 12,
                  color: '#9424FA',
                  left: 20,
                  top: 250,
                }}>
                Choix unique.
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default NiveauDEtudes;
