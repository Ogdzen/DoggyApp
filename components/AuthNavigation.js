import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import SignInScreen from './screens/SignInScreen/SignInScreen'
import SignUpScreen from './screens/SignUpScreen/SignUpScreen'
import ForgotPasswordScreen from './screens/ForgotPasswordScreen/ForgotPasswordScreen'

const AuthNavigation = createStackNavigator(
    {
      Login: { screen: SignInScreen },
      Signup: { screen: SignUpScreen },
      ForgotPassword: { screen: ForgotPasswordScreen }
    },
    {
      initialRouteName: 'Login',
      headerMode: 'none'
    }
  )
  
  export default AuthNavigation