import React, {useState} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Styles from '../../../assets/style/Styles';
import {BtnNext} from '../../components/boutons/BtnNext';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Objectifs'>;
};

export const Objectifs: React.FC<HomeProps> = ({navigation}) => {
  // const [buttonPressed, setButtonPressed] = useState<boolean>();
  // Constante permettant de récupérer les boutons sélectionnés par l'utilisateur
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);

  const handleButtonPress = (value: string) => {
    // Copie le tableau des boutons sélectionnés
    let newSelectedButtons = [...selectedButtons];

    if (newSelectedButtons.includes(value)) {
      // Si la valeur est déjà dans le tableau, la retire
      newSelectedButtons = newSelectedButtons.filter(item => item !== value);
    } else {
      // Ajoute la valeur au tableau
      newSelectedButtons.push(value);
    }

    // Met à jour le tableau des boutons sélectionnés
    setSelectedButtons(newSelectedButtons);
    console.log('Objectifs : ' + newSelectedButtons);
  };

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <TitreUneLigne
          txtTitle="VOS OBJECTIFS ?"
          textAlign="center"
          top={140}
          left={undefined}
          fontFamily={undefined}
          color={undefined}
          fontWeight={undefined}
          fontSize={24}
        />

        <View style={[Styles.ViewBTNSelect, {top: 200}]}>
          <TouchableOpacity
            style={[
              Styles.mt20,
              {
                width: '80%',
                maxHeight: 70,
                padding: 10,
                alignSelf: 'center',
                borderColor: '#0019A7',
                borderWidth: 2,
                borderRadius: 100,
                justifyContent: 'center',
              },
            ]}
            onPress={() => handleButtonPress('Relation amoureuse')}
            accessibilityLabel="Relation amoureuse">
            <Text
              style={{
                color: selectedButtons.includes('Relation amoureuse')
                  ? '#0019A7'
                  : '#FFF',
                textAlign: 'center',
                fontFamily: selectedButtons.includes('Relation amoureuse')
                  ? 'Comfortaa-Bold'
                  : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Relation amoureuse
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.mt20,
              {
                width: '80%',
                maxHeight: 70,
                padding: 10,
                alignSelf: 'center',
                borderColor: '#0019A7',
                borderWidth: 2,
                borderRadius: 100,
                justifyContent: 'center',
              },
            ]}
            onPress={() => handleButtonPress("Cercle d'amis.es")}
            accessibilityLabel="Cercle d\'amis.es">
            <Text
              style={{
                color: selectedButtons.includes("Cercle d'amis.es")
                  ? '#0019A7'
                  : '#FFF',
                textAlign: 'center',
                fontFamily: selectedButtons.includes("Cercle d'amis.es")
                  ? 'Comfortaa-Bold'
                  : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Cercle d'amis.es
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.mt20,
              {
                width: '80%',
                maxHeight: 70,
                padding: 10,
                alignSelf: 'center',
                borderColor: '#0019A7',
                borderWidth: 2,
                borderRadius: 100,
                justifyContent: 'center',
              },
            ]}
            onPress={() =>
              handleButtonPress('Développer mon réseau professionnel')
            }
            accessibilityLabel="Développer mon réseau professionnel">
            <Text
              style={{
                color: selectedButtons.includes(
                  'Développer mon réseau professionnel',
                )
                  ? '#0019A7'
                  : '#FFF',
                textAlign: 'center',
                fontFamily: selectedButtons.includes(
                  'Développer mon réseau professionnel',
                )
                  ? 'Comfortaa-Bold'
                  : 'Comfortaa',
                fontSize: 18,
                fontStyle: 'normal',
              }}>
              Développer mon réseau professionnel
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{top: 250, left: 40}}>
          <Text style={[Styles.textWhite2, {fontSize: 12}]}>
            Choix multiple.
          </Text>
        </View>
        <BtnNext
          navigation={navigation}
          navigateTo={'Affinite'}
          propName={'RegisterRoute'}
          propRoute={'Affinite'}
          txt={'Continuer'}
          background={'white'}
          top={180}
          left={undefined}
        />
      </ImageBackground>
    </View>
  );
};
