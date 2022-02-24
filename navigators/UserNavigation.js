import React from 'react';

//colors
import { Colors } from './../components/styles';
const { darkLight, brand, primary, tertiary, secondary } = Colors;

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// screens

import Service from '../screens/Service';
import Apartment from '../screens/details/Apartment';

import { CredentialsContext } from './../components/CredentialsContext';

const Stack = createStackNavigator();

const UserNavigation = () => {
    return (
        <NavigationContainer style={{ backgroundColor: 'red' }} independent={true}>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent',
                    },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20,
                    },
                }}
            >
                <Stack.Screen
                    options={{
                        headerTintColor: primary,
                    }}
                    name="Welcome"
                    component={Apartment}
                />
                <Stack.Screen name="Login" component={Apartment} />


            </Stack.Navigator>
        </NavigationContainer>



    );
};



export default UserNavigation;
