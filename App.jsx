import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home/App.jsx';
import SingIn from './pages/singIn/App.jsx';
import SingUp from './pages/singUp/App.jsx';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SingIn" component={SingIn} />
        <Stack.Screen name="SingUp" component={SingUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}