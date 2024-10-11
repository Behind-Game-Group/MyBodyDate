import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
type HomeProps = {
  navigation: NavigationProp<RouteType, 'Carte_magique'>;
  route: RouteProp<RouteType, 'Carte_magique'>;
};
export const CarteMagique: React.FC<HomeProps> = ({navigation}) => {
  const [buttonSelected, setButtonSelected] = useState<string>('');
  const [selectedCard, setSelectedCard] = useState<number>();

  const handlePress = () => {
    if (selectedCard === 3 || selectedCard === 2 || selectedCard === 1) {
      navigation.navigate('TabNavigator', {tabRoute: 'TabDiscover'});
    } else {
      navigation.navigate('GameNavigator', {GameRoute: 'Carte_brise_glace'});
    }
  };

  return (
    <ImageBackground
      style={{flex: 1}}
      source={
        selectedCard === 4
          ? require('../../../assets/images/bg-game-win.png')
          : require('../../../assets/images/bg-game.png')
      }>
      <View style={{flex: 9}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            left: 330,
            top: 50,
            width: 20,
          }}>
          <Image
            source={require('../../../assets/images/CroixB.png')}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
        <TitreUneLigne
          txtTitle="Carte magique"
          textAlign="center"
          top={80}
          left={0}
          fontFamily={'Gilory'}
          color={'#0019A7'}
          fontWeight={'700'}
          fontSize={32}
        />
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'Comfortaa',
            fontWeight: '500',
            color: '#0019A7',
            alignSelf: 'center',
            textAlign: 'center',
            top: 100,
          }}>
          Révélez la personne qui vous veut{'\n'}beaucoup de bien.
        </Text>
        <View
          style={{
            top: 130,
            flexDirection: 'column',
            width: '100%',
            alignSelf: 'center',
            gap: 50,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <TouchableOpacity
              onPress={() => {
                setSelectedCard(1);
              }}
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: 158,
                height: 204,
                borderRadius: 48,
                borderWidth: selectedCard === 1 ? 4 : 0,
                borderColor: '#0019A7',
                backgroundColor: selectedCard === 1 ? '#A277D9' : '#beade1',
                shadowColor: '#aa75e9',
                elevation: 20,
              }}>
              {selectedCard === 1 ? (
                <>
                  <Text
                    style={{
                      color: '#FFF',
                      textAlign: 'center',
                      fontFamily: 'Gilroy-Bold',
                      fontSize: 32,
                      fontStyle: 'normal',
                    }}>
                    Perdu
                  </Text>
                  <Text
                    style={{
                      top: 10,
                      color: '#FFF',
                      textAlign: 'center',
                      fontFamily: 'Gilroy',
                      fontSize: 16,
                      fontStyle: 'normal',
                    }}>
                    Retentez votre chance une prochaine fois
                  </Text>
                </>
              ) : (
                <>
                  <Text
                    style={{
                      color: '#0019A7',
                      textAlign: 'center',
                      fontFamily: 'Gilroy-Bold',
                      fontSize: 32,
                      fontStyle: 'normal',
                    }}>
                    ?
                  </Text>
                  <View
                    style={{
                      width: 40,
                      height: 14,
                      borderRadius: 18,
                      backgroundColor: '#586AD0',
                      right: 30,
                      top: 40,
                    }}
                  />
                </>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelectedCard(2);
              }}
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: 158,
                height: 204,
                borderRadius: 48,
                borderWidth: selectedCard === 2 ? 4 : 0,
                borderColor: '#0019A7',
                backgroundColor: selectedCard === 2 ? '#A277D9' : '#beade1',
                shadowColor: '#aa75e9',
                elevation: 20,
              }}>
              {selectedCard === 2 ? (
                <>
                  <Text
                    style={{
                      color: '#FFF',
                      textAlign: 'center',
                      fontFamily: 'Gilroy-Bold',
                      fontSize: 32,
                      fontStyle: 'normal',
                    }}>
                    Perdu
                  </Text>
                  <Text
                    style={{
                      top: 10,
                      color: '#FFF',
                      textAlign: 'center',
                      fontFamily: 'Gilroy',
                      fontSize: 16,
                      fontStyle: 'normal',
                    }}>
                    Retentez votre chance une prochaine fois
                  </Text>
                </>
              ) : (
                <>
                  <Text
                    style={{
                      color: '#0019A7',
                      textAlign: 'center',
                      fontFamily: 'Gilroy-Bold',
                      fontSize: 32,
                      fontStyle: 'normal',
                    }}>
                    ?
                  </Text>
                  <View
                    style={{
                      width: 40,
                      height: 14,
                      borderRadius: 18,
                      backgroundColor: '#586AD0',
                      right: 30,
                      top: 40,
                    }}
                  />
                </>
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <TouchableOpacity
              onPress={() => {
                setSelectedCard(3);
              }}
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: 158,
                height: 204,
                borderRadius: 48,
                borderWidth: selectedCard === 3 ? 4 : 0,
                borderColor: '#0019A7',
                backgroundColor: selectedCard === 3 ? '#A277D9' : '#beade1',
                shadowColor: '#aa75e9',
                elevation: 20,
              }}>
              {selectedCard === 3 ? (
                <>
                  <Text
                    style={{
                      color: '#FFF',
                      textAlign: 'center',
                      fontFamily: 'Gilroy-Bold',
                      fontSize: 32,
                      fontStyle: 'normal',
                    }}>
                    Perdu
                  </Text>
                  <Text
                    style={{
                      top: 10,
                      color: '#FFF',
                      textAlign: 'center',
                      fontFamily: 'Gilroy',
                      fontSize: 16,
                      fontStyle: 'normal',
                    }}>
                    Retentez votre chance une prochaine fois
                  </Text>
                </>
              ) : (
                <>
                  <Text
                    style={{
                      color: '#0019A7',
                      textAlign: 'center',
                      fontFamily: 'Gilroy-Bold',
                      fontSize: 32,
                      fontStyle: 'normal',
                    }}>
                    ?
                  </Text>
                  <View
                    style={{
                      width: 40,
                      height: 14,
                      borderRadius: 18,
                      backgroundColor: '#586AD0',
                      right: 30,
                      top: 40,
                    }}
                  />
                </>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelectedCard(4);
              }}
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: 160,
                height: 206,
                borderRadius: 48,
                borderWidth: selectedCard === 4 ? 4 : 0,
                borderColor: '#0019A7',
                backgroundColor: selectedCard === 4 ? '#A277D9' : '#beade1',
                shadowColor: '#aa75e9',
                elevation: 20,
              }}>
              {selectedCard === 4 ? (
                <>
                  <Image
                    style={{width: 154, height: 200, resizeMode: 'contain'}}
                    source={require('../../../assets/images/GuessClaire.png')}
                  />
                  <Text
                    style={{
                      position: 'absolute',
                      bottom: 20,
                      right: 70,
                      color: '#FFF',
                      fontFamily: 'Gilroy-Bold',
                      fontSize: 20,
                      fontStyle: 'normal',
                    }}>
                    Claire
                  </Text>
                </>
              ) : (
                <>
                  <Text
                    style={{
                      color: '#0019A7',
                      textAlign: 'center',
                      fontFamily: 'Gilroy-Bold',
                      fontSize: 32,
                      fontStyle: 'normal',
                    }}>
                    ?
                  </Text>
                  <View
                    style={{
                      width: 40,
                      height: 14,
                      borderRadius: 18,
                      backgroundColor: '#586AD0',
                      right: 30,
                      top: 40,
                    }}
                  />
                </>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={{
            width: '90%',
            height: 56,
            alignSelf: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setButtonSelected('Continuer');
            handlePress();
          }}>
          <Image
            source={
              buttonSelected === 'Contiuer'
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Bleu.png')
            }
            style={{height: 56, resizeMode: 'contain'}}
          />
          <Text
            style={{
              bottom: 45,
              color: '#FFF',
              fontFamily: 'Comfortaa-Bold',
              fontSize: 18,
              fontStyle: 'normal',
            }}>
            {selectedCard === 3 || selectedCard === 2 || selectedCard === 1
              ? 'Quitter'
              : 'Passer'}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
