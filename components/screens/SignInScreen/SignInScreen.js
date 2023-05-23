import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '/Users/solisticg/AwesomeProject/assets/peach-logo.png';
import CustomInput from '../../CustomInput/CustomInput';
import CustomButton from '../../CustomButton/CustomButton';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const handleForgotPassword = () => {
      navigation.navigate('ForgotPassword');
    };

    const handleCreateAccount = () => {
      navigation.navigate('SignUp');
    };


  const onSignInPress = () => {
    console.warn('Log In') ;
  };

  const onForgotPasswordPress = () => {
    console.warn('SignUp') ;
    //useNavigation.navigate('ForgotPasswordScreen');
  };

  const onSignUpPress = () => {
    console.warn('Create-one') ;
  };

  return (
    <ScrollView>
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain'/>
      <CustomInput placeholder="Username" value={username} setValue={setUsername} />  
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>  
      <CustomButton text="Log In" onPress={onSignInPress}/>
      <TouchableOpacity onPress={handleForgotPassword}> 
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCreateAccount}>
      <Text style={styles.forgotPasswordText} >Don't have an account? Create one</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create ({
    root: {
        alignItems: 'center',   
        width: '100%',  
        justifyContent: 'center',
    },
   logo: {
    alignSelf: 'center',
    width: '15%',
    maxWidth: 100,
    maxHeight: 100,
    marginVertical: 10,  
   },
   forgotPasswordText: {
    color: 'grey',
    textDecorationLine: 'none',
    textAlign: 'center',
    marginVertical: 10,
    
  },
    
});

export default SignInScreen;