import React, {useState, useEffect, useRef} from 'react';
import {
  StatusBar,
  TextInput,
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from 'react-native';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';
import {PERMISSIONS, PermissionStatus, request} from 'react-native-permissions';
import RNFS from 'react-native-fs';
import {
  GiphyContent,
  GiphyGridView,
  GiphyMedia,
  GiphyMediaView,
  GiphySDK,
} from '@giphy/react-native-sdk';
import MenuSlide from '../../components/menus/MenuSlide';
import MenuBottom from '../../components/menus/MenuBottom';
import MenuTalk from '../../components/menus/MenuTalk';
import {
  NavigationHelpers,
  NavigationProp,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import {BottomTabDescriptorMap} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {EdgeInsets} from 'react-native-safe-area-context';

type Message = {
  id: number;
  sender: string;
  timestamp: Date;
  text: string | boolean;
  audio: string | boolean;
  gift: GiphyMedia | boolean;
  playTime: string | boolean;
};

type HomeProps = {
  navigation: NavigationProp<RouteType, 'TalkChat'>;
  user: string;
  prenium: string;
  friendChoice: string;
  navigationTab: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  insets: EdgeInsets;
  imagePath: string;
};

const audioRecorderPlayer = new AudioRecorderPlayer();
audioRecorderPlayer.setSubscriptionDuration(0.09);

GiphySDK.configure({apiKey: 'lDpjsXxCOkiQD25GOsvV4IAZ59tro93z'});

export const TalkChat: React.FC<HomeProps> = ({
  navigation,
  imagePath,
  user,
  prenium,
  friendChoice,
  navigationTab,
  state,
  descriptors,
  insets,
}) => {
  const userRecept = 'Raluca';
  const userEmet = 'Kolia';

  const [searchQuery, setSearchQuery] = useState('');
  const [media, setMedia] = useState<null | GiphyMedia>(null);
  const [modalGiphyVisible, setModalGiphyVisible] = useState(false);

  // Fonction pour envoyer un message Gif
  const handleSendGiftMessage = (gift: GiphyMedia) => {
    setMessageIdCounter(messageIdCounter + 1);
    setMessages(prevMessages => [
      ...prevMessages,
      {
        id: messageIdCounter,
        sender: userRecept,
        timestamp: new Date(),
        text: false,
        audio: false,
        playTime: false,
        gift: gift,
      },
    ]);
  };

  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  // State pour gérer les messages envoyés par l'utilisateur
  const [messages, setMessages] = useState<Message[]>([]);
  // console.log(messages);
  const [text, setText] = useState<string>();
  // const [audioPath, setAudioPath] = useState<string[]>([]);
  const [newAudioPath, setNewAudioPath] = useState<string[]>([]);
  const scrollViewRef = useRef<ScrollView>(null);
  const [messageIdCounter, setMessageIdCounter] = useState<number>(0);
  const receivedMessages: Message[] = [
    {
      id: messageIdCounter + 1,
      text: 'Bonjour',
      sender: userEmet,
      timestamp: new Date(),
      audio: false,
      playTime: false,
      gift: false,
    },
    // {image: Vocal, sender: 'Kolia', timestamp: new Date()},
  ];

  // Fonction pour envoyer un message Text
  const handleSendTextMessage = () => {
    if (text && text.trim() !== '') {
      setMessageIdCounter(messageIdCounter + 1);
      const newMessage = {
        id: messageIdCounter,
        audio: false,
        playTime: false,
        text,
        gift: false,
        sender: userRecept,
        timestamp: new Date(),
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setText('');
    }
  };

  // Fonction pour attendre pendant un certain temps (utilisée pour définir la durée de l'enregistrement)
  const wait = (ms: number) => {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  };

  // Récupérer l'heure actuelle toutes les secondes
  const currentTime: Date = new Date();

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  // Fonction pour trier les messages chronologiquement
  const sortMessagesChronologically = (
    a: {timestamp: Date},
    b: {timestamp: Date},
  ) => {
    return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
  };

  // Fonctions pour enregistrer et envoyer un audio

  // const [audioRecordings, setAudioRecordings] = useState<string[][]>([]);
  const [recording, setRecording] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(false);
  const [permissionAudio, setPermissionAudio] = useState<
    PermissionStatus | boolean
  >();
  const [selectedAudio, setSelectedAudio] = useState<number | null>(null);

  const [recordSecs, setRecordSecs] = useState<number>(0);
  const [recordTime, setRecordTime] = useState<string>('00:00:00');
  const [currentPositionSec, setCurrentPositionSec] = useState<number>(0);
  const [currentDurationSec, setCurrentDurationSec] = useState<number>(0);
  const [playTime, setPlayTime] = useState<string | number>('00:00:00');
  const [duration, setDuration] = useState<string>('00:00:00');
  // console.log(
  //   'recordTime : ',
  //   recordTime,
  //   ' playTime : ',
  //   playTime,
  //   ' duration : ',
  //   duration,
  // );

  useEffect(() => {
    const checkPermissions = async () => {
      const permissions = [PERMISSIONS.ANDROID.RECORD_AUDIO];

      try {
        const status = await request(permissions[0]);
        setPermissionAudio(status);

        if (status === 'granted') {
          setPermissionAudio(true);
        }
      } catch (error) {
        console.error('Error checking permissions', error);
      }
    };

    checkPermissions();
  }, []);

  const onStartRecord = async () => {
    try {
      if (recording) {
        // console.log('Enregistrement déjà en cours . . .');
        return;
      }
      setRecording(true);
      const now = new Date();
      const dateAndTime = now.toISOString().replace(/[:.]/g, '-');
      const audioDirectory = `${RNFS.ExternalDirectoryPath}/Music/Chat`;
      const path = `${audioDirectory}/ChatVocal_${dateAndTime}.mp3`;

      // si le répertoire existe, sinon le créer
      const exists = await RNFS.exists(audioDirectory);
      if (!exists) {
        await RNFS.mkdir(audioDirectory);
      }
      const audioSet = {
        AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
        AudioSourceAndroid: AudioSourceAndroidType.MIC,
        AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
        AVNumberOfChannelsKeyIOS: 2,
        AVFormatIDKeyIOS: AVEncodingOption.aac,
      };
      // console.log('audioSet', audioSet);
      const uri = await audioRecorderPlayer.startRecorder(path, audioSet);
      const recordBackListener = audioRecorderPlayer.addRecordBackListener(
        e => {
          if (typeof e.currentPosition === 'number' && e.currentPosition > 0) {
            setRecordSecs(e.currentPosition);
            setRecordTime(
              audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
            );
          }
        },
      );
      // console.log(`uri: ${uri}`);

      // Utiliser la syntaxe de décomposition pour ajouter l'URI au tableau existant
      setNewAudioPath(prevAudioPath => [...prevAudioPath, uri]);

      wait(2000);
      return recordBackListener;
    } catch (error) {
      // console.log('Erreur lors du démarrage de l\'enregistrement audio :', error);
    }
  };

  const onStopRecord = async () => {
    setRecording(false);
    const result = audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setRecordSecs(0);
    setMessageIdCounter(prevMessageIdCounter => prevMessageIdCounter + 1);

    // Vérifier que newAudioPath n'est pas undefined
    if (newAudioPath && newAudioPath.length > 0) {
      const newRecording: Message = {
        id: messageIdCounter,
        text: false,
        audio: newAudioPath[0], // Assurez-vous de prendre le premier élément de newAudioPath si c'est un tableau
        gift: false,
        sender: userRecept,
        timestamp: new Date(),
        playTime: recordTime,
      };

      setMessages(prevMessages => [...prevMessages, newRecording]);
    }

    // Réinitialiser l'état du chemin audio actuel.
    setNewAudioPath([]);
    // console.log(result);
  };

  const onStartPlay = async (index: number) => {
    if (playing) {
      onPausePlay(index);
    } else {
      setPlaying(true);

      if (index >= 0 && index < messages.length) {
        const path = messages[index].audio;

        if (typeof path !== 'string') {
          return;
        }

        setSelectedAudio(messages[index].id);

        const exists = await RNFS.exists(path);
        if (!exists) {
          return;
        }

        const msg = await audioRecorderPlayer.startPlayer(path);
        audioRecorderPlayer.setVolume(1.0);
        audioRecorderPlayer.addPlayBackListener(e => {
          if (typeof e.currentPosition === 'number') {
            setCurrentPositionSec(e.currentPosition);

            // Mettez à jour l'état playTime avec une chaîne
            setPlayTime(
              audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
            );

            if (e.currentPosition === e.duration) {
              audioRecorderPlayer.stopPlayer();

              // Réinitialisez l'état playTime à une chaîne
              setPlayTime('00:00:00');
            }
          }

          if (typeof e.duration === 'number' && e.duration > 0) {
            setCurrentDurationSec(e.duration);
            setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
          }

          if (e.currentPosition === e.duration) {
            audioRecorderPlayer.stopPlayer();

            // Réinitialisez l'état playTime à une chaîne
            setPlayTime('00:00:00');
          }
        });
      }
    }
  };

  const onPausePlay = async (index: number) => {
    if (index >= 0 && index < messages.length) {
      const path = messages[index].audio;
      setSelectedAudio(messages[index].id);
      setPlaying(false);
      audioRecorderPlayer.pausePlayer();
      // console.log('Lecteur en pause . . .');
    }
  };

  const onStopPlay = () => {
    setPlaying(false);
    setPlayTime('00:00:00');
    // console.log('Lecteur arrêté');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };

  // GIPHY

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
      <View>
        <MenuTalk
          user={user}
          prenium={prenium}
          friendChoice={friendChoice}
          tabPath={imagePath}
          navigation={navigation}
        />
      </View>
      <ImageBackground
        resizeMode="cover"
        source={require('../../../assets/images/bg-parametres.png')}
        style={{top: '10%', height: '90%'}}>
        <View style={{top: -50, height: '70%'}}>
          <ScrollView
            style={{marginTop: 100, flexDirection: 'column-reverse'}}
            contentContainerStyle={{paddingBottom: 20}}
            ref={scrollViewRef}
            onContentSizeChange={() => {
              if (scrollViewRef.current) {
                scrollViewRef.current.scrollToEnd({animated: true});
              }
            }}>
            {Array.isArray(messages) &&
              Array.isArray(receivedMessages) &&
              [...messages, ...receivedMessages]
                .sort(sortMessagesChronologically)
                .map((message, index) => (
                  <View
                    key={`message-${index}`}
                    style={{
                      height: 'auto',
                      minWidth: '40%',
                      alignSelf: messages.includes(message)
                        ? 'flex-end'
                        : 'flex-start',
                      marginTop: 20,
                      marginLeft: messages.includes(message) ? 0 : 20,
                      marginRight: messages.includes(message) ? 20 : 20,
                    }}>
                    <View style={{width: 350}}>
                      <Text
                        style={{
                          color: 'rgba(0, 25, 167, 0.40)',
                          fontFamily: 'Comfortaa',
                          fontSize: 14,
                          fontWeight: 700,
                          textAlign: 'center',
                        }}>
                        Aujourd’hui {formatTime(currentTime)}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: messages.includes(message)
                          ? 'row-reverse'
                          : 'row',
                        alignSelf: messages.includes(message)
                          ? 'flex-end'
                          : 'flex-start',
                        height: 40,
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: messages.includes(message)
                            ? 'rgba(255, 132, 215, 0.97)'
                            : '#0019A7',
                          textAlign: messages.includes(message)
                            ? 'right'
                            : 'left',
                          fontFamily: 'Gilroy',
                          fontSize: 15,
                          fontWeight: 700,
                        }}>
                        {messages.includes(message) ? userRecept : userEmet}
                      </Text>
                      <Image
                        source={
                          message.sender === userRecept
                            ? require('../../../assets/images/Ellipse44.png')
                            : require('../../../assets/images/kolia-ellipse.png')
                        }
                        style={{
                          width: 40,
                          marginLeft: message.sender === userRecept ? 20 : 20,
                          marginRight: message.sender === userRecept ? 20 : 20,
                          resizeMode: 'contain',
                        }}
                      />
                    </View>
                    <View>
                      {message.text && ( //  texte
                        <Text
                          style={{
                            marginTop: 10,
                            alignSelf:
                              message.sender === userRecept
                                ? 'flex-end'
                                : 'flex-start',
                            borderRadius: 50,
                            borderWidth: 1,
                            borderColor:
                              message.sender === userRecept
                                ? '#FF84D7'
                                : '#0019A7',
                            color:
                              message.sender === userRecept
                                ? '#FF84D7'
                                : '#0019A7',
                            textAlign: 'center',
                            padding: 5,
                            fontFamily: 'Comfortaa',
                            fontSize: 16,
                            fontWeight: 700,
                          }}>
                          {message.text}
                        </Text>
                      )}
                      {message.audio && ( // audio
                        <View
                          style={{
                            width: 150,
                            height: 28,
                            top: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            alignSelf:
                              message.sender === userRecept
                                ? 'flex-end'
                                : 'flex-start',
                            borderRadius: 50,
                            backgroundColor: '#632b61',
                          }}>
                          <TouchableOpacity
                            onPress={() => {
                              if (message.id === selectedAudio && playing) {
                                onPausePlay(message.id);
                              } else {
                                onStartPlay(message.id);
                              }
                            }}>
                            <Image
                              source={
                                message.id === selectedAudio && playing
                                  ? require('../../../assets/boutons/pause-blanc.png')
                                  : require('../../../assets/boutons/play-blanc.png')
                              }
                              style={{
                                width: 10,
                                height: 10,
                                resizeMode: 'contain',
                              }}
                            />
                          </TouchableOpacity>
                          <TouchableOpacity style={{}} />
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 10,
                              fontFamily: 'Comfortaa-Bold',
                            }}>
                            {message.id === selectedAudio && playing
                              ? playTime
                              : message.playTime}
                          </Text>
                        </View>
                      )}
                      {message.gift && ( // gift
                        <View style={{width: '100%', padding: 20}}>
                          <GiphyMediaView
                            media={
                              typeof message.gift === 'object'
                                ? message.gift
                                : undefined
                            }
                            style={{
                              aspectRatio:
                                typeof message.gift === 'object'
                                  ? message.gift.aspectRatio
                                  : undefined,
                            }}
                          />
                        </View>
                      )}
                    </View>
                  </View>
                ))}
          </ScrollView>
        </View>

        <SafeAreaView
          style={{
            position: 'relative',
            bottom: 45,
            alignSelf: 'center',
            flexDirection: 'row',
          }}>
          <TextInput
            style={{
              width: 240,
              height: 42,
              borderRadius: 40,
              borderColor: '#000',
              borderWidth: 1,
              color: '#000',
              fontFamily: 'Comfortaa',
              fontSize: 15,
              fontStyle: 'normal',
              textAlign: 'center',
            }}
            onChangeText={setText} // Mettre à jour le state "text" avec la valeur saisie
            value={text}
            keyboardType="default"
            onSubmitEditing={handleSendTextMessage}
            placeholder={'Entrez votre message...'}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              left: 10,
              width: 100,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => {
                setModalGiphyVisible(true);
              }}>
              <Image
                source={require('../../../assets/boutons/ico-giphy.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                recording ? onStopRecord() : onStartRecord();
              }}>
              {recording ? (
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: '#0019A7',
                    borderRadius: 5,
                  }}
                />
              ) : (
                <Image
                  source={require('../../../assets/boutons/ico-mic.png')}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Image source={require('../../../assets/boutons/ico-send.png')} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <View style={{top: 55, position: 'relative'}}>
          <MenuBottom
            navigation={navigationTab}
            tabPath={'Discover'}
            state={state}
            descriptors={descriptors}
            insets={insets}
          />
        </View>
      </ImageBackground>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalGiphyVisible}
        onRequestClose={() => setModalGiphyVisible(false)}>
        <TouchableOpacity
          onPress={() => setModalGiphyVisible(false)}
          style={{
            backgroundColor: 'transparent',
            height: '100%',
            width: '100%',
            position: 'absolute',
          }}
        />
        <ImageBackground
          resizeMode="cover"
          source={require('../../../assets/images/bg-parametres.png')}
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            top: '24%',
            height: 550,
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <SafeAreaView style={{}}>
            <TextInput
              autoFocus
              onChangeText={setSearchQuery}
              placeholder="Rechercher votre Gif . . ."
              value={searchQuery}
              style={{
                width: 240,
                height: 42,
                borderRadius: 40,
                borderColor: '#000',
                borderWidth: 1,
                color: '#000',
                fontFamily: 'Comfortaa',
                fontSize: 15,
                fontStyle: 'normal',
                textAlign: 'center',
              }}
            />
            <GiphyGridView
              content={GiphyContent.search({searchQuery: searchQuery})}
              cellPadding={3}
              style={{height: 400, width: 400, marginTop: 24}}
              onMediaSelect={e => {
                setMedia(e.nativeEvent.media);
                handleSendGiftMessage(e.nativeEvent.media);
                setModalGiphyVisible(false);
              }}
            />
          </SafeAreaView>
        </ImageBackground>
      </Modal>
    </View>
  );
};

export default TalkChat;
