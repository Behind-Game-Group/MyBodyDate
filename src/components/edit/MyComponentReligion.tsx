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
  setUserReligion: (value: string) => void;
  userReligion: string | undefined;
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
          source={require('../../../assets/images/Religion.png')}
          style={{
            width: 309,
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
  setUserReligion,
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
        paddingBottom: 180, // Increase this value to move the bottom border down
        marginLeft: 56,
        marginRight: 61,
      }}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => setShowDefaultCode2(false)} // Show the first code on click
        >
          <ImageBackground
            source={require('../../../assets/images/Religion1.png')}
            style={{
              width: 280,
              height: 51,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserReligion('Chrétienne');
            handleStoreData(storageKey, 'Chrétienne');
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
            Chrétienne
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserReligion('Hindouisme');
            handleStoreData(storageKey, 'Hindouisme');
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
            Hindouisme
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserReligion('Jaïnisme');
            handleStoreData(storageKey, 'Jaïnisme');
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
            Jaïnisme
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserReligion('Judaïsme');
            handleStoreData(storageKey, 'Judaïsme');
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
            Judaïsme
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserReligion('Mormonisme');
            handleStoreData(storageKey, 'Mormonisme');
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
            Mormonisme
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserReligion('Saint des derniers jours');
            handleStoreData(storageKey, 'Saint des derniers jours');
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#0019A7',
              textAlign: 'center',
              top: 120,
            }}>
            Saints des derniers jours
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserReligion('Islam');
            handleStoreData(storageKey, 'Islam');
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#0019A7',
              textAlign: 'center',
              top: 140,
            }}>
            Islam
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserReligion('Zoroastrisme');
            handleStoreData(storageKey, 'Zoroastrisme');
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#0019A7',
              textAlign: 'center',
              top: 160,
            }}>
            Zoroastrisme
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

const MyComponentReligion = () => {
  const [showDefaultCode2, setShowDefaultCode2] = useState(false);
  const [userReligion, setUserReligion] = useState<string>();
  const storageKey: string = 'user_religion';
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
        setUserReligion(JSON.parse(storedData));
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
          userReligion={userReligion}
          setUserReligion={setUserReligion}
        />
      )}
    </>
  );
};

export {MyComponentReligion};
