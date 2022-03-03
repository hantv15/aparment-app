
import React, { useState, useEffect, useContext } from 'react';
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
import { images, COLORS, FONTS, SIZES } from '../constants';

const Apartment = ({ navigation }) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        getNewsFromAPI()
    }, [])

    function getNewsFromAPI() {
        axios.get(
            'https://60b8400ab54b0a0017c03399.mockapi.io/apartment'
            // 'http://apartment-system.xyz/api/apartment'
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
                        <TouchableOpacity style={tw`rounded-lg py-2 bg-gray-200 rounded-lg mt-2 m-4 shadow `}
                             onPress={() => navigation.navigate('Search')}
                        >
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
                                    {item.cycle}</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                }}
            />
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
