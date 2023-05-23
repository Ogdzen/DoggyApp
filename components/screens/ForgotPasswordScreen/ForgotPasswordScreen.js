import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import CustomInput from '../../CustomInput/CustomInput';
import CustomButton from '../../CustomButton/CustomButton';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();


  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  const onSendPress = () => {
    console.warn('send') ;
  };

 const onResendPress = () => {
  console.warn('resend');
 };

 const onSignInPress = () => {
  navigation.navigate('Log In');
};

return (
<ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <CustomButton text="Send" onPress={onSendPress} />
        <TouchableOpacity onPress={handleSignIn}>
          <Text style={styles.backToSignInPage}>Back to Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    width: '100%',
    marginVertical: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#59afa4',
    margin: 20,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 10,
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
  backToSignInPage: {
    color: 'grey',
    marginVertical: 10,
  },
});

export default ForgotPasswordScreen;