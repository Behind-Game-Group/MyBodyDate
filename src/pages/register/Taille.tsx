import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {getData} from '../../services/storage';
import StylesTaille from '../../../assets/style/styleScreens/styleRegister/StyleTaille';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
import {BtnNext} from '../../components/boutons/BtnNext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Taille'>;
};

type ItemProps = {
  index: number;
  item: number;
};

export const Taille: React.FC<HomeProps> = ({navigation}) => {
  const [selectedSize, setSelectedSize] = useState<number | undefined>(
    undefined,
  );

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    try {
      const userTaille = await getData('taille');
      setSelectedSize(userTaille ? parseInt(userTaille, 10) : undefined);
      if (userTaille) {
        const pageIndex = Math.floor((parseInt(userTaille, 10) - 140) / 3);
        setCurrentPage(pageIndex);
      } else {
        setCurrentPage(0);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const renderItem = ({index, item}: ItemProps) => {
    return (
      <View
        style={{
          width: 200,
          height: 40,
          margin: 5,
          alignSelf: 'center',
          borderBottomColor: '#fff',
          borderBottomWidth: index % 3 === 2 ? 0 : 1,
        }}>
        <TouchableOpacity onPress={() => setSelectedSize(item)}>
          <Text
            style={{
              fontFamily: 'Comfortaa-Bold',
              fontSize: 18,
              textAlign: 'center',
              color: item === selectedSize ? '#0019A7' : 'white',
            }}>{`${item} cm`}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const [currentPage, setCurrentPage] = useState<number>(0);

  // Générer des données pour les tailles de 140 à 250
  const data = Array.from({length: 111}, (_, i) => i + 140);

  // Diviser les données en pages de trois éléments
  const pages = [];
  for (let i = 0; i < data.length; i += 3) {
    pages.push(data.slice(i, i + 3));
  }

  return (
    <View style={StylesTaille.container}>
      <ImageBackground
        style={StylesTaille.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={{flex: 5}}>
          <View style={[StylesTaille.ViewText]}>
            <TitreUneLigne
              txtTitle="VOTRE TAILLE ?"
              textAlign="center"
              top={180}
              left={undefined}
              fontFamily={undefined}
              color={undefined}
              fontWeight={undefined}
              fontSize={24}
            />
          </View>
          <View style={[StylesTaille.ViewRow]}>
            <FlatList
              data={pages[currentPage]}
              renderItem={renderItem}
              keyExtractor={item => item.toString()}
              numColumns={3}
              columnWrapperStyle={{
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}
            />
            <View style={[StylesTaille.BoxCol]}>
              <TouchableOpacity
                style={[StylesTaille.ScrollUp]}
                onPress={() =>
                  setCurrentPage(prev => (prev > 0 ? prev - 1 : prev))
                }
                accessibilityLabel="Monter">
                <Image
                  source={require('../../../assets/boutons/Arrow1.png')}
                  style={[StylesTaille.ScrollUpImg]}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={[StylesTaille.ScrollDown]}
                onPress={() =>
                  setCurrentPage(prev =>
                    prev < pages.length - 1 ? prev + 1 : prev,
                  )
                }
                accessibilityLabel="Descendre">
                <Image
                  source={require('../../../assets/boutons/Arrow2.png')}
                  style={[StylesTaille.ScrollDownImg]}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={[StylesTaille.textWhite]}>Choix unique.</Text>
        </View>
        <BtnNext
          navigation={navigation}
          navigateTo="Langue_parler"
          propName="RegisterRoute"
          propRoute="Langue_parler"
          txt="Continuer"
          handleStore={{key: 'taille', value: selectedSize ?? ''}}
          postInfo={undefined}
          color="#0019A7"
          background="White"
          top={200}
          left={0}
          fontSize={18}
          fontFamily={undefined}
          fontWeight="700"
        />
      </ImageBackground>
    </View>
  );
};
