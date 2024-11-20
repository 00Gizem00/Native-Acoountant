import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

export default function PDFPreview({
  pdfName,
  onRemove,
}: {
  pdfName: string;
  onRemove: () => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Uploaded PDF: {pdfName}</Text>
      <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
        <Text style={styles.removeText}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', marginTop: 20 },
  text: { color: '#000', flex: 1 },
  removeButton: { backgroundColor: 'red', borderRadius: 20, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' },
  removeText: { color: 'white', fontWeight: 'bold' },
});
