import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
} from 'react-native';
import StyleSupprimerCompte from '../../../assets/style/styleScreens/styleSettings/StyleSupprimerCompte';
import MenuSlide from '../../components/menus/MenuSlide';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
import {BtnNext} from '../../components/boutons/BtnNext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Supprimer_mon_compte'>;
  route: RouteProp<RouteType, 'Supprimer_mon_compte'>;
};

export const SupprimerCompte: React.FC<HomeProps> = ({navigation}) => {
  const [text, onChangeText] = useState<string>();

  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <ImageBackground
      style={StyleSupprimerCompte.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        backButton="Retour"
        backgroundColor={'white'}
        settingsNavigation={'Settings'}
      />
      <View style={{flex: 6}}>
        <TitreUneLigne
          txtTitle="Supprimer mon compte"
          fontFamily="Comfortaa-Bold"
          color={'#0019A7'}
          fontSize={24}
          textAlign="center"
          fontWeight={'700'}
          top={25}
          left={undefined}
        />
        <View style={StyleSupprimerCompte.separator} />
        <Text style={StyleSupprimerCompte.description}>
          Vous pouvez suspendre votre compte quand vous le souhaitez. Votre
          compte sera mis en pause et vous pourrez le réactiver quand vous le
          voudrez.
        </Text>
        <View style={StyleSupprimerCompte.mettreEnPauseContainer}>
          <Text style={StyleSupprimerCompte.confirmText}>
            Confirmer suppression de compte
          </Text>
          <SafeAreaView>
            <TextInput
              style={StyleSupprimerCompte.inputNumber}
              placeholder="Entrez votre mot de passe"
              placeholderTextColor={'#0019A7'}
              onChangeText={onChangeText}
              value={text}
            />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('SettingsNavigator', {
                  SettingsRoute: 'Compte_non_trouve',
                })
              }
              style={{top: 0}}>
              <Image
                style={StyleSupprimerCompte.confirmButton}
                source={require('../../../assets/boutons/bouton-rouge-deux.png')}
              />
              <Text style={StyleSupprimerCompte.confirmButtonText}>
                Je confirme
              </Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>

        <View style={StyleSupprimerCompte.viewContainerInfo}>
          <Image
            style={StyleSupprimerCompte.icoInfo}
            source={require('../../../assets/boutons/ico-info-rose-text-bleu.png')}
          />
          <Text style={StyleSupprimerCompte.textInfo}>
            Si vous voulez vraiment nous quitter, nous espérons que vous avez
            trouvé ce que vous cherchiez.
          </Text>
          <TouchableOpacity>
            <Text style={StyleSupprimerCompte.linkInfo}>
              C'est comme vous voulez, cela décale simplement votre période de
              fin de contrat.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={StyleSupprimerCompte.linkInfo}>
              Laissez-nous votre avis ou Racontez-nous votre histoire.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1}}>
        <BtnNext
          navigation={navigation}
          navigateTo="Settings"
          propName="SettingsRoute"
          propRoute="Settings"
          txt="Retour paramètres"
          handleStore={undefined}
          postInfo={undefined}
          color="#0019A7"
          background="Blue-border"
          top={0}
          left={0}
          fontSize={18}
          fontFamily={undefined}
          fontWeight="700"
        />
      </View>
    </ImageBackground>
  );
};

export default SupprimerCompte;
