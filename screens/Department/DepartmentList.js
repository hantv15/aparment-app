import { Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withDecay,
    withTiming,
    runOnJS
} from 'react-native-reanimated';

import { IconButton, HorizontalDepartmentCart, LineDivider } from '../../components';
import { COLORS, FONTS, SIZES, images, icons, dummyData } from '../../constants';

const DepartmentList = () => {
    return (
        <View style={{
            flex:1,
            backgroundColor:COLORS.white
        }}>
            <Text>DepartmentList</Text>
        </View>
    )
}

export default DepartmentList
