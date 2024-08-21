import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Dimensions,
  PanResponder,
} from 'react-native';
import {MenuSlide} from '../../components/menus/MenuSlide';
import {More} from '../../components/more/More';
import Spotlight from '../../components/Spotlight';
import PopUpMessage from '../../components/popup/PopUpMessage';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import users from './Users';
import {useMainContext} from '../../context/MainContext ';
import {useGenreContext} from '../../context/GenreContext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Discover'>;
  route: RouteProp<RouteType, 'Discover'>;
};

export const Discover: React.FC<HomeProps> = ({navigation}) => {
  const {cercle, setTabPath} = useMainContext();
  const txtPartenaire = 'Inscrite auprès d’un partenaire';
  const userMedaille = true;
  const {genre} = useGenreContext();
  const [buttonPressed, setButtonPressed] = useState('Play');
  const [image, setImage] = useState(1);

  useEffect(() => {
    setTabPath('Discover');
  }, []);

  const handlePlay = () => {
    setButtonPressed(buttonPressed === 'Stop' ? 'Play' : 'Stop');
  };

  const userFiltered = users.filter(user => {
    // Vérifiez si l'utilisateur a 'Amour' dans son cercle
    const hasAmourInCercle = user.cercle.includes('Amour');

    // Si l'imagePath est 'Amour', appliquez des filtres en fonction du genre
    if (cercle === 'Amour') {
      if (genre === 'Homme') {
        return (
          hasAmourInCercle &&
          user.genre !== 'Homme' &&
          user.genre !== 'Non-binaire'
        );
      } else if (genre === 'Femme') {
        return (
          hasAmourInCercle &&
          user.genre !== 'Femme' &&
          user.genre !== 'Non-binaire'
        );
      } else if (genre === 'Non binaire') {
        return hasAmourInCercle && user.genre !== 'Non-binaire';
      } else {
        return false;
      }
    }
    return false;
  });

  const pagination: number = 0;

  const userIndex = pagination * 4;

  // Obtention des utilisateurs à afficher sur cette page
  const tabToDisplay = userFiltered.slice(userIndex, userIndex + 4);
  // console.log(currentIndex);

  // const [paginationColors, setPaginationColors] = useState(
  //   users.map(() => ({
  //     active: '#D40000',
  //     inactive: '#fff',
  //   })),
  // );

  const {width, height} = Dimensions.get('window');
  // Animation
  const position = new Animated.ValueXY({x: 0, y: 0});
  const rotateZ = position.y.interpolate({
    inputRange: [0, 10],
    outputRange: ['0deg', '5deg'],
  });
  const perspective = position.x.interpolate({
    inputRange: [0, 0],
    outputRange: [1000, 20],
  });
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // const [animation, setAnimation] = useState<string>('');
  const animLast = () => {
    if (currentIndex > 0) {
      Animated.spring(position, {
        toValue: {x: 160, y: 10},
        friction: 5,
        tension: 40,
        useNativeDriver: true,
      }).start(() => {
        setCurrentIndex(currentIndex - 1);
        position.setValue({x: 0, y: 0});
        // setAnimation('Back');
        setImage(1);
      });
    }
  };

  const animNext = () => {
    if (currentIndex < userTab.length - 1) {
      Animated.spring(position, {
        toValue: {x: -160, y: -10},
        friction: 5,
        tension: 40,
        useNativeDriver: true,
      }).start(() => {
        setCurrentIndex(currentIndex + 1);
        position.setValue({x: 0, y: 0});
        // setAnimation('Next');
        setImage(1);
      });
    }
  };

  //Changement d'utilisateur

  const userTab = userFiltered.map(user => ({
    id: user.id,
    medaille: user.medaille,
    partenaire: user.partenaire,
  }));

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: (_, gestureState) => {
      return Math.abs(gestureState.dx) > 20;
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx > 0) {
        animLast();
      } else if (gestureState.dx < 0) {
        animNext();
      }
    },
  });

  const handleImagePrevious = () => {
    // Récupérez l'utilisateur actuellement affiché
    const currentUser = userFiltered[currentIndex];

    // Si l'utilisateur actuel a une image2, image3, image4, image5 ou image6 et si elles ne sont pas à false
    if (currentUser) {
      if (image === 6 && currentUser.image6 !== null) {
        setImage(5);
      } else if (image === 5 && currentUser.image5 !== null) {
        setImage(4);
      } else if (image === 4 && currentUser.image4 !== null) {
        setImage(3);
      } else if (image === 3 && currentUser.image3 !== null) {
        setImage(2);
      } else if (image === 2 && currentUser.image2 !== null) {
        setImage(1);
      } else {
        // Si aucune des conditions ci-dessus n'est remplie, revenir à image6 si elle existe, sinon image1
        setImage(currentUser.image6 !== null ? 6 : 1);
      }
    }
  };

  // Si l'utilisateur actuel a une image2, image3, image4, image5 ou image6 et si elles ne sont pas à false
  const handleImageNext = () => {
    const currentUser = userFiltered[currentIndex];
    if (currentUser) {
      if (image === 1 && currentUser.image2) {
        setImage(2);
      } else if (image === 2 && currentUser.image3) {
        setImage(3);
      } else if (image === 3 && currentUser.image4) {
        setImage(4);
      } else if (image === 4 && currentUser.image5) {
        setImage(5);
      } else if (image === 5 && currentUser.image6) {
        setImage(6);
      } else {
        setImage(1);
      }
    }
  };

  return (
    <ImageBackground
      resizeMode="contain"
      source={require('../../../assets/images/Background.png')}
      style={{width: width, height: height}}>
      <View
        style={{
          width: width,
          height: height,
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}>
        <MenuSlide
          navigation={navigation}
          icoPushChange={false}
          settingsNavigation={undefined}
          backButton={undefined}
          backgroundColor={'white'}
        />
        <Animated.View
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            transform: [
              {translateX: position.x},
              {translateY: position.y},
              {perspective: perspective},
              {rotateZ: rotateZ},
            ],
          }}>
          <View
            style={{width: '100%', height: '100%'}}
            {...panResponder.panHandlers}>
            {userFiltered.map((user, index) => {
              // console.log(currentIndex);
              if (index === currentIndex) {
                return (
                  <View key={index} style={{width: '100%', height: '100%'}}>
                    <ImageBackground
                      resizeMode="cover"
                      source={
                        (image === 1 && user.image1) ||
                        (image === 2 && user.image2) ||
                        (image === 3 && user.image3) ||
                        (image === 4 && user.image4) ||
                        (image === 5 && user.image5) ||
                        (image === 6 && user.image6) ||
                        user.image1
                      }
                      style={{
                        width: '100%',
                        height: '100%',
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          handleImagePrevious();
                        }}
                        style={{
                          position: 'absolute',
                          top: 100,
                          width: width / 2,
                          height: 550,
                          alignSelf: 'flex-start',
                          backgroundColor: 'transparent',
                        }}
                      />
                      <TouchableOpacity
                        onPress={() => {
                          handleImageNext();
                        }}
                        style={{
                          position: 'absolute',
                          top: 100,
                          width: width / 2,
                          height: 550,
                          alignSelf: 'flex-end',
                          backgroundColor: 'transparent',
                        }}
                      />
                      <Spotlight navigation={navigation} />
                      <View
                        style={{
                          justifyContent: 'space-around',
                          flexDirection: 'row',
                        }}>
                        {tabToDisplay.map((colors, viewIndex) => (
                          <View
                            key={viewIndex}
                            style={{
                              width: 60,
                              height: 4,
                              backgroundColor:
                                currentIndex % 4 === viewIndex
                                  ? '#D40000'
                                  : '#fff',
                              marginVertical: 20,
                              marginHorizontal: 8,
                            }}
                          />
                        ))}
                      </View>
                      <View
                        style={{
                          justifyContent: 'space-around',
                          flexDirection: 'row',
                          marginRight: 300,
                        }}>
                        <Image
                          source={
                            user.on
                              ? require('../../../assets/images/ico-on.png')
                              : require('../../../assets/images/ico-off.png')
                          }
                          style={{
                            top: 4,
                            width: 9,
                            height: 8,
                          }}
                        />
                        <Text
                          style={{
                            fontSize: 13,
                            fontFamily: 'Comfortaa',
                            fontWeight: '700',
                            color: '#0019A7',
                            letterSpacing: 1,
                          }}>
                          {user.on ? 'En ligne' : 'Hors ligne'}
                        </Text>
                      </View>
                      <More username={user.name} />
                      <PopUpMessage
                        cercle={cercle}
                        ptCommun={user.ptCommun}
                        txtPartenaire={txtPartenaire}
                        navigation={navigation}
                      />
                      <View
                        style={{
                          justifyContent: 'space-around',
                          flexDirection: 'row',
                          marginRight: 315,
                        }}>
                        <Image
                          source={require('../../../assets/images/localisateur-1.png')}
                          style={{
                            top: 2,
                            width: 15,
                            height: 13,
                          }}
                        />
                        <Text
                          style={{
                            fontSize: 13,
                            fontFamily: 'Comfortaa',
                            fontWeight: '700',
                            color: '#0019A7',
                            letterSpacing: 1,
                          }}>
                          À {user.distance}km
                        </Text>
                      </View>
                      <View
                        style={{
                          position: 'absolute',
                          top: 450,
                        }}>
                        <View
                          style={{
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                            left: 10,
                          }}>
                          <Text
                            style={{
                              fontSize: 48,
                              fontFamily: 'Comfortaa',
                              color: '#fff',
                              letterSpacing: 1,
                            }}>
                            {user.name}
                          </Text>
                          {user.quality ? (
                            <Image
                              source={require('../../../assets/images/quality-2.png')}
                              style={{
                                top: 24,
                                left: 20,
                                width: 30,
                                height: 30,
                              }}
                            />
                          ) : null}
                          {user.medaille ? (
                            <Image
                              source={require('../../../assets/images/Médaille.png')}
                              style={{
                                top: 24,
                                left: 40,
                                width: 30,
                                height: 44,
                              }}
                            />
                          ) : null}
                        </View>
                        <View
                          style={{
                            bottom: 10,
                            left: 15,
                          }}>
                          <Text
                            style={{
                              fontSize: 20,
                              fontFamily: 'Comfortaa',
                              fontWeight: '700',
                              color: '#fff',
                              letterSpacing: 1,
                            }}>
                            {user.age}, {user.location}
                          </Text>
                        </View>
                        <View
                          style={{
                            top: 5,
                            left: 15,
                          }}>
                          <Text
                            style={{
                              fontSize: 14,
                              fontFamily: 'Comfortaa',
                              fontWeight: '700',
                              color: '#fff',
                              letterSpacing: 1,
                            }}>
                            Croisé plusieurs fois
                          </Text>
                          <View
                            style={{
                              top: 5,
                            }}>
                            <TouchableOpacity
                              onPress={() => {
                                handlePlay();
                              }}
                              style={{
                                width: 40,
                                height: 40,
                              }}>
                              <Image
                                source={
                                  buttonPressed === 'Stop'
                                    ? require('../../../assets/boutons/Stop-P.png')
                                    : require('../../../assets/boutons/Play-P.png')
                                }
                                style={{
                                  top: 10,
                                  alignSelf: 'center',
                                }}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                      <View
                        style={{
                          position: 'absolute',
                          top:
                            userMedaille && user.partenaire
                              ? 250
                              : userMedaille
                              ? 300
                              : user.partenaire
                              ? 300
                              : 360,
                          left: 300,
                          height:
                            userMedaille && user.partenaire
                              ? 400
                              : userMedaille
                              ? 340
                              : user.partenaire
                              ? 330
                              : 280,
                          right: 20,
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        {user.partenaire ? (
                          <Image
                            source={
                              user.partenaire === 'OpenBetween'
                                ? require('../../../assets/images/openBetween-cache.png')
                                : user.partenaire === 'CheerFlakes'
                                ? require('../../../assets/images/cheerflakes-cache.png')
                                : user.partenaire === 'WineGap'
                                ? require('../../../assets/images/winegap-cache.png')
                                : user.partenaire === 'GoPride'
                                ? require('../../../assets/images/gopride-cache.png')
                                : require('../../../assets/images/gopride-cache.png')
                            }
                            style={{
                              zIndex: 0,
                              alignSelf: 'flex-end',
                              width: 100,
                              height: 50,
                              resizeMode: 'contain',
                            }}
                          />
                        ) : null}
                        <TouchableOpacity
                          onPress={() => {
                            animNext();
                          }}
                          style={{
                            backgroundColor: 'red',
                            width: 78,
                            height: 78,
                            borderRadius: 100,
                          }}>
                          <Image
                            source={require('../../../assets/images/profil_user_community.png')}
                            style={{
                              width: 78,
                              height: 78,
                            }}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate('C_est_match');
                          }}
                          style={{
                            backgroundColor: 'red',
                            width: 78,
                            height: 78,
                            borderRadius: 100,
                          }}>
                          <Image
                            source={require('../../../assets/images/profil_coeur.png')}
                            style={{
                              width: 78,
                              height: 78,
                            }}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            animNext();
                          }}
                          style={{
                            backgroundColor: 'red',
                            alignSelf: 'flex-end',
                            width: 78,
                            height: 78,
                            borderRadius: 100,
                          }}>
                          <Image
                            source={require('../../../assets/images/profil_croix.png')}
                            style={{
                              width: 78,
                              height: 78,
                            }}
                          />
                        </TouchableOpacity>
                        {userMedaille ? (
                          <TouchableOpacity
                            onPress={() => {
                              animLast();
                            }}
                            style={{
                              backgroundColor: 'red',
                              width: 78,
                              height: 78,
                              borderRadius: 100,
                            }}>
                            <Image
                              source={require('../../../assets/boutons/back.png')}
                              style={{
                                width: 78,
                                height: 78,
                              }}
                            />
                          </TouchableOpacity>
                        ) : null}
                      </View>
                    </ImageBackground>
                  </View>
                );
              }
              return null; // Masquer les autres utilisateurs
            })}
          </View>
        </Animated.View>
      </View>
    </ImageBackground>
  );
};
