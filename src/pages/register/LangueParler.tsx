import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import {NativeModules} from 'react-native';
import StylesLangParler from '../../../assets/style/styleScreens/styleRegister/StyleLangParler';
import {
  getData,
  // getDatas
} from '../../services/storage';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
import {BtnNext} from '../../components/boutons/BtnNext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Langue_parler'>;
};

//Home Screen
export const LangueParler: React.FC<HomeProps> = ({navigation}) => {
  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    try {
      const langue = await getData('user_langues');
      setSelectedValues(langue || '');
      // console.log('langue : ' + langue);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  // La constante currentLocale permet de récupérer la/les langues selectionné(s) dans les paramètres du téléphone au travers des NativesModules
  const {I18nManager} = NativeModules;
  const currentLocale = I18nManager.localeIdentifier;

  let localeLang = '';

  if (currentLocale === 'fr_FR') {
    localeLang = 'Français';
  } else if (currentLocale === 'es_ES') {
    localeLang = 'Espagnol';
  } else if (currentLocale === 'nl_NL') {
    localeLang = 'Néerlandais';
  } else if (currentLocale === 'pt_PT') {
    localeLang = 'Portugais';
  } else if (currentLocale === 'pl_PL') {
    localeLang = 'Polonais';
  } else if (currentLocale === 'zh_CN') {
    localeLang = 'Chinois';
  } else if (currentLocale === 'en_US') {
    localeLang = 'Anglais';
  } else if (currentLocale === 'de_DE') {
    localeLang = 'Allemand';
  } else if (currentLocale === 'it_IT') {
    localeLang = 'Italien';
  } else if (currentLocale === 'ar_SA') {
    localeLang = 'Arabe';
  } else if (currentLocale === 'el_GR') {
    localeLang = 'Grec';
  } else if (currentLocale === 'ja_JP') {
    localeLang = 'Japonais';
  }

  if (currentLocale === 'fr_FR') {
    localeLang = 'Français';
  } else if (currentLocale === 'es_ES') {
    localeLang = 'Espagnol';
  } else if (currentLocale === 'nl_NL') {
    localeLang = 'Néerlandais';
  } else if (currentLocale === 'pt_PT') {
    localeLang = 'Portugais';
  } else if (currentLocale === 'pl_PL') {
    localeLang = 'Polonais';
  } else if (currentLocale === 'zh_CN') {
    localeLang = 'Chinois';
  } else if (currentLocale === 'en_US') {
    localeLang = 'Anglais';
  } else if (currentLocale === 'de_DE') {
    localeLang = 'Allemand';
  } else if (currentLocale === 'it_IT') {
    localeLang = 'Italien';
  } else if (currentLocale === 'ar_SA') {
    localeLang = 'Arabe';
  } else if (currentLocale === 'el_GR') {
    localeLang = 'Grec';
  } else if (currentLocale === 'ja_JP') {
    localeLang = 'Japonais';
  }

  // Constante permettant de récupérer les input radio qui ont été sélectionnés par l'utilisateur
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  // Constante permettant de récupérer les valeurs des inputs sélectionnés
  // /!\ Ce truc ne fonctionne pas correctement, il enregistre plusieurs fois une même valeur et serait donc à revoir /!\
  const handleSelection = (value: string) => {
    if (selectedValues.includes(value)) {
      // Supprime la valeur si elle existe déjà
      const nextSelectedValues = selectedValues.filter(val => val !== value);
      setSelectedValues(nextSelectedValues);
    } else {
      // Ajoute la valeur si elle n'existe pas
      const nextSelectedValues = [...selectedValues, value];
      setSelectedValues(nextSelectedValues);
    }
  };

  const lang =
    'Natif ICU: ' +
    currentLocale +
    '; Langue: ' +
    localeLang +
    '; Langues choisi: ' +
    [selectedValues];
  console.log(lang);

  return (
    <View style={StylesLangParler.container}>
      <ImageBackground
        style={StylesLangParler.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[StylesLangParler.ViewText]}>
          <TitreUneLigne
            txtTitle="LANGUE PARLÉES ?"
            textAlign="center"
            top={40}
            left={undefined}
            fontFamily={undefined}
            color={undefined}
            fontWeight={undefined}
            fontSize={24}
          />
        </View>
        <View style={[StylesLangParler.ViewInputRadioLang]}>
          <View style={{flex: 2}}>
            <TouchableOpacity
              style={StylesLangParler.btnInputLang}
              onPress={() => handleSelection('Français')}
              accessibilityLabel="Français">
              <Image
                style={StylesLangParler.SelectedImage}
                source={
                  selectedValues.includes('Français')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={StylesLangParler.textBtnInputLang}>Français</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={StylesLangParler.btnInputLang}
              onPress={() => handleSelection('Espagnol')}
              accessibilityLabel="Espagnol">
              <Image
                style={StylesLangParler.SelectedImage}
                source={
                  selectedValues.includes('Espagnol')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={StylesLangParler.textBtnInputLang}>
                Espagnol Castillan
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={StylesLangParler.btnInputLang}
              onPress={() => handleSelection('Néerlandais')}
              accessibilityLabel="Néerlandais">
              <Image
                style={StylesLangParler.SelectedImage}
                source={
                  selectedValues.includes('Néerlandais')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={StylesLangParler.textBtnInputLang}>Néerlandais</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={StylesLangParler.btnInputLang}
              onPress={() => handleSelection('Portugais')}
              accessibilityLabel="Portugais">
              <Image
                style={StylesLangParler.SelectedImage}
                source={
                  selectedValues.includes('Portugais')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={StylesLangParler.textBtnInputLang}>Portugais</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={StylesLangParler.btnInputLang}
              onPress={() => handleSelection('Polonais')}
              accessibilityLabel="Poonais">
              <Image
                style={StylesLangParler.SelectedImage}
                source={
                  selectedValues.includes('Polonais')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={StylesLangParler.textBtnInputLang}>Polonais</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={StylesLangParler.btnInputLang}
              onPress={() => handleSelection('Chinois')}
              accessibilityLabel="Chinois mandarin">
              <Image
                style={StylesLangParler.SelectedImage}
                source={
                  selectedValues.includes('Chinois')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={StylesLangParler.textBtnInputLang}>
                Chinois mandarin
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 2}}>
            <TouchableOpacity
              style={StylesLangParler.btnInputLang}
              onPress={() => handleSelection('Anglais')}
              accessibilityLabel="Anglais">
              <Image
                style={StylesLangParler.SelectedImage}
                source={
                  selectedValues.includes('Anglais')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={StylesLangParler.textBtnInputLang}>Anglais</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={StylesLangParler.btnInputLang}
              onPress={() => handleSelection('Allemand')}
              accessibilityLabel="Allemand">
              <Image
                style={StylesLangParler.SelectedImage}
                source={
                  selectedValues.includes('Allemand')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={StylesLangParler.textBtnInputLang}>Allemand</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={StylesLangParler.btnInputLang}
              onPress={() => handleSelection('Italien')}
              accessibilityLabel="Italien">
              <Image
                style={StylesLangParler.SelectedImage}
                source={
                  selectedValues.includes('Italien')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={StylesLangParler.textBtnInputLang}>Italien</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={StylesLangParler.btnInputLang}
              onPress={() => handleSelection('Arabe')}
              accessibilityLabel="Arabe">
              <Image
                style={StylesLangParler.SelectedImage}
                source={
                  selectedValues.includes('Arabe')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={StylesLangParler.textBtnInputLang}>Arabe</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={StylesLangParler.btnInputLang}
              onPress={() => handleSelection('Grec')}
              accessibilityLabel="Grec">
              <Image
                style={StylesLangParler.SelectedImage}
                source={
                  selectedValues.includes('Grec')
                    ? require('../../../assets/images/radio_selected.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={StylesLangParler.textBtnInputLang}>Grec</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={StylesLangParler.btnInputLang}
              onPress={() => handleSelection('Japonnais')}
              accessibilityLabel="Japonnais">
              <Image
                style={StylesLangParler.SelectedImage}
                source={
                  selectedValues.includes('Japonnais')
                    ? require('../../../assets/images/radio_selected_noir.png')
                    : require('../../../assets/images/radio_unselected.png')
                }
              />
              <Text style={StylesLangParler.textBtnInputLang}>Japonnais</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{top: 200, height: 120}}>
          <Text style={[StylesLangParler.textWhite]}>Choix multiples.</Text>
          <View style={[StylesLangParler.line]} />
        </View>

        <View style={[{top: 280}]}>
          <TouchableOpacity
            style={[Styles.row, StylesLangParler.btnModal]}
            accessibilityLabel="Afficher Modal">
            <Text
              style={[StylesLangParler.item, StylesLangParler.textGrayCenter]}>
              {localeLang}
            </Text>
          </TouchableOpacity>
          <Text style={[StylesLangParler.textWhiteCenter2]}>
            Langue de votre appareil.
          </Text>
        </View>
        <BtnNext
          navigation={navigation}
          navigateTo="Situation"
          propName="RegisterRoute"
          propRoute="Situation"
          txt="Continuer"
          handleStore={{key: 'user_langues', value: selectedValues ?? ''}}
          postInfo={undefined}
          background="White"
          top={230}
          left={0}
        />
      </ImageBackground>
    </View>
  );
};
