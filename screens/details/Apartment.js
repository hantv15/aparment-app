
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import axios from 'axios';
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

import { images, COLORS, FONTS, SIZES } from '../../constants';
import Home from '../Home';

const Apartment = ({ navigation }) => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        getNewsFromAPI()
    }, [])

    function getNewsFromAPI() {
        axios.get(
            // 'http://127.0.0.1:8000/department'
            'https://60b8400ab54b0a0017c03399.mockapi.io/apartment'
            // 'http://139.180.196.74/test.json'
        )
            .then(async function (response) {
                setNews(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    if (!news) {
        return null
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={images.onboardingImage}
                    resizeMode="contain"
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </View>
            <FlatList data={news}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({ item }) => {
                    return <View item={item} style={tw` item-center`}>
                        {/* <Image style={{width:50, height:50}} source={item.urlToImage ? {uri: item.urlToImage } : null}/> */}
                        <TouchableOpacity style={tw`rounded-lg py-2 bg-gray-200 rounded-lg mt-2 m-4 shadow `}>
                            <View style={tw`px-4`}>
                                <Text style={tw`font-bold text-2xl text-red-500 pb-4`}>Thông tin căn hộ</Text>
                                <Text welcome={true} style={tw`text-xl p-2`} >
                                    <Icon name='ios-home-outline' size={20} />
                                    Tên căn hộ:
                                    {item.title}
                                </Text>
                                <Text welcome={true} style={tw`text-xl p-2`}>
                                    <Icon name='clipboard-outline' size={20} />
                                    Tòa nhà:
                                    {item.userId}</Text>
                                {/* <Text welcome={true} style={tw`text-xl p-2`}>
                                    <Icon name='ios-home-outline' size={20} />
                                    Trạng thái:
                                    {item.cycle}</Text>
                                <Text welcome={true} style={tw`text-xl p-2`}>
                                    <Icon name='ios-home-outline' size={20} />
                                    Trạng thái:
                                    {item.prescription}</Text> */}

                            </View>

                        </TouchableOpacity>


                    </View>
                }}
            />
            {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', marginHorizontal: SIZES.padding }}>
                    <Text style={{ ...FONTS.h2 }}>Digital Ticket</Text>
                    <Text style={{ color: COLORS.gray, marginTop: SIZES.padding, textAlign: 'center', ...FONTS.body3 }}>Easy solution to buy tickets for your travel, business trips, transportation, lodging and culinary.</Text>
                </View>

                <TouchableOpacity
                    style={[styles.shadow, { marginTop: SIZES.padding * 2, width: '70%', height: 50, alignItems: 'center', justifyContent: 'center' }]}
                    onPress={() => navigation.navigate("Home")}
                >
                    <LinearGradient
                        style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                        colors={['#46aeff', '#5884ff']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Start !</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});

export default Apartment;
