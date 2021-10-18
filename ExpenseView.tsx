import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  FlatList
} from 'react-native';
import execQuery from './src/db/execQuery';
import openDB from './src/db/open';
import { Expense } from './src/models/expense';

interface IData extends Expense {
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

const renderItem = ({ item }: { item: IData }) => (
  <View style={styles.item}>
    <View style={styles.main}>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.category}>{item.category}</Text>
    </View>
    <Text style={styles.amount}>${item.amount}</Text>
  </View>
);

interface IExpenseViewState{
  expenses: Expense[];
}

class ExpenseView extends React.Component<any,IExpenseViewState> {
  async getExpenses(){
    const db = await openDB();
    const callback = (results: any) => {
      var len = results.rows.length;
      var resultSet=[];
      for (let i = 0; i < len; i++) {
        let row = results.rows.item(i);
        resultSet.push({...row, id: i})
      }
      this.setState({expenses: resultSet});
    }; 
    await db.transaction(async (tx: any) => {
        var query = "select * from Expenses";
        await execQuery(db, query, null, callback);
    })
  };
  state = {
    expenses: []
  }
  componentDidMount(){
    this.getExpenses();
  }
  render() {
    return <SafeAreaView>
      <FlatList
        data={this.state.expenses}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>;
  }
}

export default ExpenseView;