import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Recuperation_compte'>;
};

export const RecuperationCompte: React.FC<HomeProps> = ({navigation}) => {
  const [buttonPressed, setButtonPressed] = useState<string>();

  const [text, setEmail] = useState<string>();
  // console.log('Email: ' + text);

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText, {top: 50}]}>
          <Text
            style={[
              Styles.textWhite,
              {top: 100, left: 30, fontFamily: 'Comfortaa-Bold'},
            ]}>
            RÉCUPÉRATION DE
          </Text>
          <Text
            style={[
              Styles.textWhite,
              {top: 100, left: 30, fontFamily: 'Comfortaa-Bold'},
            ]}>
            COMPTE
          </Text>
        </View>
        <SafeAreaView style={Styles.ViewInput}>
          <TextInput
            style={Styles.TextInput}
            keyboardType="email-address"
            placeholder="Entrez votre email"
            placeholderTextColor="#FFF"
            maxLength={100}
            onChangeText={text => setEmail(text)}
            value={text}
          />
          <Text
            style={[
              Styles.textWhite3,
              {top: 20, fontSize: 12, width: '80%', alignSelf: 'center'},
            ]}>
            Un lien pour vous connecter à votre ancien compte va vous être
            envoyé par e-mail.
          </Text>
        </SafeAreaView>
        <TouchableOpacity
          style={{bottom: 20}}
          onPress={() => {
            setButtonPressed('Continuer');
            navigation.navigate('LinksLogIn', {
              LoginRoute: 'Confirmation_email',
            });
          }}>
          <Text
            style={[
              Styles.textBtn9,
              {
                zIndex: 1,
                top: 20,
                color: '#FFF',
                fontSize: 18,
                left: 10,
              },
            ]}>
            Récupérer mon compte
          </Text>
          <Image
            style={[
              {
                bottom: 20,
                height: 56,
                resizeMode: 'contain',
                alignSelf: 'center',
              },
            ]}
            source={
              buttonPressed === 'Continuer'
                ? require('../../../assets/boutons/Bouton-Rouge-Email.png')
                : require('../../../assets/boutons/Bouton-Noir-Email.png')
            }
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
