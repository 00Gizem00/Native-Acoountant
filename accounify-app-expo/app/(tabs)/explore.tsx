import { StyleSheet, Image, Platform, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Button from '@/components/ui/Button';



export default function TabTwoScreen() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };

  return (

    <View style={styles.container}>
      <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
      <Button label="Take a Shoot" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});