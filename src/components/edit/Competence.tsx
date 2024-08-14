import React, {useEffect, useState} from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import StylesCompetence from '../../../assets/style/StyleComposants/styleEdit/StyleCompetence';
import {getData, storeData} from '../../services/storage';

export const Competence = () => {
  const [modalCompetencelVisible, setModalCompetencelVisible] =
    useState<boolean>(false);

  const storageKey: string = 'user_competence';

  const [userCompetence, setUserCompetence] = useState<string[]>([
    'Leadership',
    'Écoute active',
  ]);
  // console.log(userCompetence);

  const addCompetence = (text: string) => {
    const newUserCompetence = [...userCompetence];
    if (newUserCompetence.includes(text)) {
      setUserCompetence(newUserCompetence);
    } else {
      newUserCompetence.push(text);
      setUserCompetence(newUserCompetence);
    }
  };

  const removeCompetence = (text: string) => {
    let newUserCompetence = [...userCompetence];

    if (newUserCompetence.includes(text)) {
      newUserCompetence = newUserCompetence.filter(item => item !== text);
      setUserCompetence(newUserCompetence);
      handleStoreData(storageKey, userCompetence);
    } else {
      setUserCompetence(newUserCompetence);
    }
  };

  const handleStoreData = async (key: string, value: string[]) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetData = async () => {
    try {
      const userEtude = await getData(storageKey);
      setUserCompetence(userEtude || '');
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
          setModalCompetencelVisible(true);
        }}
        style={[StylesCompetence.btnModal]}>
        <Image
          style={[StylesCompetence.icoBtnModal]}
          source={require('../../../assets/images/distinctions.png')}
        />
        <Text style={[StylesCompetence.txtBtnModal]}>Mes compétences</Text>
        <Image
          style={[StylesCompetence.plusBtnModal]}
          source={
            userCompetence
              ? require('../../../assets/images/add_pro_plein.png')
              : require('../../../assets/images/add_pro_vide.png')
          }
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalCompetencelVisible}
        statusBarTranslucent={true}>
        {/* Arrière-plan semi-transparent */}
        <View style={[StylesCompetence.containerModal]}>
          <TouchableOpacity
            style={[StylesCompetence.btnClose]}
            onPress={() => setModalCompetencelVisible(false)}
            accessibilityLabel="Ferme la fenêtre"
          />
          {/* Contenu de la modal */}
          <View style={[StylesCompetence.viewModal]}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../../assets/images/Distinct.png')}
                style={[StylesCompetence.icoModal]}
              />
              <Text style={[StylesCompetence.txtTitleModal]}>
                Mes compétences
              </Text>
            </View>
            <View>
              <Text style={StylesCompetence.subTxtModal}>
                Entrez vos compétences.
              </Text>
            </View>
            <View style={{alignSelf: 'center'}}>
              <SafeAreaView style={[StylesCompetence.viewRow]}>
                <Image
                  source={require('../../../assets/images/Loupe-B-RP.png')}
                  style={[StylesCompetence.icoInput]}
                />
                <TextInput
                  style={[StylesCompetence.txtInput]}
                  placeholder="Recherchez une compétences"
                  onSubmitEditing={event =>
                    addCompetence(event.nativeEvent.text)
                  }
                />
              </SafeAreaView>
            </View>
            {userCompetence ? (
              <View style={[StylesCompetence.viewOption]}>
                <ScrollView
                  style={{alignSelf: 'center'}}
                  contentContainerStyle={[StylesCompetence.viewScroll]}>
                  {userCompetence.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        removeCompetence(item);
                      }}
                      style={[StylesCompetence.btnOption]}>
                      <Text style={[StylesCompetence.txtOption]}>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            ) : null}
            <Text
              style={[
                StylesCompetence.txtChoice,
                {
                  top: 230,
                },
              ]}>
              Choix multiples.
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Competence;
