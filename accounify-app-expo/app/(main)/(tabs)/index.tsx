import { StyleSheet } from "react-native";
import { View, Text, Button } from "react-native-ui-lib";

export default function Index() {
  return (
    <View flex center>
      <Text blue50 text20 marginB-s5>Home Screen</Text>
      <Button label="Go to Explore" onPress={() => {}} />
    </View>
  );
}

