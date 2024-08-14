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
  setUserStatut: (value: string) => void;
  userStatut: string | undefined;
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
            Votre statut professionnel
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
      Choix unique.
    </Text>
  </>
);

const DefaultCode2: React.FC<OtherCodeProps> = ({
  setShowDefaultCode2,
  handleStoreData,
  storageKey,
  setUserStatut,
  // userAlcool,
}) => (
  <>
    <View
      style={{
        alignItems: 'center',
        top: 140,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 25, // Adjust the border radius as needed
        paddingBottom: 160, // Increase this value to move the bottom border down
        marginLeft: 41,
        marginRight: 72,
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
              Votre statut professionnel
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserStatut('Apprenti');
            handleStoreData(storageKey, 'Apprenti');
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 20,
            }}>
            Apprenti
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserStatut('Artisan');
            handleStoreData(storageKey, 'Artisan');
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 40,
            }}>
            Artisan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserStatut('Commerçant');
            handleStoreData(storageKey, 'Commerçant');
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 60,
            }}>
            Commerçant
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserStatut('Fonctionnaire');
            handleStoreData(storageKey, 'Fonctionnaire');
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 80,
            }}>
            Fonctionnaire
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserStatut('Intérimaire');
            handleStoreData(storageKey, 'Intérimaire');
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 100,
            }}>
            Intérimaire
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserStatut('Libéral');
            handleStoreData(storageKey, 'Libéral');
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 120,
            }}>
            Libéral
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserStatut('Salarié');
            handleStoreData(storageKey, 'Salarié');
          }}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 16,
              color: '#000',
              textAlign: 'center',
              top: 140,
            }}>
            Salarié
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
      Choix unique.
    </Text>
  </>
);

const MyComponentStatut = () => {
  const [showDefaultCode2, setShowDefaultCode2] = useState(false);
  const [userStatut, setUserStatut] = useState<string>();
  const storageKey: string = 'user_statut';
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
        setUserStatut(JSON.parse(storedData));
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
          userStatut={userStatut}
          setUserStatut={setUserStatut}
        />
      )}
    </>
  );
};

export {MyComponentStatut};
