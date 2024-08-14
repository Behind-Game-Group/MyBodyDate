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
} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Sa_taille'>;
  route: RouteProp<RouteType, 'Sa_taille'>;
};

interface ListItem {
  key: string;
  value: number;
}

export const SaTaille: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  //Flatlist Taille

  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  const [selectedFirstSize, setSelectedFirstSize] = useState<number>(60); // Valeur par défaut
  const [selectedSecondSize, setSelectedSecondSize] = useState<number>(160); // Valeur par défaut pour la deuxième FlatList
  const flatListFirstSizeRef = useRef<FlatList<ListItem> | null>(null);
  const flatListSecondSizeRef = useRef<FlatList<ListItem> | null>(null); // Ref pour la deuxième FlatList
  const ITEM_HEIGHT = 40;
  const VISIBLE_ITEMS = 3;

  const firstSizeData = [];
  for (let i = 60; i <= 230; i++) {
    firstSizeData.push({key: i.toString(), value: i});
  }

  const renderFirstSizeItem = ({item}: {item: ListItem}) => (
    <TouchableOpacity
      style={{padding: 8, alignSelf: 'center', alignItems: 'center'}}
      onPress={() => {
        setSelectedFirstSize(item.value);
        scrollToFirstSize(item.value);
      }}>
      <Text
        style={{
          color: selectedFirstSize === item.value ? '#0019A7' : '#929EDE',
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

  const scrollToFirstSize = (item: number) => {
    const index = item - 60;
    if (flatListFirstSizeRef.current) {
      flatListFirstSizeRef.current.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0.5,
      });
    }
  };

  const secondSizeData = [];
  for (let i = 60; i <= 230; i++) {
    secondSizeData.push({key: i.toString(), value: i});
  }

  const renderSecondSizeItem = ({item}: {item: ListItem}) => (
    <TouchableOpacity
      style={{padding: 8}}
      onPress={() => {
        setSelectedSecondSize(item.value);
        scrollToSecondSize(item.value);
      }}>
      <Text
        style={{
          color: selectedSecondSize === item.value ? '#0019A7' : '#929EDE',
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

  const scrollToSecondSize = (height: number) => {
    const index = height - 60;
    if (flatListSecondSizeRef.current) {
      flatListSecondSizeRef.current.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0.5,
      });
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
      <View style={{flex: 4}}>
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
          Sa taille
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
            top: 100,
            color: '#0019A7',
            fontFamily: 'Comfortaa',
            textAlign: 'center',
            fontSize: 15,
            fontStyle: 'normal',
            fontWeight: 500,
          }}>
          Sélectionnez vos critères de taille
        </Text>
        <View
          style={{
            top: 180,
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
              onPress={() => scrollToFirstSize(60)}
              disabled={selectedFirstSize === 60}>
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
              onPress={() => scrollToFirstSize(230)}
              disabled={selectedFirstSize === 230}>
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
              ref={flatListFirstSizeRef}
              data={firstSizeData}
              renderItem={renderFirstSizeItem}
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
              ref={flatListSecondSizeRef}
              data={secondSizeData}
              renderItem={renderSecondSizeItem}
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
              cm
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
              onPress={() => scrollToSecondSize(60)}
              disabled={selectedSecondSize === 60}>
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
              onPress={() => scrollToSecondSize(230)}
              disabled={selectedSecondSize === 230}>
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
        <View
          style={{
            flexDirection: 'row',
            top: 400,
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
      <View style={{flex: 1, top: 50}}>
        <TouchableOpacity
          style={{}}
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

export default SaTaille;
