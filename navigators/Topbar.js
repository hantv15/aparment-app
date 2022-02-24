import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Welcome from '../screens/Welcome'
import Apartment from '../screens/details/Apartment';
import tw from 'twrnc';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    const insets = useSafeAreaInsets();
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: "#ca196e",
            }}
        >
            <Tab.Screen
                name="welcome"
                component={Welcome}
                options={{ tabBarLabel: 'Thông tin' }}
            />
            <Tab.Screen
                name="apartment"
                component={Apartment}
                options={{ tabBarLabel: 'Căn hộ' }}
            />


        </Tab.Navigator>
    )
}

export default function TopBarNavigator() {
    return (
        <NavigationContainer independent={true}>
            <MyTabs />
        </NavigationContainer>
    )

}

const styles = StyleSheet.create({})