import React, {useEffect, useState} from 'react';
import {useDateOfBirthContext} from '../../context/DateOfBirthContext';
import {Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import StylesDateDeNaissance from '../../../assets/style/styleScreens/styleRegister/StyleDateDeNaissance';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {getData, storeData} from '../../services/storage';

function DateDeNaissanceComponent() {
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [formattedDate, setFormattedDate] = useState<string>('');
  const [shortDate, setShortDate] = useState<string>('');
  const today = new Date();

  const {setAge, setDateOfBirth} = useDateOfBirthContext();

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
    setDateOfBirth(index);
    handleStoreData('date_of_birth', index);
    console.log('Date formatée ', formattedDate, ' et non formatée', index);
    console.log('Formatted Short Date: ', formattedShortDate);
    console.log('Age actuel: ', ageCurrent, ' ans');
  };

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

  const handleStoreData = async (key: string, value: string) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetData = async () => {
    try {
      const birthdate = await getData('date_of_birth');
      formatteDate(birthdate);
      console.log(birthdate);
    } catch (error) {
      console.log('Erreur lors de la récupération des données :', error);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  // console.log('emails : ' + listEmails);

  return (
    <SafeAreaView style={[StylesDateDeNaissance.ViewInputDate]}>
      <>
        <TouchableOpacity
          style={[StylesDateDeNaissance.BtnPicker]}
          accessibilityLabel="Sélectionner une date"
          onPress={() => setShowDatePicker(true)}>
          {formattedDate && formattedDate.trim() !== 'undefined undefined' ? (
            <Text style={[StylesDateDeNaissance.textBlue]}>
              {formattedDate}
            </Text>
          ) : (
            <Text style={[StylesDateDeNaissance.textWhite]}>DD/MM/AAAA</Text>
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
  );
}

export default DateDeNaissanceComponent;
