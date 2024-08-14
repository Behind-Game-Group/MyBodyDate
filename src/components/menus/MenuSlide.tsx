import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {SettingsRoutes} from '../../../types/routes/SettingsRoutes';
import {DiscoverRoutes} from '../../../types/routes/DiscoverRoutes';
import {useMainContext} from '../../context/MainContext ';
import {TabProfilRoutes} from '../../../types/routes/TabProfilRoutes';

type MenuSlideProps = {
  navigation: NavigationProp<RouteType, keyof RouteType>;
  settingsNavigation: SettingsRoutes | undefined;
  icoPushChange: boolean;
  backButton: string | undefined;
  backgroundColor: string | undefined;
};

export const MenuSlide: React.FC<MenuSlideProps> = ({
  navigation,
  settingsNavigation,
  icoPushChange,
  backButton,
  backgroundColor,
}) => {
  // const navigation = useNavigation();

  const {cercle, setCercle, setTabPath} = useMainContext();

  // Constantes concernant la Modal du Menu Slide
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const getRandomLink = () => {
    const link1 = 'Voix_du_jour';
    const link2 = 'Carte_magique';
    const randomIndex = Math.floor(Math.random() * 2);
    return randomIndex === 0
      ? navigation.navigate('GameNavigator', {GameRoute: link1})
      : navigation.navigate('GameNavigator', {GameRoute: link2});
  };
  // console.log(backgroundColor);

  const tabPathMoi: TabProfilRoutes =
    cercle === 'Amour'
      ? 'ProfilMeRA'
      : cercle === 'Ami'
      ? 'ProfilMeCA'
      : cercle === 'Professionnel'
      ? 'ProfilMeRP'
      : 'ProfilMeRA';

  const tabPathDiscover: DiscoverRoutes =
    cercle === 'Amour'
      ? 'Discover'
      : cercle === 'Ami'
      ? 'DiscoverCA'
      : cercle === 'Professionnel'
      ? 'DiscoverRP'
      : 'Discover';

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 20,
        width: '100%',
        height: 100,
        backgroundColor: backgroundColor ? 'white' : 'transparent',
      }}>
      {backButton === 'Retour' ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 165,
          }}>
          <TouchableOpacity
            accessibilityLabel="Accueil"
            onPress={() =>
              settingsNavigation && settingsNavigation !== 'Compte_non_trouve'
                ? navigation.navigate(settingsNavigation)
                : settingsNavigation === 'Compte_non_trouve'
                ? navigation.navigate(settingsNavigation)
                : navigation.goBack()
            }>
            <Image
              source={require('../../../assets/images/retour_flèche_bleu.png')}
              style={{width: 10, height: 20}}
            />
          </TouchableOpacity>
        </View>
      ) : backButton === 'Retour profil ami' ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 125,
          }}>
          <TouchableOpacity
            accessibilityLabel="Accueil"
            onPress={() => {
              navigation.navigate('TabProfilNavigator', {
                TabProfilRoute: tabPathMoi,
              });
              setTabPath('Moi');
            }}>
            <Image
              source={
                cercle === 'Professionnel'
                  ? require('../../../assets/images/retour_flèche_noir.png')
                  : cercle === 'Professionnel-Clair'
                  ? require('../../../assets/images/retour_flèche_blanc.png')
                  : require('../../../assets/images/retour_flèche_bleu.png')
              }
              style={{width: 10, height: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Accueil"
            onPress={() => {
              navigation.navigate('TabProfilNavigator', {
                TabProfilRoute: tabPathMoi,
              });
              setTabPath('Moi');
            }}>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                fontSize: 18,
                color: '#0019A7',
              }}>
              Retour Profil
            </Text>
          </TouchableOpacity>
        </View>
      ) : backButton === 'Retour profil amour' ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 125,
          }}>
          <TouchableOpacity
            accessibilityLabel="Accueil"
            onPress={() => {
              navigation.navigate('TabProfilNavigator', {
                TabProfilRoute: tabPathMoi,
              });
              setTabPath('Moi');
            }}>
            <Image
              source={
                cercle === 'Professionnel'
                  ? require('../../../assets/images/retour_flèche_noir.png')
                  : cercle === 'Professionnel-Clair'
                  ? require('../../../assets/images/retour_flèche_blanc.png')
                  : require('../../../assets/images/retour_flèche_bleu.png')
              }
              style={{width: 10, height: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Accueil"
            onPress={() => {
              navigation.navigate('TabProfilNavigator', {
                TabProfilRoute: tabPathMoi,
              });
              setTabPath('Moi');
            }}>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                fontSize: 18,
                color: '#0019A7',
              }}>
              Retour Profil
            </Text>
          </TouchableOpacity>
        </View>
      ) : backButton === 'Retour profil pro' ? (
        <View
          style={{
            width: 155,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            accessibilityLabel="Accueil"
            onPress={() => {
              navigation.navigate('TabProfilNavigator', {
                TabProfilRoute: tabPathMoi,
              });
              setTabPath('Moi');
            }}>
            <Image
              source={
                cercle === 'Professionnel'
                  ? require('../../../assets/images/retour_flèche_noir.png')
                  : cercle === 'Professionnel-Clair'
                  ? require('../../../assets/images/retour_flèche_blanc.png')
                  : require('../../../assets/images/retour_flèche_bleu.png')
              }
              style={{width: 10, height: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Retour profil professionnel"
            onPress={() => {
              navigation.navigate('TabNavigator', {
                TabRoute: 'TabProfilNavigator',
              });
              setTabPath('Moi');
            }}>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                fontSize: 18,
                color:
                  cercle === 'Professionnel'
                    ? '#000'
                    : cercle === 'Professionnel-Clair'
                    ? '#fff'
                    : '#0019A7',
              }}>
              Retour Profil Pro
            </Text>
          </TouchableOpacity>
        </View>
      ) : backButton === 'Back' ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 100,
          }}>
          <TouchableOpacity
            accessibilityLabel="Retour"
            onPress={() => navigation.goBack()}>
            <Image
              source={
                cercle === 'Professionnel'
                  ? require('../../../assets/images/retour_flèche_noir.png')
                  : cercle === 'Professionnel-Clair'
                  ? require('../../../assets/images/retour_flèche_blanc.png')
                  : require('../../../assets/images/retour_flèche_bleu.png')
              }
              style={{width: 10, height: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Retour"
            onPress={() => navigation.goBack()}>
            <Text
              style={{
                fontFamily: 'Comfortaa-Bold',
                fontSize: 18,
                color:
                  cercle === 'Professionnel'
                    ? '#000'
                    : cercle === 'Professionnel-Clair'
                    ? '#fff'
                    : '#0019A7',
              }}>
              Retour
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            accessibilityLabel="Accueil"
            onPress={() => {
              navigation.navigate('DiscoverNavigator', {
                DiscoverRoute: tabPathDiscover,
              });
              setTabPath('Discover');
            }}>
            <Image
              source={
                cercle === 'Professionnel'
                  ? require('../../../assets/images/retour_flèche_noir.png')
                  : cercle === 'Professionnel-Clair'
                  ? require('../../../assets/images/retour_flèche_blanc.png')
                  : require('../../../assets/images/retour_flèche_bleu.png')
              }
              style={{width: 10, height: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Accueil"
            onPress={() => {
              navigation.navigate('DiscoverNavigator', {
                DiscoverRoute: tabPathDiscover,
              });
              setTabPath('Discover');
            }}>
            <Image
              source={
                cercle === 'Professionnel-Clair'
                  ? require('../../../assets/images/home_blanc.png')
                  : require('../../../assets/images/home_1.png')
              }
              style={{width: 20, height: 20, marginHorizontal: 15}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Accueil"
            onPress={() => {
              navigation.navigate('DiscoverNavigator', {
                DiscoverRoute: tabPathDiscover,
              });
              setTabPath('Discover');
            }}>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                fontSize: 18,
                color:
                  cercle === 'Professionnel'
                    ? '#000'
                    : cercle === 'Professionnel-Clair'
                    ? '#fff'
                    : '#0019A7',
              }}>
              Accueil
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            right: 10,
            width: 31,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={
              cercle === 'Ami'
                ? require('../../../assets/images/cercle_ami.png')
                : cercle === 'Professionnel'
                ? require('../../../assets/images/Cercle-Pro-Sombre.png')
                : cercle === 'Professionnel-Clair'
                ? require('../../../assets/images/Cercle-Pro-Clair.png')
                : require('../../../assets/images/Rencontre_amoureuse.png')
            }
            style={{width: 30, height: 30}}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TabProfilNavigator', {
              TabProfilRoute: 'NotificationsNavigator',
            });
            // setIcoPushChange(true);
          }}>
          <Image
            source={
              icoPushChange
                ? require('../../../assets/images/notification_icons-vert.png')
                : !icoPushChange && cercle === 'Professionnel-Clair'
                ? require('../../../assets/images/notification_icons-blanc.png')
                : !icoPushChange && cercle === 'Professionnel'
                ? require('../../../assets/images/notification_icons-noir.png')
                : require('../../../assets/images/notification_icons.png')
            }
            style={{width: 30, height: 30, marginHorizontal: 15}}
          />
        </TouchableOpacity>
        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={{
              backgroundColor: 'transparent',
              height: '100%',
              width: '100%',
              position: 'absolute',
              right: 0,
            }}
          />
          <View
            style={{
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
            <View
              style={{
                top: 20,
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  left: 60,
                  height: '22%',
                  width: '66%',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                {/* Jeux */}
                <TouchableOpacity
                  style={{
                    width: '40%',
                    height: 24,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  accessibilityLabel="Jeux"
                  onPress={() => {
                    setModalVisible(false);
                    getRandomLink();
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'gilroy',
                      fontWeight: '700',
                      color: '#0019A7',
                      textAlign: 'right',
                    }}>
                    Jeux
                  </Text>
                  <Image
                    source={require('../../../assets/boutons/ico-jeux.png')}
                    style={{
                      width: 25,
                      height: 25,
                      resizeMode: 'contain',
                    }}
                  />
                </TouchableOpacity>

                {/* Apps Affinitaires */}

                <TouchableOpacity
                  style={{
                    width: '90%',
                    height: 24,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  accessibilityLabel="Apps Affinitaires"
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate('AppsAffinitairesNavigator', {
                      AppsAffinitairesRoute: 'Apps_Affinitaires',
                      menu: true,
                    });
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'gilroy',
                      fontWeight: '700',
                      color: '#0019A7',
                      textAlign: 'right',
                    }}>
                    Apps Affinitaires
                  </Text>
                  <Image
                    source={require('../../../assets/boutons/ico-app-affinite.png')}
                    style={{
                      width: 25,
                      height: 25,
                      resizeMode: 'contain',
                    }}
                  />
                </TouchableOpacity>

                {/* Paramètres */}
                <TouchableOpacity
                  style={{
                    width: '70%',
                    height: 24,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  accessibilityLabel="Paramètres"
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate('SettingsNavigator', {
                      SettingsRoute: 'Settings',
                    });
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'gilroy',
                      fontWeight: '700',
                      color: '#0019A7',
                      textAlign: 'right',
                    }}>
                    Paramètres
                  </Text>
                  <Image
                    source={require('../../../assets/images/parametres.png')}
                    style={{
                      width: 25,
                      height: 25,
                      resizeMode: 'contain',
                    }}
                  />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  marginVertical: 15,
                  height: 1,
                  width: 215,
                  backgroundColor: '#0019A7',
                  alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  left: 40,
                  color: '#0019A7',
                  fontFamily: 'Gilroy-Bold',
                  fontSize: 20,
                  fontStyle: 'normal',
                  fontWeight: '700',
                }}>
                Choisir un mode
              </Text>
              <View
                style={{
                  top: 20,
                  width: 292,
                  height: 350,
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                }}>
                {/* Professionnel */}
                <TouchableOpacity
                  style={{
                    height: 110,
                    width: 268,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignSelf: 'center',
                    alignItems: 'center',
                    backgroundColor:
                      cercle === 'Professionnel'
                        ? 'rgba(0, 25, 167, 0.13)'
                        : 'transparent',
                    borderRadius: 22,
                    padding: 2,
                  }}
                  onPress={() => {
                    setModalVisible(false);
                    setCercle('Professionnel');
                    navigation.navigate('ProfilNavigator', {
                      ProfilRoute: 'ProfilMeRPfirst',
                    });
                  }}>
                  <Image
                    source={require('../../../assets/images/mybodydate_favicon-1.png')}
                    style={{
                      width: 38,
                      height: 38,
                      resizeMode: 'contain',
                    }}
                  />
                  <View
                    style={{
                      height: '70%',
                      width: '70%',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: 'Gilroy-Bold',
                        fontWeight: '700',
                        color: '#0019A7',
                      }}>
                      Professionnel
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: 'Comfortaa-Bold',
                        fontWeight: '500',
                        color: '#0019A7',
                      }}>
                      Trouvez des contacts qui vous font évoluer.
                    </Text>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    marginVertical: 10,
                    height: 1,
                    width: 215,
                    backgroundColor: '#0019A7',
                    alignSelf: 'center',
                  }}
                />
                {/* Cercle d'ami */}
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                    setCercle('Ami');
                    navigation.navigate('ProfilNavigator', {
                      ProfilRoute: 'ProfilMeCAfirst',
                    });
                  }}
                  style={{
                    height: 110,
                    width: 268,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignSelf: 'center',
                    alignItems: 'center',
                    backgroundColor:
                      cercle === 'Ami'
                        ? 'rgba(0, 25, 167, 0.13)'
                        : 'transparent',
                    borderRadius: 22,
                    padding: 2,
                  }}>
                  <Image
                    source={require('../../../assets/images/mybodydate_favicon-2.png')}
                    style={{
                      width: 38,
                      height: 38,
                      resizeMode: 'contain',
                    }}
                  />
                  <View
                    style={{
                      height: '70%',
                      width: '70%',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: 'Gilroy-Bold',
                        fontWeight: '700',
                        color: '#0019A7',
                      }}>
                      Cercle d'ami.es
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: 'Comfortaa-Bold',
                        fontWeight: '500',
                        color: '#0019A7',
                      }}>
                      Agrandissez votre cercle social.
                    </Text>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    marginVertical: 10,
                    height: 1,
                    width: 215,
                    backgroundColor: '#0019A7',
                    alignSelf: 'center',
                  }}
                />
                {/* Rencontre amoureuse */}
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                    setCercle('Amour');
                    navigation.navigate('ProfilNavigator', {
                      ProfilRoute: 'ProfilMeRAfirst',
                    });
                  }}
                  style={{
                    height: 110,
                    width: 268,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignSelf: 'center',
                    alignItems: 'center',
                    backgroundColor:
                      cercle === 'Amour'
                        ? 'rgba(0, 25, 167, 0.13)'
                        : 'transparent',
                    borderRadius: 22,
                    padding: 2,
                  }}>
                  <Image
                    source={require('../../../assets/images/mybodydate_favicon-3.png')}
                    style={{
                      width: 38,
                      height: 38,
                      resizeMode: 'contain',
                    }}
                  />
                  <View
                    style={{
                      height: '85%',
                      width: '70%',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: 'Gilroy-Bold',
                        fontWeight: '700',
                        color: '#0019A7',
                      }}>
                      Recontre amoureuse
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: 'Comfortaa-Bold',
                        fontWeight: '500',
                        color: '#0019A7',
                      }}>
                      Un coup de coeur n'attend pas.
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            source={
              cercle === 'Professionnel'
                ? require('../../../assets/images/menu-mobile-noir.png')
                : cercle === 'Professionnel-Clair'
                ? require('../../../assets/images/menu-mobile-blanc.png')
                : require('../../../assets/images/menu_mobile.png')
            }
            style={{width: 30, height: 30, marginLeft: 5}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuSlide;
