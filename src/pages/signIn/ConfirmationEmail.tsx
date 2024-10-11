import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import StylesConfirmationEmail from '../../../assets/style/styleScreens/styleRegister/StyleConfirmationEmail';
import {getData} from '../../services/storage';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreDeuxLignes} from '../../components/titre/TitreDeuxLignes';
import {BtnNext} from '../../components/boutons/BtnNext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Confirmation_email'>;
};

export const ConfirmationEmail: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    try {
      const route = await getData('route');
      setRouteChoice(route || '');
      // console.log('route : ' + route);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const [routeChoice, setRouteChoice] = useState<string>();

  return (
    <View style={StylesConfirmationEmail.container}>
      <ImageBackground
        style={StylesConfirmationEmail.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <TitreDeuxLignes
          txtTitle="CONFRIMATION"
          txtTitle2="E-MAIL"
          textAlign="left"
          top={160}
          left={30}
          fontFamily={undefined}
          color={undefined}
          fontWeight={undefined}
          fontSize={24}
        />
        <View style={[StylesConfirmationEmail.BlockImg]}>
          <Image
            style={StylesConfirmationEmail.ImgBulle}
            source={require('../../../assets/images/avion-en-papier.png')}
          />
        </View>
        <Text style={[StylesConfirmationEmail.textWhite]}>
          Si vous n&apos;avez pas reçu d&apos;email, consultez vos spams ou
          rééssayez.
        </Text>
        <BtnNext
          navigation={navigation}
          navigateTo="S_inscrire_par_mail"
          propName="RegisterRoute"
          propRoute="S_inscrire_par_mail"
          txt="Utiliser un autre e-mail"
          handleStore={undefined}
          postInfo={undefined}
          background="Email-noir"
          top={300}
          left={10}
          fontSize={18}
        />
        <Text style={[StylesConfirmationEmail.textWhite2]}>
          Utilisez un autre moyen de connexion
        </Text>
        {routeChoice === 'Recuperation de compte' ? (
          <BtnNext
            navigation={navigation}
            navigateTo="RegisterNavigator"
            propName="RegisterRoute"
            propRoute="Felicitations"
            txt="Continuer"
            handleStore={undefined}
            postInfo={undefined}
            color={undefined}
            background="White"
            top={180}
            left={0}
            fontSize={18}
            fontFamily={undefined}
            fontWeight="700"
          />
        ) : (
          <BtnNext
            navigation={navigation}
            navigateTo="Ville"
            propName="RegisterRoute"
            propRoute="Ville"
            txt="Continuer"
            handleStore={undefined}
            postInfo={undefined}
            color="#0019A7"
            background="White"
            top={180}
            left={0}
            fontSize={18}
            fontFamily={undefined}
            fontWeight="700"
          />
        )}
      </ImageBackground>
    </View>
  );
};
