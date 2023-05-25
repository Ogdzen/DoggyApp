import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import HomeContent from "./HomeConten/HomeContent";
import ProfileScreen from "../ProfileScreen/ProfileScreen";

const Stack = createStackNavigator();

const HomeScreen = () => {
  const [isBoxClicked, setIsBoxClicked] = useState(false);

  const data = [
    {
      id: 1,
      name: "John Doe",
      distance: "3 miles",
      ranking: 4.5,
      profileImage: require("/Users/solisticg/AwesomeProject/assets/favicon.png"),
      background: require("/Users/solisticg/AwesomeProject/assets/Belgium.jpeg"),
    },
    {
      id: 2,
      name: "Jane Diaz",
      distance: "1 miles",
      ranking: 3.4,
      profileImage: require("/Users/solisticg/AwesomeProject/assets/favicon.png"),
      background: require("/Users/solisticg/AwesomeProject/assets/image-h.jpg"),
    },
    {
      id: 3,
      name: "Jeff Smith",
      distance: "5 miles",
      ranking: 3.8,
      profileImage: require("/Users/solisticg/AwesomeProject/assets/favicon.png"),
      background: require("/Users/solisticg/AwesomeProject/assets/Belgium.jpeg"),
    },
    {
      id: 4,
      name: "Jhony Depp",
      distance: "4.5 miles",
      ranking: 4.4,
      profileImage: require("/Users/solisticg/AwesomeProject/assets/favicon.png"),
      background: require("/Users/solisticg/AwesomeProject/assets/image-h.jpg"),
    },
    // Add more data objects as needed
  ];

  return (
    <View style={styles.container}>
      <React.Fragment>
        <ScrollView>
          <Text style={styles.heading}>Suggested Profiles</Text>
          {data.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.cardContainer}
              onPress={() => setIsBoxClicked(true)}
            >
              <Image source={item.background} style={styles.backgroundImage} />
              <View style={styles.overlay} />
              <Image source={item.profileImage} style={styles.profileImage} />
              <View style={styles.detailsContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.details}>
                  <Ionicons name="location" size={16} color="white" />
                  <Text style={styles.distance}>{item.distance}</Text>
                  <Ionicons name="star" size={16} color="white" />
                  <Text style={styles.ranking}>{item.ranking}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {isBoxClicked && (
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeContent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={({ route }) => ({
                title: `${route.params.name}'s Profile`,
              })}
            />
          </Stack.Navigator>
        )}
      </React.Fragment>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  cardContainer: {
    width: "90%",
    height: 200,
    marginVertical: 8,
    borderRadius: 8,
    overflow: "hidden",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "white",
    position: "absolute",
    bottom: 16,
    left: 16,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  distance: {
    marginLeft: 4,
    marginRight: 16,
    fontSize: 14,
    color: "white",
  },
  ranking: {
    fontSize: 14,
    color: "white",
  },
});

export default HomeScreen;
