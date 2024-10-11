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
  handleStoreData: (key: string, value: string) => void;
  storageKey: string;
  setUserSmoking: (value: string) => void;
  userSmoking: string | undefined;
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
      >
        <Image
          source={require('../../../assets/images/ConsCigarettes.png')}
          style={{
            width: 310,
            height: 51,
          }}
        />
      </TouchableOpacity>
    </View>
    <Text
      style={{
        fontFamily: 'Comfortaa',
        fontWeight: '700',
        fontSize: 12,
        color: '#0019A7',
        left: 30,
        top: 450,
      }}>
      Choix unique.
    </Text>
  </>
);

const DefaultCode2: React.FC<OtherCodeProps> = ({
  setShowDefaultCode2,
  handleStoreData,
  storageKey,
  setUserSmoking,
  // userAlcool,
}) => (
  <>
    <View
      style={{
        alignItems: 'center',
        top: 140,
        borderWidth: 1,
        borderColor: '#0019A7',
        borderRadius: 25, // Adjust the border radius as needed
        paddingBottom: 130, // Increase this value to move the bottom border down
        marginLeft: 40,
        marginRight: 75,
      }}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => setShowDefaultCode2(false)} // Show the first code on click
        >
          <ImageBackground
            source={require('../../../assets/images/ConsCigarettes1.png')}
            style={{
              width: 308,
              height: 51,
              left: 17,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserSmoking("À l'occasion");
            handleStoreData(storageKey, "À l'occasion");
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#0019A7',
              textAlign: 'center',
              top: 20,
            }}>
            À l'occasion
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserSmoking('Régulièrement');
            handleStoreData(storageKey, 'Régulièrement');
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#0019A7',
              textAlign: 'center',
              top: 40,
            }}>
            Régulièrement
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserSmoking('Rarement');
            handleStoreData(storageKey, 'Rarement');
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#0019A7',
              textAlign: 'center',
              top: 60,
            }}>
            Rarement
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserSmoking('Jamais');
            handleStoreData(storageKey, 'Jamais');
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#0019A7',
              textAlign: 'center',
              top: 80,
            }}>
            Jamais
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserSmoking("J'ai arrêté");
            handleStoreData(storageKey, "J'ai arrêté");
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#0019A7',
              textAlign: 'center',
              top: 100,
            }}>
            J'ai arrêté
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    <Text
      style={{
        fontFamily: 'Comfortaa',
        fontWeight: '700',
        fontSize: 12,
        color: '#0019A7',
        left: 30,
        top: 150,
      }}>
      Choix unique.
    </Text>
  </>
);

const MyComponentFumer = () => {
  const [showDefaultCode2, setShowDefaultCode2] = useState(false);
  const [userSmoking, setUserSmoking] = useState<string>();
  const storageKey: string = 'user_smoking';
  const handleStoreData = async (key: string, value: string) => {
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
        setUserSmoking(JSON.parse(storedData));
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
          userSmoking={userSmoking}
          setUserSmoking={setUserSmoking}
        />
      )}
    </>
  );
};

export {MyComponentFumer};
