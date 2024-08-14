import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Search_pulse_settings'>;
};

export const SearchPulseSettings: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  // SwitchButton Message Liké

  const [isEnabledMessageLike, setIsEnabledMessageLike] =
    useState<boolean>(false);
  const toggleSwitchMessageLike = () =>
    setIsEnabledMessageLike(previousState => !previousState);

  // SwitchButton Relation Sérieuse

  const [isEnabledRelationSerieuse, setIsEnabledRelationSerieuse] =
    useState(false);
  const toggleSwitchRelationSerieuse = () =>
    setIsEnabledRelationSerieuse(previousState => !previousState);

  const [buttonPressed, setButtonPressed] = useState<boolean>(false);

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
            width: 300,
            alignSelf: 'center',
            color: '#0019A7',
            textAlign: 'center',
            fontFamily: 'Gilroy',
            fontSize: 24,
            fontStyle: 'normal',
            fontWeight: 700,
          }}>
          Pulse recherche
        </Text>
        <Text
          style={{
            top: 60,
            width: 330,
            alignSelf: 'center',
            color: '#0019A7',
            fontFamily: 'Comfortaa',
            textAlign: 'center',
            fontSize: 15,
            fontStyle: 'normal',
            fontWeight: 500,
          }}>
          Seules les personnes qui correspondent à votre recherche peuvent vous
          voir.
        </Text>
        <View
          style={{
            top: 80,
            width: 358,
            height: 108,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'column',
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#0019A7',
            backgroundColor: '#FFF',
          }}>
          <Text
            style={{
              width: 311,
              color: '#0019A7',
              textAlign: 'center',
              fontFamily: 'Gilroy',
              fontSize: 15,
              fontStyle: 'normal',
              fontWeight: 700,
            }}>
            Recevez uniquement les messages des personnes que vous avez likées
          </Text>
          <Switch
            trackColor={{false: '#BEC8FF', true: '#17ff58'}}
            thumbColor={isEnabledMessageLike ? '#BEC8FF' : '#f4f3f4'}
            ios_backgroundColor="#f4f3f4"
            onValueChange={toggleSwitchMessageLike}
            value={isEnabledMessageLike}
            style={{}}
          />
        </View>
        <View
          style={{
            top: 110,
            width: '100%',
            height: 350,
            alignSelf: 'center',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '90%',
              height: 28,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: '61%',
                height: 28,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignSelf: 'flex-start',
              }}>
              <Image
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                }}
                source={require('../../../assets/images/ico-relation.png')}
              />
              <Text
                style={[
                  {
                    textAlign: 'left',
                    fontFamily: 'Comfortaa',
                    fontSize: 15,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    color: '#0019A7',
                  },
                ]}>
                Cherche relation sérieuse
              </Text>
            </View>
            <View
              style={{
                width: '15%',
                height: 28,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}>
              <Switch
                trackColor={{false: '#BEC8FF', true: '#17ff58'}}
                thumbColor={isEnabledRelationSerieuse ? '#BEC8FF' : '#f4f3f4'}
                ios_backgroundColor="#f4f3f4"
                onValueChange={toggleSwitchRelationSerieuse}
                value={isEnabledRelationSerieuse}
                style={{}}
              />
            </View>
          </View>
          <View
            style={{
              width: '90%',
              height: 28,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: '60%',
                height: 28,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignSelf: 'flex-start',
              }}>
              <Image
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                }}
                source={require('../../../assets/images/ico-position.png')}
              />
              <Text
                style={[
                  {
                    textAlign: 'left',
                    fontFamily: 'Comfortaa',
                    fontSize: 15,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    color: '#0019A7',
                  },
                ]}>
                Habitant dans votre pays
              </Text>
            </View>
            <View
              style={{
                width: '15%',
                height: 28,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}>
              <Switch
                trackColor={{false: '#BEC8FF', true: '#17ff58'}}
                thumbColor={isEnabledRelationSerieuse ? '#BEC8FF' : '#f4f3f4'}
                ios_backgroundColor="#f4f3f4"
                onValueChange={toggleSwitchRelationSerieuse}
                value={isEnabledRelationSerieuse}
                style={{}}
              />
            </View>
          </View>
          <View
            style={{
              width: '90%',
              height: 28,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: '28%',
                height: 28,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignSelf: 'flex-start',
              }}>
              <Image
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                }}
                source={require('../../../assets/images/ico-gateau.png')}
              />
              <Text
                style={[
                  {
                    textAlign: 'left',
                    fontFamily: 'Comfortaa',
                    fontSize: 15,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    color: '#0019A7',
                  },
                ]}>
                Son âge
              </Text>
            </View>
            <View
              style={{
                width: '15%',
                height: 28,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}>
              <Switch
                trackColor={{false: '#BEC8FF', true: '#17ff58'}}
                thumbColor={isEnabledRelationSerieuse ? '#BEC8FF' : '#f4f3f4'}
                ios_backgroundColor="#f4f3f4"
                onValueChange={toggleSwitchRelationSerieuse}
                value={isEnabledRelationSerieuse}
                style={{}}
              />
            </View>
          </View>
          <View
            style={{
              width: '90%',
              height: 28,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: '60%',
                height: 28,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignSelf: 'flex-start',
              }}>
              <Image
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                }}
                source={require('../../../assets/images/ico-image.png')}
              />
              <Text
                style={[
                  {
                    textAlign: 'left',
                    fontFamily: 'Comfortaa',
                    fontSize: 15,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    color: '#0019A7',
                  },
                ]}>
                Ayant une photo de profil
              </Text>
            </View>
            <View
              style={{
                width: '15%',
                height: 28,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}>
              <Switch
                trackColor={{false: '#BEC8FF', true: '#17ff58'}}
                thumbColor={isEnabledRelationSerieuse ? '#BEC8FF' : '#f4f3f4'}
                ios_backgroundColor="#f4f3f4"
                onValueChange={toggleSwitchRelationSerieuse}
                value={isEnabledRelationSerieuse}
                style={{}}
              />
            </View>
          </View>
          <View
            style={{
              width: '90%',
              height: 28,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: '50%',
                height: 28,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignSelf: 'flex-start',
              }}>
              <Image
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                }}
                source={require('../../../assets/images/ico-etude.png')}
              />
              <Text
                style={[
                  {
                    textAlign: 'left',
                    fontFamily: 'Comfortaa',
                    fontSize: 15,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    color: '#0019A7',
                  },
                ]}>
                Son niveau d’études
              </Text>
            </View>
            <View
              style={{
                width: '15%',
                height: 28,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}>
              <Switch
                trackColor={{false: '#BEC8FF', true: '#17ff58'}}
                thumbColor={isEnabledRelationSerieuse ? '#BEC8FF' : '#f4f3f4'}
                ios_backgroundColor="#f4f3f4"
                onValueChange={toggleSwitchRelationSerieuse}
                value={isEnabledRelationSerieuse}
                style={{}}
              />
            </View>
          </View>
          <View
            style={{
              width: '90%',
              height: 28,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: '27%',
                height: 28,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignSelf: 'flex-start',
              }}>
              <Image
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                }}
                source={require('../../../assets/images/ico-taille.png')}
              />
              <Text
                style={[
                  {
                    textAlign: 'left',
                    fontFamily: 'Comfortaa',
                    fontSize: 15,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    color: '#0019A7',
                  },
                ]}>
                Sa taille
              </Text>
            </View>
            <View
              style={{
                width: '15%',
                height: 28,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}>
              <Switch
                trackColor={{false: '#BEC8FF', true: '#17ff58'}}
                thumbColor={isEnabledRelationSerieuse ? '#BEC8FF' : '#f4f3f4'}
                ios_backgroundColor="#f4f3f4"
                onValueChange={toggleSwitchRelationSerieuse}
                value={isEnabledRelationSerieuse}
                style={{}}
              />
            </View>
          </View>
          <View
            style={{
              width: '90%',
              height: 28,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: '42%',
                height: 28,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignSelf: 'flex-start',
              }}>
              <Image
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                }}
                source={require('../../../assets/images/ico-morphologie.png')}
              />
              <Text
                style={[
                  {
                    textAlign: 'left',
                    fontFamily: 'Comfortaa',
                    fontSize: 15,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    color: '#0019A7',
                  },
                ]}>
                Sa morphologie
              </Text>
            </View>
            <View
              style={{
                width: '15%',
                height: 28,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}>
              <Switch
                trackColor={{false: '#BEC8FF', true: '#17ff58'}}
                thumbColor={isEnabledRelationSerieuse ? '#BEC8FF' : '#f4f3f4'}
                ios_backgroundColor="#f4f3f4"
                onValueChange={toggleSwitchRelationSerieuse}
                value={isEnabledRelationSerieuse}
                style={{}}
              />
            </View>
          </View>
          <View
            style={{
              width: '90%',
              height: 28,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: '62%',
                height: 28,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignSelf: 'flex-start',
              }}>
              <Image
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                }}
                source={require('../../../assets/images/ico-alcool.png')}
              />
              <Text
                style={[
                  {
                    textAlign: 'left',
                    fontFamily: 'Comfortaa',
                    fontSize: 15,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    color: '#0019A7',
                  },
                ]}>
                Sa consommation d’alcool
              </Text>
            </View>
            <View
              style={{
                width: '15%',
                height: 28,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}>
              <Switch
                trackColor={{false: '#BEC8FF', true: '#17ff58'}}
                thumbColor={isEnabledRelationSerieuse ? '#BEC8FF' : '#f4f3f4'}
                ios_backgroundColor="#f4f3f4"
                onValueChange={toggleSwitchRelationSerieuse}
                value={isEnabledRelationSerieuse}
                style={{}}
              />
            </View>
          </View>
          <View
            style={{
              width: '90%',
              height: 28,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: '30%',
                height: 28,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignSelf: 'flex-start',
              }}>
              <Image
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                }}
                source={require('../../../assets/images/ico-fume.png')}
              />
              <Text
                style={[
                  {
                    textAlign: 'left',
                    fontFamily: 'Comfortaa',
                    fontSize: 15,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    color: '#0019A7',
                  },
                ]}>
                Cigarette
              </Text>
            </View>
            <View
              style={{
                width: '15%',
                height: 28,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}>
              <Switch
                trackColor={{false: '#BEC8FF', true: '#17ff58'}}
                thumbColor={isEnabledRelationSerieuse ? '#BEC8FF' : '#f4f3f4'}
                ios_backgroundColor="#f4f3f4"
                onValueChange={toggleSwitchRelationSerieuse}
                value={isEnabledRelationSerieuse}
                style={{}}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={{top: 50}}
          onPress={() => {
            setButtonPressed(true);
            navigation.navigate('Pass_flash_21');
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
            Découvrir les pass
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SearchPulseSettings;
