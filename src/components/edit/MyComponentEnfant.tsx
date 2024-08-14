import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {getData, storeData} from '../../services/storage';

interface DefaultCodeProps {
  setShowDefaultCode2: (value: boolean) => void;
}

interface OtherCodeProps {
  setShowDefaultCode2: (value: boolean) => void;
  handleStoreData: (key: string, value: string) => void;
  storageKey: string;
  setUserEnfant: (value: string) => void;
  userEnfant: string | undefined;
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
          source={require('../../../assets/images/Enfant.png')}
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
  setUserEnfant,
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
      <View
        style={{
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => setShowDefaultCode2(false)} // Show the first code on click
        >
          <Image
            source={require('../../../assets/images/Enfant1.png')}
            style={{
              width: 308,
              height: 51,
              left: 17,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserEnfant("J'aimerais en avoir");
            handleStoreData(storageKey, "J'aimerais en avoir");
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
            J'aimerais en avoir
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserEnfant("Je n'en veux pas");
            handleStoreData(storageKey, "Je n'en veux pas");
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
            Je n'en veux pas
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserEnfant("J'en ai et j'en veux d'autres");
            handleStoreData(storageKey, "J'en ai et j'en veux d'autres");
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
            J'en ai et j'en veux d'autres
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserEnfant("J'en ai et j'en veux plus");
            handleStoreData(storageKey, "J'en ai et j'en veux plus");
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
            J'en ai et j'en veux plus
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserEnfant('Je ne sais pas trop');
            handleStoreData(storageKey, 'Je ne sais pas trop');
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
            Je ne sais pas trop
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserEnfant("J'ai des enfants");
            handleStoreData(storageKey, "J'ai des enfants");
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
            J'ai des enfants
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserEnfant("J'aimerais avoir des enfants");
            handleStoreData(storageKey, "J'aimerais avoir des enfants");
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
            J'aimerais avoir des enfants
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </>
);

const MyComponentEnfant = () => {
  const [showDefaultCode2, setShowDefaultCode2] = useState(false);
  const [userEnfant, setUserEnfant] = useState<string>();
  const storageKey: string = 'user_child';
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
        setUserEnfant(JSON.parse(storedData));
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
          userEnfant={userEnfant}
          setUserEnfant={setUserEnfant}
        />
      )}
    </>
  );
};

export {MyComponentEnfant};
