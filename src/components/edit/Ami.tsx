import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from 'react-native';
import {storeData, getData} from '../../services/storage';
import StylesAmi from '../../../assets/style/StyleComposants/styleEdit/StyleAmi';

export const Ami = () => {
  const [modalAmilVisible, setModalAmilVisible] = useState<boolean>(false);
  const [userAmi, setUserAmi] = useState<string>('');

  const handleStoreData = async (key: string, value: string) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetData = async () => {
    try {
      const userAmi = await getData('user_ami');
      setUserAmi(userAmi || '');
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
          setModalAmilVisible(true);
        }}
        style={[StylesAmi.btnModal]}>
        <Image
          style={[StylesAmi.icoBtnModal]}
          source={require('../../../assets/images/amitié.png')}
        />
        <Text style={[StylesAmi.txtBtnModal]}>
          Pour moi le plus important en {'\n'}amitié...
        </Text>
        <Image
          style={[StylesAmi.plusBtnModal]}
          source={
            userAmi
              ? require('../../../assets/images/add_plein.png')
              : require('../../../assets/images/add_vide.png')
          }
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalAmilVisible}
        statusBarTranslucent={true}>
        <View style={[StylesAmi.containerModal]}>
          <TouchableOpacity
            style={[StylesAmi.btnClose]}
            onPress={() => {
              setModalAmilVisible(false);
            }}
            accessibilityLabel="Ferme la fenêtre"
          />
          <View style={[StylesAmi.viewModal]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../../assets/images/amitié.png')}
                style={{width: 82, height: 84, left: 160, top: 30}}
              />
              <Text
                style={{
                  fontFamily: 'Gilroy',
                  fontWeight: '700',
                  fontSize: 20,
                  color: '#9424FA',
                  top: 100,
                  textAlign: 'center',
                  right: 20,
                }}>
                Pour moi, le plus important en{'\n'}amitié...
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: 'Gilroy',
                  fontWeight: '700',
                  fontSize: 14,
                  color: '#9424FA',
                  top: 100,
                  left: 30,
                }}>
                Définissez votre définition de l'amitié
              </Text>
            </View>
            <SafeAreaView style={{top: 160, alignSelf: 'center'}}>
              <TextInput
                style={{
                  width: 345,
                  height: 230,
                  borderRadius: 50,
                  borderWidth: 2,
                  borderColor: '#9424FA',
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                  textAlign: 'left',
                  textAlignVertical: 'top',
                }}
                placeholder="Entrer la description de votre offre . . ."
                allowFontScaling={true}
                editable={true}
                multiline={true}
                scrollEnabled={true}
                onChangeText={text => setUserAmi(text)}
                onEndEditing={(
                  event: NativeSyntheticEvent<TextInputEndEditingEventData>,
                ) => handleStoreData('user_ami', event.nativeEvent.text)}
                value={userAmi}
                defaultValue="Lorem ipsum"
              />
            </SafeAreaView>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Ami;
