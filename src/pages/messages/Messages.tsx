import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import MenuSlide from '../../components/menus/MenuSlide';
import MessageReceived from '../../components/message/MessageReceived';
import UserLike from '../../components/message/UserLike';
import MessageSended from '../../components/message/MessageSended';
import {RouteType} from '../../../types/routes/RouteType';
import MenuBottom from '../../components/menus/MenuBottom';
import {
  NavigationHelpers,
  NavigationProp,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import {BottomTabDescriptorMap} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {EdgeInsets} from 'react-native-safe-area-context';

type TabMessagesProps = {
  navigation: NavigationProp<RouteType, 'Messages'>;
  imagePath: string;
  tabPath: string;
  navigationTab: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  insets: EdgeInsets;
};

export const Messages: React.FC<TabMessagesProps> = ({
  navigation,
  imagePath,
  tabPath,
  navigationTab,
  state,
  descriptors,
  insets,
}) => {
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);
  const [searchMatch, onSearchMatch] = useState<string>('');
  const [messageViewSelected, setMessageViewSelected] =
    useState<string>('received');

  return (
    <View style={{backgroundColor: '#fff', height: '100%', width: 'auto'}}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        backButton="Retour"
        imagePath={imagePath}
        tabPath={tabPath}
        backgroundColor={'white'}
        settingsNavigation={undefined}
      />
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
          top: 20,
          width: '90%',
        }}>
        <Text
          style={{
            color: '#0019A7',
            fontFamily: 'Comfortaa',
            fontSize: 24,
            fontWeight: 700,
          }}>
          Messages
        </Text>
        <SafeAreaView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: '#0019A7',
          }}>
          <TextInput
            style={{color: '#0019A7', marginRight: 15}}
            onChangeText={onSearchMatch}
            value={searchMatch}
            placeholder={'Recherche un match'}
          />
          <TouchableOpacity>
            <Image
              style={{width: 30, height: 30}}
              source={require('../../../assets/boutons/btn-search.png')}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
      <ImageBackground
        source={require('../../../assets/images/bg-parametres.png')}
        style={{
          width: 'auto',
          height: '100%',
          top: '5%',
          left: 0,
        }}
        resizeMode="cover">
        <UserLike />
        <View
          style={{
            flexDirection: 'row',
            top: 40,
            justifyContent: 'space-between',
            width: '90%',
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            style={{
              height: 40,
              borderBottomWidth: messageViewSelected === 'received' ? 1 : 0,
              borderColor: '#0019A7',
            }}
            onPress={() => setMessageViewSelected('received')}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                fontSize: 20,
                fontWeight: 700,
              }}>
              Messages reçus
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              borderBottomWidth: messageViewSelected === 'sended' ? 1 : 0,
              borderColor: '#0019A7',
            }}
            onPress={() => setMessageViewSelected('sended')}>
            <Text
              style={{
                color: '#0019A7',
                fontFamily: 'Comfortaa',
                fontSize: 20,
                fontWeight: 700,
              }}>
              Messages envoyés
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{top: 50}}>
          <>
            {messageViewSelected === 'received' ? (
              <MessageReceived navigation={navigation} />
            ) : (
              <MessageSended navigation={navigation} />
            )}
          </>
        </View>
      </ImageBackground>
      {/* <MenuBottom
        navigation={navigationTab}
        tabPath={'Message'}
        state={state}
        descriptors={descriptors}
        insets={insets}
      /> */}
    </View>
  );
};
