import Dashboard from "@/components/Dashboard";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { GestureTouchEvent } from "react-native-gesture-handler";
import { PieChart } from "react-native-gifted-charts";



const { width } = Dimensions.get("window");

export default function HomePage() {

  return (
    <View style={styles.container}>
      <Dashboard />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});