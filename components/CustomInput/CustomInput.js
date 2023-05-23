import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput 
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    width: '100%',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#99dbc6',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    padding: 15,
    marginVertical: 3,
  
  },

});

export default CustomInput