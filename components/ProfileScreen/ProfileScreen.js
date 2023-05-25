import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ProfileScreen = ({ route }) => {
  const { name } = route.params;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: `${name}'s Profile` }}
      />
    </Stack.Navigator>
  );
};

export default ProfileScreen;
