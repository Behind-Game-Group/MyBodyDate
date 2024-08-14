import {Image, TouchableHighlight, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Video, {
  OnBufferData,
  OnVideoErrorData,
  VideoRef,
} from 'react-native-video';
import StylesVideoBox from '../../assets/style/StyleComposants/StyleVideoBox';

type VideoBoxProps = {
  url: string;
  top: number;
};

export const VideoBox: React.FC<VideoBoxProps> = ({url, top}) => {
  // Constante permettant de savoir si l'utilisateur a appuyé sur play ou sur pause
  const [isPlaying, setIsPlaying] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  const videoRef = useRef<VideoRef>(null);
  const background = {
    uri: url,
  };

  const onBuffer = (bufferData: OnBufferData) => {
    console.log('Video is buffering', bufferData);
  };

  const onError = (errorData: OnVideoErrorData) => {
    console.error('Video error', errorData);
  };
  return (
    <View style={[StylesVideoBox.ViewVideo, {top: top}]}>
      <Video
        source={background}
        // Store reference
        ref={videoRef}
        // Callback when remote video is buffering
        onBuffer={onBuffer}
        // Callback when video cannot be loaded
        onError={onError}
        paused={!isPlaying}
        controls={false}
        style={StylesVideoBox.video}
        muted={true}
      />
      <View>
        <TouchableHighlight
          style={{margin: 5}}
          underlayColor="transparent"
          activeOpacity={0.2}
          onHideUnderlay={handleHover}
          onShowUnderlay={handleUnhover}
          onPress={() => setIsPlaying(p => !p)}>
          {isHovered ? (
            <Image
              style={StylesVideoBox.btnVideo}
              source={require('../../assets/boutons/play-blanc-hover.png')}
            />
          ) : isPlaying ? (
            <Image
              style={StylesVideoBox.btnVideo}
              source={require('../../assets/boutons/pause-blanc.png')}
            />
          ) : (
            <Image
              style={StylesVideoBox.btnVideo}
              source={require('../../assets/boutons/play-blanc.png')}
            />
          )}
        </TouchableHighlight>
      </View>
    </View>
  );
};
