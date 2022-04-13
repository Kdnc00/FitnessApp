import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import MemberSign from './src/pages/MemberSign';

import Welcome from './src/pages/Welcome';

import MemberResult from './src/pages/MemberResult';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="WelcomeScreen"
          component={Welcome} />
        <Stack.Screen
          name="MemberSignScreen"
          component={MemberSign}
        />
        <Stack.Screen
          name="MemberResultScreen"
          component={MemberResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;