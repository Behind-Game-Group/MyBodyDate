import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import StylesDisctinct from '../../../assets/style/StyleComposants/styleEdit/StyleDisctinct';
import {getData, storeData} from '../../services/storage';

export const Distinct = () => {
  const [modalDistinctlVisible, setModalDistinctlVisible] =
    useState<boolean>(false);

  const [userDistinction, setUserDistinction] = useState<string[]>([]);
  // console.log(userDistinction);

  const storageKey: string = 'user_distinction';

  const addDisctint = (text: string) => {
    const newUserDistinction = [...userDistinction];
    if (newUserDistinction.includes(text)) {
      setUserDistinction(newUserDistinction);
      handleStoreData(storageKey, userDistinction);
    } else {
      newUserDistinction.push(text);
      setUserDistinction(newUserDistinction);
    }
  };

  const removeDisctinct = (text: string) => {
    let newUserDistinction = [...userDistinction];

    if (newUserDistinction.includes(text)) {
      newUserDistinction = newUserDistinction.filter(item => item !== text);
      setUserDistinction(newUserDistinction);
      handleStoreData(storageKey, userDistinction);
    } else {
      setUserDistinction(newUserDistinction);
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
      const userDistinct = await getData(storageKey);
      setUserDistinction(userDistinct || '');
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
          setModalDistinctlVisible(true);
        }}
        style={[StylesDisctinct.btnModal]}>
        <Image
          style={[StylesDisctinct.icoBtnModal]}
          source={require('../../../assets/images/distinctions.png')}
        />
        <Text style={[StylesDisctinct.txtBtnModal]}>Mes distinctions</Text>
        <Image
          style={[StylesDisctinct.plusBtnModal]}
          source={
            userDistinction
              ? require('../../../assets/images/add_pro_plein.png')
              : require('../../../assets/images/add_pro_vide.png')
          }
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalDistinctlVisible}
        statusBarTranslucent={true}>
        {/* Arrière-plan semi-transparent */}
        <View style={[StylesDisctinct.containerModal]}>
          <TouchableOpacity
            style={[StylesDisctinct.btnClose]}
            onPress={() => setModalDistinctlVisible(false)}
            accessibilityLabel="Ferme la fenêtre"
          />
          {/* Contenu de la modal */}
          <View style={[StylesDisctinct.viewModal]}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../../assets/images/Distinct.png')}
                style={[StylesDisctinct.icoModal]}
              />
              <Text style={[StylesDisctinct.txtTitleModal]}>
                Mes distinctions
              </Text>
            </View>
            <View>
              <Text style={[StylesDisctinct.subTxtModal]}>
                Entrez vos distinctions
              </Text>
            </View>
            <SafeAreaView style={[StylesDisctinct.viewCol]}>
              <TextInput
                style={[StylesDisctinct.txtInput]}
                placeholder="Recherchez une distinction"
                onSubmitEditing={event => addDisctint(event.nativeEvent.text)}
              />
              <Image
                source={require('../../../assets/images/Loupe-B-RP.png')}
                style={[StylesDisctinct.icoInput]}
              />
            </SafeAreaView>
            {userDistinction ? (
              <View style={[StylesDisctinct.viewOption]}>
                <ScrollView
                  style={{alignSelf: 'center'}}
                  contentContainerStyle={[StylesDisctinct.viewScroll]}>
                  {userDistinction.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        removeDisctinct(item);
                      }}
                      style={[StylesDisctinct.btnOption]}>
                      <Text style={[StylesDisctinct.txtOption]}>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            ) : null}
            <Text style={[StylesDisctinct.txtChoice]}>Choix multiples.</Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Distinct;
