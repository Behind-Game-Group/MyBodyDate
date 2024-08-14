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
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Metier'>;
  route: RouteProp<RouteType, 'Metier'>;
};

export const Metier: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  const [optionsShow, setOptionShow] = useState<boolean>(false);
  const [selectedSecteur, setSelectedSecteur] = useState<string | null>(null);

  const handleSecteurToggle = (secteur: string) => {
    if (selectedSecteur === secteur) {
      setSelectedSecteur(null);
    } else {
      setSelectedSecteur(secteur);
    }
  };

  // SwitchButton
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ImageBackground
      resizeMode="contain"
      style={{
        width: '100%',
        height: '100%',
      }}
      source={require('../../../assets/images/bg-parametres.png')}>
      <View style={{flex: 5}}>
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
        <Text
          style={{
            top: 50,
            color: '#0019A7',
            fontFamily: 'Gilroy',
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 700,
          }}>
          Son métier
        </Text>
        <View
          style={{
            backgroundColor: '#0019A7',
            width: 351,
            height: 1,
            alignSelf: 'center',
            top: 80,
          }}
        />
        <Text
          style={{
            top: 110,
            width: '60%',
            alignSelf: 'center',
            color: '#0019A7',
            fontFamily: 'Comfortaa',
            textAlign: 'center',
            fontSize: 15,
            fontStyle: 'normal',
            fontWeight: 500,
          }}>
          Sélectionnez son secteur d'activité.
        </Text>
        <TouchableOpacity
          onPress={() => setOptionShow(!optionsShow)}
          style={{
            top: 200,
            borderRadius: 24,
            borderColor: '#0019A7',
            borderWidth: 1,
            width: 276,
            height: 51,
            alignSelf: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: selectedSecteur ? '#0019A7' : '#929EDE',
              textAlign: 'center',
              fontFamily: 'Comfortaa',
              fontSize: 15,
              fontStyle: 'normal',
              fontWeight: selectedSecteur ? 700 : 500,
            }}>
            {selectedSecteur ? selectedSecteur : 'Sélectionnez son secteur'}
          </Text>
          <Image
            style={{
              left: 20,
              width: 17,
              height: 17,
              resizeMode: 'contain',
              transform: [{rotate: optionsShow ? '90deg' : '-90deg'}],
            }}
            source={require('../../../assets/images/flèche-B.png')}
          />
        </TouchableOpacity>

        {optionsShow ? (
          <View
            style={{
              position: 'absolute',
              top: 355,
              alignSelf: 'center',
              width: 276,
              bottom: 0, // Ajuster la position pour occuper tout l'espace vertical
            }}>
            <ScrollView
              style={{
                flexDirection: 'column',
                borderRadius: 26,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderWidth: 1,
                borderTopWidth: 0,
                borderColor: '#0019A7',
                backgroundColor: 'rgba(255, 255, 255, 0.90)',
                paddingTop: 40,
                paddingBottom: 20,
              }}>
              <TouchableOpacity
                style={{marginBottom: 20}}
                onPress={() => {
                  handleSecteurToggle('Armée');
                  setOptionShow(false);
                }}>
                <Text
                  style={{
                    color: selectedSecteur === 'Armée' ? '#0019A7' : '#929EDE',
                    textAlign: 'center',
                    fontFamily: 'Comfortaa',
                    fontSize: 16,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Armée
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginBottom: 20}}
                onPress={() => {
                  handleSecteurToggle('Arts/Musique/Ecriture');
                  setOptionShow(false);
                }}>
                <Text
                  style={{
                    color:
                      selectedSecteur === 'Arts/Musique/Ecriture'
                        ? '#0019A7'
                        : '#929EDE',
                    textAlign: 'center',
                    fontFamily: 'Comfortaa',
                    fontSize: 16,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Arts/Musique/Ecriture
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginBottom: 20}}
                onPress={() => {
                  handleSecteurToggle('Banque/Finance');
                  setOptionShow(false);
                }}>
                <Text
                  style={{
                    color:
                      selectedSecteur === 'Banque/Finance'
                        ? '#0019A7'
                        : '#929EDE',
                    textAlign: 'center',
                    fontFamily: 'Comfortaa',
                    fontSize: 16,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Banque/Finance
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginBottom: 20}}
                onPress={() => {
                  handleSecteurToggle('Construction');
                  setOptionShow(false);
                }}>
                <Text
                  style={{
                    color:
                      selectedSecteur === 'Construction'
                        ? '#0019A7'
                        : '#929EDE',
                    textAlign: 'center',
                    fontFamily: 'Comfortaa',
                    fontSize: 16,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Construction
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginBottom: 20}}
                onPress={() => {
                  handleSecteurToggle('Divertissement/Média');
                  setOptionShow(false);
                }}>
                <Text
                  style={{
                    color:
                      selectedSecteur === 'Divertissement/Média'
                        ? '#0019A7'
                        : '#929EDE',
                    textAlign: 'center',
                    fontFamily: 'Comfortaa',
                    fontSize: 16,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Divertissement/Média
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginBottom: 20}}
                onPress={() => {
                  handleSecteurToggle('Etudiant');
                  setOptionShow(false);
                }}>
                <Text
                  style={{
                    color:
                      selectedSecteur === 'Etudiant' ? '#0019A7' : '#929EDE',
                    textAlign: 'center',
                    fontFamily: 'Comfortaa',
                    fontSize: 16,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Etudiant
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginBottom: 20}}
                onPress={() => {
                  handleSecteurToggle("Gestion d'entreprise");
                  setOptionShow(false);
                }}>
                <Text
                  style={{
                    color:
                      selectedSecteur === "Gestion d'entreprise"
                        ? '#0019A7'
                        : '#929EDE',
                    textAlign: 'center',
                    fontFamily: 'Comfortaa',
                    fontSize: 16,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Gestion d'entreprise
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginBottom: 20}}
                onPress={() => handleSecteurToggle('Gouvernement/Politique')}>
                <Text
                  style={{
                    color:
                      selectedSecteur === 'Gouvernement/Politique'
                        ? '#0019A7'
                        : '#929EDE',
                    textAlign: 'center',
                    fontFamily: 'Comfortaa',
                    fontSize: 16,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Gouvernement/Politique
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginBottom: 20}}
                onPress={() => {
                  handleSecteurToggle('Hôtellerie');
                  setOptionShow(false);
                }}>
                <Text
                  style={{
                    color:
                      selectedSecteur === 'Hôtellerie' ? '#0019A7' : '#929EDE',
                    textAlign: 'center',
                    fontFamily: 'Comfortaa',
                    fontSize: 16,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Hôtellerie
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginBottom: 20}}
                onPress={() => {
                  handleSecteurToggle('Indépendant');
                  setOptionShow(false);
                }}>
                <Text
                  style={{
                    color:
                      selectedSecteur === 'Indépendant' ? '#0019A7' : '#929EDE',
                    textAlign: 'center',
                    fontFamily: 'Comfortaa',
                    fontSize: 16,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Indépendant
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginBottom: 20}}
                onPress={() => {
                  handleSecteurToggle('Santé/Médecine');
                  setOptionShow(false);
                }}>
                <Text
                  style={{
                    color:
                      selectedSecteur === 'Santé/Médecine'
                        ? '#0019A7'
                        : '#929EDE',
                    textAlign: 'center',
                    fontFamily: 'Comfortaa',
                    fontSize: 16,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Santé/Médecine
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginBottom: 20}}
                onPress={() => {
                  handleSecteurToggle('Association/ONG');
                  setOptionShow(false);
                }}>
                <Text
                  style={{
                    color:
                      selectedSecteur === 'Association/ONG'
                        ? '#0019A7'
                        : '#929EDE',
                    textAlign: 'center',
                    fontFamily: 'Comfortaa',
                    fontSize: 16,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Association/ONG
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginBottom: 20}}
                onPress={() => {
                  handleSecteurToggle('Répondre plus tard');
                  setOptionShow(false);
                }}>
                <Text
                  style={{
                    color:
                      selectedSecteur === 'Répondre plus tard'
                        ? '#0019A7'
                        : '#929EDE',
                    textAlign: 'center',
                    fontFamily: 'Comfortaa',
                    fontSize: 16,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Répondre plus tard
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        ) : null}
        <Text
          style={{
            zIndex: optionsShow ? -1 : 1,
            top: 420,
            left: 40,
            color: '#000',
            fontFamily: 'Comfortaa',
            fontSize: 15,
            fontStyle: 'normal',
            fontWeight: 700,
            textDecorationLine: 'underline',
          }}>
          Choix unique.
        </Text>
        <View
          style={{
            zIndex: optionsShow ? -1 : 1,
            flexDirection: 'row',
            top: 460,
            width: '80%',
            alignSelf: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#000',
              width: 230,
              fontFamily: 'Comfortaa',
              fontSize: 15,
              fontStyle: 'normal',
              fontWeight: 700,
              textDecorationLine: 'underline',
            }}>
            Afficher d’autres profils si mes critères sont trop sélectifs.
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
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={{top: 50}}
          onPress={() => {
            setButtonPressed(true);
            navigation.navigate('Filtres_avances');
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
            Retour filtres avancés
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Metier;
