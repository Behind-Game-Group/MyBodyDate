import React, {useEffect} from 'react';
import {
  StatusBar,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import MenuSlide from '../../components/menus/MenuSlide';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
type HomeProps = {
  navigation: NavigationProp<RouteType, 'TalkVideoAccept'>;
  imagePath: string;
};
export const TalkVideoAccept: React.FC<HomeProps> = ({
  navigation,
  imagePath,
}) => {
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <View style={{backgroundColor: '#fff', height: '100%', width: 'auto'}}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        backButton="Retour"
        imagePath={imagePath}
        tabPath={imagePath}
        backgroundColor={'white'}
        settingsNavigation={undefined}
      />
      <ImageBackground
        resizeMode="contain"
        source={require('../../../assets/images/bg-video-call-2.png')}
        style={{height: '100%'}}>
        <View
          style={{
            top: 20,
            width: '60%',
            height: 100,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'flex-end',
            right: 10,
          }}>
          <View style={{width: '40%', height: 'auto', flexDirection: 'column'}}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontFamily: 'Comfortaa',
                fontSize: 24,
                fontStyle: 'normal',
                fontWeight: 700,
              }}>
              KOLIA
            </Text>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontFamily: 'Gilroy',
                fontSize: 20,
                fontWeight: 600,
              }}>
              00:47
            </Text>
          </View>

          <TouchableOpacity
            style={{height: 40, width: 40, right: 0, top: 0}}
            onPress={() => navigation.navigate('TalkPhoneAccept')}>
            <Image
              style={{top: 0, alignSelf: 'center', width: 40, height: 40}}
              source={require('../../../assets/boutons/appel-video-vert.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            top: 200,
            left: 20,
            width: 173,
            height: 215,
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#0019A7',
          }}>
          <Image
            style={{top: 0, alignSelf: 'center', width: 173, height: 215}}
            source={require('../../../assets/images/cam-moi.png')}
          />
        </View>
        <View
          style={{
            top: 320,
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: 255,
            height: 62,
            borderRadius: 50,
            backgroundColor: 'rgba(0, 0, 0, 0.39)',
          }}>
          <TouchableOpacity style={{height: 45, width: 45}}>
            <Image
              style={{top: 0, alignSelf: 'center', width: 45, height: 45}}
              source={require('../../../assets/boutons/cut-mic.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{height: 45, width: 45}}
            onPress={() => navigation.goBack()}>
            <Image
              style={{top: 0, alignSelf: 'center', width: 45, height: 45}}
              source={require('../../../assets/boutons/decline-call.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{height: 45, width: 45}}
            onPress={() =>
              navigation.navigate('TalkNavigator', {TalkRoute: 'TalkChat'})
            }>
            <Image
              style={{top: 0, alignSelf: 'center', width: 45, height: 45}}
              source={require('../../../assets/boutons/chat-btn.png')}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
