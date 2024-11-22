import { StyleSheet, View, ScrollView, Text, Button, Alert } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Colors } from "react-native-ui-lib";



export default function HomePage() {
  const [discover, setdiscover] = useState(false);
  const router = useRouter();

  // Logout işlemi
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("isLoggedIn");
      router.replace("/(auth)/loginScreen/authScreen");
    } catch (error) {
      console.error("Error during logout:", error);
      Alert.alert("Logout Failed", "An error occurred while logging out.");
    }
  };

  const userProfiles: Array<{
    id: number;
    name: string;
    activity: string;
    profession: string;
  }> = [
    {
      id: 1,
      name: "Michael Rodriguez",
      activity:
        "Passionate about fitness and outdoor activities. Let’s stay active together!",
      profession: "Lawyer",
    },
    {
      id: 2,
      name: "Amanda Smith",
      activity: "Adventurous spirit seeking a partner to explore the world.",
      profession: "Doctor",
    },
    {
      id: 3,
      name: "Jannette Louis",
      activity: "I’ll cook a delicious food for you!",
      profession: "Photographer",
    },
    {
      id: 4,
      name: "Anna Turner",
      activity:
        "Art enthusiast and movie lover. Looking for someone to share my passions with.",
      profession: "Teacher",
    },
    {
      id: 5,
      name: "Alex Foster",
      activity:
        "Tech geek and aspiring chef. Let me code you a website and cook you a meal!",
      profession: "Nurse",
    },
    {
      id: 6,
      name: "Johny Rodriguez",
      activity:
        "Passionate about fitness and outdoor activities. Let’s stay active together!",
      profession: "Lawyer",
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.mainContainer}>
        {/* Top Header Section */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Home</Text>
          <Button title="Logout" color={Colors.red} onPress={handleLogout} />
        </View>

        {/* User Profiles List */}
        <View style={styles.profileCardList}>
          {userProfiles.map((profile) => (
            <View key={profile.id} style={styles.profileCard}>
              <Text style={styles.profileName}>{profile.name}</Text>
              <Text style={styles.profileActivity}>{profile.activity}</Text>
              <Text style={styles.profileProfession}>{profile.profession}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentContainer: {
    flexGrow: 1,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 64,
    backgroundColor: Colors.white,
  },
  headerContainer: {
    backgroundColor: Colors.white,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.darkBlack,
  },
  profileCardList: {
    gap: 16,
  },
  profileCard: {
    padding: 16,
    backgroundColor: Colors.glassGrey,
    borderRadius: 8,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.darkBlack,
  },
  profileActivity: {
    fontSize: 14,
    color: Colors.darkGrey,
  },
  profileProfession: {
    fontSize: 14,
    fontStyle: "italic",
    color: Colors.red,
  },
});
