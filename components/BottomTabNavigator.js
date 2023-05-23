import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import LottieAnimation from './LottieAnimation';
import ConfirmEmailScreen from './screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen/ForgotPasswordScreen';


const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'home-outline';
                    } else if (route.name === 'Settings') {
                        iconName = 'settings-outline';
                    } else if (route.name === 'Log In') {
                        iconName = 'rocket-outline';
                    } else if (route.name === 'Second screen') {
                    iconName = 'bug-sharp';
                }

                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#99dbc6',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Second screen" component={SecondScreen} />
            <Tab.Screen name="Settings" component={SecondScreen} />
            
            
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;
