import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {getData, storeData} from '../../services/storage';

interface DefaultCodeProps {
  setShowDefaultCode2: (value: boolean) => void;
}

interface OtherCodeProps {
  setShowDefaultCode2: (value: boolean) => void;
  handleStoreData: (key: string, value: string[]) => void;
  storageKey: string;
  handleButtonPress: (value: string) => void;
  userEthnicity: string[] | [];
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
          source={require('../../../assets/images/SelectionnerOrigine.png')}
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
      Choix multiples.
    </Text>
  </>
);

const DefaultCode2: React.FC<OtherCodeProps> = ({
  setShowDefaultCode2,
  handleStoreData,
  storageKey,
  handleButtonPress,
  userEthnicity,
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
            source={require('../../../assets/images/SelectionnerOrigine1.png')}
            style={{
              width: 308,
              height: 51,
              left: 17,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleButtonPress('Asiatique');
            handleStoreData(storageKey, userEthnicity);
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
            Asiatique
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleButtonPress('Blanc/Caucasien.ne');
            handleStoreData(storageKey, userEthnicity);
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
            Blanc/Caucasien.ne
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleButtonPress('Indien.ne');
            handleStoreData(storageKey, userEthnicity);
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
            Indien.ne
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleButtonPress('Latino/Hispanique');
            handleStoreData(storageKey, userEthnicity);
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
            Latino/Hispanique
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleButtonPress('Noir.e/Africain.ne');
            handleStoreData(storageKey, userEthnicity);
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
            Noir.e/Africain.ne
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleButtonPress('Originaire du Moyen Orient');
            handleStoreData(storageKey, userEthnicity);
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
            Originaire du Moyen Orient
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleButtonPress('Métis.se');
            handleStoreData(storageKey, userEthnicity);
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
            Métis.se
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </>
);

const MyComponentOrigine = () => {
  const [showDefaultCode2, setShowDefaultCode2] = useState(false);
  const [userEthnicity, setUserEthnicity] = useState<string[]>([]);

  const storageKey: string = 'user_ethnicity';

  const handleButtonPress = (value: string) => {
    let newUserEthnicity = [...userEthnicity];

    if (newUserEthnicity !== null && newUserEthnicity.includes(value)) {
      newUserEthnicity = newUserEthnicity.filter(item => item !== value);
    } else {
      newUserEthnicity.push(value);
    }

    handleStoreData(storageKey, newUserEthnicity);
    setUserEthnicity(newUserEthnicity);
    // console.log('Langue sélectionner : ' + newUserEthnicity);
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
        setUserEthnicity(JSON.parse(storedData));
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
          userEthnicity={userEthnicity}
          handleButtonPress={handleButtonPress}
        />
      )}
    </>
  );
};

export {MyComponentOrigine};
