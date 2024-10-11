import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from '../../interfaces/UserInterface';
import {StorageValue} from '../../interfaces/StorageValueInterface';

// Pour stocker une donnée
export const storeData = async (
  key: string,
  value:
    | string
    | string[]
    | number
    | number[]
    | boolean
    | boolean[]
    | User[]
    | StorageValue
    | StorageValue[]
    | undefined,
) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log(`Données pour la clé ${key} stockées avec succès`);
  } catch (error) {
    console.error(`Erreur lors du stockage pour la clé ${key} :`, error);
    throw error;
  }
};

// Pour stocker plusieurs données
export const storeDatas = async (
  items: [string, string | boolean | StorageValue][],
) => {
  try {
    if (!Array.isArray(items)) {
      throw new Error('Les paires clé-valeur ne sont pas dans un tableau');
    }
    const jsonItems: [string, string][] = items.map(([key, value]) => {
      // Convertir la valeur en chaîne de caractères si elle est de type boolean
      const serializedValue =
        typeof value === 'boolean' ? value.toString() : value;
      return [key, JSON.stringify(serializedValue)];
    });
    await AsyncStorage.multiSet(jsonItems);
    console.log(`Données stockées avec succès`);
  } catch (error) {
    console.error(`Erreur lors du stockage des données :`, error);
    throw error;
  }
};

// Pour récupérer une donnée
export const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error(`Erreur lors de la récupération pour la clé ${key} :`, error);
    throw error;
  }
};

// Pour récupérer plusieurs données
export const getDatas = async (keys: string[]) => {
  try {
    const values = await AsyncStorage.multiGet(keys);
    return values.map(item => ({
      key: item[0],
      value: item[1] !== null ? JSON.parse(item[1]) : null,
    }));
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    throw error;
  }
};
