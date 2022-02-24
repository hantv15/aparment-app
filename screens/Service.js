import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { useState } from "react";



const Service = (props) => {

    return (

        <View style={tw`p-4 android:pt-2 bg-[#42c38f] `}>
            <TouchableOpacity style={tw`flex flex-row justify-center`}>

                <View >
                    <View style={tw`p-6 w-full bg-white rounded-lg mb-5 `}>
                        <Text style={tw`bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded`}>
                            Button
                        </Text>
                    </View>

                </View>
                <View >
                    <View style={tw`p-6 w-full bg-white rounded-lg mb-5 `}>
                        <Text style={tw`bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded`}>
                            Button
                        </Text>
                    </View>

                </View>
                <View >
                    <View style={tw`p-6 w-full bg-white rounded-lg mb-5 `}>
                        <Text style={tw`bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded`}>
                            Button
                        </Text>
                    </View>

                </View>
                <View >
                    <View style={tw`p-6 w-full bg-white rounded-lg mb-5 `}>
                        <Text style={tw`bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded`}>
                            Button
                        </Text>
                    </View>

                </View>

            </TouchableOpacity>
        </View>
    )
}

export default Service

