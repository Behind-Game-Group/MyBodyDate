import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MenuSlide from '../../components/menus/MenuSlide';
import {MenuBottom} from '../../components/menus/MenuBottom';
import {
  NavigationHelpers,
  NavigationProp,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import {BottomTabDescriptorMap} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {EdgeInsets} from 'react-native-safe-area-context';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Evenements_Bio'>;
  navigationTab: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  insets: EdgeInsets;
  imagePath: string;
};

export const EvenBio: React.FC<HomeProps> = ({
  navigation,
  imagePath,
  navigationTab,
  state,
  descriptors,
  insets,
}) => {
  const [eventPath, setEvenPath] = useState(true);

  return (
    <View style={{flex: 1}}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        backButton="Retour"
        imagePath={imagePath}
        tabPath={imagePath}
        backgroundColor={'white'}
        settingsNavigation={undefined}
      />
      <View
        style={{
          height: 75,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row',
        }}>
        <Image
          source={require('../../../assets/images/Line-113.png')}
          style={{
            width: 145,
            height: 1,
            top: 45,
            position: 'absolute',
            right: 30,
          }}
        />
        <Text
          style={{
            fontSize: 24,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#0019A7',
          }}>
          Événements
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TextInput
            style={{
              fontSize: 12,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              color: '#929EDE',
              padding: 5,
            }}
            defaultValue="Rechercher un évent"
            // Vous pouvez ajouter des gestionnaires d'événements ici pour gérer les changements de texte, etc.
          />
          <Image
            source={require('../../../assets/images/Loupe.png')}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </View>
      </View>
      <ImageBackground
        source={require('../../../assets/images/bg-parametres.png')}
        style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
            top: 20,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => {
              setEvenPath(true);
            }}
            style={{
              width: '50%',
              height: 40,
              borderBottomWidth: eventPath ? 2 : 0,
              borderColor: '#0019A7',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#0019A7',
                textAlign: 'center',
              }}>
              Événements à venir
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setEvenPath(false);
            }}
            style={{
              width: '50%',
              height: 40,
              borderBottomWidth: !eventPath ? 2 : 0,
              borderColor: '#0019A7',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Comfortaa',
                textAlign: 'center',
                fontWeight: '700',
                color: '#0019A7',
              }}>
              Mes événements
            </Text>
          </TouchableOpacity>
        </View>
        {eventPath ? (
          <>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Evenements');
              }}
              style={{
                top: 50,
                left: 30,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../../assets/images/fléche-P-G.png')}
                style={{
                  width: 10,
                  height: 20,
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  color: '#0019A7',
                  marginLeft: 10,
                }}>
                Voir tous les évenements
              </Text>
            </TouchableOpacity>
            <View
              style={{
                alignItems: 'center',
                top: 80,
                justifyContent: 'space-around',
              }}>
              <View>
                <Image
                  source={require('../../../assets/images/Event11.png')}
                  style={{
                    width: 351,
                    height: 152,
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    top: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'Gilory',
                      fontWeight: '700',
                      color: '#0019A7',
                      marginBottom: 5,
                      marginRight: 120,
                    }}>
                    SpeedDating
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'Gilory',
                      fontWeight: '700',
                      color: '#FF84D7',
                      marginBottom: 5,
                    }}>
                    30 Juin 2023
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: 'Gilory',
                    fontWeight: '700',
                    color: '#FF84D7',
                    marginBottom: 5,
                    top: 10,
                    marginRight: 320,
                  }}>
                  Paris
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: 'Gilory',
                    fontWeight: '500',
                    color: '#0019A7',
                    marginBottom: 45,
                    top: 30,
                  }}>
                  Ajoutez les critères essentiels pour vous{'\n'}et affinez vos
                  recherches. Trouvez la{'\n'}qui vous correspond vraiment.
                </Text>
                <View
                  style={{
                    left: 120,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Evenements');
                    }}>
                    <Image
                      source={require('../../../assets/images/Reserver.png')}
                      style={{
                        width: 115,
                        height: 33,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>
        ) : (
          <>
            <View
              style={{
                left: 30,
                top: 50,
                justifyContent: 'space-around',
              }}>
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  color: '#0019A7',
                }}>
                Mes événements
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  color: '#929EDE',
                }}>
                Mes prochaines dates
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                top: 80,
                justifyContent: 'space-around',
                flexDirection: 'row',
              }}>
              <View>
                <Image
                  source={require('../../../assets/images/Event1.png')}
                  style={{
                    width: 187,
                    height: 152,
                  }}
                />
              </View>
              <View
                style={{
                  marginTop: 0, // Définir la marge supérieure pour remonter le bloc
                  marginBottom: 10, // Définir la marge inférieure pour espacer le bloc
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: 'Gilory',
                    fontWeight: '700',
                    color: '#FF84D7',
                    marginBottom: 5,
                  }}>
                  Paris
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Gilory',
                    fontWeight: '700',
                    color: '#0019A7',
                    marginBottom: 5,
                  }}>
                  Soire rouge
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Gilory',
                    fontWeight: '700',
                    color: '#FF84D7',
                    marginBottom: 45,
                  }}>
                  30 Juin 2023
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Gilory',
                    fontWeight: '700',
                    color: '#929EDE',
                    textAlign: 'right',
                  }}>
                  Complet
                </Text>
              </View>
            </View>
          </>
        )}

        <MenuBottom
          navigation={navigationTab}
          tabPath={'Discover'}
          state={state}
          descriptors={descriptors}
          insets={insets}
        />
      </ImageBackground>
    </View>
  );
};
