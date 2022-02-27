import { TouchableOpacity, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons } from "../constants"
import { connect } from 'react-redux'

const ProfileValue = ({ icon, label, value, onPress, appTheme }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                height: 80,
                alignItems: 'center'
            }}
            onPress={onPress}
        >
            {/* icon */}
            <View style={{
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                backgroundColor: appTheme?.backgroundColor3
            }}>
                <Image
                    source={icon}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.primary
                    }}
                />
            </View>
            {/* label & value */}
            <View style={{
                flex: 1,
                marginLeft: SIZES.radius,
            }}>

                {label &&
                    <Text style={{
                        color: COLORS.gray30,
                        ...FONTS.body3
                    }}>
                        {label}
                    </Text>
                }
                <Text style={{
                    color: appTheme?.textColor,
                    ...FONTS.h3
                }}>
                    {value}
                </Text>

            </View>

            {/* icon */}
            <Image source={icons.right_arrow}
                style={{
                    width: 15,
                    height: 15,
                    tintColor: appTheme?.tintColor
                }} />
        </TouchableOpacity>
    )
}
function mapStateToProps(state) {
    return {
        appTheme: state.appTheme,
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileValue);

