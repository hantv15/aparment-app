import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Apartment from '../screens/Apartment';
import Notification from '../screens/Notification';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Dashboard/Home'
const Stack = createStackNavigator();

function DetailStack() {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName="Apartment">
      <Stack.Screen
        name="Apartment"
        component={Apartment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default DetailStack;
