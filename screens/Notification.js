import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Image, View, Text, TouchableOpacity, ImageBackground } from "react-native";
import tw from 'twrnc'
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import { LineDivider } from "../components";
import { images } from "../constants";

const Notification = () => {

  const [notification, setNotification] = useState([])
  useEffect(() => {
    getNewsNotificationAPI()
  }, [])

  function getNewsNotificationAPI() {
    axios.get(
      'https://60b8400ab54b0a0017c03399.mockapi.io/v1/noification'
    )
      .then(async function (response) {
        setNotification(response.data);
        console.log(data);
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  if (!notification) {
    return null;
  }

  return (
    <ImageBackground source={images.bg_1} style={tw`w-full h-full`}>
      <SafeAreaView style={tw`mx-auto w-[90%] mt-[15%]`}>

          <Text style={tw`text-3xl font-bold`}>
            Notification
          </Text>
          <Text style={tw`text-lg mt-2`}>
            Today
          </Text>

          <FlatList data={notification}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({ item }) => {
              return (
                <View item={item} style={tw`items-center`}>
                  <TouchableOpacity style={tw`rounded-lg py-2 mt-2 `}
                    onPress={() => navigation.navigate('Search')}
                  >
                    <View style={tw`px-4 flex`}>
                      <View>
                        <Image style={tw`w-[80px] h-[80px] rounded-full -ml-4 `}
                          source={images.student_2}
                        />
                      </View>
                      <View style={tw`pl-[20%] -mt-[90px]`}>
                        <Text style={tw`font-bold text-lg text-red-500 pb-4 px-4`}>{item.title}</Text>

                        <Text welcome={true} style={tw`text-[16px] px-4`}>

                          Tòa nhà:
                          {item.description}</Text>
                      </View>

                    </View>

                  </TouchableOpacity>

                  <LineDivider />
                </View>
              )

            }}

          />

      </SafeAreaView >

    </ImageBackground>

  );
};



export default Notification;