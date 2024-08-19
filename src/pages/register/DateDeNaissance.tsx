/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import Styles from '../../../assets/style/Styles';
import {getData} from '../../services/storage';
import StylesDateDeNaissance from '../../../assets/style/styleScreens/styleRegister/StyleDateDeNaissance';
import {NavigationProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import { TitreDeuxLignes } from '../../components/titre/TitreDeuxLignes';
import { BtnNext } from '../../components/boutons/BtnNext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Date_de_naissance'>;
};

type RadioInputProps = {
  label: string;
  subText: string;
  selected: string;
};

const RadioInput: React.FC<RadioInputProps> = ({label, subText, selected}) => {
  const icon =
    selected === 'oui'
      ? require('../../../assets/images/radio_selected_noir.png')
      : require('../../../assets/images/radio_unselected.png');

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        width: 140,
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Image source={icon} style={Styles.radioInputIcon} />
      <View
        style={{
          flexDirection: 'column',
          width: 130,
          height: 46,
        }}>
        <Text
          style={[
            {
              fontFamily: selected === 'oui' ? 'Comfortaa-Bold' : 'Comfortaa',
              fontSize: 13,
              fontStyle: 'normal',
              color: selected === 'oui' ? '#0019A7' : '#fff',
              fontWeight: selected === 'oui' ? '700' : '500',
            },
          ]}>
          {label}
        </Text>
        <Text
          style={[
            {
              fontFamily: selected === 'oui' ? 'Comfortaa-Bold' : 'Comfortaa',
              fontSize: 13,
              fontStyle: 'normal',
              color: selected === 'oui' ? '#0019A7' : '#fff',
              fontWeight: selected === 'oui' ? '700' : '500',
            },
          ]}>
          {subText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const DateDeNaissance: React.FC<HomeProps> = ({navigation}) => {
 
  const handleGetData = async () => {
    try {
      const birthdate = await getData('date_of_birth');
      formatteDate(birthdate);
      console.log(birthdate);
    } catch (error) {
      console.log('Erreur lors de la récupération des données :', error);
    }
  };

  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [formattedDate, setFormattedDate] = useState<string>('');
  const [shortDate, setShortDate] = useState<string>('');
  const [age, setAge] = useState<number | undefined>();
  const today = new Date();

  const handleDateSelect = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    const currentDate = selectedDate || date; // Utilisez 'date' si 'selectedDate' est 'undefined'
    setShowDatePicker(false);
    setDate(currentDate);
    const dateShort = currentDate.toISOString().substr(0, 10);

    formatteDate(dateShort);
  };

  const formatteDate = (index: string) => {
    const dateArray = index.split('-');
    const formatte = `${dateArray[2]} ${getMonthName(parseInt(dateArray[1]))} ${
      dateArray[0]
    }`;
    setShortDate(index);
    // console.log(formatte.trim() === 'undefined undefined' ? 'bruh' : typeof(formatte));
    setFormattedDate(formatte);

    // Conversion en format YYYY-MM-DD pour BDD ?
    const formattedShortDate = `${dateArray[0]}-${dateArray[1]}-${dateArray[2]}`;
    const ageCurrent = calculateAge(formattedShortDate);
    setAge(ageCurrent);
    console.log('Date formatée ', formattedDate, ' et non formatée', index);
    console.log('Formatted Short Date: ', formattedShortDate);
    console.log('Age actuel: ', ageCurrent, ' ans');
  };

  console.log('date storage : ' + shortDate);

  // Fonction pour calculer l'âge à partir de la date de naissance
  const calculateAge = (birthdate: string) => {
    console.log('calculate age appelé');
    const birthdateDate = new Date(birthdate);
    const birthYear = birthdateDate.getFullYear();
    console.log(birthYear, birthdate);
    let age = today.getFullYear() - birthYear;
    const monthDiff = today.getMonth() - birthdateDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthdateDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  console.log(formattedDate);
  const getMonthName = (month: number) => {
    const monthNames = [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ];
    return monthNames[month - 1];
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <View style={StylesDateDeNaissance.container}>
      <ImageBackground
        style={StylesDateDeNaissance.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[StylesDateDeNaissance.viewContent]}>
          <TitreDeuxLignes
            txtTitle="VOTRE DATE"
            txtTitle2="DE NAISSANCE ?"
            textAlign="center"
            top={140}
            left={undefined}
            fontFamily={undefined}
            color={undefined}
            fontWeight={undefined}
            fontSize={24}
          />
          <SafeAreaView style={[StylesDateDeNaissance.ViewInputDate]}>
            <>
              <TouchableOpacity
                style={[StylesDateDeNaissance.BtnPicker]}
                accessibilityLabel="Sélectionner une date"
                onPress={() => setShowDatePicker(true)}>
                {formattedDate &&
                formattedDate.trim() !== 'undefined undefined' ? (
                  <Text style={[StylesDateDeNaissance.textBlue]}>
                    {formattedDate}
                  </Text>
                ) : (
                  <Text style={[StylesDateDeNaissance.textWhite]}>
                    DD/MM/AAAA
                  </Text>
                )}
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={handleDateSelect}
                />
              )}
            </>
          </SafeAreaView>
          <View style={[StylesDateDeNaissance.BoxInput]}>
            <Text style={[StylesDateDeNaissance.textWhite1]}>
              Catégorisation automatique.
            </Text>
            <View style={[StylesDateDeNaissance.BoxInputCol]}>
              <View style={[StylesDateDeNaissance.BoxInputRow]}>
                <RadioInput
                  label="GEN Z"
                  subText="(18 - 23 ans)"
                  selected={age && age >= 18 && age <= 23 ? 'oui' : 'non'}
                />
                <RadioInput
                  label="GEN X"
                  subText="(38 - 56 ans)"
                  selected={age && age >= 38 && age <= 56 ? 'oui' : 'non'}
                />
              </View>
              <View style={[StylesDateDeNaissance.BoxInputRow]}>
                <RadioInput
                  label="MILLENNIALS"
                  subText="(24 - 37 ans)"
                  selected={age && age >= 24 && age <= 37 ? 'oui' : 'non'}
                />
                <RadioInput
                  label="BOOMER"
                  subText="(57 - 77 ans)"
                  selected={age && age >= 57 && age <= 77 ? 'oui' : 'non'}
                />
              </View>
            </View>
          </View>

          {(age && age > 77) || (age && age < 18) ? (
            <View style={[StylesDateDeNaissance.ViewTextError]}>
              <Text style={[StylesDateDeNaissance.TextError]}>
                Vous n'avez pas l'âge requis pour faire aboutir votre
                inscription.
              </Text>
            </View>
          ) : null}
          <Text style={[StylesDateDeNaissance.textWhite2]}>Choix unique.</Text>
        </View>
        <BtnNext
          navigation={navigation}
          navigateTo="Taille"
          propName="RegisterRoute"
          propRoute="Taille"
          txt="Continuer"
          handleStore={{key: 'date_of_birth', value: shortDate ?? ''}}
          postInfo={undefined}
          background="White"
          top={180}
          left={0}
        />
      </ImageBackground>
    </View>
  );
};
