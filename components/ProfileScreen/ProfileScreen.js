import React from "react";
import { View, Text } from "react-native";

const ProfileScreen = ({ route }) => {
  const { name } = route.params;

  return (
    <View>
      <Text>Profile Page of {name}</Text>
      {/* Add your profile page content here */}
    </View>
  );
};

export default ProfileScreen;
