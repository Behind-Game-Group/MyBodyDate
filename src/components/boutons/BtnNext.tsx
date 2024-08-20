import * as React from 'react';
import {useState} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Styles from '../../../assets/style/Styles';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {StorageValue} from '../../../interfaces/StorageValueInterface';
import {storeData} from '../../services/storage';
import {User} from '../../../interfaces/UserInterface';
import {postMethod} from '../../services/axiosInstance';

type NavigatorParams = {
  BaseNavigator: {BaseRoute: string};
  RegisterNavigator: {RegisterRoute: string};
  LogInNavigator: {LoginRoute: string};
  SignInNavigator: {SignInRoute: string};
  DiscoverNavigator: {DiscoverRoute: string};
  ProfilNavigator: {ProfilRoute: string};
  SearchNavigator: {SearchRoute: string};
  GameNavigator: {GameRoute: string};
  AppsAffinitairesNavigator: {AppsAffinitairesRoute: string};
};

type NavigatorName = keyof NavigatorParams;

interface BtnNextProps {
  navigation: NavigationProp<ParamListBase>;
  navigateTo: string;
  handleStore:
    | {
        key: string;
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
          | undefined;
      }
    | undefined;
  postInfo:
    | {
        url: string;
        key: string;
        data:
          | string
          | string[]
          | number
          | number[]
          | boolean
          | boolean[]
          | User[]
          | StorageValue
          | StorageValue[]
          | undefined;
      }
    | undefined;
  propName: string;
  propRoute: string | undefined;
  txt: string;
  background: string | undefined;
  top: number;
  left: number | undefined;
}

export const BtnNext: React.FC<BtnNextProps> = ({
  navigation,
  navigateTo,
  handleStore,
  postInfo,
  propName,
  propRoute,
  txt,
  background,
  top,
  left,
}) => {
  const [buttonPressed, setButtonPressed] = useState<string>();
  console.log(buttonPressed);
  const btnColor =
    background === 'white'
      ? require('../../../assets/boutons/Bouton-Blanc.png')
      : background === 'Blue'
      ? require('../../../assets/boutons/Bouton-Bleu.png')
      : background === 'Black'
      ? require('../../../assets/boutons/Bouton-Noir.png')
      : background === 'Email'
      ? require('../../../assets/boutons/Bouton-Bleu-Email.png')
      : background === 'Email-noir'
      ? require('../../../assets/boutons/Bouton-Bleu-Email.png')
      : background === 'Email-rouge'
      ? require('../../../assets/boutons/Bouton-Rouge-Email.png')
      : background === 'Apple'
      ? require('../../../assets/boutons/Bouton-Noir-Apple.png')
      : background === 'Facebook'
      ? require('../../../assets/boutons/Bouton-Noir-Facebook.png')
      : background === 'Google'
      ? require('../../../assets/boutons/Bouton-Noir-Google.png')
      : background === 'Numero'
      ? require('../../../assets/boutons/Bouton-Bleu-Telephone.png')
      : require('../../../assets/boutons/Bouton-Blanc.png');

  const handleStoreData = async (handleStore: StorageValue) => {
    try {
      await storeData(handleStore?.key, handleStore?.value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const postData = async () => {
    const url = postInfo?.url;
    const data = {
      phoneNumber: postInfo?.data,
    };
    // console.log(data);
    try {
      if (url !== undefined) {
        const response = await postMethod(url, data);
        console.log('Réponse du serveur après la requête POST :', response);
        if (response) {
          const params = {[propName]: propRoute};
          navigation.navigate(
            navigateTo as NavigatorName,
            params as NavigatorParams[NavigatorName],
          );
        }
      }
    } catch (error) {
      console.error('Erreur lors de la requête POST :', error);
    }
  };

  return (
    <View style={[Styles.ViewBtn2, {top: top}]}>
      <TouchableOpacity
        onPress={() => {
          setButtonPressed(txt);
          const params = {[propName]: propRoute};
          postInfo
            ? postData
            : handleStore !== undefined
            ? handleStoreData(handleStore)
            : null;
          navigation.navigate(
            navigateTo as NavigatorName,
            params as NavigatorParams[NavigatorName],
          );
        }}
        accessibilityLabel={txt}>
        {background !== undefined ? (
          <ImageBackground
            resizeMode="contain"
            style={[
              {
                top: 0,
                width: 350,
                height: 58,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}
            source={
              (buttonPressed === txt && background === 'Email') ||
              background === 'Email-rouge' ||
              background === 'Email-noir'
                ? require('../../../assets/boutons/Bouton-Rouge-Email.png')
                : buttonPressed === txt && background === 'Numero'
                ? require('../../../assets/boutons/Bouton-Rouge-Telephone.png')
                : buttonPressed === txt && background === 'Facebook'
                ? require('../../../assets/boutons/Bouton-Rouge-Facebook.png')
                : buttonPressed === txt && background === 'Apple'
                ? require('../../../assets/boutons/Bouton-Rouge-Apple.png')
                : buttonPressed === txt && background === 'Google'
                ? require('../../../assets/boutons/Bouton-Rouge-Google.png')
                : buttonPressed === txt &&
                  background !== 'Email' &&
                  background !== 'Email-rouge' &&
                  background !== 'Email-Noir' &&
                  background !== 'Numero' &&
                  background !== 'Apple' &&
                  background !== 'Facebook' &&
                  background !== 'Google'
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : btnColor
            }>
            <Text
              style={[
                Styles.textBtn9,
                {
                  zIndex: 1,
                  color:
                    (buttonPressed === txt && background === 'Blue') ||
                    (buttonPressed !== txt && background === 'Blue') ||
                    (buttonPressed !== txt && background === 'Email') ||
                    (buttonPressed !== txt && background === 'Email-noir') ||
                    (buttonPressed !== txt && background === 'Email-rouge') ||
                    (buttonPressed !== txt && background === 'Black') ||
                    (buttonPressed !== txt && background === 'Apple') ||
                    (buttonPressed !== txt && background === 'Facebook') ||
                    (buttonPressed !== txt && background === 'Google') ||
                    (buttonPressed !== txt && background === 'Numero')
                      ? '#fff'
                      : '#0019A7',
                  left: left ? left : 0,
                },
              ]}>
              {txt}
            </Text>
          </ImageBackground>
        ) : (
          <Text
            style={[
              Styles.textBtn9,
              {
                zIndex: 1,
                color: buttonPressed !== txt ? '#fff' : '#880808',
                left: left,
                textAlign: 'center',
                fontFamily: 'Comfortaa',
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: '700',
                textDecorationLine: 'underline',
              },
            ]}>
            {txt}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
