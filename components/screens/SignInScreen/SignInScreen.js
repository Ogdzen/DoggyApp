import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Logo from '/Users/solisticg/AwesomeProject/assets/peach-logo.png';
import CustomInput from '../../CustomInput/CustomInput';
import CustomButton from '../../CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleCreateAccount = () => {
    navigation.navigate('SignUp');
  };

 

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSignInPress = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={[styles.root, { width }]}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode='contain' />
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
          style={styles.input}
        />
        <View style={styles.passwordContainer}>
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={!passwordVisible}
            style={styles.passwordInput}
          />
          <TouchableOpacity style={styles.passwordIconContainer} onPress={togglePasswordVisibility}>
            <MaterialIcons name={passwordVisible ? 'visibility-off' : 'visibility'} size={24} color="grey" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onSignInPress}>
          <CustomButton text="Log In" onPress={onSignInPress} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCreateAccount}>
          <Text style={styles.createAccountText}>Don't have an account? Create one</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    alignSelf: 'center',
    width: '15%',
    maxWidth: 100,
    maxHeight: 100,
    marginBottom: 20,
  },
  input: {
    width: '100%',
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
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f2f2f2',
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
  passwordIconContainer: {
    paddingHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 25,
    top: 25,
    
  },
  forgotPasswordText: {
    color: 'grey',
    marginBottom: 20,
  },
  createAccountText: {
    color: 'grey',
  },
});

export default SignInScreen;
