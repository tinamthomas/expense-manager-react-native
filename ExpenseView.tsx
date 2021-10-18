import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  FlatList
} from 'react-native';
import { Expense } from './src/models/expense';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    description: 'Oreos',
    category: 'Groceries',
    date: new Date("10-10-2020"),
    amount: 3,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    description: 'Cereal',
    category: 'Groceries',
    date: new Date("10-10-2020"),
    amount: 5,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    description: 'Fuel',
    category: 'Car',
    date: new Date("10-10-2020"),
    amount: 50,
  },
];


interface IData extends Expense{
  id: string
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#E0E0E0",
    padding: 20,
    margin: 6,
    borderRadius: 10,
    flexDirection: "row",
    flex: 1,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  main: {
    flexDirection: "column",
    flex: 3,
  },
  category: {
    flex: 1,
    fontSize: 13,
  },
  description: {
    flex: 1,
    fontSize: 16,
  },
  amount: {
    fontSize: 16,
    flex: 1,
    textAlign: "right",
  }
});

const renderItem = ({ item }: {item: IData}) => (
  <View style={styles.item}>
    <View style={styles.main}>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.category}>{item.category}</Text>
    </View>
    <Text style={styles.amount}>${item.amount}</Text>
  </View>
);


const ExpenseView = () =>
    <SafeAreaView>
          <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>;

export default ExpenseView;