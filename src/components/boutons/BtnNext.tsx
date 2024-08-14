import * as React from 'react';
import {useState} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Styles from '../../../assets/style/Styles';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

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
      : background === 'black'
      ? require('../../../assets/boutons/Bouton-Noir.png')
      : require('../../../assets/boutons/Bouton-Blanc.png');

  return (
    <View style={[Styles.ViewBtn2, {top: top}]}>
      <TouchableOpacity
        onPress={() => {
          setButtonPressed(txt);
          const params = {[propName]: propRoute};
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
              buttonPressed === txt
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : btnColor
            }>
            <Text
              style={[
                Styles.textBtn9,
                {
                  zIndex: 1,
                  color: buttonPressed === txt ? '#fff' : '#0019A7',
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
