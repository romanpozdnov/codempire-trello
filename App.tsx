/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  NavigationContainerProps,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Board} from './src/screens/board/';
import {CreateTask} from './src/screens/create-task/';

import * as ROUTES from './src/constants/routes';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ItemList">
        <Stack.Screen name={ROUTES.ITEMLIST} component={Board} />
        <Stack.Screen name={ROUTES.CREATETASK} component={CreateTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
