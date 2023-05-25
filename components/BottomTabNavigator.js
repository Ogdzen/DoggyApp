import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./HomeScreen/HomeScreen";
import SecondScreen from "./SecondScreen";

const Tab = createBottomTabNavigator();

const CustomBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Settings") {
            iconName = "settings-outline";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#99dbc6",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SecondScreen} />
    </Tab.Navigator>
  );
};

export default CustomBottomTabNavigator;
