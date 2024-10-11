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
  setUserMorphologie: (value: string) => void;
  userMorphologie: string | undefined;
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
          source={require('../../../assets/images/TypeMorphologie.png')}
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
  setUserMorphologie,
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
          <Image
            source={require('../../../assets/images/TypeMorphologie1.png')}
            style={{
              width: 308,
              height: 51,
              left: 17,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserMorphologie('Elancé.e');
            handleStoreData(storageKey, 'Elancé.e');
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
            Elancé.e
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserMorphologie('Mince');
            handleStoreData(storageKey, 'Mince');
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
            Mince
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserMorphologie('Sportif.ve');
            handleStoreData(storageKey, 'Sportif.ve');
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
            Sportif.ve
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserMorphologie('Corpulence Moyenne');
            handleStoreData(storageKey, 'Corpulence Moyenne');
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
            Corpulence Moyenne
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserMorphologie('Rond.e');
            handleStoreData(storageKey, 'Rond.e');
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
            Rond.e
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </>
);

const MyComponentMorphologie = () => {
  const [showDefaultCode2, setShowDefaultCode2] = useState(false);
  const [userMorphologie, setUserMorphologie] = useState<string>();
  const storageKey: string = 'user_morphology';
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
        setUserMorphologie(JSON.parse(storedData));
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
          userMorphologie={userMorphologie}
          setUserMorphologie={setUserMorphologie}
        />
      )}
    </>
  );
};

export {MyComponentMorphologie};
