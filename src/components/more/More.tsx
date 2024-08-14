import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {MoreBloquerUser} from './MoreBloquerUser';
import {MoreListeBloquees} from './MoreListeBloquees';
import {MoreSingalement} from './MoreSingalement';

type MoreProps = {
  username: string;
};

export const More: React.FC<MoreProps> = ({username}) => {
  const profileId: string = 'ID_DU_PROFIL_A_COPIER'; // à remplacer par la valeur réelle de l'ID

  // Fonction pour copier l'ID du profil dans le presse-papiers
  const copyProfileIdToClipboard = () => {
    // Définir le message d'information et rendre le message visible
    setCopyMessage("L'ID du profil a été copié dans le presse-papiers.");
    setCopyMessageVisible(true);

    // Planifier la réinitialisation du message après 5 secondes
    setTimeout(() => {
      setCopyMessageVisible(false);
      setCopyMessage('');
    }, 5000);
  };

  // Constantes concernant la Modal de more
  const [showModal, setShowModal] = useState<boolean>(false);
  const [bloquerOpen, setbloquerOpen] = useState<boolean>(false);
  const [signalerOpen, setSignalerOpen] = useState<boolean>(false);

  const [linkModal, setLinkModal] = useState<string>('Default');

  const [userPrenom, setUserPrenom] = useState<string>(username);

  const [copyMessageVisible, setCopyMessageVisible] = useState<boolean>(false);
  const [copyMessage, setCopyMessage] = useState<string>('');
  // Fonction pour ouvrir/fermer la modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <View
      style={{
        position: 'absolute',
        top: 195,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(false);
          setLinkModal('Default');
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            backgroundColor: 'transparent',
            width: '100%',
            height: '100%',
          }}
          onPress={() => {
            setShowModal(false);
            setLinkModal('Default');
          }}
          accessibilityLabel="Ferme la fenêtre"
        />
        {/* Contenu de la modal */}
        <View
          style={{
            top: 270,
            left: 80,
            width: 320,
            height: 550,
            backgroundColor: 'white',
            borderTopLeftRadius: 50,
            borderWidth: 1,
            borderColor: '#0019A7',
          }}>
          {copyMessageVisible && (
            <TouchableOpacity
              style={{
                zIndex: 1,
                position: 'absolute',
                bottom: 130,
                right: 0,
                alignItems: 'center',
                justifyContent: 'center',
                height: 650,
                width: 400,
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
              }}
              onPress={() => {
                setCopyMessageVisible(false);
              }}>
              <Text
                style={{
                  color: '#0019A7',
                  fontFamily: 'Gilroy',
                  fontSize: 20,
                  fontStyle: 'normal',
                  textAlign: 'center',
                  marginBottom: 20,
                  fontWeight: 700,
                }}>
                {copyMessage}
              </Text>
              <Text
                style={{
                  color: '#0019A7',
                  fontFamily: 'Gilroy',
                  fontSize: 20,
                  fontStyle: 'normal',
                  textAlign: 'center',
                  fontWeight: 700,
                }}>
                {profileId}
              </Text>
            </TouchableOpacity>
          )}
          <ScrollView
            style={{
              width: '95%',
              paddingTop: 20,
            }}
            contentContainerStyle={{paddingBottom: 40}}>
            <View
              style={{
                top: 20,
                width: '100%',
                left: 10,
                height:
                  bloquerOpen && signalerOpen
                    ? 780
                    : bloquerOpen && !signalerOpen
                    ? 660
                    : !bloquerOpen && signalerOpen
                    ? 660
                    : 560,
                backgroundColor: 'transparent',
              }}>
              {linkModal === 'Default' ? (
                <>
                  {/* Bloquer */}
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignSelf: 'center',
                      alignItems: 'center',
                      width: '80%',
                      height: 50,
                      borderColor: '#0019A7',
                      borderBottomWidth: 1,
                    }}
                    onPress={() => {
                      bloquerOpen
                        ? setbloquerOpen(false)
                        : setbloquerOpen(true);
                    }}>
                    <Text
                      style={{
                        color: '#0019A7',
                        fontFamily: 'Gilroy',
                        fontSize: 20,
                        fontStyle: 'normal',
                        fontWeight: 700,
                      }}>
                      Bloquer
                    </Text>
                    <Image
                      source={require('../../../assets/images/flèche-B.png')}
                      style={{
                        resizeMode: 'contain',
                        width: 10,
                        height: 20,
                        transform: [{rotate: bloquerOpen ? '90deg' : '-90deg'}],
                      }}
                    />
                  </TouchableOpacity>
                  {bloquerOpen ? (
                    <>
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignSelf: 'center',
                          alignItems: 'center',
                          width: '80%',
                          height: 50,
                          borderColor: '#0019A7',
                          borderBottomWidth: 1,
                        }}
                        onPress={() => {
                          setLinkModal('Bloquer');
                          setUserPrenom(username);
                        }}>
                        <Text
                          style={{
                            color: '#0019A7',
                            left: 20,
                            fontFamily: 'Gilroy',
                            fontSize: 20,
                            fontStyle: 'normal',
                            fontWeight: 700,
                          }}>
                          Bloquer {userPrenom} ?
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignSelf: 'center',
                          alignItems: 'center',
                          width: '80%',
                          height: 70,
                          borderColor: '#0019A7',
                          borderBottomWidth: 1,
                        }}
                        onPress={() => {
                          setbloquerOpen(false);
                          setLinkModal('Liste bloquées');
                        }}>
                        <Text
                          style={{
                            color: '#0019A7',
                            left: 20,
                            fontFamily: 'Gilroy',
                            fontSize: 20,
                            fontStyle: 'normal',
                            fontWeight: 700,
                          }}>
                          Liste des personnes bloquées
                        </Text>
                      </TouchableOpacity>
                    </>
                  ) : null}
                  {/* Signaler */}
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignSelf: 'center',
                      alignItems: 'center',
                      width: '80%',
                      height: 50,
                      borderColor: '#0019A7',
                      borderBottomWidth: 1,
                    }}
                    onPress={() => {
                      signalerOpen
                        ? setSignalerOpen(false)
                        : setSignalerOpen(true);
                    }}>
                    <Text
                      style={{
                        color: '#0019A7',
                        fontFamily: 'Gilroy',
                        fontSize: 20,
                        fontStyle: 'normal',
                        fontWeight: 700,
                      }}>
                      Signaler
                    </Text>
                    <Image
                      source={require('../../../assets/images/flèche-B.png')}
                      style={{
                        resizeMode: 'contain',
                        width: 10,
                        height: 20,
                        transform: [
                          {rotate: signalerOpen ? '90deg' : '-90deg'},
                        ],
                      }}
                    />
                  </TouchableOpacity>
                  {signalerOpen ? (
                    <>
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignSelf: 'center',
                          alignItems: 'center',
                          width: '80%',
                          height: 50,
                          borderColor: '#0019A7',
                          borderBottomWidth: 1,
                        }}
                        onPress={() => {
                          setSignalerOpen(false);
                          setLinkModal('Signalemenent');
                        }}>
                        <Text
                          style={{
                            color: '#0019A7',
                            left: 20,
                            fontFamily: 'Gilroy',
                            fontSize: 20,
                            fontStyle: 'normal',
                            fontWeight: 700,
                          }}>
                          Spam
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignSelf: 'center',
                          alignItems: 'center',
                          width: '80%',
                          height: 70,
                          borderColor: '#0019A7',
                          borderBottomWidth: 1,
                        }}
                        onPress={() => {
                          setSignalerOpen(false);
                          setLinkModal('Signalemenent');
                        }}>
                        <Text
                          style={{
                            color: '#0019A7',
                            left: 20,
                            fontFamily: 'Gilroy',
                            fontSize: 20,
                            fontStyle: 'normal',
                            fontWeight: 700,
                          }}>
                          Signaler un contenu comme illégal ?
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignSelf: 'center',
                          alignItems: 'center',
                          width: '80%',
                          height: 70,
                          borderColor: '#0019A7',
                          borderBottomWidth: 1,
                        }}
                        onPress={() => {
                          setSignalerOpen(false);
                          setLinkModal('Signalemenent');
                        }}>
                        <Text
                          style={{
                            color: '#0019A7',
                            left: 20,
                            fontFamily: 'Gilroy',
                            fontSize: 20,
                            fontStyle: 'normal',
                            fontWeight: 700,
                          }}>
                          Catfish cette personne est quelqu'un d’autre
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignSelf: 'center',
                          alignItems: 'center',
                          width: '80%',
                          height: 50,
                          borderColor: '#0019A7',
                          borderBottomWidth: 1,
                        }}
                        onPress={() => {
                          setSignalerOpen(false);
                          setLinkModal('Signalemenent');
                        }}>
                        <Text
                          style={{
                            color: '#0019A7',
                            left: 20,
                            fontFamily: 'Gilroy',
                            fontSize: 20,
                            fontStyle: 'normal',
                            fontWeight: 700,
                          }}>
                          Harcèlements
                        </Text>
                      </TouchableOpacity>
                    </>
                  ) : null}
                  {/* Copier l’ID du profil */}
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignSelf: 'center',
                      alignItems: 'center',
                      width: '80%',
                      height: 50,
                      borderColor: '#0019A7',
                      borderBottomWidth: 1,
                    }}
                    onPress={() => {
                      copyProfileIdToClipboard();
                    }}>
                    <Text
                      style={{
                        color: '#0019A7',
                        fontFamily: 'Gilroy',
                        fontSize: 20,
                        fontStyle: 'normal',
                        fontWeight: 700,
                      }}>
                      Copier l’ID du profil
                    </Text>
                  </TouchableOpacity>
                  {/* Partager avec un.e ami.e */}
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignSelf: 'center',
                      alignItems: 'center',
                      width: '80%',
                      height: 50,
                      borderColor: '#0019A7',
                      borderBottomWidth: 1,
                    }}
                    onPress={() => {}}>
                    <Text
                      style={{
                        color: '#0019A7',
                        fontFamily: 'Gilroy',
                        fontSize: 20,
                        fontStyle: 'normal',
                        fontWeight: 700,
                      }}>
                      Partager avec un.e ami.e
                    </Text>
                  </TouchableOpacity>
                  {/* Annuler */}
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '30%',
                      height: 50,
                      top: bloquerOpen
                        ? 60
                        : bloquerOpen && signalerOpen
                        ? 60
                        : signalerOpen
                        ? 60
                        : 180,
                      left: 40,
                    }}
                    onPress={() => {
                      setShowModal(false);
                    }}>
                    <Image
                      source={require('../../../assets/images/croix-bold-rouge.png')}
                    />
                    <Text
                      style={{
                        color: '#0019A7',
                        fontFamily: 'Gilroy',
                        fontSize: 20,
                        fontStyle: 'normal',
                        fontWeight: 700,
                      }}>
                      Annuler
                    </Text>
                  </TouchableOpacity>
                </>
              ) : linkModal === 'Bloquer' ? (
                <MoreBloquerUser userPrenom={userPrenom} />
              ) : linkModal === 'Liste bloquées' ? (
                <MoreListeBloquees />
              ) : linkModal === 'Signalemenent' ? (
                <MoreSingalement userPrenom={userPrenom} />
              ) : null}
            </View>
          </ScrollView>
        </View>
      </Modal>

      {/* Image "Ellipse_signalement.png" */}
      <TouchableOpacity onPress={toggleModal}>
        <ImageBackground
          source={require('../../../assets/images/Ellipse_signalement.png')}
          style={{width: 50, height: 50, bottom: 40, left: 310}}>
          <Image
            source={require('../../../assets/images/btn_signalement_3points.png')}
            style={{width: 40, height: 40, left: 5, top: 5}}
          />
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default More;
