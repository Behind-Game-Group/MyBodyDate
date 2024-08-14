import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TextInput,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import {storeData, getData} from '../../services/storage';
import StylesConfirmationPrenom from '../../../assets/style/styleScreens/styleRegister/StyleConfirmationPrenom';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Confirmation_prenom'>;
};

export const ConfirmationPrenom: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    handleGetData();
  }, []);

  const handleStoreData = async (key: string, value: string) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetData = async () => {
    try {
      const firstname = await getData('firstname');
      setPrenom(firstname || '');
      // console.log('firstname : ' + firstname);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const [prenom, setPrenom] = useState<string>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const currentDate = new Date();
  const year = currentDate.getFullYear().toString();
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
  const day = ('0' + currentDate.getDate()).slice(-2);
  const formattedDate = `${year}${month}${day}`;

  const [buttonPressed, setButtonPressed] = useState<string>();

  return (
    <ImageBackground
      style={Styles.bgGradient}
      source={require('../../../assets/images/Background.png')}>
      <Text style={[StylesConfirmationPrenom.TxtTitle]}>PRÉNOM</Text>
      <SafeAreaView style={[StylesConfirmationPrenom.ViewInputPrenom, {}]}>
        <TextInput
          style={Styles.TextInput}
          keyboardType="default"
          placeholder="Entrez votre Prénom"
          placeholderTextColor="#FFF"
          maxLength={100}
          onChangeText={prenom => setPrenom(prenom)}
          value={prenom}
        />
        <Text style={[StylesConfirmationPrenom.textBlue]}>
          ID.{formattedDate}.(id)
        </Text>
      </SafeAreaView>
      <Text style={[StylesConfirmationPrenom.textWhite]}>Choix unique.</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(false);
          }}
          style={[StylesConfirmationPrenom.BtnCloseModal]}
        />
        <View style={[StylesConfirmationPrenom.ViewModal]}>
          <Image
            style={[StylesConfirmationPrenom.icoModal]}
            source={require('../../../assets/images/avertissement.png')}
          />
          <Text style={[StylesConfirmationPrenom.textModalBlue]}>
            Vous vous appelez {prenom} ?
          </Text>
          <Text style={[StylesConfirmationPrenom.textModalBlue2]}>
            Vérifiez bien votre prénom,{'\n'}
            il ne pourra plus être{'\n'}
            modifié par la suite.
          </Text>
        </View>
        <View style={[StylesConfirmationPrenom.ViewBtnModalRow]}>
          <TouchableOpacity
            accessibilityLabel="Modifier"
            onPress={() => {
              setButtonPressed('Modifier');
              setModalVisible(false);
            }}>
            <Text
              style={[
                StylesConfirmationPrenom.TextBtnModal,
                {
                  color: buttonPressed === 'Modifier' ? '#A70000' : '#0019A7',
                },
              ]}>
              Modifier
            </Text>
            <Image
              style={[StylesConfirmationPrenom.ImgBtnModal]}
              source={
                buttonPressed === 'Modifier'
                  ? require('../../../assets/boutons/Bouton-Trans-Court-Rouge.png')
                  : require('../../../assets/boutons/Bouton-Trans-Court.png')
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Accepter"
            onPress={() => {
              setButtonPressed('Accepter');
              setModalVisible(false);
              navigation.navigate('Profil_multiples');
            }}>
            <Text style={[StylesConfirmationPrenom.TextBtnModal2]}>
              Accepter
            </Text>
            <Image
              style={[StylesConfirmationPrenom.ImgBtnModal2]}
              source={
                buttonPressed === 'Accepter'
                  ? require('../../../assets/boutons/Bouton-Rouge-Court.png')
                  : require('../../../assets/boutons/Bouton-Bleu-Court.png')
              }
            />
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity
        style={[StylesConfirmationPrenom.Btn]}
        onPress={() => {
          handleStoreData('firstname', prenom ?? '');
          setButtonPressed('Continuer');
          setModalVisible(true);
        }}
        accessibilityLabel="Continuer">
        <Text style={[StylesConfirmationPrenom.TxtBtn]}>Continuer</Text>
        <Image
          style={[StylesConfirmationPrenom.ImgBtn]}
          source={
            buttonPressed === 'Continuer'
              ? require('../../../assets/boutons/Bouton-Rouge.png')
              : require('../../../assets/boutons/Bouton-Blanc.png')
          }
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};
