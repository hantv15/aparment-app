import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import Notification from '../screens/Notification'
import User from '../screens/details/User'
import Service from '../screens/Service'
import Icon from 'react-native-vector-icons/Ionicons';
import Apartment from '../screens/details/Apartment'
import Welcome from '../screens/Welcome';
import UserDetail from '../screens/details/UserDetail';
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
                        } else if (route.name === 'notification') {
                            iconName = focused ? 'notifications-circle' : 'notifications-circle-outline';
                        } else if (route.name === 'service') {
                            iconName = focused ? 'md-settings-sharp' : 'md-settings-outline';
                        } else if (route.name === 'user') {
                            iconName = focused ? 'person-circle' : 'person-circle-outline';
                        }
                        return <Icon name={iconName} size={size} color={color} />
                    },
                    headerShown:false
                })}
                
                // screenOptions={{headerShown:false}}

            >
                <Tab.Screen name="home" component={Home} />
                <Tab.Screen name='notification' component={Notification} />
                <Tab.Screen name="service" component={Apartment} />
                <Tab.Screen name="user" component={UserDetail} />
            </Tab.Navigator>
            </NavigationContainer>
    );
}