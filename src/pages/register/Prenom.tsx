import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  Switch,
  Modal,
  Keyboard,
  EventSubscription,
} from 'react-native';
import StylesPrenom from '../../../assets/style/styleScreens/styleRegister/StylePrenom';
import {storeDatas, getData} from '../../services/storage';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Prenom'>;
};

export const Prenom: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    handleGetData();
  }, []);

  const handleStoreData = async (
    key: string,
    value: string,
    key2: string,
    value2: string,
    key3: string,
    value3: boolean,
  ) => {
    try {
      await storeDatas([
        [key, value],
        [key2, value2],
        [key3, value3],
      ]);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetData = async () => {
    try {
      const userPrenom = await getData('firstname');
      setPrenom(userPrenom || '');
      // console.log('firstname : ' + userPrenom);
      const userPseudo = await getData('username');
      setPseudo(userPseudo || '');
      // console.log('username : ' + userPseudo);
      const showFistrname = await getData('show_firstname');
      setIsEnabled(showFistrname || '');
      // console.log('show_firstname : ' + showFistrname);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const [buttonPressed, setButtonPressed] = useState<string>();

  // Obtenir et formater la date courante en utilisant la méthode Date()
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString(); // année sur 4 chiffres
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // mois sur 2 chiffres
  const day = ('0' + currentDate.getDate()).slice(-2); // jour sur 2 chiffres

  const formattedDate = `${year}${month}${day}`; // Constant récupérant l'année, le mois et le jour courant
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [prenom, setPrenom] = useState<string>();
  const [pseudo, setPseudo] = useState<string>();

  const [modalVisible, setModalVisible] = useState(false);

  // Gérer les focus des TextInput pour ne pas afficher maudit TouchableOpactity pardessus
  const [showButton, setShowButton] = useState<boolean>(true);

  let keyboardDidShowListener: EventSubscription;
  let keyboardDidHideListener: EventSubscription;

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      _keyboardDidShow,
    );
    keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      _keyboardDidHide,
    );

    return () => {
      keyboardDidShowListener?.remove();
      keyboardDidHideListener?.remove();
    };
  }, []);

  const _keyboardDidShow = () => {
    setShowButton(false);
  };

  const _keyboardDidHide = () => {
    setShowButton(true);
  };

  return (
    <View style={StylesPrenom.container}>
      <ImageBackground
        style={StylesPrenom.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[StylesPrenom.ViewText]}>
          <TitreUneLigne
            txtTitle="IDENTIFIANT"
            textAlign="center"
            top={50}
            left={undefined}
            fontFamily={undefined}
            color={undefined}
            fontWeight={undefined}
            fontSize={24}
          />
          <Text style={[StylesPrenom.textWhite]}>
            Sur MyBodyDate votre vrai prénom est visible de tous les membres
            sauf si vous préférez afficher votre pseudo. Les modérateurs passent
            tous les pseudos en revue.
          </Text>
          <Text style={[StylesPrenom.textBlue]}>Règle des pseudos</Text>
          <View style={StylesPrenom.ViewRow}>
            <Text style={[StylesPrenom.textWhite2]}>
              Afficher mon pseudo (par défaut)
            </Text>
            <Switch
              trackColor={{false: '#BEC8FF', true: '#17ff58'}}
              thumbColor={isEnabled ? '#BEC8FF' : '#f4f3f4'}
              ios_backgroundColor="#f4f3f4"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{}}
            />
          </View>
          <SafeAreaView style={{top: 200}}>
            <TextInput
              style={[StylesPrenom.inputPrenom]}
              onChangeText={setPrenom}
              value={prenom}
              placeholder="Votre Prénom"
              placeholderTextColor={'#fff'}
              keyboardType="default"
            />
            <TextInput
              style={[StylesPrenom.inputPseudo]}
              onChangeText={setPseudo}
              value={pseudo}
              placeholder="Votre Pseudo "
              placeholderTextColor={'#fff'}
              keyboardType="default"
            />
          </SafeAreaView>
          <Text style={[StylesPrenom.textBlue2]}>ID.{formattedDate}.(id)</Text>
          <Text style={[StylesPrenom.textWhite3]}>Choix unique.</Text>
        </View>
        {showButton && (
          <View style={{bottom: 80}}>
            <TouchableOpacity
              style={[StylesPrenom.Btn]}
              onPress={() => {
                setButtonPressed('Continuer');
                setModalVisible(true);
              }}
              accessibilityLabel="Continuer">
              <Text
                style={[
                  StylesPrenom.TxtBtn,
                  {
                    color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
                  },
                ]}>
                Continuer
              </Text>
              <Image
                style={[StylesPrenom.ImgBtn]}
                source={
                  buttonPressed === 'Continuer'
                    ? require('../../../assets/boutons/Bouton-Rouge.png')
                    : require('../../../assets/boutons/Bouton-Blanc.png')
                }
              />
            </TouchableOpacity>
          </View>
        )}

        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View style={[StylesPrenom.ViewModal]}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={[StylesPrenom.BtnCloseModal]}
            />
            <View>
              <Image
                source={require('../../../assets/images/avertissement.png')}
                style={[StylesPrenom.icoModal]}
              />
              <View style={[StylesPrenom.ViewTextModal]}>
                <Text style={StylesPrenom.titleModal}>
                  Règles concernant le pseudo ?
                </Text>
                <Text style={[StylesPrenom.textModalBlue]}>
                  Pour vérifiez que votre pseudo soit bien approuvé
                </Text>
                <View style={[StylesPrenom.ViewModalCol]}>
                  <View style={[StylesPrenom.ViewModalRow]}>
                    <Text style={[StylesPrenom.BlueDot]}>•</Text>
                    <Text style={[StylesPrenom.SubTextBlue]}>
                      Pour vérifiez que votre pseudo soit bien approuvé
                    </Text>
                  </View>
                  <View style={[StylesPrenom.ViewModalRow]}>
                    <Text style={[StylesPrenom.BlueDot]}>•</Text>
                    <Text style={[StylesPrenom.SubTextBlue]}>
                      N’incluez pas votre nom complet N’incluez pas vos
                      coordonnées
                    </Text>
                  </View>
                  <View style={[StylesPrenom.ViewModalRow]}>
                    <Text style={[StylesPrenom.BlueDot]}>•</Text>
                    <Text style={[StylesPrenom.SubTextBlue]}>
                      N’incluez aucune remarque sexuelle explicite ni vulgaire
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={{bottom: 80}}
                onPress={() => {
                  handleStoreData(
                    'firstname',
                    prenom ?? '',
                    'username',
                    pseudo ?? '',
                    'show_firstname',
                    isEnabled,
                  );
                  setButtonPressed('Compris');
                  setModalVisible(false);
                  navigation.navigate('Confirmation_prenom');
                }}>
                <Image
                  source={
                    buttonPressed === 'Compris'
                      ? require('../../../assets/boutons/Bouton-Rouge-Court.png')
                      : require('../../../assets/boutons/Bouton-Bleu-Court.png')
                  }
                  style={[StylesPrenom.ImgBtnModal]}
                />
                <Text style={[StylesPrenom.TextBtnModal]}>Compris</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </View>
  );
};
