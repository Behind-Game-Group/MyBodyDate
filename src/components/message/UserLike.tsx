import {View, ImageBackground, Text} from 'react-native';
import React from 'react';

export const UserLike: React.FC = () => {
  const userLike: boolean = true;
  const premium: boolean = false;

  return (
    <View
      style={{
        flexDirection: 'column',
        top: 20,
        width: '90%',
        height: 150,
        alignSelf: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#0019A7',
      }}>
      {!userLike ? (
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                fontSize: 24,
                fontWeight: 700,
                marginRight: 10,
              }}>
              Vos likes
            </Text>
            <Text
              style={{
                color: 'rgba(0, 25, 167, 0.50)',
                fontFamily: 'Comfortaa',
                fontSize: 24,
                fontWeight: 700,
              }}>
              0
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              justifyContent: 'space-between',
              top: 10,
              width: '100%',
              height: 90,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: 142,
                alignItems: 'center',
                borderRadius: 50,
              }}>
              <View
                style={{
                  width: 92,
                  height: 92,
                  borderWidth: 3,
                  borderColor: '#9424FA',
                  borderRadius: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ImageBackground
                  resizeMode="contain"
                  source={require('../../../assets/images/vide-ellipse.png')}
                  style={{width: 90, height: 90}}
                />
              </View>
              <View
                style={{
                  width: 92,
                  height: 92,
                  borderWidth: 3,
                  borderColor: '#9424FA',
                  borderRadius: 100,
                  right: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ImageBackground
                  resizeMode="contain"
                  source={require('../../../assets/images/vide-ellipse.png')}
                  style={{width: 90, height: 90}}
                />
              </View>
            </View>
            <View style={{flexDirection: 'column', width: 180}}>
              <Text
                style={{
                  color: '#0019A7',
                  fontFamily: 'Gilroy',
                  fontSize: 20,
                  fontWeight: 700,
                }}>
                Découvrez vos likes
              </Text>
              <Text
                style={{
                  color: '#929EDE',
                  fontFamily: 'Comfortaa',
                  fontSize: 16,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Aucun like pour le moment, ni invitations.
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                fontSize: 24,
                fontWeight: 700,
                marginRight: 10,
              }}>
              Vos likes
            </Text>
            <Text
              style={{
                color: 'rgba(0, 25, 167, 0.50)',
                fontFamily: 'Comfortaa',
                fontSize: 24,
                fontWeight: 700,
              }}>
              21
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              justifyContent: 'space-between',
              top: 10,
              width: 180,
              height: 90,
            }}>
            <>
              <View
                style={{
                  flexDirection: 'row',
                  width: 160,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 92,
                    height: 92,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 3,
                    borderColor: '#9424FA',
                    borderRadius: 100,
                  }}>
                  <ImageBackground
                    resizeMode="contain"
                    source={require('../../../assets/images/lisa-ellipse.png')}
                    style={{width: 90, height: 90}}
                    blurRadius={premium ? 0 : 2}
                  />
                </View>
                <View
                  style={{
                    width: 92,
                    height: 92,
                    borderWidth: 3,
                    borderColor: '#9424FA',
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    right: 40,
                  }}>
                  <ImageBackground
                    resizeMode="contain"
                    source={require('../../../assets/images/beverly-ellipse.png')}
                    style={{width: 90, height: 90}}
                    blurRadius={premium ? 0 : 2}
                  />
                </View>
              </View>
              <View style={{flexDirection: 'column', width: 180}}>
                <Text
                  style={{
                    color: '#0019A7',
                    fontFamily: 'Gilroy',
                    fontSize: 20,
                    fontWeight: 700,
                  }}>
                  Découvrez vos likes
                </Text>
                <Text
                  style={{
                    color: '#929EDE',
                    fontFamily: 'Comfortaa',
                    fontSize: 16,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Révéler vos likes grace au Premium.
                </Text>
              </View>
            </>
          </View>
        </View>
      )}
    </View>
  );
};

export default UserLike;
