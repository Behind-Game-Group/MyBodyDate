import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ListRenderItem,
} from 'react-native';
import React, {useRef} from 'react';

type Data = {
  id: number;
  name: string;
  age: string;
  category: string;
  certified: boolean;
  lastLog: string;
};

const SliderMap = () => {
  const flatListRef = useRef<FlatList<Data>>(null);
  const data: Data[] = [
    {
      id: 1,
      name: 'Céline',
      age: '31 ans, Paris',
      category: "Cercle d'amis",
      certified: true,
      lastLog: '1h',
    },
    {
      id: 2,
      name: 'Kalvin',
      age: '37 ans, Paris',
      category: 'Rencontre amoureuse',
      certified: true,
      lastLog: '2h',
    },
    {
      id: 3,
      name: 'Kolia',
      age: '23 ans, Paris',
      category: 'Proféssionnel',
      certified: true,
      lastLog: '1h',
    },
    {
      id: 4,
      name: 'Raluka',
      age: '32 ans, Paris',
      category: "Cercle d'amis",
      certified: true,
      lastLog: '5h',
    },
  ];

  const renderItem: ListRenderItem<Data> = ({item}) => {
    const imageName: string = `${item.name.toLowerCase()}-map.png`;

    return (
      <View style={{flexDirection: 'column', width: 140, marginRight: 10}}>
        <View
          style={{
            alignSelf: 'center',
            width: 140,
            height: 152,
            borderWidth: 2,
            borderColor: '#0019A7',
            borderRadius: 40,
            alignItems: 'center',
          }}>
          <View
            style={{
              position: 'absolute',
              top: 100,
              left: 90,
              height: 30,
              width: 30,
              zIndex: 1,
            }}>
            <Image
              source={require('../../../assets/boutons/marker-map.png')}
              style={{
                width: 31,
                height: 31,
                zIndex: 2,
              }}
            />
            <Text
              style={{
                top: -25,
                left: 8,
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                fontSize: 14,
                fontWeight: 700,
                zIndex: 3,
              }}>
              {item.lastLog}
            </Text>
          </View>
          <Image
            source={getImageSource(imageName)}
            style={{width: 138, height: 150, resizeMode: 'contain'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
            width: '90%',
          }}>
          <Text
            style={{
              color: '#0019A7',
              fontFamily: 'Comfortaa',
              fontSize: 20,
              fontWeight: 700,
            }}>
            {item.name}
          </Text>
          {item.certified && (
            <Image
              source={require('../../../assets/boutons/ico-certified-rose.png')}
              style={{width: 20, height: 20}}
            />
          )}
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignSelf: 'center',
            width: '90%',
          }}>
          <Text
            style={{
              color: '#0019A7',
              fontFamily: 'Comfortaa',
              fontSize: 16,
              fontWeight: 700,
            }}>
            {item.age}
          </Text>
          <Text
            style={[
              styles.categoryText,
              {color: getCategoryTextColor(item.category)},
            ]}>
            {item.category}
          </Text>
        </View>
      </View>
    );
  };

  const getImageSource = (imageName: string) => {
    switch (imageName) {
      case 'céline-map.png':
        return require('../../../assets/images/celine-map.png');
      case 'kalvin-map.png':
        return require('../../../assets/images/kalvin-map.png');
      case 'kolia-map.png':
        return require('../../../assets/images/kolia-map.png');
      case 'raluka-map.png':
        return require('../../../assets/images/raluka-map.png');
      default:
        return require('../../../assets/boutons/marker-map.png');
    }
  };

  const getCategoryTextColor = (category: string) => {
    switch (category) {
      case "Cercle d'amis":
        return '#9424FA';
      case 'Rencontre amoureuse':
        return '#FF84D7';
      case 'Professionnel':
        return '#000000';
      default:
        return '#000000';
    }
  };

  const styles = StyleSheet.create({
    // ... (autres styles)
    categoryText: {
      color: '#000000', // Couleur par défaut (si la catégorie ne correspond à aucun cas)
      fontFamily: 'Gilroy',
      fontSize: 15,
      fontWeight: 'bold',
    },
  });

  const scrollLeft = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({offset: 0});
    }
  };

  const scrollRight = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd();
    }
  };

  return (
    <View
      style={{
        alignSelf: 'center',
        width: 363,
        height: 310,
        borderRadius: 50,
        backgroundColor: '#FFF',
      }}>
      <Text
        style={{
          top: 20,
          color: '#0019A7',
          textAlign: 'center',
          fontFamily: 'Gilroy',
          fontSize: 20,
          fontWeight: 700,
        }}>
        4 Datters à proximité
      </Text>
      <View
        style={{
          top: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center',
          width: '95%',
          height: 240,
        }}>
        <TouchableOpacity
          onPress={scrollLeft}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../../assets/images/retour_flèche_bleu.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>

        <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          ref={flatListRef}
          getItemLayout={(data, index) => ({
            length: 150,
            offset: 150 * index,
            index,
          })}
        />

        <TouchableOpacity
          onPress={scrollRight}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../../assets/images/retour_flèche_bleu.png')}
            style={{width: 20, height: 20, transform: [{rotate: '180deg'}]}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SliderMap;
