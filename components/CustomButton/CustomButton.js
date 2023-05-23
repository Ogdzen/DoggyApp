import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type = "PRIMARY"}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create ({
    container: {
        width: "100%",
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5
    },

    container_PRIMARY: {
        backgroundColor: '#99dbc6',
        width: '90%',
        borderRadius: 25,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
      

    container_SECONDARY: {
      borderColor: '#99dbc6',
      borderWidth: 2,
      color: '#99dbc6',
    },

    text_SECONDARY: {
      color: 'black',
    },

    container_TERTIARY: {},

    text: {
      fontWeight: 'bold',
      color: 'white',
  },

    text_TERTIARY: {
        color: 'grey',
    },

});

export default CustomButton