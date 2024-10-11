import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {getData, storeData} from '../../services/storage';

interface DefaultCodeProps {
  setShowDefaultCode2: (value: boolean) => void;
}

interface OtherCodeProps {
  setShowDefaultCode2: (value: boolean) => void;
  handleStoreData: (key: string, value: string) => void;
  storageKey: string;
  setUserAstrologie: (value: string) => void;
  userAstrologie: string | undefined;
}

const DefaultCode1: React.FC<DefaultCodeProps> = ({setShowDefaultCode2}) => (
  <>
    <View
      style={{
        alignSelf: 'center',
        top: 140,
      }}>
      <TouchableOpacity
        onPress={() => setShowDefaultCode2(true)} // Show the second code on click
      >
        <Image
          source={require('../../../assets/images/SigneAstrologie.png')}
          style={{
            width: 309,
            height: 51,
            alignSelf: 'center',
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
  setUserAstrologie,
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
        paddingBottom: 170, // Increase this value to move the bottom border down
        marginLeft: 40,
        marginRight: 75,
      }}>
      <ScrollView
        style={{
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => setShowDefaultCode2(false)} // Show the first code on click
        >
          <ImageBackground
            source={require('../../../assets/images/SigneAstrologie1.png')}
            style={{
              width: 308,
              height: 51,
              left: 17,
            }}>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                fontSize: 15,
                color: '#0019A7',
                textAlign: 'center',
                right: 10,
                top: 10,
              }}>
              Signe astrologique
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserAstrologie('Bélier');
            handleStoreData(storageKey, 'Bélier');
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
            Bélier
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserAstrologie('Taureau');
            handleStoreData(storageKey, 'Taureau');
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
            Taureau
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserAstrologie('Gémeaux');
            handleStoreData(storageKey, 'Gémeaux');
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
            Gémeaux
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserAstrologie('Cancer');
            handleStoreData(storageKey, 'Cancer');
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
            Cancer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserAstrologie('Lion');
            handleStoreData(storageKey, 'Lion');
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
            Lion
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserAstrologie('Vierge');
            handleStoreData(storageKey, 'Vierge');
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
            Vierge
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserAstrologie('Balance');
            handleStoreData(storageKey, 'Balance');
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
            Balance
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserAstrologie('Scorpion');
            handleStoreData(storageKey, 'Scorpion');
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
            Scorpion
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserAstrologie('Sagittaire');
            handleStoreData(storageKey, 'Sagittaire');
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
            Sagittaire
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserAstrologie('Capricorne');
            handleStoreData(storageKey, 'Capricorne');
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
            Capricorne
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserAstrologie('Verseau');
            handleStoreData(storageKey, 'Verseau');
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
            Verseau
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserAstrologie('Poissons');
            handleStoreData(storageKey, 'Poissons');
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
            Poissons
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  </>
);

const MyComponentAstrologie = () => {
  const [showDefaultCode2, setShowDefaultCode2] = useState(false);
  const [userAstrologie, setUserAstrologie] = useState<string>();
  const storageKey: string = 'user_astrology';
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
        setUserAstrologie(JSON.parse(storedData));
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
          userAstrologie={userAstrologie}
          setUserAstrologie={setUserAstrologie}
        />
      )}
    </>
  );
};

export {MyComponentAstrologie};
