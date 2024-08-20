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
  navigation: NavigationProp<RouteType, 'Voix_du_jour'>;
  route: RouteProp<RouteType, 'Voix_du_jour'>;
};
export const VoixDuJour: React.FC<HomeProps> = ({navigation}) => {
  const [userSelected, setUserSelected] = useState<string | null>();
  const [userSelected2, setUserSelected2] = useState<string | null>();
  const [userSelected3, setUserSelected3] = useState<string | null>();

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../../assets/images/Background.png')}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View style={{flex: 1}}>
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
              source={require('../../../assets/images/Group-58.png')}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <TitreUneLigne
            txtTitle="La voix du jour"
            textAlign="center"
            top={50}
            left={0}
            fontFamily={'Gilory'}
            color={undefined}
            fontWeight={'700'}
            fontSize={24}
          />
          <Image
            source={require('../../../assets/images/MicGame.png')}
            style={{
              width: 55,
              height: 55,
              top: 110,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Comfortaa',
              fontWeight: '400',
              color: '#FFF',
              alignSelf: 'center',
              textAlign: 'center',
              top: 130,
            }}>
            Retrouvez qui a la voix de :
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#FFF',
              alignSelf: 'center',
              textAlign: 'center',
              top: 160,
            }}>
            Soprano
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '400',
              color: '#FFF',
              alignSelf: 'center',
              textAlign: 'center',
              fontStyle: 'italic',
              top: 160,
            }}>
            Celine Dion
          </Text>
          <TouchableOpacity
            onPress={() => {
              setUserSelected3(null);
              setUserSelected2(null);
              setUserSelected('Gaëlle');
            }}
            style={{
              width: 122,
              top: 200,
              left: 195,
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/images/VoixGae.png')}
              style={{
                width: 119,
                height: 119,
                resizeMode: 'contain',
                borderRadius: 100,
                borderColor: userSelected === 'Gaëlle' ? '#A70000' : '#fff',
                borderWidth: 4,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Comfortaa',
                fontWeight: '400',
                color: '#FFF',
              }}>
              Gaëlle
            </Text>
            {userSelected ? (
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Comfortaa',
                  fontWeight: '400',
                  color: userSelected === 'Gaëlle' ? '#A70000' : '#fff',
                }}>
                {userSelected === 'Gaëlle' ? 'Perdu' : null}
              </Text>
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setUserSelected3(null);
              setUserSelected(null);
              setUserSelected2('Rachel');
              navigation.navigate('GameNavigator', {
                GameRoute: 'Voix_du_jour2',
              });
            }}
            style={{
              width: 122,
              top: 200,
              left: 45,
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/images/VoixRac.png')}
              style={{
                width: 119,
                height: 119,
                resizeMode: 'contain',
                borderRadius: 100,
                borderColor: userSelected2 === 'Rachel' ? '#0019A7' : '#fff',
                borderWidth: 4,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Comfortaa',
                fontWeight: '400',
                color: '#FFF',
              }}>
              Rachel
            </Text>
            {userSelected2 ? (
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Comfortaa',
                  fontWeight: '400',
                  color: userSelected2 === 'Rachel' ? '#0019A7' : '#A70000',
                }}>
                {userSelected2 === 'Rachel' ? 'Gagné' : null}
              </Text>
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setUserSelected3('Beverly');
              setUserSelected2(null);
              setUserSelected(null);
            }}
            style={{
              width: 122,
              top: 100,
              left: 240,
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/images/VoixBev.png')}
              style={{
                width: 119,
                height: 119,
                resizeMode: 'contain',
                borderRadius: 100,
                borderColor: userSelected3 === 'Beverly' ? '#A70000' : '#fff',
                borderWidth: 4,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Comfortaa',
                fontWeight: '400',
                color: '#FFF',
              }}>
              Beverly
            </Text>
            {userSelected3 ? (
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Comfortaa',
                  fontWeight: '400',
                  color: userSelected3 === 'Beverly' ? '#A70000' : '#fff',
                }}>
                {userSelected3 === 'Beverly' ? 'Perdu' : null}
              </Text>
            ) : null}
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
