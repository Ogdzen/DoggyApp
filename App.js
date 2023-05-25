import * as React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./components/WelcomeScreen";
import SignInScreen from "./components/screens/SignInScreen/SignInScreen";
import SignUpScreen from "./components/screens/SignUpScreen/SignUpScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen/ForgotPasswordScreen";
import ProfileScreen from "./components/ProfileScreen/ProfileScreen";
import CustomBottomTabNavigator from "./components/BottomTabNavigator";

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
    <View style={styles.root}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!isWelcomeFinished ? (
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
          ) : (
            <>
              <Stack.Screen name="Home" component={CustomBottomTabNavigator} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
            </>
          )}
          <Stack.Screen name="Auth" component={AuthStackNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
