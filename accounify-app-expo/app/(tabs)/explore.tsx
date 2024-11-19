import React, { useState } from 'react';
import { StyleSheet, Image, Platform, View, Alert, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import Button from '@/components/ui/Button';

export default function TabTwoScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [pdf, setPdf] = useState<DocumentPicker.DocumentPickerResult | null>(null);
  const [showUploadButtons, setShowUploadButtons] = useState(true);

  const requestMediaLibraryPermission = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Sorry, we need camera roll permissions to make this work!');
        return false;
      }
      return true;
    }
    return true;
  };

  const requestCameraPermission = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Sorry, we need camera permissions to make this work!');
        return false;
      }
      return true;
    }
    return true;
  };

  const pickImageAsync = async () => {
    const hasPermission = await requestMediaLibraryPermission();
    if (!hasPermission) return;

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setShowUploadButtons(false);
    } else {
      Alert.alert('You did not select any image.');
    }
  };

  const takePhoto = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) return;

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setShowUploadButtons(false);
    } else {
      Alert.alert('You did not take any photo.');
    }
  };

  const uploadPdf = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
        copyToCacheDirectory: true
      });

      if (!result.canceled) {
        setPdf(result);
        setShowUploadButtons(false);
        Alert.alert('PDF Uploaded', `File: ${result.assets[0].name}`);
      } else {
        Alert.alert('You did not select any PDF.');
      }
    } catch (error) {
      console.error('PDF upload error:', error);
      Alert.alert('Error', 'Failed to upload PDF');
    }
  };

  const handleUpload = () => {
    // Bu fonksiyon daha sonra database ve navigasyon için kullanılacak
    console.log('Upload initiated');
    Alert.alert('Upload', 'Upload functionality will be implemented later');
  };

  const resetUpload = () => {
    setShowUploadButtons(true);
    setImage(null);
    setPdf(null);
  };



  return (
    <View style={styles.container}>
      {showUploadButtons && (
        <>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Take a photo" onPress={takePhoto} />
          <Button label="Upload PDF" onPress={uploadPdf} />
        </>
      )}
      
      {(image || pdf) && !showUploadButtons && (
        <View style={styles.uploadedContainer}>
          {image && (
            <View style={styles.imageContainer}>
              <Image source={{ uri: image }} style={styles.image} />
              <TouchableOpacity style={styles.removeButton} onPress={resetUpload}>
                <Text style={styles.removeButtonText}>X</Text>
              </TouchableOpacity>
            </View>
          )}
          
          {pdf && (
            <View style={styles.pdfInfo}>
              <Text style={styles.pdfText}>Uploaded PDF: {pdf?.assets ? pdf.assets[0].name : 'Unknown'}</Text>
              <TouchableOpacity style={styles.removeButton} onPress={resetUpload}>
                <Text style={styles.removeButtonText}>X</Text>
              </TouchableOpacity>
            </View>
          )}
          
          <Button 
            label="Upload" 
            onPress={handleUpload} 
          />
        </View>
      )}
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
  uploadedContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  imageContainer: {
    position: 'relative',
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
    borderRadius: 10,
  },
  pdfInfo: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pdfText: {
    color: '#000',
  },
  pdfsize: {
    color: '#fff',
    fontSize: 10,
  },
  removeButton: {
    backgroundColor: 'rgba(255,0,0,0.7)',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});