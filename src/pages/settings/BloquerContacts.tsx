import React, {useState, useEffect} from 'react';
import {StatusBar, Keyboard} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import StyleBloquerContacts from '../../../assets/style/styleScreens/styleSettings/StyleBloquerContacts';
import MenuSlide from '../../components/menus/MenuSlide';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';

import {getDatas, storeData} from '../../services/storage';
import users from '../discover/Users';
import {User} from '../../../interfaces/UserInterface';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
import {BtnNext} from '../../components/boutons/BtnNext';

interface RetrievedValue {
  key: string;
  value: string | boolean | number | undefined;
}

interface RetrievedValuesMap {
  [key: string]: string | boolean | number | User | undefined;
}

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Bloquer_contacts'>;
  route: RouteProp<RouteType, 'Bloquer_contacts'>;
};

export const BloquerContacts: React.FC<HomeProps> = ({navigation}) => {
  const [buttonPressed, setButtonPressed] = useState<string>('');
  const [viewSelected, setViewSelected] = useState<boolean>(true);
  const [showBlockedMessage, setShowBlockedMessage] = useState<boolean>(false);
  const [contact, setContact] = useState<string>('');
  const contactsData: User[] = users;
  const [blockedContacts, setBlockedContacts] = useState<User[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<User[]>([]);

  const inputRef = React.createRef<TextInput>();

  const keysToRetrieve: string[] = ['blocked_contact'];

  const handleStoreData = async (key: string, value: User[]) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const getMultipleValues = async () => {
    try {
      const retrievedValues: RetrievedValue[] = await getDatas(keysToRetrieve);

      const result: RetrievedValuesMap = {};
      retrievedValues.forEach(item => {
        result[item.key] = item.value;
      });

      setBlockedContacts([result.blocked_contact as User]);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    getMultipleValues();
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  // Fonction pour filtrer les contacts en fonction de la recherche
  const filterContacts = () => {
    if (contact) {
      const filtered = contactsData.filter(contactData =>
        contactData.name.toLowerCase().includes(contact.toLowerCase()),
      );
      setFilteredContacts(filtered);
    } else {
      setFilteredContacts([]);
    }
  };

  useEffect(() => {
    filterContacts();
  }, [contact]);

  const removeBlockedContact = (index: number) => {
    setBlockedContacts(prevBlockedContacts =>
      prevBlockedContacts.filter((_, i) => i !== index),
    );
    handleStoreData('contact_blocked', blockedContacts);
  };

  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  // Gestionnaire pour ouvrir/fermer le clavier
  const handleSearchButtonPress = () => {
    if (isKeyboardOpen) {
      // Soumettre la recherche et fermer le clavier
      Keyboard.dismiss();
    } else {
      // Ouvrir le clavier
      inputRef.current?.focus();
    }
  };

  const handleInputFocus = () => {
    setIsKeyboardOpen(true);
  };

  const handleInputBlur = () => {
    setIsKeyboardOpen(false);
  };

  return (
    <ImageBackground
      style={StyleBloquerContacts.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        backgroundColor={'white'}
        settingsNavigation={'Securite_et_privee'}
        backButton={'Retour'}
      />
      <TitreUneLigne
        txtTitle="Bloquer des contacts"
        fontFamily="Comfortaa-Bold"
        color={'#0019A7'}
        fontSize={24}
        textAlign="center"
        fontWeight={'700'}
        top={30}
        left={undefined}
      />
      <View style={StyleBloquerContacts.separator} />
      <View style={StyleBloquerContacts.bloquerContactContainer}>
        <Image
          style={StyleBloquerContacts.icoInfo}
          source={require('../../../assets/images/ico-info.png')}
        />
        <Text style={StyleBloquerContacts.description}>
          Ajoutez les critères essentiels pour vous et affinez vos recherches.
          Trouvez la personne qui vous correspond vraiment.
        </Text>
      </View>
      <View style={StyleBloquerContacts.navViewButton}>
        <View style={StyleBloquerContacts.navButton}>
          <TouchableOpacity
            onPress={() => setViewSelected(true)}
            style={[
              {borderBottomWidth: viewSelected ? 2 : 0},
              StyleBloquerContacts.navButtonBox,
            ]}>
            <Text
              style={[
                {fontWeight: viewSelected ? 700 : 500},
                StyleBloquerContacts.navButtonText,
              ]}>
              Contacts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setViewSelected(false)}
            style={[
              {borderBottomWidth: viewSelected ? 0 : 2},
              StyleBloquerContacts.navButtonBox,
            ]}>
            <Text
              style={[
                {fontWeight: viewSelected ? 500 : 700},
                StyleBloquerContacts.navButtonText,
              ]}>
              Contacts bloqués
            </Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView style={StyleBloquerContacts.searchBox}>
          <TouchableOpacity
            onPress={handleSearchButtonPress}
            style={StyleBloquerContacts.boxIcoSearch}>
            <Image
              style={StyleBloquerContacts.icoSearch}
              source={require('../../../assets/boutons/icon-recherche.png')}
            />
          </TouchableOpacity>
          <TextInput
            ref={inputRef}
            style={StyleBloquerContacts.inputSearch}
            onChangeText={setContact}
            value={contact}
            placeholder={'Chercher un nom ou un numéro'}
            placeholderTextColor={'#0019A7'}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </SafeAreaView>
        <>
          {viewSelected ? (
            <View
              style={[
                {height: contact ? 150 : 0},
                StyleBloquerContacts.viewSelected,
              ]}>
              {showBlockedMessage && (
                <View style={{}}>
                  <Text style={StyleBloquerContacts.blockedMessage}>
                    Le contact a déjà été bloqué.
                  </Text>
                </View>
              )}
              <ScrollView
                style={StyleBloquerContacts.scrollView}
                contentContainerStyle={{paddingBottom: 10}}>
                <>
                  {contact ? (
                    <View style={StyleBloquerContacts.viewScroll}>
                      <>
                        {filteredContacts.length > 0 ? (
                          filteredContacts.map((contactData, index) => (
                            <View style={{flexDirection: 'column'}}>
                              <TouchableOpacity
                                key={index}
                                onPress={() => {
                                  // Vérifier si le contact est déjà bloqué avant de l'ajouter
                                  const isBlocked = blockedContacts.find(
                                    blockedContact =>
                                      blockedContact.name === contactData.name,
                                  );
                                  if (!isBlocked) {
                                    setBlockedContacts(prevBlockedContacts => [
                                      ...prevBlockedContacts,
                                      contactData,
                                    ]);
                                    setViewSelected(false);
                                    setShowBlockedMessage(true);

                                    // Délai de 2 secondes pour masquer le message après qu'il a été affiché
                                    setTimeout(() => {
                                      setShowBlockedMessage(false);
                                    }, 2000);
                                  } else {
                                    // Le contact est déjà bloqué, vous pouvez afficher un message pour l'indiquer
                                    setShowBlockedMessage(true);

                                    // Délai de 2 secondes pour masquer le message après qu'il a été affiché
                                    setTimeout(() => {
                                      setShowBlockedMessage(false);
                                    }, 2000);
                                  }
                                }}
                                style={StyleBloquerContacts.userLink}>
                                <Image
                                  style={[
                                    StyleBloquerContacts.imgUserLink,
                                    {
                                      borderColor: contactData.cercle.includes(
                                        'Professionnel',
                                      )
                                        ? '#000'
                                        : contactData.cercle.includes(
                                            "Cercle d'ami",
                                          )
                                        ? '#9424FA'
                                        : contactData.cercle.includes(
                                            'Relation amoureuse',
                                          )
                                        ? '#FF84D7'
                                        : '#0019A7',
                                    },
                                  ]}
                                  source={contactData.image1}
                                />
                                <Text
                                  style={StyleBloquerContacts.textNameUserLink}>
                                  {contactData.name}
                                </Text>
                                <Text
                                  style={[
                                    {
                                      color: contactData.cercle.includes(
                                        'Professionnel',
                                      )
                                        ? '#000'
                                        : contactData.cercle.includes(
                                            "Cercle d'ami",
                                          )
                                        ? '#9424FA'
                                        : contactData.cercle.includes(
                                            'Relation amoureuse',
                                          )
                                        ? '#FF84D7'
                                        : '#0019A7',
                                    },
                                    StyleBloquerContacts.textRelationUserLink,
                                  ]}>
                                  {contactData.cercle}
                                </Text>
                                <Image
                                  style={{}}
                                  source={require('../../../assets/images/fleche-blue.png')}
                                />
                              </TouchableOpacity>
                              <View
                                style={
                                  StyleBloquerContacts.separatorUserLink
                                }></View>
                            </View>
                          ))
                        ) : (
                          <View style={StyleBloquerContacts.viewTextNotFound}>
                            <Text style={StyleBloquerContacts.textNotFound}>
                              Aucun contact trouvé
                            </Text>
                          </View>
                        )}
                      </>
                    </View>
                  ) : null}
                </>
              </ScrollView>
            </View>
          ) : (
            <View
              style={[
                {height: contact ? 150 : 0},
                StyleBloquerContacts.viewSelected,
              ]}>
              <ScrollView
                style={StyleBloquerContacts.scrollView}
                contentContainerStyle={{paddingBottom: 10}}>
                <>
                  {contact ? (
                    <View style={StyleBloquerContacts.viewScroll}>
                      {blockedContacts.map((contactData, index) => (
                        <View style={{flexDirection: 'column'}}>
                          <TouchableOpacity
                            key={index}
                            onPress={() => {
                              removeBlockedContact(index);
                              setViewSelected(true);
                            }}
                            style={{
                              flexDirection: 'row',
                              width: '90%',
                              justifyContent: 'space-between',
                              alignSelf: 'center',
                              alignItems: 'center',
                              borderRadius: 50,
                              marginBottom: 10,
                              padding: 5,
                              backgroundColor: '#FFFFFFA3',
                            }}>
                            <Image
                              style={{
                                width: 50,
                                height: 50,
                                borderRadius: 100,
                                borderWidth: 2,
                                borderColor: contactData.cercle.includes(
                                  'Professionnel',
                                )
                                  ? '#000'
                                  : contactData.cercle.includes("Cercle d'ami")
                                  ? '#9424FA'
                                  : contactData.cercle.includes(
                                      'Relation amoureuse',
                                    )
                                  ? '#FF84D7'
                                  : '#0019A7',
                              }}
                              source={contactData.image1}
                            />
                            <Text
                              style={{
                                color: '#0019A7',
                                textAlign: 'center',
                                fontFamily: 'Gilroy',
                                fontSize: 16,
                                fontStyle: 'normal',
                                fontWeight: 700,
                              }}>
                              {contactData.name}
                            </Text>
                            <Text
                              style={{
                                color: contactData.cercle.includes(
                                  'Professionnel',
                                )
                                  ? '#000'
                                  : contactData.cercle.includes("Cercle d'ami")
                                  ? '#9424FA'
                                  : contactData.cercle.includes(
                                      'Relation amoureuse',
                                    )
                                  ? '#FF84D7'
                                  : '#0019A7',
                                textAlign: 'center',
                                fontFamily: 'Comfortaa',
                                fontSize: 16,
                                fontStyle: 'normal',
                                fontWeight: 500,
                              }}>
                              {contactData.cercle}
                            </Text>
                            <Image
                              style={{}}
                              source={require('../../../assets/images/fleche-blue.png')}
                            />
                          </TouchableOpacity>
                          <View
                            style={
                              StyleBloquerContacts.separatorUserLink
                            }></View>
                        </View>
                      ))}
                    </View>
                  ) : null}
                </>
              </ScrollView>
            </View>
          )}
        </>
        <TouchableOpacity style={{top: contact ? 80 : 150}}>
          <Image
            style={StyleBloquerContacts.importContactButtonImg}
            source={require('../../../assets/boutons/Bouton-Bleu.png')}
          />
          <Text style={StyleBloquerContacts.importContactButtonText}>
            Importer des contacts
          </Text>
        </TouchableOpacity>
      </View>
      <BtnNext
        navigation={navigation}
        navigateTo="Securite_et_privee"
        propName="SettingsRoute"
        propRoute="Securite_et_privee"
        txt="Retour"
        handleStore={undefined}
        postInfo={undefined}
        background="Blue-border"
        top={contact ? 80 : 100}
        left={0}
        fontSize={18}
      />
    </ImageBackground>
  );
};

export default BloquerContacts;
