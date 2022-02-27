import { Text, View, Image, TouchableOpacity, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'

import { COLORS, FONTS, SIZES } from '../constants'

const ProfileRadioButton = ({ icon, label, isSelected, onPress }) => {

  const radioAnimated = useRef(new Animated.Value(0)).current;

  const circlecolorAnimated = radioAnimated.interpolate({
    inputRange:[0, 17],
    outputRange:[COLORS.gray40, COLORS.primary]
  })
  const LineColorAnimated = radioAnimated.interpolate({
    inputRange:[0,17],
    outputRange: [COLORS.additionalColor4, COLORS.additionalColor13]
  })

  useEffect(()=>{
    if(isSelected){
      Animated.timing(radioAnimated,{
        toValue:17,
        duration:300,
        useNativeDriver:false
      }).start();
    }else{
      Animated.timing(radioAnimated,{
        toValue:0,
        duration:300,
        useNativeDriver:false
      }).start();
    }
  },[isSelected])

  return (
    <View style={{
      flexDirection: 'row',
      height: 80,
      alignItems: 'center'
    }}>
      <View style={{
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: COLORS.backgroundColor3
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
      {/* Label */}
      <View style={{
        flex: 1,
        marginLeft: SIZES.radius
      }}>

        <Text style={{
          color:COLORS.textColor,
          ...FONTS.h3
        }}>

          {label}

        </Text>
      </View>
      
      {/* Radio button */}
      <TouchableOpacity style={{
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center'
      }}
      onPress={onPress}
      >
        <Animated.View
        style={{
          width:"100%",
          height:5,
          borderRadius: 3,
          backgroundColor:LineColorAnimated
        }}
        />
        <Animated.View
        style={{
          position:'absolute',
          left:radioAnimated,
          width:25,
          height:25,
          borderWidth:5,
          borderRadius: 15,
          backgroundColor:circlecolorAnimated,
          backgroundColor:COLORS.backgroundColor4
        }}
        />

      </TouchableOpacity>
    </View>
  )
}


export default ProfileRadioButton;
