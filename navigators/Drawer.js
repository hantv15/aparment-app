import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home'
import Apartment from '../screens/details/Apartment';
import Colors from '../constants/Colors';
import UserDetail from '../screens/details/UserDetail';
const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home" useLegacyImplementation={true} screenOptions={{ headerShown:false}}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Apartment" component={Apartment} />
        <Drawer.Screen name="User" component={UserDetail} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}