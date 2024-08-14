import React, {useEffect, useState} from 'react';
import {
  TextInput,
  View,
  Text,
  Image,
  Modal,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {
  getDatas,
  // storeData
} from '../../services/storage';
import {
  StorageValue,
  StorageValueMap,
} from '../../../interfaces/StorageValueInterface';

type MenuTalkProps = {
  navigation: NavigationProp<RouteType, keyof RouteType>;
  user: string;
};

export const MenuTalk: React.FC<MenuTalkProps> = ({navigation, user}) => {
  const [prenium, setPrenium] = useState<string>();
  const [modalAddMember, setModalAddMember] = useState<boolean>(false);
  const [modalAddFriend, setModalAddFriend] = useState<boolean>(false);
  const [friendPhone, onChangeFriendPhone] = useState<string>('');
  const [friendChoiced, setFriendChoice] = useState<string>('');
  const [conversationAtrois, setConversationAtrois] = useState<boolean>(false);
  // console.log(user);

  const keysToRetrieve: string[] = ['prenium', 'friendChoice'];

  // const handleStoreData = async (key: string, value: string) => {
  //   try {
  //     await storeData(key, value);
  //   } catch (error) {
  //     console.error('Erreur lors du stockage des données :', error);
  //   }
  // };

  const getMultipleValues = async () => {
    try {
      const retrievedValues: StorageValue[] = await getDatas(keysToRetrieve);

      const result: StorageValueMap = {};
      retrievedValues.forEach(item => {
        result[item.key] = item.value;
      });
      setPrenium(result.prenium as string);
      setFriendChoice(result.friendChoice as string);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  useEffect(() => {
    getMultipleValues();
  }, []);

  return (
    <View>
      <View
        style={{
          width: 320,
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
          top: 30,
        }}>
        {!user ? (
          <View style={{flexDirection: 'row', width: 200, height: 50}}>
            <Image
              source={require('../../../assets/images/Ellipse44.png')}
              style={{
                position: 'absolute',
                top: -30,
                width: 50,
                resizeMode: 'contain',
              }}
            />

            <TouchableOpacity
              onPress={() => {
                setModalAddMember(true);
              }}
              style={{
                backgroundColor: '#fff',
                position: 'absolute',
                top: 0,
                left: 40,
                justifyContent: 'center',
                alignItems: 'center',
                width: 50,
                height: 50,
                borderColor: '#0019A7',
                borderWidth: 2,
                borderRadius: 50,
              }}>
              <Image
                source={require('../../../assets/images/add-6.png')}
                style={{top: 0, width: 50, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>
        ) : user === 'Kolia' ? (
          <View style={{flexDirection: 'row', width: 200, height: 50}}>
            <Image
              source={require('../../../assets/images/Ellipse44.png')}
              style={{
                position: 'absolute',
                top: -30,
                width: 50,
                resizeMode: 'contain',
              }}
            />
            <Image
              source={require('../../../assets/images/kolia-ellipse.png')}
              style={{
                position: 'absolute',
                top: -15,
                left: 30,
                width: 50,
                resizeMode: 'contain',
              }}
            />
            {prenium !== 'no' && (
              <TouchableOpacity
                onPress={() => {
                  setModalAddMember(true);
                }}
                style={{
                  backgroundColor: '#fff',
                  position: 'absolute',
                  top: 0,
                  left: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 50,
                  height: 50,
                  borderColor: '#0019A7',
                  borderWidth: 2,
                  borderRadius: 50,
                }}>
                {prenium === 'yes' && friendChoiced == null ? (
                  <Image
                    source={require('../../../assets/images/add-6.png')}
                    style={{top: 0, width: 50, resizeMode: 'contain'}}
                  />
                ) : conversationAtrois === false && friendChoiced == null ? (
                  <Image
                    source={require('../../../assets/images/add-6.png')}
                    style={{top: 0, width: 50, resizeMode: 'contain'}}
                  />
                ) : (
                  <Image
                    source={require('../../../assets/images/beverly-ellipse.png')}
                    style={{top: 0, width: 50, resizeMode: 'contain'}}
                  />
                )}
              </TouchableOpacity>
            )}
          </View>
        ) : user === 'Beverly' ? (
          <View style={{flexDirection: 'row', width: 200, height: 50}}>
            <Image
              source={require('../../../assets/images/Ellipse44.png')}
              style={{
                position: 'absolute',
                top: -30,
                width: 50,
                resizeMode: 'contain',
              }}
            />
            <Image
              source={require('../../../assets/images/beverly-ellipse.png')}
              style={{
                position: 'absolute',
                top: -15,
                left: 30,
                width: 50,
                resizeMode: 'contain',
              }}
            />
            {prenium === 'yes' && (
              <TouchableOpacity
                onPress={() => {
                  setModalAddMember(true);
                }}
                style={{
                  backgroundColor: '#fff',
                  position: 'absolute',
                  top: 0,
                  left: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 50,
                  height: 50,
                  borderColor: '#0019A7',
                  borderWidth: 2,
                  borderRadius: 50,
                }}>
                <Image
                  source={require('../../../assets/images/add-6.png')}
                  style={{top: 0, width: 50, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
            )}
          </View>
        ) : null}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: 180,
            height: 50,
          }}>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            onPress={() => {
              setModalAddFriend(true);
            }}>
            {prenium === 'no' ? (
              <Image
                source={require('../../../assets/boutons/ico-talk-bleu.png')}
              />
            ) : conversationAtrois === false ? (
              <Image
                source={require('../../../assets/boutons/ico-talk-rose.png')}
              />
            ) : (
              <Image
                source={require('../../../assets/boutons/ico-talk-vert.png')}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity style={{justifyContent: 'center'}}>
            {prenium === 'yes' &&
            conversationAtrois === true &&
            friendChoiced === 'Beverly' ? (
              <Image
                source={require('../../../assets/boutons/bulle-conversation-bleu.png')}
              />
            ) : (
              <Image
                source={require('../../../assets/boutons/bulle-conversation-vert.png')}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            onPress={() => navigation.navigate('TalkPhone')}>
            <Image
              source={require('../../../assets/images/appel-video-1.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalAddMember}
        onRequestClose={() => setModalAddMember(false)}>
        <View
          style={{
            position: 'absolute',
            top: 61,
            left: 94,
            width: 322,
            height: 804,
            backgroundColor: '#FFFFFF',
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
            borderWidth: 1,
            borderColor: '#0019A7',
          }}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 310,
              width: '35%',
              height: '100%',
            }}
            onPress={() => setModalAddMember(false)}
          />
          <View
            style={{
              position: 'absolute',
              top: 51,
              left: 23,
              width: 196,
              height: 24,
            }}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Gilroy',
                fontSize: 20,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Ajouter un membre :
            </Text>
            <Text
              style={{
                color: '#0019A7',
                top: 20,
                fontFamily: 'Comfortaa',
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 500,
              }}>
              Liste de vos favoris.
            </Text>
          </View>
          <ScrollView
            style={{marginTop: 150}}
            contentContainerStyle={{paddingBottom: 100}}>
            <TouchableOpacity
              style={{
                top: 10,
                left: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 100,
                width: '90%',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  borderColor: '#000',
                  borderRadius: 50,
                  borderWidth: 2,
                  left: 15,
                  alignSelf: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/lisa-ellipse.png')}
                  style={{resizeMode: 'contain', width: 80, height: 80}}
                />
                <Image
                  source={require('../../../assets/images/Ellipse-62.png')}
                  style={{
                    position: 'absolute',
                    top: '70%',
                    left: '75%',
                    width: 20,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View style={{width: '70%', flexDirection: 'column'}}>
                <View
                  style={{flexDirection: 'row', width: '100%', height: '40%'}}>
                  <Text
                    style={{
                      color: '#0019A7',
                      fontFamily: 'Gilroy',
                      fontSize: 20,
                      fontStyle: 'normal',
                      fontWeight: 700,
                      marginLeft: 20,
                    }}>
                    Lisa
                  </Text>
                  <Image
                    source={require('../../../assets/boutons/ico-certified-rose.png')}
                    style={{width: 20, resizeMode: 'contain', marginLeft: 20}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#000',
                      fontFamily: 'Comfortaa',
                      fontSize: 16,
                      fontWeight: 700,
                      marginLeft: 20,
                    }}>
                    Professionnel
                  </Text>
                  <Image
                    source={require('../../../assets/images/add-6.png')}
                    style={{width: 50, resizeMode: 'contain'}}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View
              style={{
                width: '80%',
                height: 1,
                backgroundColor: '#0019A7',
                alignSelf: 'center',
                marginTop: 20,
              }}
            />
            <TouchableOpacity
              style={{
                top: 10,
                left: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 100,
                width: '90%',
              }}
              onPress={() => {
                setFriendChoice('Beverly');
                setModalAddMember(false);
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  borderColor: '#9424FA',
                  borderRadius: 50,
                  borderWidth: 2,
                  left: 15,
                  alignSelf: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/beverly-ellipse.png')}
                  style={{resizeMode: 'contain', width: 80, height: 80}}
                />
                <Image
                  source={require('../../../assets/images/Ellipse-62.png')}
                  style={{
                    position: 'absolute',
                    top: '70%',
                    left: '75%',
                    width: 20,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View style={{width: '70%', flexDirection: 'column'}}>
                <View
                  style={{flexDirection: 'row', width: '100%', height: '40%'}}>
                  <Text
                    style={{
                      color: '#0019A7',
                      fontFamily: 'Gilroy',
                      fontSize: 20,
                      fontStyle: 'normal',
                      fontWeight: 700,
                      marginLeft: 20,
                    }}>
                    Beverly
                  </Text>
                  <Image
                    source={require('../../../assets/boutons/ico-certified-rose.png')}
                    style={{width: 20, resizeMode: 'contain', marginLeft: 20}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#9424FA',
                      fontFamily: 'Comfortaa',
                      fontSize: 16,
                      fontWeight: 700,
                      marginLeft: 20,
                    }}>
                    Cercle d'ami
                  </Text>
                  <Image
                    source={require('../../../assets/images/add-6.png')}
                    style={{width: 50, resizeMode: 'contain'}}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View
              style={{
                width: '80%',
                height: 1,
                backgroundColor: '#0019A7',
                alignSelf: 'center',
                marginTop: 20,
              }}
            />
            <TouchableOpacity
              style={{
                top: 10,
                left: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 100,
                width: '90%',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  borderColor: '#9424FA',
                  borderRadius: 50,
                  borderWidth: 2,
                  left: 15,
                  alignSelf: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/rachel-ellipse.png')}
                  style={{resizeMode: 'contain', width: 80, height: 80}}
                />
              </View>
              <View style={{width: '70%', flexDirection: 'column'}}>
                <View
                  style={{flexDirection: 'row', width: '100%', height: '40%'}}>
                  <Text
                    style={{
                      color: '#0019A7',
                      fontFamily: 'Gilroy',
                      fontSize: 20,
                      fontStyle: 'normal',
                      fontWeight: 700,
                      marginLeft: 20,
                    }}>
                    Rachel
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#9424FA',
                      fontFamily: 'Comfortaa',
                      fontSize: 16,
                      fontWeight: 700,
                      marginLeft: 20,
                    }}>
                    Cercle d'ami
                  </Text>
                  <Image
                    source={require('../../../assets/images/add-6.png')}
                    style={{width: 50, resizeMode: 'contain'}}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View
              style={{
                width: '80%',
                height: 1,
                backgroundColor: '#0019A7',
                alignSelf: 'center',
                marginTop: 20,
              }}
            />
            <TouchableOpacity
              style={{
                top: 10,
                left: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 100,
                width: '90%',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  borderColor: '#9424FA',
                  borderRadius: 50,
                  borderWidth: 2,
                  left: 15,
                  alignSelf: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/celine-ellipse.png')}
                  style={{resizeMode: 'contain', width: 80, height: 80}}
                />
                <Image
                  source={require('../../../assets/images/Ellipse-62.png')}
                  style={{
                    position: 'absolute',
                    top: '70%',
                    left: '75%',
                    width: 20,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View style={{width: '70%', flexDirection: 'column'}}>
                <View
                  style={{flexDirection: 'row', width: '100%', height: '40%'}}>
                  <Text
                    style={{
                      color: '#0019A7',
                      fontFamily: 'Gilroy',
                      fontSize: 20,
                      fontStyle: 'normal',
                      fontWeight: 700,
                      marginLeft: 20,
                    }}>
                    Céline
                  </Text>
                  <Image
                    source={require('../../../assets/boutons/ico-certified-rose.png')}
                    style={{width: 20, resizeMode: 'contain', marginLeft: 20}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#9424FA',
                      fontFamily: 'Comfortaa',
                      fontSize: 16,
                      fontWeight: 700,
                      marginLeft: 20,
                    }}>
                    Cercle d'ami
                  </Text>
                  <Image
                    source={require('../../../assets/images/add-6.png')}
                    style={{width: 50, resizeMode: 'contain'}}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View
              style={{
                width: '80%',
                height: 1,
                backgroundColor: '#0019A7',
                alignSelf: 'center',
                marginTop: 20,
              }}
            />
            <TouchableOpacity
              style={{
                top: 10,
                left: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 100,
                width: '90%',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  borderColor: '#9424FA',
                  borderRadius: 50,
                  borderWidth: 2,
                  left: 15,
                  alignSelf: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/kolia-ellipse.png')}
                  style={{resizeMode: 'contain', width: 80, height: 80}}
                />
                <Image
                  source={require('../../../assets/images/Ellipse-62.png')}
                  style={{
                    position: 'absolute',
                    top: '70%',
                    left: '75%',
                    width: 20,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View style={{width: '70%', flexDirection: 'column'}}>
                <View
                  style={{flexDirection: 'row', width: '100%', height: '40%'}}>
                  <Text
                    style={{
                      color: '#0019A7',
                      fontFamily: 'Gilroy',
                      fontSize: 20,
                      fontStyle: 'normal',
                      fontWeight: 700,
                      marginLeft: 20,
                    }}>
                    Kolia
                  </Text>
                  <Image
                    source={require('../../../assets/boutons/ico-certified-rose.png')}
                    style={{width: 20, resizeMode: 'contain', marginLeft: 20}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#FF84D7',
                      fontFamily: 'Comfortaa',
                      fontSize: 16,
                      fontWeight: 700,
                      marginLeft: 20,
                    }}>
                    Relation amoureuse
                  </Text>
                  <Image
                    source={require('../../../assets/images/add-6.png')}
                    style={{width: 50, resizeMode: 'contain'}}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View
              style={{
                width: '80%',
                height: 1,
                backgroundColor: '#0019A7',
                alignSelf: 'center',
                marginTop: 20,
              }}
            />
          </ScrollView>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalAddFriend}
        onRequestClose={() => setModalAddMember(false)}>
        <View
          style={{
            position: 'relative',
            top: 61,
            left: 94,
            width: 322,
            height: 804,
            backgroundColor: '#FFFFFF',
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
            borderWidth: 1,
            borderColor: '#0019A7',
          }}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 310,
              width: '35%',
              height: '100%',
            }}
            onPress={() => setModalAddFriend(false)}
          />
          <View
            style={{
              position: 'relative',
              top: 50,
              left: 23,
              width: 196,
              height: 24,
            }}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Gilroy',
                fontSize: 20,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Inviter un ami :
            </Text>
            <Text
              style={{
                color: '#0019A7',
                top: 20,
                fontFamily: 'Comfortaa',
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 500,
              }}>
              Hors application
            </Text>
            <SafeAreaView style={{top: 40, flexDirection: 'row'}}>
              <TextInput
                style={{
                  width: 218,
                  height: 42,
                  borderRadius: 40,
                  backgroundColor: '#D9D9D9',
                  color: '#000',
                  fontFamily: 'Comfortaa',
                  fontSize: 15,
                  fontStyle: 'normal',
                  textAlign: 'center',
                }}
                onChangeText={onChangeFriendPhone}
                value={friendPhone}
                placeholder="Entrez son n° mobile"
                keyboardType="numeric"
              />
              <TouchableOpacity style={{right: 30}}>
                <Text
                  style={{
                    height: 42,
                    right: 0,
                    backgroundColor: '#000',
                    padding: 10,
                    borderRadius: 40,
                    textAlign: 'center',
                    color: '#FFF',
                    fontFamily: 'Comfortaa',
                    fontSize: 15,
                    fontWeight: 500,
                  }}>
                  Envoyer
                </Text>
              </TouchableOpacity>
            </SafeAreaView>
          </View>
          <View
            style={{
              position: 'absolute',
              top: 201,
              left: 23,
              width: 196,
              height: 24,
            }}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Gilroy',
                fontSize: 20,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Ajouter un membre :
            </Text>
            <Text
              style={{
                color: '#0019A7',
                top: 20,
                fontFamily: 'Comfortaa',
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 500,
              }}>
              Liste de vos favoris
            </Text>
          </View>
          <ScrollView
            style={{marginTop: 250}}
            contentContainerStyle={{paddingBottom: 100}}>
            <TouchableOpacity
              style={{
                top: 10,
                left: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 100,
                width: '90%',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  borderColor: '#000',
                  borderRadius: 50,
                  borderWidth: 2,
                  left: 15,
                  alignSelf: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/lisa-ellipse.png')}
                  style={{resizeMode: 'contain', width: 80, height: 80}}
                />
                <Image
                  source={require('../../../assets/images/Ellipse-62.png')}
                  style={{
                    position: 'absolute',
                    top: '70%',
                    left: '75%',
                    width: 20,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View style={{width: '70%', flexDirection: 'column'}}>
                <View
                  style={{flexDirection: 'row', width: '100%', height: '40%'}}>
                  <Text
                    style={{
                      color: '#0019A7',
                      fontFamily: 'Gilroy',
                      fontSize: 20,
                      fontStyle: 'normal',
                      fontWeight: 700,
                      marginLeft: 20,
                    }}>
                    Lisa
                  </Text>
                  <Image
                    source={require('../../../assets/boutons/ico-certified-rose.png')}
                    style={{width: 20, resizeMode: 'contain', marginLeft: 20}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#000',
                      fontFamily: 'Comfortaa',
                      fontSize: 16,
                      fontWeight: 700,
                      marginLeft: 20,
                    }}>
                    Professionnel
                  </Text>
                  <Image
                    source={require('../../../assets/images/add-6.png')}
                    style={{width: 50, resizeMode: 'contain'}}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View
              style={{
                width: '80%',
                height: 1,
                backgroundColor: '#0019A7',
                alignSelf: 'center',
                marginTop: 20,
              }}
            />
            <TouchableOpacity
              style={{
                top: 10,
                left: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 100,
                width: '90%',
              }}
              onPress={() => {
                setFriendChoice('Beverly');
                setConversationAtrois(true);
                setModalAddFriend(false);
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  borderColor: '#9424FA',
                  borderRadius: 50,
                  borderWidth: 2,
                  left: 15,
                  alignSelf: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/beverly-ellipse.png')}
                  style={{resizeMode: 'contain', width: 80, height: 80}}
                />
                <Image
                  source={require('../../../assets/images/Ellipse-62.png')}
                  style={{
                    position: 'absolute',
                    top: '70%',
                    left: '75%',
                    width: 20,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View style={{width: '70%', flexDirection: 'column'}}>
                <View
                  style={{flexDirection: 'row', width: '100%', height: '40%'}}>
                  <Text
                    style={{
                      color: '#0019A7',
                      fontFamily: 'Gilroy',
                      fontSize: 20,
                      fontStyle: 'normal',
                      fontWeight: 700,
                      marginLeft: 20,
                    }}>
                    Beverly
                  </Text>
                  <Image
                    source={require('../../../assets/boutons/ico-certified-rose.png')}
                    style={{width: 20, resizeMode: 'contain', marginLeft: 20}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#9424FA',
                      fontFamily: 'Comfortaa',
                      fontSize: 16,
                      fontWeight: 700,
                      marginLeft: 20,
                    }}>
                    Cercle d'ami
                  </Text>
                  <Image
                    source={require('../../../assets/images/add-6.png')}
                    style={{width: 50, resizeMode: 'contain'}}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View
              style={{
                width: '80%',
                height: 1,
                backgroundColor: '#0019A7',
                alignSelf: 'center',
                marginTop: 20,
              }}
            />
            <TouchableOpacity
              style={{
                top: 10,
                left: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 100,
                width: '90%',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  borderColor: '#9424FA',
                  borderRadius: 50,
                  borderWidth: 2,
                  left: 15,
                  alignSelf: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/rachel-ellipse.png')}
                  style={{resizeMode: 'contain', width: 80, height: 80}}
                />
              </View>
              <View style={{width: '70%', flexDirection: 'column'}}>
                <View
                  style={{flexDirection: 'row', width: '100%', height: '40%'}}>
                  <Text
                    style={{
                      color: '#0019A7',
                      fontFamily: 'Gilroy',
                      fontSize: 20,
                      fontStyle: 'normal',
                      fontWeight: 700,
                      marginLeft: 20,
                    }}>
                    Rachel
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#9424FA',
                      fontFamily: 'Comfortaa',
                      fontSize: 16,
                      fontWeight: 700,
                      marginLeft: 20,
                    }}>
                    Cercle d'ami
                  </Text>
                  <Image
                    source={require('../../../assets/images/add-6.png')}
                    style={{width: 50, resizeMode: 'contain'}}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View
              style={{
                width: '80%',
                height: 1,
                backgroundColor: '#0019A7',
                alignSelf: 'center',
                marginTop: 20,
              }}
            />
            <TouchableOpacity
              style={{
                top: 10,
                left: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 100,
                width: '90%',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  borderColor: '#9424FA',
                  borderRadius: 50,
                  borderWidth: 2,
                  left: 15,
                  alignSelf: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/celine-ellipse.png')}
                  style={{resizeMode: 'contain', width: 80, height: 80}}
                />
                <Image
                  source={require('../../../assets/images/Ellipse-62.png')}
                  style={{
                    position: 'absolute',
                    top: '70%',
                    left: '75%',
                    width: 20,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View style={{width: '70%', flexDirection: 'column'}}>
                <View
                  style={{flexDirection: 'row', width: '100%', height: '40%'}}>
                  <Text
                    style={{
                      color: '#0019A7',
                      fontFamily: 'Gilroy',
                      fontSize: 20,
                      fontStyle: 'normal',
                      fontWeight: 700,
                      marginLeft: 20,
                    }}>
                    Céline
                  </Text>
                  <Image
                    source={require('../../../assets/boutons/ico-certified-rose.png')}
                    style={{width: 20, resizeMode: 'contain', marginLeft: 20}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#9424FA',
                      fontFamily: 'Comfortaa',
                      fontSize: 16,
                      fontWeight: 700,
                      marginLeft: 20,
                    }}>
                    Cercle d'ami
                  </Text>
                  <Image
                    source={require('../../../assets/images/add-6.png')}
                    style={{width: 50, resizeMode: 'contain'}}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View
              style={{
                width: '80%',
                height: 1,
                backgroundColor: '#0019A7',
                alignSelf: 'center',
                marginTop: 20,
              }}
            />
            <TouchableOpacity
              style={{
                top: 10,
                left: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 100,
                width: '90%',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  borderColor: '#9424FA',
                  borderRadius: 50,
                  borderWidth: 2,
                  left: 15,
                  alignSelf: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/kolia-ellipse.png')}
                  style={{resizeMode: 'contain', width: 80, height: 80}}
                />
                <Image
                  source={require('../../../assets/images/Ellipse-62.png')}
                  style={{
                    position: 'absolute',
                    top: '70%',
                    left: '75%',
                    width: 20,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View style={{width: '70%', flexDirection: 'column'}}>
                <View
                  style={{flexDirection: 'row', width: '100%', height: '40%'}}>
                  <Text
                    style={{
                      color: '#0019A7',
                      fontFamily: 'Gilroy',
                      fontSize: 20,
                      fontStyle: 'normal',
                      fontWeight: 700,
                      marginLeft: 20,
                    }}>
                    Kolia
                  </Text>
                  <Image
                    source={require('../../../assets/boutons/ico-certified-rose.png')}
                    style={{width: 20, resizeMode: 'contain', marginLeft: 20}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#FF84D7',
                      fontFamily: 'Comfortaa',
                      fontSize: 16,
                      fontWeight: 700,
                      marginLeft: 20,
                    }}>
                    Relation amoureuse
                  </Text>
                  <Image
                    source={require('../../../assets/images/add-6.png')}
                    style={{width: 50, resizeMode: 'contain'}}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View
              style={{
                width: '80%',
                height: 1,
                backgroundColor: '#0019A7',
                alignSelf: 'center',
                marginTop: 20,
              }}
            />
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default MenuTalk;
