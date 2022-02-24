import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground, Button } from 'react-native';
import {
  StyledFormArea,
  ButtonText,
  Line,
} from './../components/styles';
import tw from 'twrnc';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { CredentialsContext } from './../components/CredentialsContext';
import UserGrid from '../components/UserGrid';
const Welcome = () => {

  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);

  const { name, email, photoUrl } = storedCredentials;

  const AvatarImg = photoUrl
    ? {
      uri: photoUrl,
    }
    : require('./../assets/img/expo-bg1.png');

  const clearLogin = () => {
    AsyncStorage.removeItem('flowerCribCredentials')
      .then(() => {
        setStoredCredentials("");
      })
      .catch((error) => console.log(error));
  };

  const image = { uri: 'https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80' }



  return (
    <>
      <StatusBar style="light" />
      <ScrollView>
        <View style={tw`flex-1 `}>

          <ImageBackground style={tw`w-full`} source={image} resizeMode="cover">
            <View style={tw` w-full px-8 py-2 mt-12 flex flex-row`}>
              <Image resizeMode="cover" source={AvatarImg} style={tw`w-16 h-16 rounded-full border bg-white mb-8`} />
              <Text style={tw`font-bold text-2xl text-white px-2 mt-4`}> {name || 'Olga Simpson'}</Text>
            </View>
          </ImageBackground>
          {/* stack */}
          <View style={tw``}>
            <TouchableOpacity style={tw`rounded-lg py-2 bg-gray-200 rounded-lg mt-2 m-4 shadow `}>
              <View style={tw`px-4`}>
                <Text style={tw`font-bold text-2xl text-red-500 pb-4`}>Thông tin cá nhân</Text>

                <Text welcome={true} style={tw`text-xl`}>
                  họ tên
                  {name || 'Olga Simpson'}</Text>

                <Text welcome={true} style={tw`text-xl`}>

                  {email || 'Olga Simpson'}</Text>
              </View>

            </TouchableOpacity>

            <TouchableOpacity style={tw`rounded-lg py-2 bg-gray-200 rounded-lg mt-2 m-4 shadow`}>
              <View style={tw`px-4`}>
                <Text style={tw`font-bold text-2xl text-red-500 pb-4 `}>Thanh toán</Text>
                <Text welcome={true} style={tw`text-xl px-2`}>
                  Nợ
                  {name || 'Olga Simpson'}</Text>
                <Text welcome={true} style={tw`text-xl px-2`}>

                  {name || 'Olga Simpson'}</Text>
              </View>
            </TouchableOpacity>

            <View>
            </View>

          </View>
          {/* Button */}
          <View>

          </View>
          <StyledFormArea>
            <TouchableOpacity onPress={clearLogin} style={tw`bg-blue-500 w-48 mx-auto`}>
              <ButtonText style={tw`p-2 text-center`}>Logout</ButtonText>
            </TouchableOpacity>

          </StyledFormArea>
        </View>

      </ScrollView >



    </>
  );
};

export default Welcome;
