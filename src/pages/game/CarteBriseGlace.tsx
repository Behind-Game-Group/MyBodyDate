import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
type HomeProps = {
  navigation: NavigationProp<RouteType, 'Carte_brise_glace'>;
  route: RouteProp<RouteType, 'Carte_brise_glace'>;
};
export const CarteBriseGlace: React.FC<HomeProps> = ({navigation}) => {
  const [buttonSelected, setButtonSelected] = useState<string>('');

  return (
    <ImageBackground
      source={require('../../../assets/images/bg-game.png')}
      style={{flex: 1}}>
      <View style={{flex: 8}}>
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
          fontFamily={'Gilory-Bold'}
          color={'#0019A7'}
          fontWeight={'700'}
          fontSize={32}
        />
        <Text
          style={{
            top: 100,
            width: '80%',
            color: '#0019A7',
            alignSelf: 'center',
            textAlign: 'center',
            fontFamily: 'Gilroy',
            fontSize: 20,
            fontStyle: 'normal',
          }}>
          Félicitations, vous avez trouvé la personne qui vous porte de
          l'intérêt en secret !{' '}
        </Text>
        <Text
          style={{
            top: 140,
            width: '80%',
            color: '#0019A7',
            alignSelf: 'center',
            textAlign: 'center',
            fontFamily: 'Gilroy',
            fontSize: 20,
            fontStyle: 'normal',
          }}>
          Brisez la glace !
        </Text>
        <View
          style={{
            alignItems: 'center',
            top: 110,
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 190,
              height: 251,
              top: 70,
              borderRadius: 50,
              borderEndWidth: 5,
              borderBottomWidth: 5,
              borderColor: '#aa75e9',
            }}>
            <Image
              source={require('../../../assets/images/Claire.png')}
              style={{
                width: 185,
                height: 246,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#0019A7',
              top: 70,
            }}>
            Claire, Paris
          </Text>
        </View>
      </View>
      <View
        style={{flex: 2, alignItems: 'center', justifyContent: 'space-around'}}>
        <TouchableOpacity
          style={{height: 56, alignItems: 'center'}}
          onPress={() => {
            setButtonSelected('Découvrir');
          }}>
          <Image
            source={
              buttonSelected === 'Découvrir'
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Bleu.png')
            }
            style={{
              height: 56,
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              bottom: 45,
              color: '#FFF',
              fontFamily: 'Comfortaa-Bold',
              fontSize: 18,
              fontStyle: 'normal',
            }}>
            Découvrir son profil
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{height: 56, alignItems: 'center'}}
          onPress={() => {
            setButtonSelected('Quitter');
            navigation.navigate('TabNavigator', {tabRoute: 'TabDiscover'});
          }}>
          <Image
            source={
              buttonSelected === 'Quitter'
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc.png')
            }
            style={{
              height: 56,
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              bottom: 45,
              color: buttonSelected === 'Quitter' ? '#fff' : '#0019A7',
              fontFamily: 'Comfortaa-Bold',
              fontSize: 18,
              fontStyle: 'normal',
            }}>
            Quitter
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
