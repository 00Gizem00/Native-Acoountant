import React from 'react';
import { Image, TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function ImagePreview({
  imageUri,
  onRemove,
}: {
  imageUri: string;
  onRemove: () => void;
}) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
        <Text style={styles.removeText}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { position: 'relative', marginTop: 20 },
  image: { width: 300, height: 300, borderRadius: 10 },
  removeButton: { backgroundColor: 'red', position: 'absolute', top: 10, right: 10, borderRadius: 20 },
  removeText: { color: 'white', fontWeight: 'bold' },
});
