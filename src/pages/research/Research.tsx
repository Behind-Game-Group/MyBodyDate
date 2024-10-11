import React, {useEffect, useState, useRef} from 'react';
import {
  StatusBar,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  Switch,
  PanResponder,
} from 'react-native';
import MenuSlide from '../../components/menus/MenuSlide';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Recherche'>;
  route: RouteProp<RouteType, 'Recherche'>;
};

interface ListItem {
  key: string;
  value: number;
}

export const Research: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  //Flatlist Age

  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  const [selectedAge, setSelectedAge] = useState<number>(18); // Valeur par défaut
  const [selectedHeight, setSelectedHeight] = useState<number>(150); // Valeur par défaut pour la deuxième FlatList
  const flatListRef = useRef<FlatList<ListItem> | null>(null);
  const flatListRefHeight = useRef<FlatList<ListItem> | null>(null); // Ref pour la deuxième FlatList
  const ITEM_HEIGHT = 40;
  const VISIBLE_ITEMS = 3;

  const ageData = [];
  for (let i = 1; i <= 90; i++) {
    ageData.push({key: i.toString(), value: i});
  }

  const renderAgeItem = ({item}: {item: ListItem}) => (
    <TouchableOpacity
      style={{padding: 8, alignSelf: 'center', alignItems: 'center'}}
      onPress={() => {
        setSelectedAge(item.value);
        scrollToAge(item.value);
      }}>
      <Text
        style={{
          color: selectedHeight === item.value ? '#0019A7' : '#929EDE',
          textAlign: 'center',
          fontFamily: 'Comfortaa',
          fontSize: 20,
          fontStyle: 'normal',
          fontWeight: 700,
        }}>
        {item.value}
      </Text>
    </TouchableOpacity>
  );

  const scrollToAge = (age: number) => {
    const index = age - 1;
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0.5,
      });
    }
  };

  const heightData = [];
  for (let i = 1; i <= 90; i++) {
    heightData.push({key: i.toString(), value: i});
  }

  const renderHeightItem = ({item}: {item: ListItem}) => (
    <TouchableOpacity
      style={{padding: 8}}
      onPress={() => {
        setSelectedHeight(item.value);
        scrollToHeight(item.value);
      }}>
      <Text
        style={{
          color: selectedHeight === item.value ? '#0019A7' : '#929EDE',
          textAlign: 'center',
          fontFamily: 'Comfortaa',
          fontSize: 20,
          fontStyle: 'normal',
          fontWeight: 700,
        }}>
        {item.value}
      </Text>
    </TouchableOpacity>
  );

  const scrollToHeight = (height: number) => {
    const index = height - 1;
    if (flatListRefHeight.current) {
      flatListRefHeight.current.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0.5,
      });
    }
  };

  // ProgressBar localisation

  const [value, setValue] = useState(0);
  const [buttonPosition, setButtonPosition] = useState(0);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const newPosition = buttonPosition + gestureState.dx;
      if (newPosition >= 0 && newPosition <= 265) {
        setButtonPosition(newPosition);
        setValue(Math.round((newPosition / 265) * 32));
      }
    },
    onPanResponderRelease: () => {},
  });

  // SwitchButton Localisation

  const [isEnabledLocalisation, setIsEnabledLocalisation] = useState(false);
  const toggleSwitchLocalisation = () =>
    setIsEnabledLocalisation(previousState => !previousState);

  // SwitchButton Photo

  const [isEnabledPhoto, setIsEnabledPhoto] = useState(false);
  const toggleSwitchPhoto = () =>
    setIsEnabledPhoto(previousState => !previousState);

  // SwitchButton En ligne

  const [isEnabledOnline, setIsEnabledOnline] = useState(false);
  const toggleSwitchOnline = () =>
    setIsEnabledOnline(previousState => !previousState);

  return (
    <ImageBackground
      resizeMode="contain"
      style={{
        width: '100%',
        height: '100%',
      }}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlide
        settingsNavigation={'FAQ'}
        navigation={navigation}
        icoPushChange={false}
        backButton={undefined}
        backgroundColor={undefined}
      />
      <View style={{flex: 8}}>
        <Text
          style={{
            top: 30,
            color: '#0019A7',
            fontFamily: 'Gilroy',
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 700,
          }}>
          Recherche
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
        <Text
          style={{
            top: 80,
            color: '#0019A7',
            fontFamily: 'Comfortaa',
            left: 40,
            fontSize: 20,
            fontStyle: 'normal',
            fontWeight: 700,
          }}>
          Son âge
        </Text>
        <View
          style={{
            top: 100,
            width: '90%',
            height: 120,
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '10%',
              height: '100%',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{marginHorizontal: 10}}
              onPress={() => scrollToAge(1)}
              disabled={selectedAge === 1}>
              <Image
                source={require('../../../assets/images/flèche-B.png')}
                style={{
                  width: 25,
                  height: 23,
                  resizeMode: 'contain',
                  transform: [{rotate: '90deg'}],
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginHorizontal: 10}}
              onPress={() => scrollToAge(90)}
              disabled={selectedAge === 90}>
              <Image
                source={require('../../../assets/images/flèche-B.png')}
                style={{
                  width: 25,
                  height: 23,
                  resizeMode: 'contain',
                  transform: [{rotate: '-90deg'}],
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '10%',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                textAlign: 'center',
                fontSize: 20,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              De
            </Text>
          </View>
          <View>
            <FlatList
              ref={flatListRef}
              data={ageData}
              renderItem={renderAgeItem}
              keyExtractor={item => item.key}
              showsVerticalScrollIndicator={true}
              getItemLayout={(data, index) => ({
                length: ITEM_HEIGHT,
                offset: ITEM_HEIGHT * index,
                index,
              })}
              initialScrollIndex={0}
              initialNumToRender={VISIBLE_ITEMS}
            />
          </View>
          <View
            style={{
              width: '10%',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                textAlign: 'center',
                fontSize: 20,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              à
            </Text>
          </View>
          <View>
            <FlatList
              ref={flatListRefHeight}
              data={heightData}
              renderItem={renderHeightItem}
              keyExtractor={item => item.key}
              showsVerticalScrollIndicator={true}
              getItemLayout={(data, index) => ({
                length: ITEM_HEIGHT,
                offset: ITEM_HEIGHT * index,
                index,
              })}
              initialScrollIndex={1}
              initialNumToRender={VISIBLE_ITEMS}
            />
          </View>
          <View
            style={{
              width: '10%',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                textAlign: 'center',
                fontSize: 20,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              ans
            </Text>
          </View>
          <View
            style={{
              width: '10%',
              height: '100%',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{marginHorizontal: 10}}
              onPress={() => scrollToHeight(1)}
              disabled={selectedHeight === 1}>
              <Image
                source={require('../../../assets/images/flèche-B.png')}
                style={{
                  width: 25,
                  height: 23,
                  resizeMode: 'contain',
                  transform: [{rotate: '90deg'}],
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginHorizontal: 10}}
              onPress={() => scrollToHeight(90)}
              disabled={selectedHeight === 90}>
              <Image
                source={require('../../../assets/images/flèche-B.png')}
                style={{
                  width: 25,
                  height: 23,
                  resizeMode: 'contain',
                  transform: [{rotate: '-90deg'}],
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{top: 140}}>
          <Text
            style={{
              color: '#0019A7',
              left: 40,
              fontFamily: 'Comfortaa',
              fontSize: 20,
              fontStyle: 'normal',
              fontWeight: 700,
            }}>
            Sa localisation
          </Text>
          <View
            style={{
              flexDirection: 'row',
              top: 20,
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '85%',
            }}>
            <View
              style={{
                width: 265,
                height: 4,
                backgroundColor: '#929EDE',
                borderRadius: 10,
                overflow: 'hidden',
                position: 'relative',
              }}>
              <View
                style={[
                  {
                    height: '100%',
                    backgroundColor: '#0019A7',
                    alignItems: 'center',
                  },
                  {width: buttonPosition},
                ]}
              />
            </View>
            <View
              style={[
                {
                  width: 15,
                  height: 15,
                  borderRadius: 10,
                  backgroundColor: '#0019A7',
                  borderWidth: 2,
                  borderColor: '#fff',
                  position: 'absolute',
                  top: 2,
                  zIndex: 1,
                },
                {left: buttonPosition},
              ]}
              {...panResponder.panHandlers}
            />
            <View>
              <Text
                style={{
                  color: '#0019A7',
                  fontFamily: 'Comfortaa',
                  fontSize: 16,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                {value} km
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            top: 180,
            width: '80%',
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#0019A7',
              width: 250,
              fontFamily: 'Comfortaa',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 700,
            }}>
            Uniquement les personnes dans son périmètre
          </Text>
          <Switch
            trackColor={{false: '#BEC8FF', true: '#17ff58'}}
            thumbColor={isEnabledLocalisation ? '#BEC8FF' : '#f4f3f4'}
            ios_backgroundColor="#f4f3f4"
            onValueChange={toggleSwitchLocalisation}
            value={isEnabledLocalisation}
            style={{}}
          />
        </View>
        <View
          style={{
            height: 20,
            width: '80%',
            alignSelf: 'center',
            top: 200,
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
        <View
          style={{
            height: 20,
            width: '80%',
            alignSelf: 'center',
            top: 220,
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
            Avec photo
          </Text>
          <Switch
            trackColor={{false: '#BEC8FF', true: '#17ff58'}}
            thumbColor={isEnabledPhoto ? '#BEC8FF' : '#f4f3f4'}
            ios_backgroundColor="#f4f3f4"
            onValueChange={toggleSwitchPhoto}
            value={isEnabledPhoto}
            style={{}}
          />
        </View>
        <View
          style={{
            height: 20,
            width: '80%',
            alignSelf: 'center',
            top: 240,
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
            En ligne
          </Text>
          <Switch
            trackColor={{false: '#BEC8FF', true: '#17ff58'}}
            thumbColor={isEnabledOnline ? '#BEC8FF' : '#f4f3f4'}
            ios_backgroundColor="#f4f3f4"
            onValueChange={toggleSwitchOnline}
            value={isEnabledOnline}
            style={{}}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Filtres_avances');
          }}
          style={{
            height: 20,
            width: '80%',
            alignSelf: 'center',
            top: 260,
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
            Filtres avancées
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
      </View>
      <View style={{flex: 1}}>
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

export default Research;
