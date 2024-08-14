import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import {getData, storeData} from '../../services/storage';

interface DefaultCodeProps {
  setShowDefaultCode2: (value: boolean) => void;
}

interface OtherCodeProps {
  setShowDefaultCode2: (value: boolean) => void;
  handleStoreData: (key: string, value: string[]) => void;
  storageKey: string;
  handleButtonPress: (value: string) => void;
  userLangue: string[] | [];
}

const DefaultCode1: React.FC<DefaultCodeProps> = ({setShowDefaultCode2}) => (
  <>
    <View
      style={{
        alignItems: 'center',
        top: 140,
      }}>
      <TouchableOpacity
        onPress={() => setShowDefaultCode2(true)} // Show the second code on click
        style={{justifyContent: 'space-around', flexDirection: 'row'}}>
        <ImageBackground
          source={require('../../../assets/images/EncadrerEditRP.png')}
          style={{
            width: 282,
            height: 52,
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 15,
              color: '#000',
              textAlign: 'center',
              top: 13,
            }}>
            Langue
          </Text>
        </ImageBackground>
        <Image
          source={require('../../../assets/images/FlecheEditRP.png')}
          style={{
            width: 19,
            height: 16,
            left: 20,
            top: 15,
          }}
        />
      </TouchableOpacity>
    </View>
    <Text
      style={{
        fontFamily: 'Comfortaa',
        fontWeight: '700',
        fontSize: 12,
        color: '#000',
        left: 30,
        top: 450,
      }}>
      Choix multiples.
    </Text>
  </>
);

const DefaultCode2: React.FC<OtherCodeProps> = ({
  setShowDefaultCode2,
  handleStoreData,
  storageKey,
  handleButtonPress,
  userLangue,
}) => (
  <>
    <View
      style={{
        alignItems: 'center',
        top: 30,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 25, // Adjust the border radius as needed
        paddingBottom: 220, // Increase this value to move the bottom border down
        marginLeft: 41,
        marginRight: 72,
        left: 20,
      }}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => setShowDefaultCode2(false)} // Show the first code on click
        >
          <ImageBackground
            source={require('../../../assets/images/EncadrerEditRP.png')}
            style={{
              width: 282,
              height: 52,
            }}>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 15,
                color: '#000',
                textAlign: 'center',
                top: 13,
              }}>
              Langue
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleButtonPress('Français');
            handleStoreData(storageKey, userLangue);
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 10,
            }}>
            Français
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleButtonPress('Espagnol');
            handleStoreData(storageKey, userLangue);
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 30,
            }}>
            Espagnol
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleButtonPress('Néerlandais');
            handleStoreData(storageKey, userLangue);
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 50,
            }}>
            Néerlandais
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleButtonPress('Portugais');
            handleStoreData(storageKey, userLangue);
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 70,
            }}>
            Portugais
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleButtonPress('Polonais');
            handleStoreData(storageKey, userLangue);
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 90,
            }}>
            Polonais
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleButtonPress('Chinois');
            handleStoreData(storageKey, userLangue);
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 110,
            }}>
            Chinois
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleButtonPress('Anglais');
            handleStoreData(storageKey, userLangue);
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 130,
            }}>
            Anglais
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleButtonPress('Allemand');
            handleStoreData(storageKey, userLangue);
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 150,
            }}>
            Allemand
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleButtonPress('Italien');
            handleStoreData(storageKey, userLangue);
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 170,
            }}>
            Italien
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleButtonPress('Arabe');
            handleStoreData(storageKey, userLangue);
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 190,
            }}>
            Arabe
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleButtonPress('Grec');
            handleStoreData(storageKey, userLangue);
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 210,
            }}>
            Grec
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleButtonPress('Japonnais');
            handleStoreData(storageKey, userLangue);
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 220,
            }}>
            Japonnais
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    <Text
      style={{
        fontFamily: 'Comfortaa',
        fontWeight: '700',
        fontSize: 12,
        color: '#000',
        left: 30,
        top: 150,
      }}>
      Choix multiples.
    </Text>
  </>
);

const MyComponentLangue = () => {
  const [showDefaultCode2, setShowDefaultCode2] = useState(false);
  const [userLangue, setUserLanguage] = useState<string[]>([]);

  const storageKey: string = 'user_langues';

  const handleButtonPress = (value: string) => {
    let newUserLangue = [...userLangue];

    if (newUserLangue !== null && newUserLangue.includes(value)) {
      newUserLangue = newUserLangue.filter(item => item !== value);
    } else {
      newUserLangue.push(value);
    }

    handleStoreData(storageKey, newUserLangue);
    setUserLanguage(newUserLangue);
    // console.log('Langue sélectionner : ' + newUserLangue);
  };

  const handleStoreData = async (key: string, value: string[]) => {
    try {
      await storeData(key, JSON.stringify(value));
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetData = async () => {
    try {
      const storedData = await getData(storageKey);
      if (storedData) {
        setUserLanguage(JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <>
      {!showDefaultCode2 ? (
        <DefaultCode1 setShowDefaultCode2={setShowDefaultCode2} />
      ) : (
        <DefaultCode2
          setShowDefaultCode2={setShowDefaultCode2}
          handleStoreData={handleStoreData}
          storageKey={storageKey}
          userLangue={userLangue}
          handleButtonPress={handleButtonPress}
        />
      )}
    </>
  );
};

export {MyComponentLangue};
