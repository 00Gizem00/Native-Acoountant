import React, { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { View, Text, Button } from "react-native-ui-lib";
import { requestPermission } from '@/utils/permissions';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import ImagePreview from '@/components/ImagePreview';
import PDFPreview from '@/components/PdfPreview';
import UploadActions from '@/components/UploadActions';


export default function TabTwoScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [pdf, setPdf] = useState<DocumentPicker.DocumentPickerResult | null>(null);
  const [showUploadButtons, setShowUploadButtons] = useState(true);
  const [isUploading, setIsUploading] = useState(false);

  const pickImage = async () => {
    const hasPermission = await requestPermission('media');
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setShowUploadButtons(false);
    } else {
      Alert.alert('No image selected');
    }
  };

  const takePhoto = async () => {
    const hasPermission = await requestPermission('camera');
    if (!hasPermission) return;

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setShowUploadButtons(false);
    } else {
      Alert.alert('No photo taken');
    }
  };

  const uploadPdf = async () => {
    const result = await DocumentPicker.getDocumentAsync({ type: 'application/pdf' });

    if (!result.canceled) {
      setPdf(result);
      setShowUploadButtons(false);
    } else {
      Alert.alert('No PDF selected');
    }
  };

  const resetUpload = () => {
    setShowUploadButtons(true);
    setImage(null);
    setPdf(null);
    setIsUploading(false);
  };

  const handleUpload = async () => {
    try {
      setIsUploading(true);
      
      // Sonra logic eklenecek
      if (image) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        Alert.alert('Success', 'Image uploaded successfully');
      } else if (pdf) {
        await new Promise(resolve => setTimeout(resolve, 2000)); 
        Alert.alert('Success', 'PDF uploaded successfully');
      }
      
      resetUpload();
    } catch (error) {
      Alert.alert('Error', 'Failed to upload file');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <View flex bg-white center>
      {showUploadButtons ? (
        <UploadActions 
          onPickImage={pickImage} 
          onTakePhoto={takePhoto} 
          onUploadPDF={uploadPdf} 
        />
      ) : (
        <View center paddingV-20 paddingH-30>
          {image && <ImagePreview imageUri={image} onRemove={resetUpload} />}
          {pdf && !pdf.canceled && (
            <PDFPreview pdfName={pdf.assets[0].name || 'Unknown'} onRemove={resetUpload} />
          )}
          <Button
            marginT-20
            label={isUploading ? "Uploading..." : "Upload"}
            onPress={handleUpload}
          />
        </View>
      )}
    </View>
  );
}

