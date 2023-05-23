import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './components/BottomTabNavigator';
import WelcomeScreen from './components/WelcomeScreen';

// Import Screens
import SignUpScreen from './components/screens/SignUpScreen/SignUpScreen';
import SignInScreen from './components/screens/SignInScreen/SignInScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen/ForgotPasswordScreen';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  const [isWelcomeFinished, setIsWelcomeFinished] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsWelcomeFinished(true);
    }, 3000); // Adjust the delay here (in milliseconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isWelcomeFinished ? (
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
        ) : (
          <Stack.Screen name="Main" component={BottomTabNavigator} />
        )}
        <Stack.Screen name="Auth" component={AuthStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#afd2bc',
  },
});

export default App;
