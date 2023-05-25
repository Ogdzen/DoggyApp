import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "react-navigation";

const HomeContent = () => {
  const navigation = useNavigation();
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
      distance: "1 mile",
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
      name: "Johnny Depp",
      distance: "4.5 miles",
      ranking: 4.4,
      profileImage: require("/Users/solisticg/AwesomeProject/assets/favicon.png"),
      background: require("/Users/solisticg/AwesomeProject/assets/image-h.jpg"),
    },
    // Add more data objects as needed
  ];

  const handleBoxClick = () => {
    navigation.navigate("Profile");
  };

  return (
    <View>
      <Text style={styles.heading}>Suggested Profiles</Text>
      {data.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.cardContainer}
          onPress={handleBoxClick}
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
    </View>
  );
};

export default HomeContent;
