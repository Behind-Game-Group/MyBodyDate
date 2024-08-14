import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
// import StyleAide from '../../../assets/style/styleScreens/styleSettings/StyleContactAndFAQ';
import MenuSlide from '../../components/menus/MenuSlide';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Filtres_avances'>;
  route: RouteProp<RouteType, 'Filtres_avances'>;
};

export const AdvancedFiltre: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  const [buttonPressed, setButtonPressed] = useState<boolean>(false);

  // SwitchButton Désire enfant

  const [isEnabledChildWhish, setIsEnabledChildWhish] =
    useState<boolean>(false);
  const toggleSwitchChildWhish = () =>
    setIsEnabledChildWhish(previousState => !previousState);

  return (
    <ImageBackground
      resizeMode="contain"
      style={{
        width: '100%',
        height: '100%',
      }}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlide
        settingsNavigation={'Recherche'}
        backButton={'Retour'}
        navigation={navigation}
        icoPushChange={true}
        backgroundColor={undefined}
      />
      <View style={{flex: 3}}>
        <Text
          style={{
            top: 30,
            color: '#0019A7',
            fontFamily: 'Gilroy',
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 700,
          }}>
          Filtres avancés
        </Text>
        <View
          style={{
            backgroundColor: '#0019A7',
            width: 351,
            height: 1,
            alignSelf: 'center',
            top: 60,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            top: 80,
            alignSelf: 'center',
            width: 'auto',
          }}>
          <Image
            style={{top: 10, width: 20, height: 20, resizeMode: 'contain'}}
            source={require('../../../assets/images/ico-info.png')}
          />
          <Text
            style={{
              width: 260,
              color: '#0019A7',
              fontFamily: 'Comfortaa',
              left: 10,
              fontSize: 15,
              fontStyle: 'normal',
              fontWeight: 500,
            }}>
            Ajoutez les critères essentiels pour vous et affinez vos recherches.
            Trouvez la personne qui vous correspond vraiment.
          </Text>
        </View>
        <ScrollView
          style={{
            top: 100,
            height: 200,
            width: 351,
            alignSelf: 'center',
            paddingTop: 10,
          }}
          contentContainerStyle={{paddingBottom: 10}}>
          <View
            style={{
              marginBottom: 20,
              height: 20,
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                width: 200,
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Ville
            </Text>
            <Text
              style={{
                color: '#383A39',
                width: 'auto',
                fontFamily: 'Comfortaa',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Paris, FR
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Sa_taille')}
            style={{
              marginBottom: 20,
              height: 20,
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                width: 200,
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Sa taille
            </Text>
            <Image
              style={{
                width: 17,
                height: 17,
                resizeMode: 'contain',
                transform: [{rotate: '180deg'}],
              }}
              source={require('../../../assets/images/flèche-B.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Sa_morphologie')}
            style={{
              marginBottom: 20,
              height: 20,
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                width: 200,
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Sa morphologie
            </Text>
            <Image
              style={{
                width: 17,
                height: 17,
                resizeMode: 'contain',
                transform: [{rotate: '180deg'}],
              }}
              source={require('../../../assets/images/flèche-B.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Enfants')}
            style={{
              marginBottom: 20,
              height: 20,
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                width: 200,
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Enfants
            </Text>
            <Image
              style={{
                width: 17,
                height: 17,
                resizeMode: 'contain',
                transform: [{rotate: '180deg'}],
              }}
              source={require('../../../assets/images/flèche-B.png')}
            />
          </TouchableOpacity>
          <View
            style={{
              marginBottom: 20,
              height: 20,
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                width: 200,
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Désire Enfant
            </Text>
            <Switch
              trackColor={{false: '#BEC8FF', true: '#17ff58'}}
              thumbColor={isEnabledChildWhish ? '#BEC8FF' : '#f4f3f4'}
              ios_backgroundColor="#f4f3f4"
              onValueChange={toggleSwitchChildWhish}
              value={isEnabledChildWhish}
              style={{}}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Origine_ethnique')}
            style={{
              marginBottom: 20,
              height: 20,
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                width: 200,
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Origine ethnique
            </Text>
            <Image
              style={{
                width: 17,
                height: 17,
                resizeMode: 'contain',
                transform: [{rotate: '180deg'}],
              }}
              source={require('../../../assets/images/flèche-B.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Niveau_etude')}
            style={{
              marginBottom: 20,
              height: 20,
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                width: 200,
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Niveau d'études
            </Text>
            <Image
              style={{
                width: 17,
                height: 17,
                resizeMode: 'contain',
                transform: [{rotate: '180deg'}],
              }}
              source={require('../../../assets/images/flèche-B.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Metier')}
            style={{
              marginBottom: 20,
              height: 20,
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                width: 200,
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Métier
            </Text>
            <Image
              style={{
                width: 17,
                height: 17,
                resizeMode: 'contain',
                transform: [{rotate: '180deg'}],
              }}
              source={require('../../../assets/images/flèche-B.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Revenus')}
            style={{
              marginBottom: 20,
              height: 20,
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                width: 200,
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Revenus
            </Text>
            <Image
              style={{
                width: 17,
                height: 17,
                resizeMode: 'contain',
                transform: [{rotate: '180deg'}],
              }}
              source={require('../../../assets/images/flèche-B.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Religion')}
            style={{
              marginBottom: 20,
              height: 20,
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                width: 200,
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Religion
            </Text>
            <Image
              style={{
                width: 17,
                height: 17,
                resizeMode: 'contain',
                transform: [{rotate: '180deg'}],
              }}
              source={require('../../../assets/images/flèche-B.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signe_astro')}
            style={{
              marginBottom: 20,
              height: 20,
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                width: 200,
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Signe Astrologique
            </Text>
            <Image
              style={{
                width: 17,
                height: 17,
                resizeMode: 'contain',
                transform: [{rotate: '180deg'}],
              }}
              source={require('../../../assets/images/flèche-B.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Orientation_politique')}
            style={{
              marginBottom: 20,
              height: 20,
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                width: 200,
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Orientation politique
            </Text>
            <Image
              style={{
                width: 17,
                height: 17,
                resizeMode: 'contain',
                transform: [{rotate: '180deg'}],
              }}
              source={require('../../../assets/images/flèche-B.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Tabac')}
            style={{
              marginBottom: 20,
              height: 20,
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                width: 200,
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Tabac
            </Text>
            <Image
              style={{
                width: 17,
                height: 17,
                resizeMode: 'contain',
                transform: [{rotate: '180deg'}],
              }}
              source={require('../../../assets/images/flèche-B.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Alcool')}
            style={{
              marginBottom: 20,
              height: 20,
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                width: 200,
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Alcool
            </Text>
            <Image
              style={{
                width: 17,
                height: 17,
                resizeMode: 'contain',
                transform: [{rotate: '180deg'}],
              }}
              source={require('../../../assets/images/flèche-B.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Pratique_sportive')}
            style={{
              marginBottom: 20,
              height: 20,
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                width: 200,
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Pratique sportive
            </Text>
            <Image
              style={{
                width: 17,
                height: 17,
                resizeMode: 'contain',
                transform: [{rotate: '180deg'}],
              }}
              source={require('../../../assets/images/flèche-B.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Search_pulse')}
            style={{
              marginBottom: 20,
              height: 20,
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                width: 200,
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              Pulse Recherche
            </Text>
            <Image
              style={{
                width: 17,
                height: 17,
                resizeMode: 'contain',
                transform: [{rotate: '180deg'}],
              }}
              source={require('../../../assets/images/flèche-B.png')}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={{flex: 1, top: 100}}>
        <TouchableOpacity style={{}} onPress={() => setButtonPressed(true)}>
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
                : require('../../../assets/boutons/Bouton-Blanc-Border.png')
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
              },
              {color: buttonPressed ? '#fff' : '#0019A7'},
            ]}>
            Rechercher des profils
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default AdvancedFiltre;
