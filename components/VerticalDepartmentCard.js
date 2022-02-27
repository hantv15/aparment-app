import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SIZES, COLORS, FONTS, icons } from '../constants'
import { IconLabel } from '../components'
const VerticalDepartmentCard = ({ containerStyle, department }) => {
    return (
        <TouchableOpacity
            style={{
                width: 270,
                ...containerStyle
            }}
        >
            <Image
                source={department.thumbnail}
                resizeMode="cover"
                style={{
                    width: "100%",
                    height: 150,
                    marginBottom: SIZES.radius,
                    borderRadius: SIZES.radius
                }}
            />
            {/* Detail */}

            <View style={{
                flexDirection: 'row'
            }}>
                {/* More */}
                <View style={{
                    width: 45,
                    height: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 25,
                    backgroundColor: COLORS.primary
                }}>
                    <Image
                        source={icons.play}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20
                        }}
                    />
                </View>
                {/* Info */}
                <View style={{
                    flexShrink: 1,
                    paddingHorizontal: SIZES.radius
                }}>
                    <Text style={{
                        flex: 1,
                        ...FONTS.h3,
                        fontSize: 18
                    }}>
                        {department.title}
                    </Text>
                    <IconLabel
                    icon={icons.time}
                    label={department.duration}
                    containerStyle={{
                        marginTop: SIZES.base
                    }}
                    />

                </View>

            </View>
        </TouchableOpacity>
    )
}

export default VerticalDepartmentCard;
