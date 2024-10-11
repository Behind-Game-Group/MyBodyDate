import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';

export const PassFlashPremium1: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../../assets/images/bg-parametres.png')}
        style={{flex: 1}}>
        <View style={{left: 350, marginTop: 30}}>
          <Image
            source={require('../../../assets/images/Group-58.png')}
            style={{
              top: 4,
              width: 20,
              height: 18,
            }}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            top: 20,
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#FFF',
            }}>
            Pulse
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Gilory',
              fontWeight: '700',
              color: '#FFF',
            }}>
            Pass
          </Text>
        </View>
        <Image
          source={require('../../../assets/images/Line-131.png')}
          style={{
            width: 195,
            height: 3,
            top: 107,
            position: 'absolute',
            right: 0,
          }}
        />
        <Image
          source={require('../../../assets/images/Line-130.png')}
          style={{
            width: 390,
            height: 1,
            top: 30,
          }}
        />
        <Image
          source={require('../../../assets/images/selectionner.png')}
          style={{
            width: 356,
            height: 60,
            top: 450,
            alignSelf: 'center',
          }}
        />
      </ImageBackground>
    </View>
  );
};
