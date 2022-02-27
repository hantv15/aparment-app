import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    ScrollView
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { IconButton, TextButton, VerticalDepartmentCard, LineDivider, CategoryCard } from '../../components';
import { COLORS, FONTS, SIZES, icons, images, dummyData } from "../../constants"

const Section = ({ containerStyle, title, onPress, children }) => {
    return (
        <View style={{
            ...containerStyle
        }}>
            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: SIZES.padding
                }}>
                <Text
                    style={{
                        flex: 1,
                        ...FONTS.h2
                    }}>

                    {title}

                </Text>

                <TextButton
                    contentContainerStyle={{
                        width: 80,
                        borderRadius: 30,
                        backgroundColor: COLORS.primary
                    }}
                    label="ALL"
                    onPress={onPress}
                />
            </View>

            {children}

        </View>
    )
}

const Home = ({ navigation }) => {

    function renderHeader() {
        return (
            <View style={{
                flexDirection: 'row',
                marginTop: 40,
                marginBottom: 10,
                paddingHorizontal: SIZES.padding,
                alignItems: 'center'
            }}>

                <View style={{
                    flex: 1
                }}>
                    <Text style={{ ...FONTS.h2 }}>
                        Hello Department !
                    </Text>
                    <Text style={{
                        color: COLORS.gray50,
                        ...FONTS.body3
                    }}>
                        Thurday, 9th 2022
                    </Text>
                    {/* notification */}
                </View>
                <IconButton

                    icon={icons.notification}
                    iconStyle={{ tintColor: COLORS.black }} />
            </View>
        )
    }

    function renderStartLearning() {
        return (
            <ImageBackground
                source={images.featured_bg_image}
                style={{
                    alignItems: 'flex-start',
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    padding: 15
                }}
                imageStyle={{
                    borderRadius: SIZES.radius
                }}
            >
                {/* Info */}

                <View>
                    <Text style={{
                        color: COLORS.white,
                        ...FONTS.body2
                    }}>
                        How to
                    </Text>
                    <Text style={{
                        color: COLORS.white,
                        ...FONTS.h2
                    }}>
                        Make department
                    </Text>
                    <Text style={{
                        marginTop: SIZES.radius,
                        color: COLORS.white,
                        ...FONTS.body4
                    }}>
                        By Huy
                    </Text>
                </View>
                {/* Image */}
                <Image source={images.start_learning}
                    style={{
                        width: "100%",
                        height: 110,
                        marginTop: SIZES.padding
                    }}
                />
                {/* Button */}
                <TextButton
                    label='Start learning'
                    contentContainerStyle={{
                        height: 40,
                        paddingHorizontal: SIZES.padding,
                        borderRadius: 20,
                        backgroundColor: COLORS.white
                    }}
                    labelStyle={{
                        color: COLORS.black
                    }}
                />

            </ImageBackground>
        )
    }

    function renderDepartments() {
        return (
            <FlatList
                horizontal
                data={dummyData.department_list_1}
                listKey="Departments"
                keyExtractor={item => `Departments-${item.id}}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: SIZES.padding
                }}
                renderItem={({ item, index }) => (
                    <VerticalDepartmentCard
                        containerStyle={{
                            marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                            marginRight: index == dummyData.department_list_1.length - 1 ? SIZES.padding : 0
                        }}
                        department={item}
                    />
                )}
            />
        )
    }

    function renderCategories() {
        return (
            <Section title="Categories"
            >
                <FlatList
                    horizontal
                    data={dummyData.categories}
                    listKey="Categories"
                    keyExtractor={item => `Categories-${item.id}`}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: SIZES.radius
                    }}
                    renderItem={({ item, index }) => {
                        <CategoryCard
                            containerStyle={{
                                marginLeft: index == 0 ? SIZES.padding : SIZES.base,
                                marginRight: index == dummyData.categories.length - 1 ? SIZES.padding : 0

                            }}

                        />
                    }}
                />

            </Section>
        )
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.white
        }}>
            {/* Header */}
            {renderHeader()}

            {/* Content */}
            <ScrollView contentContainerStyle={{
                paddingBottom: 150
            }}
                showsVerticalScrollIndicator={false}
            >
                {renderStartLearning()}

                {/* department */}
                {renderDepartments()}

                <LineDivider
                    lineStyle={{
                        marginVertical: SIZES.padding
                    }}
                />
                {/* Categories */}
                {renderCategories()}

            </ScrollView>
        </View>
    )
}

export default Home;