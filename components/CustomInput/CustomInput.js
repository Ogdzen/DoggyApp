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
    flex: 1,
    width: "100%",
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

});

export default CustomInput