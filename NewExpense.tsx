import * as React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Input, Button, Icon } from 'react-native-elements';

import { SafeAreaView, TextInput } from 'react-native';
import insert from './src/db/insert';
import { Expense } from './src/models/expense';
export default function UselessTextInput() {
  
  const [isCalendarVisilbe, setCalendarVisible] = React.useState(false);
  
  const [date, setDate] = React.useState(new Date());
  const [description, onChangeDescription] = React.useState('');
  const [category, onChangeCategory] = React.useState('');
  const [amount, onChangeAmount] = React.useState(0);

  const onChange = (event: Event, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setCalendarVisible(false);
    setDate(currentDate);
  };
  const openCalendar = () => setCalendarVisible(true);
  const onSubmit = () => {
    const expense: Expense = {description, category, amount, date};
    insert(expense);
    setDate(new Date());
    onChangeCategory('');
    onChangeDescription('');
    onChangeAmount(0);
  }
  return (
    <SafeAreaView>
      <Input placeholder='Date'
         value={date.toDateString()}
         leftIcon={
          <Icon
            name='date-range'
            size={24}
            color='black'
            onPress={() => openCalendar()}
          />
        }
      />
      <Input placeholder='Description' onChangeText = {onChangeDescription} value={description}/>
      <Input placeholder='Category' onChangeText= {onChangeCategory} value={category}/>
      <Input placeholder='Amount' leftIcon={{name: 'attach-money' }} value={amount.toString()} onChangeText={(value) => onChangeAmount(Number(value))}/>
      <Button title="Enter" onPress={onSubmit}/>
      { isCalendarVisilbe && 
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={new Date()}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      }
    </SafeAreaView>
  );
}