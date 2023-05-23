import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import CustomInput from '../../CustomInput/CustomInput';
import CustomButton from '../../CustomButton/CustomButton';
import { useState } from 'react'

const ConfirmEmailScreen = () => {

    const [code, setCode] = ('');

  const onConfirmPress = () => {
    console.warn('confirm') ;
  };

 const onResendPress = () => {
  console.warn('resend');
 };

  const onSignInPress = () => {
    console.warn('back to signIn') ;
  };
  return (
    <ScrollView>
    <View style={styles.root}>
    <Text style={styles.title}>Confirm your email</Text>
      <CustomInput placeholder="Enter your confirmation code" value={code} setValue={setCode} />  
      

      <CustomButton text="Confirm" onPress={onConfirmPress}/>
     

      <CustomButton text="Resend code" onPress={onResendPress} type='SECONDARY'/>
      <CustomButton text="Back to Sign In" onPress={onSignInPress} type="TERTIARY"/>
    </View>
    </ScrollView>
  );
  };


const styles = StyleSheet.create ({
    root: {
        alignItems: 'center', 
        width: '100%',    
    },
    text: {
      color: 'grey',
      marginVertical: 10,
    },
    link: {
      color: '#0376a8',
    },
   title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#59afa4',
    margin: 10
   } 
});

export default ConfirmEmailScreen