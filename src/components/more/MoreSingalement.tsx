import React from 'react';
import {View, Text, Image} from 'react-native';
type MoreSingalementProps = {
  userPrenom: string;
};

export const MoreSingalement: React.FC<MoreSingalementProps> = ({
  userPrenom,
}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '50%',
        width: '96%',
        alignSelf: 'center',
      }}>
      <Text
        style={{
          color: '#0019A7',
          textAlign: 'center',
          fontFamily: 'Comfortaa',
          fontSize: 24,
          fontStyle: 'normal',
          fontWeight: 700,
        }}>
        Signaler {userPrenom} ?
      </Text>
      <Image
        source={require('../../../assets/images/ico-like.png')}
        style={{
          width: 50,
          height: 50,
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      />
      <Text
        style={{
          color: '#0019A7',
          textAlign: 'center',
          fontFamily: 'Comfortaa',
          fontSize: 24,
          fontStyle: 'normal',
          fontWeight: 700,
        }}>
        MERCI !
      </Text>
      <Text
        style={{
          color: '#0019A7',
          textAlign: 'center',
          fontFamily: 'Comfortaa',
          fontSize: 24,
          fontStyle: 'normal',
          fontWeight: 700,
        }}>
        Votre signalement a bien été pris en compte !
      </Text>
    </View>
  );
};
