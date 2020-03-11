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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import InProgress from './src/screens/in-progress/in-progress';
import InReview from './src/screens/in-review/in-review';

import * as ROUTES from './src/constants/routes';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InProgress">
        <Stack.Screen name={ROUTES.INPROGRESS} component={InProgress} />
        <Stack.Screen name={ROUTES.INREVIEW} component={InReview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
