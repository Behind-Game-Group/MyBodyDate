import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
type HomeProps = {
  navigation: NavigationProp<RouteType, 'Pass_flash_21'>;
  route: RouteProp<RouteType, 'Pass_flash_21'>;
};
export const PassFlash21: React.FC<HomeProps> = ({navigation}) => {
  const [path, setPath] = useState<boolean>(true);
  const [viewFlash, setViewFlash] = useState<boolean>(true);
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);

  return (
    <ImageBackground
      resizeMode="contain"
      source={require('../../../assets/images/bg-parametres.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={{flex: 6}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{left: 350, width: 20, marginTop: 30}}>
          <Image
            source={require('../../../assets/images/Group-58.png')}
            style={{
              top: 4,
              width: 20,
              height: 18,
            }}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', top: 30}}>
          <TouchableOpacity
            onPress={() => {
              setPath(false);
              navigation.navigate('PassNavigator', {PassRoute: 'Prend_pass'});
            }}
            style={{
              width: '50%',
              height: 40,
              borderBottomWidth: path ? 1 : 3,
              borderBottomColor: '#fff',
            }}>
            <Text
              style={{
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'Comfortaa',
                fontSize: 20,
                fontStyle: 'normal',
                fontWeight: path ? 500 : 700,
              }}>
              Pulse
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setPath(true);
              navigation.navigate('PassNavigator', {
                PassRoute: 'Pass_flash_19',
              });
            }}
            style={{
              width: '50%',
              height: 40,
              borderBottomWidth: !path ? 1 : 3,
              borderBottomColor: '#fff',
            }}>
            <Text
              style={{
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'Comfortaa',
                fontSize: 20,
                fontStyle: 'normal',
                fontWeight: !path ? 500 : 700,
              }}>
              Pass
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{
            top: 40,
            height: 100,
            width: '100%',
            alignSelf: 'center',
            paddingTop: 10,
          }}
          contentContainerStyle={{paddingBottom: 40}}>
          <View style={{height: 660}}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                top: 20,
                height: 200,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Gilory',
                  fontWeight: '700',
                  color: '#0019A7',
                  textAlign: 'center',
                }}>
                {!viewFlash
                  ? 'Flash pour démarrer en toute\nsérénité'
                  : 'Premium pour avoir toutes les\nchances de votre côté'}
              </Text>
              <Text
                style={{
                  fontSize: 32,
                  fontFamily: 'Gilory',
                  fontWeight: '700',
                  color: '#FF84D7',
                  textAlign: 'center',
                }}>
                {!viewFlash ? '21,99€ /mois' : '26,99€ /mois'}
                <Text
                  style={{
                    fontSize: 32,
                    fontFamily: 'Gilory',
                    fontWeight: '700',
                    color: '#0019A7',
                    textAlign: 'center',
                  }}>
                  *
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Gilory',
                  fontWeight: '700',
                  color: '#0019A7',
                }}>
                {!viewFlash ? 'FLASH' : 'PRENUM'}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Gilory',
                  fontWeight: '400',
                  color: '#0019A7',
                }}>
                Engagement 1 mois*
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('PassNavigator', {
                    PassRoute: 'Pass_flash_19',
                  })
                }>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: 'Gilory',
                    fontWeight: '400',
                    color: '#0019A7',
                    textDecorationLine: 'underline',
                  }}>
                  Voir offre 6 mois
                </Text>
              </TouchableOpacity>
              <View style={{flexDirection: 'row', top: 20}}>
                <TouchableOpacity
                  onPress={() => setViewFlash(false)}
                  style={{
                    width: '50%',
                    height: 40,
                    borderBottomWidth: viewFlash ? 1 : 3,
                    borderBottomColor: '#0019A7',
                  }}>
                  <Text
                    style={{
                      color: '#0019A7',
                      textAlign: 'center',
                      fontFamily: 'Comfortaa',
                      fontSize: 20,
                      fontStyle: 'normal',
                      fontWeight: viewFlash ? 500 : 700,
                    }}>
                    Flash
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setViewFlash(true)}
                  style={{
                    width: '50%',
                    height: 40,
                    borderBottomWidth: !viewFlash ? 1 : 3,
                    borderBottomColor: '#0019A7',
                  }}>
                  <Text
                    style={{
                      color: '#0019A7',
                      textAlign: 'center',
                      fontFamily: 'Comfortaa',
                      fontSize: 20,
                      fontStyle: 'normal',
                      fontWeight: !viewFlash ? 500 : 700,
                    }}>
                    Prenium
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {!viewFlash ? (
              <>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      position: 'absolute',
                      left: 10, // Déplace l'image vers la gauche
                    }}>
                    <Image
                      source={require('../../../assets/images/Group-54.png')}
                      style={{
                        width: 25,
                        height: 25,
                        top: 80,
                        alignSelf: 'center',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Gilory',
                        fontWeight: '700',
                        color: '#0019A7',
                        top: 80,
                        marginLeft: 20, // Crée un espace entre l'image et le texte
                      }}>
                      Echangez sans limite avec qui vous voulez
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      position: 'absolute',
                      left: 10, // Déplace l'image vers la gauche
                    }}>
                    <Image
                      source={require('../../../assets/images/Group-54.png')}
                      style={{
                        width: 25,
                        height: 25,
                        top: 110,
                        alignSelf: 'center',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Gilory',
                        fontWeight: '700',
                        color: '#0019A7',
                        top: 110,
                        marginLeft: 20, // Crée un espace entre l'image et le texte
                      }}>
                      Accédez a vos liste de Likes et Visites
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      position: 'absolute',
                      left: 10, // Déplace l'image vers la gauche
                    }}>
                    <Image
                      source={require('../../../assets/images/Group-54.png')}
                      style={{
                        width: 25,
                        height: 25,
                        top: 140,
                        alignSelf: 'center',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Gilory',
                        fontWeight: '700',
                        color: '#0019A7',
                        top: 140,
                        marginLeft: 20, // Crée un espace entre l'image et le texte
                      }}>
                      Décidez qui peut vous contacter
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      position: 'absolute',
                      left: 10, // Déplace l'image vers la gauche
                    }}>
                    <Image
                      source={require('../../../assets/images/Group-54.png')}
                      style={{
                        width: 25,
                        height: 25,
                        top: 170,
                        alignSelf: 'center',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Gilory',
                        fontWeight: '700',
                        color: '#0019A7',
                        top: 170,
                        marginLeft: 20, // Crée un espace entre l'image et le texte
                      }}>
                      Accédez aux filtres avancé de la recherche
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    top: 160,
                  }}>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      position: 'absolute',
                      left: 10, // Déplace l'image vers la gauche
                    }}>
                    <Image
                      source={require('../../../assets/images/Group-59.png')}
                      style={{
                        width: 25,
                        height: 25,
                        top: 50,
                        alignSelf: 'center',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Gilory',
                        fontWeight: '700',
                        color: '#A3B0FF',
                        top: 50,
                        marginLeft: 20, // Crée un espace entre l'image et le texte
                      }}>
                      Rejouer les profils que vous avez passé
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      position: 'absolute',
                      left: 10, // Déplace l'image vers la gauche
                    }}>
                    <Image
                      source={require('../../../assets/images/Group-59.png')}
                      style={{
                        width: 25,
                        height: 25,
                        top: 80,
                        alignSelf: 'center',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Gilory',
                        fontWeight: '700',
                        color: '#A3B0FF',
                        top: 80,
                        marginLeft: 20, // Crée un espace entre l'image et le texte
                      }}>
                      Permettez à tous les profils de vous contacter
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      position: 'absolute',
                      left: 10, // Déplace l'image vers la gauche
                    }}>
                    <Image
                      source={require('../../../assets/images/Group-59.png')}
                      style={{
                        width: 25,
                        height: 25,
                        top: 110,
                        alignSelf: 'center',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Gilory',
                        fontWeight: '700',
                        color: '#A3B0FF',
                        top: 110,
                        marginLeft: 20, // Crée un espace entre l'image et le texte
                      }}>
                      Démarquez vous avec l'icône Premium
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      position: 'absolute',
                      left: 10, // Déplace l'image vers la gauche
                    }}>
                    <Image
                      source={require('../../../assets/images/Group-59.png')}
                      style={{
                        width: 25,
                        height: 25,
                        top: 140,
                        alignSelf: 'center',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Gilory',
                        fontWeight: '700',
                        color: '#A3B0FF',
                        top: 140,
                        marginLeft: 20, // Crée un espace entre l'image et le texte
                      }}>
                      Découvrez quand vos messages sont lus
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      position: 'absolute',
                      left: 10, // Déplace l'image vers la gauche
                    }}>
                    <Image
                      source={require('../../../assets/images/Group-59.png')}
                      style={{
                        width: 25,
                        height: 25,
                        top: 170,
                        alignSelf: 'center',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Gilory',
                        fontWeight: '700',
                        color: '#A3B0FF',
                        top: 170,
                        marginLeft: 20, // Crée un espace entre l'image et le texte
                      }}>
                      Repliez le bandeau spotlight pendant 1{'\n'}minute
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      position: 'absolute',
                      left: 10, // Déplace l'image vers la gauche
                    }}>
                    <Image
                      source={require('../../../assets/images/Group-59.png')}
                      style={{
                        width: 25,
                        height: 25,
                        top: 210,
                        alignSelf: 'center',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Gilory',
                        fontWeight: '700',
                        color: '#A3B0FF',
                        top: 210,
                        marginLeft: 20, // Crée un espace entre l'image et le texte
                      }}>
                      Propulsez votre profil : 5 mises en avant/{'\n'}mois
                    </Text>
                  </View>
                </View>
              </>
            ) : (
              <>
                {/* Prenium */}
                <View
                  style={{
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      position: 'absolute',
                      left: 10, // Déplace l'image vers la gauche
                    }}>
                    <Image
                      source={require('../../../assets/images/Group-54.png')}
                      style={{
                        width: 25,
                        height: 25,
                        top: 80,
                        alignSelf: 'center',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Gilory',
                        fontWeight: '700',
                        color: '#0019A7',
                        top: 80,
                        marginLeft: 20, // Crée un espace entre l'image et le texte
                      }}>
                      Echangez sans limite avec qui vous voulez
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      position: 'absolute',
                      left: 10, // Déplace l'image vers la gauche
                    }}>
                    <Image
                      source={require('../../../assets/images/Group-54.png')}
                      style={{
                        width: 25,
                        height: 25,
                        top: 110,
                        alignSelf: 'center',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Gilory',
                        fontWeight: '700',
                        color: '#0019A7',
                        top: 110,
                        marginLeft: 20, // Crée un espace entre l'image et le texte
                      }}>
                      Accédez a vos liste de Likes et Visites
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      position: 'absolute',
                      left: 10, // Déplace l'image vers la gauche
                    }}>
                    <Image
                      source={require('../../../assets/images/Group-54.png')}
                      style={{
                        width: 25,
                        height: 25,
                        top: 140,
                        alignSelf: 'center',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Gilory',
                        fontWeight: '700',
                        color: '#0019A7',
                        top: 140,
                        marginLeft: 20, // Crée un espace entre l'image et le texte
                      }}>
                      Décidez qui peut vous contacter
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      position: 'absolute',
                      left: 10, // Déplace l'image vers la gauche
                    }}>
                    <Image
                      source={require('../../../assets/images/Group-54.png')}
                      style={{
                        width: 25,
                        height: 25,
                        top: 170,
                        alignSelf: 'center',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Gilory',
                        fontWeight: '700',
                        color: '#0019A7',
                        top: 170,
                        marginLeft: 20, // Crée un espace entre l'image et le texte
                      }}>
                      Accédez aux filtres avancé de la recherche
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    top: 155,
                  }}>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      position: 'absolute',
                      left: 10, // Déplace l'image vers la gauche
                    }}>
                    <Image
                      source={require('../../../assets/images/Group-54.png')}
                      style={{
                        width: 25,
                        height: 25,
                        top: 50,
                        alignSelf: 'center',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Gilory',
                        fontWeight: '700',
                        color: '#0019A7',
                        top: 50,
                        marginLeft: 20, // Crée un espace entre l'image et le texte
                      }}>
                      Rejouer les profils que vous avez passé
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      position: 'absolute',
                      left: 10, // Déplace l'image vers la gauche
                    }}>
                    <Image
                      source={require('../../../assets/images/Group-54.png')}
                      style={{
                        width: 25,
                        height: 25,
                        top: 80,
                        alignSelf: 'center',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Gilory',
                        fontWeight: '700',
                        color: '#0019A7',
                        top: 80,
                        marginLeft: 20, // Crée un espace entre l'image et le texte
                      }}>
                      Permettez à tous les profils de vous contacter
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      position: 'absolute',
                      left: 10, // Déplace l'image vers la gauche
                    }}>
                    <Image
                      source={require('../../../assets/images/Group-54.png')}
                      style={{
                        width: 25,
                        height: 25,
                        top: 110,
                        alignSelf: 'center',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Gilory',
                        fontWeight: '700',
                        color: '#0019A7',
                        top: 110,
                        marginLeft: 20, // Crée un espace entre l'image et le texte
                      }}>
                      Démarquez vous avec l'icône Premium
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      position: 'absolute',
                      left: 10, // Déplace l'image vers la gauche
                    }}>
                    <Image
                      source={require('../../../assets/images/Group-54.png')}
                      style={{
                        width: 25,
                        height: 25,
                        top: 140,
                        alignSelf: 'center',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Gilory',
                        fontWeight: '700',
                        color: '#0019A7',
                        top: 140,
                        marginLeft: 20, // Crée un espace entre l'image et le texte
                      }}>
                      Découvrez quand vos messages sont lus
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      position: 'absolute',
                      left: 10, // Déplace l'image vers la gauche
                    }}>
                    <Image
                      source={require('../../../assets/images/Group-54.png')}
                      style={{
                        width: 25,
                        height: 25,
                        top: 170,
                        alignSelf: 'center',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Gilory',
                        fontWeight: '700',
                        color: '#0019A7',
                        top: 170,
                        marginLeft: 20, // Crée un espace entre l'image et le texte
                      }}>
                      Repliez le bandeau spotlight pendant 1{'\n'}minute
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      position: 'absolute',
                      left: 10, // Déplace l'image vers la gauche
                    }}>
                    <Image
                      source={require('../../../assets/images/Group-54.png')}
                      style={{
                        width: 25,
                        height: 25,
                        top: 210,
                        alignSelf: 'center',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Gilory',
                        fontWeight: '700',
                        color: '#0019A7',
                        top: 210,
                        marginLeft: 20, // Crée un espace entre l'image et le texte
                      }}>
                      Propulsez votre profil : 5 mises en avant/{'\n'}mois
                    </Text>
                  </View>
                </View>
              </>
            )}
          </View>
        </ScrollView>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={{top: 50}}
          onPress={() => {
            setButtonPressed(true);
          }}>
          <Image
            style={{
              width: 331,
              height: 56,
              flexShrink: 0,
              alignSelf: 'center',
            }}
            source={
              buttonPressed
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Bleu.png')
            }
          />
          <Text
            style={[
              {
                top: -40,
                textAlign: 'center',
                alignSelf: 'center',
                fontFamily: 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
                fontWeight: 700,
                color: '#fff',
              },
            ]}>
            Sélectionner
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
