import { Alert, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export const requestPermission = async (
  type: 'media' | 'camera'
): Promise<boolean> => {
  if (Platform.OS !== 'web') {
    const { status } =
      type === 'media'
        ? await ImagePicker.requestMediaLibraryPermissionsAsync()
        : await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permission Denied',
        `We need ${type === 'media' ? 'media library' : 'camera'} permissions to proceed.`
      );
      return false;
    }
  }
  return true;
};
