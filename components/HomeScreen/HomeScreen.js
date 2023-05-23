import React from "react";
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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "../BottomTabNavigator";
import ProfileScreen from "./ProfileScreen";

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
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
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

const HomeContent = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.root}>
          <View style={styles.header}>
            <Text style={styles.title}>Home</Text>
            <TouchableOpacity style={styles.profileIcon} onPress={() => {}}>
              {/* Replace the placeholder image with your profile image */}
              <Image
                source={require("/Users/solisticg/AwesomeProject/assets/peach-logo.png")}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#888"
            />
            <TouchableOpacity style={styles.filterIcon}>
              <Ionicons name="filter-outline" size={18} color="#888" />
            </TouchableOpacity>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.nearYouTitle}>Near You</Text>
            <TouchableOpacity style={styles.viewMoreButton} onPress={() => {}}>
              <Text style={styles.viewMoreText}>View More</Text>
            </TouchableOpacity>
          </View>

          {data.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.cardContainer}
              onPress={() =>
                navigation.navigate("Profile", { name: item.name })
              }
            >
              <Image source={item.background} style={styles.cardImage} />

              <View style={styles.cardContent}>
                <Image source={item.profileImage} style={styles.avatar} />
                <View style={styles.cardTextContainer}>
                  <Text style={styles.cardName}>{item.name}</Text>
                  <Text style={styles.cardDistance}>{item.distance}</Text>
                </View>
                <Text style={styles.cardRanking}>{item.ranking}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <BottomTabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f2f2f2",
    paddingVertical: 16,
  },
  root: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profileIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 4,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  filterIcon: {
    padding: 8,
    backgroundColor: "#eee",
    borderRadius: 4,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  nearYouTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewMoreButton: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 4,
  },
  viewMoreText: {
    fontSize: 14,
    color: "#888",
  },
  cardContainer: {
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardDistance: {
    fontSize: 14,
    color: "#888",
  },
  cardRanking: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#888",
  },
});

export default HomeScreen;
