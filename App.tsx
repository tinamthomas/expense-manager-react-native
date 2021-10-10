/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExpenseSummary from './ExpenseSummary';
import NewExpense from './NewExpense';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import initializeDatabase from './src/db/init';

const Tab = createBottomTabNavigator();

class App extends React.Component {
  constructor(props: any){
    super(props);
    initializeDatabase();
  }
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Welcome to your Expense Manager"
            component={ExpenseSummary}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }} />
          <Tab.Screen
            name="Add new expense"
            component={NewExpense}
            options={{
              tabBarLabel: 'New Expense',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="plus" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
};


export default App;
