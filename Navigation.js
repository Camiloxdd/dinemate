import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

//Ventanas

import HomeScreen from "./Screens/HomeScreen";
import Settings from "./Screens/Settings";
import StackScreen from "./Screens/StackScreen";
import Home from "./Screens/Home";


const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: 'purple',
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    headerShown: false,
                    tabBarStyle: {display: "none"}
                }}
            />
            <Tab.Screen 
                name="HomeScreen" 
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarBadge: 1,
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faHome} color="purple" size={25}/>
                    ),
                }}
            />
            <Tab.Screen 
                name="Settings" 
                component={Settings}
                options={{
                    headerShown: false,
                    tabBarBadge: 2,
                    tabBarLabel: 'Ajustes',
                    tabBarIcon: ({ color, size}) => (
                        <FontAwesomeIcon icon={faGear} color="purple" size={25}/>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}