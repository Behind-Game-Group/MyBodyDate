import React, {useState, useEffect, useRef} from 'react';
import {
  StatusBar,
  View,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
  StyleSheet,
  Platform,
} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import MenuSlide from '../../components/menus/MenuSlide';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import customMarkerIcon from '../../../assets/boutons/marker-map.png';
import customMarkerIconBlue from '../../../assets/boutons/marker-map-blue.png';
import SliderMap from '../../components/map/SliderMap';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import Geolocation from '@react-native-community/geolocation';

type RecenterButtonProps = {
  onPress: () => void;
};

type TabMapProps = {
  navigation: NavigationProp<RouteType, 'Map'>;
  imagePath: string;
};

export const Map: React.FC<TabMapProps> = ({navigation, imagePath}) => {
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  const [userLocation, setUserLocation] = useState({
    latitude: 48.8966739567463,
    longitude: 2.3809600920672116,
  });

  const mapViewRef = useRef<MapView>(null);

  useEffect(() => {
    // Vérifier les autorisations pour les appareils iOS et les versions plus récentes d'Android
    if (
      Platform.OS === 'ios' ||
      (Platform.Version && Number(Platform.Version) >= 23)
    ) {
      const requestLocationPermissionIOSAndroid = async () => {
        const locationPermission = await check(
          PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        );
        if (locationPermission === RESULTS.GRANTED) {
          // Obtenir la position de l'utilisateur
          Geolocation.getCurrentPosition(
            position => {
              const {latitude, longitude} = position.coords;
              setUserLocation({latitude, longitude});
            },
            error => {
              console.log('Error getting user location:', error);
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
          );
        } else {
          // Demander la permission d'accéder à la position de l'utilisateur
          const newLocationPermission = await request(
            PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
          );
          if (newLocationPermission === RESULTS.GRANTED) {
            // Obtenir la position de l'utilisateur
            Geolocation.getCurrentPosition(
              position => {
                const {latitude, longitude} = position.coords;
                setUserLocation({latitude, longitude});
              },
              error => {
                console.log('Error getting user location:', error);
              },
              {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
            );
          } else {
            console.log('Accès refusé à la géolocalisation');
          }
        }
      };

      requestLocationPermissionIOSAndroid();
    } else {
      // Pour les versions plus anciennes d'Android, utiliser la méthode de demande de permission Android
      // requestLocationPermissionAndroid();
    }
  }, []);

  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 800,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    markerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    recenterButton: {
      position: 'absolute',
      bottom: 160,
      right: 20,
      padding: 10,
      borderRadius: 30,
    },
  });

  // Fonction pour centrer la carte sur la position de l'utilisateur
  const centerMapOnUser = () => {
    if (mapViewRef.current) {
      mapViewRef.current.animateToRegion(
        {
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        },
        1000,
      );
    }
  };

  const [markerOpened, setMarkerOpened] = useState<boolean>(false);

  const CustomMarker = () => {
    return (
      <View style={[styles.markerContainer]}>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
          }}
          onPress={() => setMarkerOpened(!markerOpened)}>
          <Image
            source={markerOpened ? customMarkerIconBlue : customMarkerIcon}
            style={{top: 12, width: 50, height: 50}}
          />
          <Text
            style={{
              top: -26,
              color: markerOpened ? '#fff' : '#0019A7',
              textAlign: 'center',
              fontFamily: 'Comfortaa',
              fontSize: 18,
              fontStyle: 'normal',
              fontWeight: 700,
            }}>
            4
          </Text>
        </TouchableOpacity>
        {markerOpened ? <SliderMap /> : null}
      </View>
    );
  };

  const RecenterButton: React.FC<RecenterButtonProps> = ({onPress}) => (
    <TouchableOpacity style={styles.recenterButton} onPress={onPress}>
      <Image
        source={require('../../../assets/boutons/center-map-position.png')}
      />
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../../../assets/images/bg-menuslide-map.png')}
      style={{height: '100%', width: '100%'}}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        backButton="Retour"
        imagePath={imagePath}
        tabPath={imagePath}
        backgroundColor={undefined}
        settingsNavigation={undefined}
      />
      <View
        style={[
          styles.container,
          {
            backgroundColor: 'transparent',
            height: '79%',
            width: '100%',
            top: 100,
          },
        ]}>
        <MapView
          ref={mapViewRef}
          provider={PROVIDER_GOOGLE}
          customMapStyle={[
            {
              featureType: 'administrative',
              elementType: 'geometry',
              stylers: [
                {
                  visibility: 'off',
                },
              ],
            },
            {
              featureType: 'poi',
              stylers: [
                {
                  visibility: 'off',
                },
              ],
            },
            {
              featureType: 'road',
              elementType: 'labels.icon',
              stylers: [
                {
                  visibility: 'off',
                },
              ],
            },
            {
              featureType: 'transit',
              stylers: [
                {
                  visibility: 'off',
                },
              ],
            },
          ]}
          style={styles.map}
          region={{
            latitude: 48.8966739567463,
            longitude: 2.3809600920672116,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          showsPointsOfInterest={false}>
          <Marker coordinate={userLocation}>
            <CustomMarker />
          </Marker>
        </MapView>
        <RecenterButton onPress={centerMapOnUser} />
      </View>
      {/* <MenuBottom navigation={navigation} route={route} tabPath={tabPath} active={'Map'} /> */}
    </ImageBackground>
  );
};
