import { View, Text,Image, StyleSheet, useWindowDimensions, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Logo from '/Users/solisticg/AwesomeProject/assets/peach-logo.png';
import CustomInput from '../../CustomInput/CustomInput';
import CustomButton from '../../CustomButton/CustomButton';
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native';



const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passowrdRepet, setPasswordRepet] = ('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

  const onRegisterPress = () => {
    console.warn('register') ;
  };

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };
  return (
    <ScrollView>
    <View style={styles.root}>
    <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain'/>
    <Text style={styles.title}>Create an account</Text>
      <CustomInput placeholder="Username" value={username} setValue={setUsername} />  
      <CustomInput placeholder="Email" value={email} setValue={setEmail} />  
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry/>  
      <CustomInput placeholder="Repet Password" value={passowrdRepet} setValue={setPasswordRepet} secureTextEntry/> 

      <CustomButton text="Register" onPress={onRegisterPress}/>
      <Text style={styles.text}>By registering, you conifrm that you accpet out <Text style={styles.link}>Terms of Use</Text> and <Text style={styles.link}>Privacy Policy</Text></Text>

      <TouchableOpacity onPress={handleSignIn}>
          <Text style={styles.backToSignInPage}>Have an account? Login In</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
  );
  };


const styles = StyleSheet.create ({
    root: {
        alignItems: 'center', 
        width: '100%',
        marginVertical: 50,
    },
    text: {
      color: 'grey',
      marginVertical: 10,
      justifyContent: 'center',
      paddingVertical: 7, 
    },
    link: {
      color: '#0376a8',
    },
    logo: {
      alignSelf: 'center',
      width: '15%',
      maxWidth: 100,
      maxHeight: 100,
      marginVertical: 10,  
     },
   title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#59afa4',
    margin: 10
   },
   backToSignInPage: {
    color: 'grey',
    marginVertical: 10,
  }
});

export default SignUpScreen