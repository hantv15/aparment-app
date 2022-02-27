
import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Image
} from 'react-native';
import { IconButton, TextButton, LineDivider, ProgressBar, ProfileValue, ProfileRadioButton, CredentialsContext } from '../../components';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { COLORS, FONTS, SIZES, icons, images } from '../../constants';

const Profile = ({ navigation }) => {

    const [newDepartmentNotification, setNewDepartmentNotification] = useState(false);
    const [reminder, setReminder] = useState(false);

    const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);

    const { name, email, photoUrl } = storedCredentials;

    const AvatarImg = photoUrl
        ? {
            uri: photoUrl,
        }
        : require('../../assets/img/expo-bg1.png');

    const clearLogin = () => {
        AsyncStorage.removeItem('flowerCribCredentials')
            .then(() => {
                setStoredCredentials("");
            })
            .catch((error) => console.log(error));
    };

    const image = { uri: 'https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80' }

    function renderHeader() {
        return (
            <View style={{
                flexDirection: 'row',
                marginTop: 50,
                paddingHorizontal: SIZES.padding,
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    color: COLORS.textColor,
                    ...FONTS.h1
                }}
                >
                    Profile

                </Text>

                <IconButton
                    icon={icons.sun}
                    iconStyle={{
                        tintColor: COLORS.black
                    }}
                    onPress={() => toggleThemeHandler()}
                />
            </View>
        )
    }

    function renderProfileCard() {
        return (
            <View style={{
                flexDirection: 'row',
                marginTop: SIZES.padding,
                paddingHorizontal: SIZES.radius,
                paddingVertical: 20,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary3
            }}>
                {/* Profile image */}

                <TouchableOpacity style={{
                    width: 80,
                    height: 80
                }}>
                    <Image
                        source={image}
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 40,
                            borderWidth: 1,
                            borderColor: COLORS.white
                        }}
                    />
                    <View style={{
                        position: 'absolute',
                        width: "100%",
                        height: "100%",
                        alignItems: 'center',
                        justifyContent: 'flex-end'
                    }}>
                        <View style={{
                            width: 30,
                            height: 30,
                            marginBottom: -15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 15,
                            backgroundColor: COLORS.primary
                        }}>
                            <Image
                                source={icons.camera}
                                resizeMode="contain"
                                style={{
                                    width: 17,
                                    height: 17
                                }}
                            />

                        </View>

                    </View>
                </TouchableOpacity>

                {/* Detail */}

                <View style={{
                    flex: 1,
                    marginLeft: SIZES.radius,
                    alignItems: 'flex-start'
                }}>
                    <Text style={{
                        color: COLORS.white,
                        ...FONTS.h2
                    }}>
                        Department
                    </Text>
                    <Text style={{
                        color: COLORS.white,
                        ...FONTS.body4
                    }}>
                        Developer
                    </Text>

                    {/* Progress */}

                    <ProgressBar
                        progress="90%"
                        containerStyle={{
                            marginTop: SIZES.radius
                        }}
                    />
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            flex: 1,
                            color: COLORS.white,
                            ...FONTS.body4
                        }}>
                            Overall Progess

                        </Text>
                        <Text style={{
                            color: COLORS.white,
                            ...FONTS.body4
                        }}>
                            90%
                        </Text>

                    </View>
                    {/* <TextButton
                    label="+Become"
                    contentContainerStyle={{
                        height: 35,
                        marginTop: SIZES.padding,
                        paddingHorizontal:SIZES.radius,
                        borderRadius:20,
                        backgroundColor:COLORS.backgroundColor4
                        
                    }}
                    labelStyle={{
                        color: COLORS.textColor2
                    }}
                    /> */}

                </View>

            </View>
        )
    }
    function renderProfileSection1() {
        return (
            <View style={styles.profileSectionContainer}>
                <ProfileValue
                    icon={icons.profile}
                    label="Name"
                    value={name || 'Olga Simpson'}
                />
                <LineDivider />

                <ProfileValue
                    icon={icons.email}
                    label="Email"
                    value={email || 'Olga Simpson'}
                />
                <LineDivider />

                <ProfileValue
                    icon={icons.password}
                    label="Password"
                    value="update 2 week"
                />
                <LineDivider />

                <ProfileValue
                    icon={icons.call}
                    label="Phone Number"
                    value="0937232"
                />
            </View>
        )
    }
    function renderProfileSection2() {
        return (
            <View style={styles.profileSectionContainer}>
                <ProfileValue icon={icons.star_1}
                    value="Pages"
                />

                <LineDivider />

                <ProfileRadioButton
                    icon={icons.new_icon}
                    label="Thông báo"
                    isSelected={newDepartmentNotification}
                    onPress={() => {
                        setNewDepartmentNotification(!newDepartmentNotification)

                    }}
                />
                <LineDivider />

                <ProfileRadioButton
                    icon={icons.reminder}
                    label="Reminder"
                    isSelected={reminder}
                    onPress={() => {
                        setReminder(!reminder)

                    }}
                />
            </View>
        )
    }
    return (
        <View style={{
            flex: 1,
            // backgroundColor: appTheme?.backgroundColor1
        }}>
            {/* Header */}
            {renderHeader()}

            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: 150
                }}
            >
                {/* Profile card */}
                {renderProfileCard()}
                {/* Profile Section 1 */}
                {renderProfileSection1()}
                {/* Profile Section 2 */}
                {renderProfileSection2()}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    profileSectionContainer: {
        marginTop: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        borderWidth: 1,
        borderRadius: SIZES.radius,
        borderColor: COLORS.gray20
    }
})



export default Profile
