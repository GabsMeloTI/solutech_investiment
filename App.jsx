import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProvider } from './components/dataUser/App.jsx';
import Home from './pages/home/App.jsx';
import SingIn from './pages/singIn/App.jsx';
import SingUp from './pages/singUp/App.jsx';
import InvestmentForm from './pages/investmentForm/App.jsx';
import CurrencyExchange from './pages/currencyExchange/App.jsx';
import Calculation from './pages/calculation/App.jsx';
import AboutUs from './pages/aboutUs/App.jsx';
import CalculationResult from './pages/calculationResult/App.jsx';
import EditUser from './pages/editUser/App.jsx';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SingIn" component={SingIn} />
          <Stack.Screen name="SingUp" component={SingUp} />
          <Stack.Screen name="InvestmentForm" component={InvestmentForm} />
          <Stack.Screen name="CurrencyExchange" component={CurrencyExchange} />
          <Stack.Screen name="Calculation" component={Calculation} />
          <Stack.Screen name="AboutUs" component={AboutUs} />
          <Stack.Screen name="CalculationResult" component={CalculationResult} />
          <Stack.Screen name="EditUser" component={EditUser} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
