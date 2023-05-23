import React from 'react';
import { View, Text } from 'react-native';


const SecondScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  
      <Text>This is the Second Screen</Text>
    </View>
  );
};

export default SecondScreen;