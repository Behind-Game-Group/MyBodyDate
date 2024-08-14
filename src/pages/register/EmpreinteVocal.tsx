import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';
import {storeData, getData} from '../../services/storage';
import {PERMISSIONS, PermissionStatus, request} from 'react-native-permissions';
import RNFS from 'react-native-fs';
import Styles from '../../../assets/style/Styles';
import StylesEmpreinteVocal from '../../../assets/style/styleScreens/styleRegister/StyleEmpreinteVocal';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Empreinte_vocal'>;
};

const audioRecorderPlayer = new AudioRecorderPlayer();
audioRecorderPlayer.setSubscriptionDuration(0.09);

export const EmpreinteVocal: React.FC<HomeProps> = ({navigation}) => {
  const [modalInfoVocaVisible, setModalInfoVocaVisible] =
    useState<boolean>(false);

  // Constante permettant de savoir quel input radio a été sélectionné par l'utilisateur
  const [selectedVoice, setSelectedVoice] = useState<string>();
  // console.log('Voix sélectionnée : ', selectedVoice);

  // const [isActive, setIsActive] = useState<boolean>(false);

  const [buttonPressed, setButtonPressed] = useState<string>('');

  const [recording, setRecording] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(false);
  const [empreinteVocal, setEmpreinteVocal] = useState<string>();
  const [pause, setPause] = useState<boolean>(false);
  const [permissionAudio, setPermissionAudio] = useState<
    boolean | PermissionStatus
  >(false);
  const [result, setResult] = useState<boolean>(false);

  const [recordSecs, setRecordSecs] = useState<number>(0);
  const [recordTime, setRecordTime] = useState<number | string | undefined>();
  // const [recordTimeFormated, setRecordTimeFormated] = useState<string>('');
  const [currentPositionSec, setCurrentPositionSec] = useState<number>(0);
  const [currentDurationSec, setCurrentDurationSec] = useState<number>(0);
  const [playTime, setPlayTime] = useState<number | string>();
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

      const statuses = await request(permissions[0]);

      setPermissionAudio(statuses);

      if (statuses === 'granted') {
        setPermissionAudio(true);
      }
    };

    checkPermissions();
    handleGetData();
  }, []);

  const handleStoreData = async (key: string, value: string) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetData = async () => {
    try {
      const empreinte = await getData('empreinte_vocal');
      setEmpreinteVocal(empreinte);
      // console.log(sourcePath);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const onStartRecord = async () => {
    setRecording(true);
    setPlaying(false);
    setPause(false);
    const audioDirectory = `${RNFS.ExternalDirectoryPath}/Music`;
    const path = `${audioDirectory}/empreinteVocal.aac`;
    // si le répertoire existe, sinon le créer
    const exists = await RNFS.exists(audioDirectory);
    if (!exists) {
      await RNFS.mkdir(audioDirectory);
      setEmpreinteVocal(path);
    }
    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    console.log('audioSet', audioSet);
    const uri = await audioRecorderPlayer.startRecorder(path, audioSet);
    audioRecorderPlayer.addRecordBackListener(e => {
      if (typeof e.currentPosition === 'number' && e.currentPosition > 0) {
        setRecordSecs(e.currentPosition);
        const recTime: string = audioRecorderPlayer.mmssss(
          Math.floor(e.currentPosition),
        );
        const parts = recTime.split(':');
        const secondsPart = parts[1];
        setRecordTime(secondsPart);
      }
    });
    console.log(`uri: ${uri}`);
    // Arrête l'enregistrement après 30 secondes
    setTimeout(() => {
      onStopRecord();
    }, 30000);
  };

  const onStopRecord = async () => {
    setRecording(false);
    setPlaying(false);
    setPause(false);
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setRecordSecs(0);
    console.log(result);
    setResult(true);
  };

  const onStartPlay = async () => {
    setRecording(false);
    setPlaying(true);
    setPause(false);
    // console.log('Player Playing . . .');
    const path = `${RNFS.ExternalDirectoryPath}/Music/empreinteVocal.mp3`;

    // Vérifiez si le fichier existe
    const exists = await RNFS.exists(path);
    if (!exists) {
      console.log("Le fichier audio n'existe pas");
      return;
    }

    // const msg = await audioRecorderPlayer.startPlayer(path);
    // console.log(msg);
    audioRecorderPlayer.setVolume(1.0);
    audioRecorderPlayer.addPlayBackListener(e => {
      if (typeof e.currentPosition === 'number') {
        setCurrentPositionSec(e.currentPosition);
        const plyTime = audioRecorderPlayer.mmssss(
          Math.floor(e.currentPosition),
        );
        const parts = plyTime.split(':');
        const secondsPart = parts[1];
        setPlayTime(secondsPart);
        if (e.currentPosition === e.duration) {
          // console.log('finished');
          audioRecorderPlayer.stopPlayer();
          setPlayTime(0);
        }
      }

      if (typeof e.duration === 'number' && e.duration > 0) {
        setCurrentDurationSec(e.duration);
        setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
      }
      if (e.currentPosition === e.duration) {
        // console.log('finished');
        onStopPlay();
      }
    });
  };

  const onPausePlay = async () => {
    setRecording(false);
    setPlaying(false);
    setPause(true);
    // console.log('Player Pausing . . .');
    await audioRecorderPlayer.pausePlayer();
  };

  const onStopPlay = () => {
    setRecording(false);
    setPlaying(false);
    setPause(false);
    // console.log('Player Stopped');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };

  return (
    <ImageBackground
      style={[StylesEmpreinteVocal.bgGradient]}
      source={require('../../../assets/images/Background.png')}>
      <View style={[StylesEmpreinteVocal.ViewText]}>
        <Text style={[StylesEmpreinteVocal.TxtTitle]}>EMPREINTE VOCAL</Text>
        <Text style={[StylesEmpreinteVocal.textWhite]}>
          Enregistrer un mesage vocale introductif à l'attention des personnes
          que vous croisez, et émouvoir votre futur match
        </Text>

        <View style={[{}]}>
          <View style={[StylesEmpreinteVocal.viewCol]}>
            <TouchableOpacity
              onPressIn={() => {
                onStartRecord();
              }}
              onPressOut={() => {
                onStopRecord();
              }}
              activeOpacity={0.6}
              style={[StylesEmpreinteVocal.btnVocal]}>
              <View style={[StylesEmpreinteVocal.viewVocal]}>
                <Image
                  style={[StylesEmpreinteVocal.imgVocal]}
                  source={require('../../../assets/images/microVocal.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={[StylesEmpreinteVocal.textWhiteCenter]}>
          {playing && !recording
            ? playTime
            : !playing && recording
            ? recordTime
            : !playing &&
              !recording &&
              typeof recordTime === 'number' &&
              recordTime > 0
            ? recordTime
            : '30'}{' '}
          secondes
        </Text>
        <View style={[StylesEmpreinteVocal.viewRow]}>
          {recording ? (
            <TouchableOpacity
              onPress={() => {
                onStopRecord();
              }}
              activeOpacity={0.6}
              style={[StylesEmpreinteVocal.btnStop]}
            />
          ) : (
            <TouchableOpacity
              onPressIn={() => {
                onStartRecord();
              }}
              activeOpacity={0.6}
              style={[StylesEmpreinteVocal.btnRecord]}
            />
          )}
          {result && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                !playing ? onStartPlay() : onPausePlay();
              }}>
              <Image
                style={[StylesEmpreinteVocal.icoVocal]}
                source={
                  !playing
                    ? require('../../../assets/boutons/play.png')
                    : require('../../../assets/boutons/pause.png')
                }
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={[{bottom: 80, alignSelf: 'center', width: '100%'}]}>
          <TouchableOpacity
            style={[StylesEmpreinteVocal.viewRow2]}
            onPress={() => setModalInfoVocaVisible(true)}
            accessibilityLabel="Découvrez votre type de voix ">
            <Text style={[StylesEmpreinteVocal.textBtn]}>
              Décrivez votre type de voix
            </Text>
            <Image
              style={[StylesEmpreinteVocal.icoInfo]}
              source={require('../../../assets/images/ico-info-rose.png')}
            />
          </TouchableOpacity>
          <View style={[StylesEmpreinteVocal.viewRow3]}>
            <View style={{flex: 2}}>
              <TouchableOpacity
                style={StylesEmpreinteVocal.btnInputLang}
                onPress={() => setSelectedVoice('Soprano')}
                accessibilityLabel="Soprano">
                <Image
                  style={StylesEmpreinteVocal.SelectedImage}
                  source={
                    selectedVoice === 'Soprano'
                      ? require('../../../assets/images/radio_selected.png')
                      : require('../../../assets/images/radio_unselected.png')
                  }
                />
                <Text style={StylesEmpreinteVocal.textBtnInputLang}>
                  Soprano
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={StylesEmpreinteVocal.btnInputLang}
                onPress={() => setSelectedVoice('Mezzo')}
                accessibilityLabel="Mezzo">
                <Image
                  style={StylesEmpreinteVocal.SelectedImage}
                  source={
                    selectedVoice === 'Mezzo'
                      ? require('../../../assets/images/radio_selected.png')
                      : require('../../../assets/images/radio_unselected.png')
                  }
                />
                <Text style={StylesEmpreinteVocal.textBtnInputLang}>
                  Mezzo{'\n'}Soprano
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={StylesEmpreinteVocal.btnInputLang}
                onPress={() => setSelectedVoice('Alto')}
                accessibilityLabel="Alto">
                <Image
                  style={StylesEmpreinteVocal.SelectedImage}
                  source={
                    selectedVoice === 'Alto'
                      ? require('../../../assets/images/radio_selected.png')
                      : require('../../../assets/images/radio_unselected.png')
                  }
                />
                <Text style={StylesEmpreinteVocal.textBtnInputLang}>Alto</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 2}}>
              <TouchableOpacity
                style={StylesEmpreinteVocal.btnInputLang}
                onPress={() => setSelectedVoice('Baryton')}
                accessibilityLabel="Baryton">
                <Image
                  style={StylesEmpreinteVocal.SelectedImage}
                  source={
                    selectedVoice === 'Baryton'
                      ? require('../../../assets/images/radio_selected.png')
                      : require('../../../assets/images/radio_unselected.png')
                  }
                />
                <Text style={StylesEmpreinteVocal.textBtnInputLang}>
                  Baryton
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[StylesEmpreinteVocal.btnInputLang, {top: 10}]}
                onPress={() => setSelectedVoice('Ténor')}
                accessibilityLabel="Ténor">
                <Image
                  style={StylesEmpreinteVocal.SelectedImage}
                  source={
                    selectedVoice === 'Ténor'
                      ? require('../../../assets/images/radio_selected.png')
                      : require('../../../assets/images/radio_unselected.png')
                  }
                />
                <Text style={StylesEmpreinteVocal.textBtnInputLang}>Ténor</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[StylesEmpreinteVocal.btnInputLang, {top: 22}]}
                onPress={() => setSelectedVoice('Basse')}
                accessibilityLabel="Basse">
                <Image
                  style={StylesEmpreinteVocal.SelectedImage}
                  source={
                    selectedVoice === 'Basse'
                      ? require('../../../assets/images/radio_selected.png')
                      : require('../../../assets/images/radio_unselected.png')
                  }
                />
                <Text style={StylesEmpreinteVocal.textBtnInputLang}>Basse</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{top: 10}}>
            <Text style={[StylesEmpreinteVocal.textWhite2]}>Choix unique.</Text>
            <TouchableOpacity
              style={[StylesEmpreinteVocal.btn]}
              onPress={() => navigation.navigate('Charte_engagement')}
              accessibilityLabel="Enregistrer plus tard">
              <Text style={StylesEmpreinteVocal.textBtnBlue}>
                Enregistrer plus tard
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={[{flex: 1}]}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalInfoVocaVisible}
          onRequestClose={() => {
            setModalInfoVocaVisible(!modalInfoVocaVisible);
          }}>
          <View style={[StylesEmpreinteVocal.centeredView2]}>
            <TouchableOpacity
              onPress={() => {
                setModalInfoVocaVisible(false);
              }}
              style={[StylesEmpreinteVocal.closeModal]}
            />
            <Text style={[StylesEmpreinteVocal.textBlueCenter]}>
              VOTRE TYPE DE VOIX
            </Text>
            <Image
              style={[StylesEmpreinteVocal.icoInfo2]}
              source={require('../../../assets/images/ico-info.png')}
            />
            <Text style={[StylesEmpreinteVocal.textBlue]}>
              <Text style={[StylesEmpreinteVocal.textBlueBold]}>Soprano</Text>{' '}
              est la voix la plus aigue de femme.
            </Text>
            <Text style={[StylesEmpreinteVocal.textBlue]}>
              <Text style={[StylesEmpreinteVocal.textBlueBold]}>
                Mezzo Soprona
              </Text>{' '}
              est la voix médium.
            </Text>
            <Text style={[StylesEmpreinteVocal.textBlue]}>
              <Text style={[StylesEmpreinteVocal.textBlueBold]}>
                Alto (contralto)
              </Text>{' '}
              est la voix de femme la plus grave et est très rare.
            </Text>
            <Text style={[StylesEmpreinteVocal.textBlue]}>
              Pour les hommes la voix la plus aigue est{' '}
              <Text style={[StylesEmpreinteVocal.textBlueBold]}>Ténor</Text>.
            </Text>
            <Text style={[StylesEmpreinteVocal.textBlue]}>
              <Text style={[StylesEmpreinteVocal.textBlueBold]}>Baryton</Text>{' '}
              est la voix médium.
            </Text>
            <Text style={[StylesEmpreinteVocal.textBlue]}>
              <Text style={[StylesEmpreinteVocal.textBlueBold]}>Basse</Text> est
              la plus grave.
            </Text>
          </View>
        </Modal>
        <TouchableOpacity
          style={[{bottom: 20}]}
          onPress={() => {
            setButtonPressed('Continuer');
            navigation.navigate('Charte_engagement');
            empreinteVocal
              ? handleStoreData('empreinte_vocal', empreinteVocal)
              : null;
          }}
          accessibilityLabel="Continuer">
          <Text
            style={[
              Styles.textBtn9,
              {
                zIndex: 4,
                top: 40,
                color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
              },
            ]}>
            Continuer
          </Text>
          <Image
            style={[
              {
                height: 56,
                resizeMode: 'contain',
                alignSelf: 'center',
              },
            ]}
            source={
              buttonPressed === 'Continuer'
                ? require('../../../assets/boutons/Bouton-Rouge.png')
                : require('../../../assets/boutons/Bouton-Blanc.png')
            }
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
