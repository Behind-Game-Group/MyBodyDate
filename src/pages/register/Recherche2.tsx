import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {getData} from '../../services/storage';
import StylesRecherche2 from '../../../assets/style/styleScreens/styleRegister/StyleRecherche2';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
import {BtnNext} from '../../components/boutons/BtnNext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Recherche2'>;
};

export const Recherche2: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    try {
      const userRecherche2 = await getData('recherche2');
      setSelectedRecherche2(userRecherche2 || '');
      // console.log('Recherche 2 : ' + userRecherche2);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const [selectedRecherhe2, setSelectedRecherche2] = useState<string[]>([]);

  const handleButtonPress = (value: string) => {
    let newSelectedRecherche2 = [...selectedRecherhe2];

    if (newSelectedRecherche2.includes(value)) {
      newSelectedRecherche2 = newSelectedRecherche2.filter(
        item => item !== value,
      );
    } else {
      newSelectedRecherche2.push(value);
    }

    setSelectedRecherche2(newSelectedRecherche2);
    // console.log('Recherche 2 : ' + newSelectedRecherche2);
  };

  return (
    <View style={StylesRecherche2.container}>
      <ImageBackground
        style={StylesRecherche2.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <TitreUneLigne
          txtTitle="VOTRE RECHERCHE ?"
          textAlign="center"
          top={120}
          left={undefined}
          fontFamily={undefined}
          color={undefined}
          fontWeight={undefined}
          fontSize={24}
        />
        <View style={[StylesRecherche2.ViewBTNSelect]}>
          <TouchableOpacity
            style={[StylesRecherche2.btnSelect]}
            onPress={() => handleButtonPress('Relation amoureuse')}
            accessibilityLabel="Relation amoureuse">
            <Text
              style={[
                StylesRecherche2.txtBtnSelect,
                {
                  color: selectedRecherhe2.includes('Relation amoureuse')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRecherhe2.includes('Relation amoureuse')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Relation amoureuse
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRecherche2.btnSelect]}
            onPress={() => handleButtonPress('Long terme, OK pour court')}
            accessibilityLabel="Long terme, OK pour court">
            <Text
              style={[
                StylesRecherche2.txtBtnSelect,
                {
                  color: selectedRecherhe2.includes('Long terme, OK pour court')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRecherhe2.includes(
                    'Long terme, OK pour court',
                  )
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Long terme, OK pour court
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRecherche2.btnSelect]}
            onPress={() => handleButtonPress('Court terme, OK pour long')}
            accessibilityLabel="Court terme, OK pour long">
            <Text
              style={[
                StylesRecherche2.txtBtnSelect,
                {
                  color: selectedRecherhe2.includes('Court terme, OK pour long')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRecherhe2.includes(
                    'Court terme, OK pour long',
                  )
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Court terme, OK pour long
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRecherche2.btnSelect]}
            onPress={() => handleButtonPress('Rien de très sérieux')}
            accessibilityLabel="Rien de très sérieux">
            <Text
              style={[
                StylesRecherche2.txtBtnSelect,
                {
                  color: selectedRecherhe2.includes('Rien de très sérieux')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRecherhe2.includes('Rien de très sérieux')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Rien de très sérieux
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRecherche2.btnSelect]}
            onPress={() => handleButtonPress('À me faire des amis.es')}
            accessibilityLabel="À me faire des amis.es">
            <Text
              style={[
                StylesRecherche2.txtBtnSelect,
                {
                  color: selectedRecherhe2.includes('À me faire des amis.es')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRecherhe2.includes(
                    'À me faire des amis.es',
                  )
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              À me faire des amis.es
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRecherche2.btnSelect]}
            onPress={() =>
              handleButtonPress('Développer mon réseau proféssionnel')
            }
            accessibilityLabel="Développer mon réseau proféssionnel">
            <Text
              style={[
                StylesRecherche2.txtBtnSelect,
                {
                  color: selectedRecherhe2.includes(
                    'Développer mon réseau proféssionnel',
                  )
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRecherhe2.includes(
                    'Développer mon réseau proféssionnel',
                  )
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Développer mon réseau proféssionnel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[StylesRecherche2.btnSelect]}
            onPress={() => handleButtonPress('Je ne sais pas trop')}
            accessibilityLabel="Je ne sais pas trop">
            <Text
              style={[
                StylesRecherche2.txtBtnSelect,
                {
                  color: selectedRecherhe2.includes('Je ne sais pas trop')
                    ? '#0019A7'
                    : '#FFF',
                  fontFamily: selectedRecherhe2.includes('Je ne sais pas trop')
                    ? 'Comfortaa-Bold'
                    : 'Comfortaa',
                },
              ]}>
              Je ne sais pas trop
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={[StylesRecherche2.textWhite]}>Choix multiple.</Text>
        <BtnNext
          navigation={navigation}
          navigateTo="Affinite"
          propName="RegisterRoute"
          propRoute="Affinite"
          txt="Continuer"
          handleStore={{key: 'recherche2', value: selectedRecherhe2 ?? ''}}
          postInfo={undefined}
          background="White"
          top={60}
          left={0}
        />
      </ImageBackground>
    </View>
  );
};
