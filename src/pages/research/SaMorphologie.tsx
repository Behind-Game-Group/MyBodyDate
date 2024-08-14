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
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Sa_morphologie'>;
  route: RouteProp<RouteType, 'Sa_morphologie'>;
};

export const SaMorphologie: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  const [optionsShow, setOptionShow] = useState<boolean>(false);
  const [selectedMorphologies, setSelectedMorphologies] = useState<string[]>(
    [],
  );

  const handleMorphologyToggle = (morphology: string) => {
    const isSelected = selectedMorphologies.includes(morphology);

    if (isSelected) {
      const updatedSelection = selectedMorphologies.filter(
        selected => selected !== morphology,
      );
      setSelectedMorphologies(updatedSelection);
    } else {
      setSelectedMorphologies([...selectedMorphologies, morphology]);
    }
  };

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
          Sa morphologie
        </Text>
        <View
          style={{
            backgroundColor: '#0019A7',
            width: 351,
            height: 1,
            alignSelf: 'center',
            top: 100,
          }}
        />
        <Text
          style={{
            top: 120,
            color: '#0019A7',
            fontFamily: 'Comfortaa',
            textAlign: 'center',
            fontSize: 15,
            fontStyle: 'normal',
            fontWeight: 500,
          }}>
          Sélectionnez vos critères de morphologie
        </Text>
        <TouchableOpacity
          onPress={() => setOptionShow(!optionsShow)}
          style={{
            top: 250,
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
              color: '#0019A7',
              textAlign: 'center',
              fontFamily: 'Comfortaa',
              fontSize: 15,
              fontStyle: 'normal',
              fontWeight: 500,
            }}>
            Type de morphologie
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
              top: 233,
              flexDirection: 'column',
              alignSelf: 'center',
              width: 276,
              height: 'auto',
              borderRadius: 26,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderWidth: 1,
              borderTopWidth: 0,
              borderColor: '#0019A7',
              backgroundColor: 'rgba(255, 255, 255, 0.90)',
              justifyContent: 'space-around',
              paddingTop: 40,
            }}>
            <TouchableOpacity
              style={{marginBottom: 20}}
              onPress={() => {
                handleMorphologyToggle('Elancé.e');
                setOptionShow(false);
              }}>
              <Text
                style={{
                  color: selectedMorphologies.includes('Elancé.e')
                    ? '#0019A7'
                    : '#929EDE',
                  textAlign: 'center',
                  fontFamily: 'Comfortaa',
                  fontSize: 16,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Elancé.e
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginBottom: 20}}
              onPress={() => {
                handleMorphologyToggle('Mince');
                setOptionShow(false);
              }}>
              <Text
                style={{
                  color: selectedMorphologies.includes('Mince')
                    ? '#0019A7'
                    : '#929EDE',
                  textAlign: 'center',
                  fontFamily: 'Comfortaa',
                  fontSize: 16,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Mince
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginBottom: 20}}
              onPress={() => {
                handleMorphologyToggle('Sportif.ve');
                setOptionShow(false);
              }}>
              <Text
                style={{
                  color: selectedMorphologies.includes('Sportif.ve')
                    ? '#0019A7'
                    : '#929EDE',
                  textAlign: 'center',
                  fontFamily: 'Comfortaa',
                  fontSize: 16,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Sportif.ve
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginBottom: 20}}
              onPress={() => {
                handleMorphologyToggle('Corpulence moyenne');
                setOptionShow(false);
              }}>
              <Text
                style={{
                  color: selectedMorphologies.includes('Corpulence moyenne')
                    ? '#0019A7'
                    : '#929EDE',
                  textAlign: 'center',
                  fontFamily: 'Comfortaa',
                  fontSize: 16,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Corpulence moyenne
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginBottom: 20}}
              onPress={() => {
                handleMorphologyToggle('Rond.e');
                setOptionShow(false);
              }}>
              <Text
                style={{
                  color: selectedMorphologies.includes('Rond.e')
                    ? '#0019A7'
                    : '#929EDE',
                  textAlign: 'center',
                  fontFamily: 'Comfortaa',
                  fontSize: 16,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Rond.e
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
        <Text
          style={{
            zIndex: optionsShow ? -1 : 1,
            top: optionsShow ? 200 : 450,
            left: 40,
            color: '#000',
            fontFamily: 'Comfortaa',
            fontSize: 15,
            fontStyle: 'normal',
            fontWeight: 700,
            textDecorationLine: 'underline',
          }}>
          Choix multiples.
        </Text>
        <View
          style={{
            zIndex: optionsShow ? -1 : 1,
            flexDirection: 'row',
            top: optionsShow ? 220 : 470,
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

export default SaMorphologie;
