import React, {useEffect, useState} from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import StylesVotreRecherche from '../../../assets/style/StyleComposants/styleEdit/StyleVotreRecherche';
import {storeData, getData} from '../../services/storage';

export const VotreRecherche = () => {
  const [openModalRecherche, setOpenModalRecherche] = useState<boolean>(false);

  const recherche: string[] = [
    'Pas important',
    'Moins de 10 000 €',
    '10001 - 20000 €',
    '20 000 € - 30 000 €',
    '30001 - 40000 €',
    '40001 - 50000 €',
    '50001 - 60000 €',
    '60001 - 80000 €',
    '80 001 - 100 000 €',
    'Plus de 100 0001€',
  ];

  const [viewRecherche, setViewRecherche] = useState<boolean>(false);

  const [userRecherche, setUserRecherche] = useState<string>();

  const storageKey: string = 'user_recherche';

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
        setUserRecherche(JSON.parse(storedData));
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
          setOpenModalRecherche(true);
        }}
        style={[StylesVotreRecherche.btnModal]}>
        <Image
          style={[StylesVotreRecherche.icoBtnModal]}
          source={require('../../../assets/images/recherche_emploi.png')}
        />
        <Text style={[StylesVotreRecherche.txtBtnModal]}>Recherche</Text>
        <Image
          style={[StylesVotreRecherche.plusBtnModal]}
          source={
            userRecherche
              ? require('../../../assets/images/add_pro_plein.png')
              : require('../../../assets/images/add_pro_vide.png')
          }
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={openModalRecherche}
        statusBarTranslucent={true}>
        {/* Arrière-plan semi-transparent */}
        <View style={[StylesVotreRecherche.containerModal]}>
          <TouchableOpacity
            style={[StylesVotreRecherche.btnClose]}
            onPress={() => {
              setOpenModalRecherche(false);
            }}
            accessibilityLabel="Ferme la fenêtre"
          />
          {/* Contenu de la modal */}
          <View style={[StylesVotreRecherche.viewModal]}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../../assets/images/ChemiseEditRP.png')}
                style={[StylesVotreRecherche.icoModal]}
              />
              <Text style={[StylesVotreRecherche.txtTitleModal]}>
                Recherche
              </Text>
            </View>
            <View>
              <Text style={[StylesVotreRecherche.subTxtModal]}>
                Sélectionnez votre statut professionnel.
              </Text>
            </View>
            <View>
              <View
                style={{
                  alignItems: 'center',
                  top: 140,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flexDirection: 'column'}}>
                    <TouchableOpacity
                      onPress={() => {
                        viewRecherche
                          ? setViewRecherche(false)
                          : setViewRecherche(true);
                      }} // Show the second code on click
                      style={{width: 276, alignSelf: 'center'}}>
                      <Text style={[StylesVotreRecherche.txtOptionSelected]}>
                        {userRecherche
                          ? userRecherche
                          : 'Sélectionnez votre recherche.'}
                      </Text>
                    </TouchableOpacity>
                    {viewRecherche ? (
                      <View style={[StylesVotreRecherche.viewOption]}>
                        <ScrollView style={{}}>
                          {recherche.map((item, index) => (
                            <TouchableOpacity
                              key={index}
                              style={{margin: 10}}
                              onPress={() => {
                                setUserRecherche(item);
                                handleStoreData(storageKey, item);
                                setViewRecherche(false);
                              }}>
                              <Text
                                key={index}
                                style={[StylesVotreRecherche.txtOption]}>
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
                      viewRecherche
                        ? setViewRecherche(false)
                        : setViewRecherche(true);
                    }}>
                    <Image
                      source={require('../../../assets/images/FlecheEditRP.png')}
                      style={[
                        StylesVotreRecherche.icoViewOption,
                        {
                          transform: [
                            {rotate: viewRecherche ? '180deg' : '0deg'},
                          ],
                        },
                      ]}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <Text
                style={[
                  StylesVotreRecherche.txtChoice,
                  {
                    top: viewRecherche ? 50 : 350,
                  },
                ]}>
                Choix unique.
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default VotreRecherche;
