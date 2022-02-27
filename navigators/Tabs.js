import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Dashboard/Home'
import Profile from '../screens/Dashboard/Profile'
import Notification from '../screens/Notification'
import Service from '../screens/Service'
import Icon from 'react-native-vector-icons/Ionicons';
import Apartment from '../screens/details/Apartment'
import Welcome from '../screens/Welcome';
// import Header from '../components/Header';
const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator 
                screenOptions={ ({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'home') {
                            iconName = focused ? 'ios-home' : 'ios-home-outline';
                        } else if (route.name === 'service') {
                            iconName = focused ? 'md-settings-sharp' : 'md-settings-outline';
                        } else if (route.name === 'profile') {
                            iconName = focused ? 'person-circle' : 'person-circle-outline';
                        }
                        return <Icon name={iconName} size={25} color={color} />
                    },
                    headerShown:false
                })}
                
                // screenOptions={{headerShown:false}}

            >
                <Tab.Screen name="home" component={Home} />
                <Tab.Screen name="service" component={Apartment} />
                <Tab.Screen name="profile" component={Profile} />
            </Tab.Navigator>
            </NavigationContainer>
    );
}