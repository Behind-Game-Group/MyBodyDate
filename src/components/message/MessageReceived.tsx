import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  Modal,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';

type MessageReceivedProps = {
  navigation: NavigationProp<RouteType, keyof RouteType>;
};

export const MessageReceived: React.FC<MessageReceivedProps> = ({
  navigation,
}) => {
  const messages: boolean = true;

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Constantes concernant la Modal des options de conversation
  const [showModalOptions, setShowModalOptions] = useState<boolean>(false);

  const [userName, setUserName] = useState<string>();

  const toggleSection = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {!messages ? (
        <View
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
          }}>
          <Image
            style={{top: '25%'}}
            source={require('../../../assets/boutons/ico-conversation.png')}
          />
          <Text
            style={{
              top: '27%',
              width: 200,
              color: '#929EDE',
              textAlign: 'center',
              fontFamily: 'Comfortaa',
              fontSize: 20,
              fontStyle: 'normal',
              fontWeight: '700',
              opacity: 1.5,
            }}>
            Vous n'avez pas encore de conversation
          </Text>
        </View>
      ) : (
        <>
          <Text
            style={{
              top: '5%',
              width: 200,
              color: '#0019A7',
              textAlign: 'center',
              fontFamily: 'Comfortaa',
              fontSize: 20,
              fontStyle: 'normal',
              fontWeight: '700',
              opacity: 1.5,
            }}>
            Messages reçus
          </Text>
          <ScrollView
            style={{top: 20, height: '35%'}}
            contentContainerStyle={{paddingBottom: 40}}>
            <Text
              style={{
                color: '#929EDE',
                fontFamily: 'Comfortaa',
                fontSize: 16,
                fontWeight: 700,
                left: 40,
              }}>
              Conversation
            </Text>
            <View
              style={{
                top: 20,
                paddingVertical: 10,
                paddingHorizontal: 20,
              }}>
              <View
                style={{
                  paddingHorizontal: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignSelf: 'center',
                    width: 280,
                  }}>
                  <View>
                    <Image
                      source={require('../../../assets/images/alex-ellipse.png')}
                      style={{
                        borderRadius: 100,
                        borderColor: '#9424FA',
                        borderWidth: 2,
                        width: 119,
                        height: 119,
                      }}
                    />
                    <Image
                      source={require('../../../assets/images/Ellipse-62.png')}
                      style={{top: -40, left: 100, width: 20, height: 20}}
                    />
                  </View>
                  <View style={{flexDirection: 'column', width: 150, top: 20}}>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          color: '#0019A7',
                          fontFamily: 'Gilroy',
                          fontSize: 20,
                          fontWeight: 700,
                          marginRight: 30,
                        }}>
                        Alex
                      </Text>
                      <Image
                        source={require('../../../assets/boutons/ico-certified-rose.png')}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        top: 20,
                      }}>
                      <Text
                        style={{
                          color: '#929EDE',
                          fontFamily: 'Comfortaa',
                          fontSize: 16,
                          fontWeight: 700,
                        }}>
                        Hier - Et toi ?
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{justifyContent: 'center'}}
                  onPress={() => {
                    setShowModalOptions(true);
                    setUserName('Alex');
                  }}>
                  <Image
                    source={require('../../../assets/boutons/more-2.png')}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignSelf: 'center',
                    width: 280,
                  }}
                  onPress={() =>
                    navigation.navigate('TalkChat', {
                      user: 'Kolia',
                      prenium: 'yes',
                      friendChoice: 'kolia',
                    })
                  }>
                  <Image
                    source={require('../../../assets/images/kolia-ellipse.png')}
                    style={{
                      borderRadius: 100,
                      borderColor: '#9424FA',
                      borderWidth: 2,
                      width: 119,
                      height: 119,
                    }}
                  />
                  <Image
                    source={require('../../../assets/images/Ellipse-62.png')}
                    style={{top: 70, left: -20, width: 20, height: 20}}
                  />

                  <View style={{flexDirection: 'column', width: 150, top: 20}}>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          color: '#0019A7',
                          fontFamily: 'Gilroy',
                          fontSize: 20,
                          fontWeight: 700,
                          marginRight: 30,
                        }}>
                        Kolia
                      </Text>
                      <Image
                        source={require('../../../assets/boutons/ico-certified-rose.png')}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        top: 20,
                      }}>
                      <Text
                        style={{
                          color: '#929EDE',
                          fontFamily: 'Comfortaa',
                          fontSize: 16,
                          fontWeight: 700,
                        }}>
                        Hier - Cybersécurité et...
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{justifyContent: 'center'}}
                  onPress={() => {
                    setShowModalOptions(true);
                    setUserName('Kolia');
                  }}>
                  <Image
                    source={require('../../../assets/boutons/more-2.png')}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={toggleSection}
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                  width: '90%',
                }}>
                <Text
                  style={{
                    color: '#929EDE',
                    fontFamily: 'Comfortaa',
                    fontSize: 16,
                    fontWeight: 700,
                  }}>
                  Conversation masquée
                </Text>
                <Image
                  source={require('../../../assets/boutons/fleche.png')}
                  style={{
                    width: 10,
                    transform: [{rotate: isExpanded ? '180deg' : '0deg'}],
                  }}
                />
              </TouchableOpacity>

              {isExpanded && (
                <View>
                  <View
                    style={{
                      paddingVertical: 30,
                      paddingHorizontal: 20,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignSelf: 'center',
                        width: 280,
                      }}
                      onPress={() => setIsExpanded(true)}>
                      <Image
                        source={require('../../../assets/images/beverly-ellipse.png')}
                        style={{
                          borderRadius: 100,
                          borderColor: '#9424FA',
                          borderWidth: 2,
                          width: 119,
                          height: 119,
                        }}
                      />
                      <View
                        style={{flexDirection: 'column', width: 150, top: 20}}>
                        <View style={{flexDirection: 'row'}}>
                          <Text
                            style={{
                              color: '#0019A7',
                              fontFamily: 'Gilroy',
                              fontSize: 20,
                              fontWeight: 700,
                              marginRight: 30,
                            }}>
                            Beverly
                          </Text>
                          <Image
                            source={require('../../../assets/boutons/ico-certified-rose.png')}
                          />
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            top: 20,
                          }}>
                          <Text
                            style={{
                              color: '#929EDE',
                              fontFamily: 'Comfortaa',
                              fontSize: 16,
                              fontWeight: 700,
                            }}>
                            Hier - Et toi ?
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent: 'center'}}>
                      <Image
                        source={require('../../../assets/boutons/more-2.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      paddingVertical: 30,
                      paddingHorizontal: 20,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignSelf: 'center',
                        width: 280,
                      }}>
                      <Image
                        source={require('../../../assets/images/gaelle-ellipse.png')}
                        style={{
                          borderRadius: 100,
                          borderColor: '#9424FA',
                          borderWidth: 2,
                          width: 119,
                          height: 119,
                        }}
                      />
                      <View
                        style={{flexDirection: 'column', width: 150, top: 20}}>
                        <View style={{flexDirection: 'row'}}>
                          <Text
                            style={{
                              color: '#0019A7',
                              fontFamily: 'Gilroy',
                              fontSize: 20,
                              fontWeight: 700,
                              marginRight: 30,
                            }}>
                            Gaëlle
                          </Text>
                          <Image
                            source={require('../../../assets/boutons/ico-certified-rose.png')}
                          />
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            top: 20,
                          }}>
                          <Text
                            style={{
                              color: '#929EDE',
                              fontFamily: 'Comfortaa',
                              fontSize: 16,
                              fontWeight: 700,
                            }}>
                            Hier - Pas loin...
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{justifyContent: 'center'}}
                      onPress={() => {
                        setShowModalOptions(true);
                        setUserName('Gaëlle');
                      }}>
                      <Image
                        source={require('../../../assets/boutons/more-2.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          </ScrollView>
          {/* Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={showModalOptions}
            onRequestClose={() => setShowModalOptions(false)}>
            <View
              style={{
                position: 'absolute',
                top: 61,
                left: 94,
                width: 322,
                height: 730,
                backgroundColor: '#FFFFFF',
                borderTopLeftRadius: 50,
                borderWidth: 1,
                borderColor: '#0019A7',
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                onPress={() => setShowModalOptions(false)}
                style={{
                  backgroundColor: 'transparent',
                  height: '100%',
                  width: '30%',
                  position: 'absolute',
                  left: -95,
                }}
              />
              <Text
                style={{
                  color: '#0019A7',
                  textAlign: 'center',
                  fontFamily: 'Comfortaa',
                  fontSize: 20,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Conversation avec {userName}
              </Text>
              <TouchableOpacity
                style={{
                  borderBottomColor: '#0019A7',
                  borderBottomWidth: 2,
                  width: '80%',
                  height: 50,
                  alignSelf: 'flex-start',
                  left: 20,
                }}>
                <Text
                  style={{
                    color: '#0019A7',
                    fontFamily: 'Gilroy',
                    fontSize: 20,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Archiver
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderBottomColor: '#0019A7',
                  borderBottomWidth: 2,
                  width: '80%',
                  height: 50,
                  alignSelf: 'flex-start',
                  left: 20,
                }}>
                <Text
                  style={{
                    color: '#0019A7',
                    fontFamily: 'Gilroy',
                    fontSize: 20,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Mettre en silencieux
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderBottomColor: '#0019A7',
                  borderBottomWidth: 2,
                  width: '80%',
                  height: 50,
                  alignSelf: 'flex-start',
                  left: 20,
                }}>
                <Text
                  style={{
                    color: '#0019A7',
                    fontFamily: 'Gilroy',
                    fontSize: 20,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Supprimer la conversation
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderBottomColor: '#0019A7',
                  borderBottomWidth: 2,
                  width: '80%',
                  height: 50,
                  alignSelf: 'flex-start',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  left: 20,
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
                  source={require('../../../assets/images/arrow-down-bleu.png')}
                  style={{width: 20, height: 20, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderBottomColor: '#0019A7',
                  borderBottomWidth: 2,
                  width: '80%',
                  height: 50,
                  alignSelf: 'flex-start',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  left: 20,
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
                  source={require('../../../assets/images/arrow-down-bleu.png')}
                  style={{width: 20, height: 20, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderBottomColor: '#0019A7',
                  borderBottomWidth: 2,
                  width: '80%',
                  height: 50,
                  alignSelf: 'flex-start',
                  left: 20,
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
              <TouchableOpacity
                style={{
                  width: '80%',
                  alignSelf: 'flex-start',
                  left: 20,
                }}>
                <Text
                  style={{
                    color: '#0019A7',
                    fontFamily: 'Gilroy',
                    fontSize: 20,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Partager à un ami
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '26%',
                  alignSelf: 'flex-start',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  left: 40,
                }}
                onPress={() => {
                  setShowModalOptions(false);
                }}>
                <Image
                  source={require('../../../assets/images/croix-bold-rouge.png')}
                  style={{width: 12, height: 12, resizeMode: 'contain'}}
                />
                <Text
                  style={{
                    color: '#0019A7',
                    fontFamily: 'Gilroy',
                    fontSize: 20,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Fermer
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </>
      )}
    </>
  );
};

export default MessageReceived;
