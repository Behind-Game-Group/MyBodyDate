import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import StylesOffre from '../../../assets/style/StyleComposants/styleEdit/StyleOffre';
import {storeData, getData} from '../../services/storage';

export const Offre = () => {
  const [modalOffre, setModalOffre] = useState<boolean>(false);

  const [offreTitle, setOffreTitle] = useState<string>(
    "Entrer l'intitulé de votre offre . . .",
  );

  const [offreDescription, setOffreDescription] = useState<string>(
    'Entrer la description de votre offre . . .',
  );

  const storageTitle: string = 'user_offre_title';
  const storageDescription: string = 'user_offre_description';

  const handleStoreData = async (key: string, value: string) => {
    try {
      await storeData(key, JSON.stringify(value));
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetTitle = async () => {
    try {
      const storedData = await getData(storageTitle);
      if (storedData) {
        setOffreTitle(JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const handleGetDescription = async () => {
    try {
      const storedData = await getData(storageDescription);
      if (storedData) {
        setOffreDescription(JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  useEffect(() => {
    handleGetTitle();
    handleGetDescription();
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setModalOffre(true);
        }}
        style={[StylesOffre.btnModal]}>
        <Image
          style={[StylesOffre.icoBtnModal]}
          source={require('../../../assets/images/publier__offre.png')}
        />
        <Text style={[StylesOffre.txtBtnModal]}>Publier une offre</Text>
        <Image
          style={[StylesOffre.plusBtnModal]}
          source={
            offreTitle || offreDescription
              ? require('../../../assets/images/add_pro_plein.png')
              : require('../../../assets/images/add_pro_vide.png')
          }
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalOffre}
        statusBarTranslucent={true}>
        {/* Arrière-plan semi-transparent */}
        <View style={[StylesOffre.containerModal]}>
          <TouchableOpacity
            style={[StylesOffre.btnClose]}
            onPress={() => setModalOffre(false)}
            accessibilityLabel="Ferme la fenêtre"
          />
          {/* Contenu de la modal */}
          <View style={[StylesOffre.viewModal]}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../../assets/images/Distinct.png')}
                style={[StylesOffre.icoModal]}
              />
              <Text style={[StylesOffre.txtTitleModal]}>Publier une offre</Text>
            </View>
            <View>
              <Text style={[StylesOffre.subTxtModal]}>Intitulé de l'offre</Text>
            </View>
            <SafeAreaView style={{top: 160, alignSelf: 'center'}}>
              <TextInput
                placeholder="Entrer le titre de votre offre . . ."
                style={[StylesOffre.txtIntitulateOffre]}
                onChangeText={setOffreTitle}
                onEndEditing={() => handleStoreData(storageTitle, offreTitle)}
                value={offreTitle}
              />
            </SafeAreaView>
            <View>
              <Text style={[StylesOffre.subTxtModal2]}>
                Description de l'offre
              </Text>
              <SafeAreaView style={{top: 220, alignSelf: 'center'}}>
                <TextInput
                  style={[StylesOffre.txtDescriptionOffre]}
                  placeholder="Entrer la description de votre offre . . ."
                  allowFontScaling={true}
                  editable={true}
                  multiline={true}
                  scrollEnabled={true}
                  onChangeText={setOffreDescription}
                  onEndEditing={() =>
                    handleStoreData(storageDescription, offreDescription)
                  }
                  value={offreDescription}
                />
              </SafeAreaView>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Offre;
