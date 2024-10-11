import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

export const MoreListeBloquees: React.FC = () => {
  const RadioInput = ({
    selected,
    onPress,
  }: {
    selected: boolean;
    onPress: () => void;
  }) => {
    const icon = selected
      ? require('../../../assets/images/radio_selected_noir.png')
      : require('../../../assets/images/radio_unselected_two.png');

    return (
      <TouchableOpacity
        style={[{flexDirection: 'row', alignItems: 'center'}]}
        onPress={onPress}>
        <Image source={icon} style={{width: 20, height: 20, marginRight: 10}} />
      </TouchableOpacity>
    );
  };
  const [selectedOption, setSelectedOption] = useState(false);

  return (
    <View style={{width: '90%', height: '100%', alignSelf: 'center'}}>
      <Text
        style={{
          color: '#0019A7',
          textAlign: 'left',
          fontFamily: 'Comfortaa',
          fontSize: 20,
          fontStyle: 'normal',
          fontWeight: 700,
        }}>
        Liste noire :
      </Text>
      <Text
        style={{
          top: 20,
          color: '#000',
          textAlign: 'left',
          fontFamily: 'Comfortaa',
          fontSize: 15,
          fontStyle: 'normal',
          fontWeight: 500,
        }}>
        Liste des personnes
      </Text>
      <Text
        style={{
          top: 20,
          color: '#000',
          textAlign: 'left',
          fontFamily: 'Comfortaa',
          fontSize: 15,
          fontStyle: 'normal',
          fontWeight: 500,
        }}>
        signalées
      </Text>
      <TouchableOpacity
        style={{
          top: 40,
          height: 42,
          width: 146,
          backgroundColor: '#000',
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 9,
          alignSelf: 'flex-end',
          right: 20,
        }}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontFamily: 'Comfortaa',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 500,
          }}>
          Tout débloquer
        </Text>
      </TouchableOpacity>
      <View
        style={{
          top: 60,
          backgroundColor: '#0019A7',
          height: 2,
          width: '80%',
          alignSelf: 'center',
        }}
      />
      <Text
        style={{
          top: 80,
          color: '#0019A7',
          textAlign: 'left',
          fontFamily: 'Comfortaa',
          fontSize: 20,
          fontStyle: 'normal',
          fontWeight: 700,
        }}>
        Liste des personnes bloquées :{' '}
      </Text>
      <View
        style={{
          top: 100,
          width: '100%',
          maxHeight: '45%',
          alignSelf: 'center',
        }}>
        <ScrollView
          style={{
            width: '100%',
            paddingTop: 10,
          }}
          contentContainerStyle={{paddingBottom: 20}}>
          <View
            style={{
              width: 250,
              left: 10,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                height: 120,
              }}>
              <Image
                source={require('../../../assets/images/charles-ellipse.png')}
                style={{width: 80, height: 80, resizeMode: 'contain'}}
              />
              <Text
                style={{
                  color: '#0019A7',
                  textAlign: 'left',
                  fontFamily: 'Comfortaa',
                  fontSize: 20,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Charles
              </Text>
              <RadioInput
                selected={selectedOption === true}
                onPress={() => {
                  selectedOption === true
                    ? setSelectedOption(false)
                    : setSelectedOption(true);
                }}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  right: 10,
                  flexDirection: 'row',
                  backgroundColor: 'transparent',
                  width: 120,
                  height: 32,
                }}>
                <Image
                  source={require('../../../assets/images/croix-bold-rouge.png')}
                  style={{width: 12, height: 12, resizeMode: 'contain'}}
                />
                <Text
                  style={{
                    color: '#0019A7',
                    textAlign: 'left',
                    fontFamily: 'Comfortaa',
                    fontSize: 20,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Débloquer
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: '#0019A7',
                height: 2,
                width: '80%',
                alignSelf: 'center',
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                height: 120,
              }}>
              <Image
                source={require('../../../assets/images/bruno-ellipse.png')}
                style={{width: 80, height: 80, resizeMode: 'contain'}}
              />
              <Text
                style={{
                  color: '#0019A7',
                  textAlign: 'left',
                  fontFamily: 'Comfortaa',
                  fontSize: 20,
                  fontStyle: 'normal',
                  fontWeight: 700,
                }}>
                Bruno
              </Text>
              <RadioInput
                selected={selectedOption === true}
                onPress={() => {
                  selectedOption === true
                    ? setSelectedOption(false)
                    : setSelectedOption(true);
                }}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  right: 10,
                  flexDirection: 'row',
                  backgroundColor: 'transparent',
                  width: 120,
                  height: 32,
                }}>
                <Image
                  source={require('../../../assets/images/croix-bold-rouge.png')}
                  style={{width: 12, height: 12, resizeMode: 'contain'}}
                />
                <Text
                  style={{
                    color: '#0019A7',
                    textAlign: 'left',
                    fontFamily: 'Comfortaa',
                    fontSize: 20,
                    fontStyle: 'normal',
                    fontWeight: 700,
                  }}>
                  Débloquer
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: '#0019A7',
                height: 2,
                width: '80%',
                alignSelf: 'center',
              }}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
