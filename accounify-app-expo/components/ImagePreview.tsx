import React from 'react';
import { TouchableOpacity, Card, Button, View } from 'react-native-ui-lib';

export default function ImagePreview({
  imageUri,
  onRemove,
}: {
  imageUri: string;
  onRemove: () => void;
}) {
  return (
    <View center>
      <Card.Image width={300} height={300} borderRadius={20} source={{ uri: imageUri }} />
      <Button marginT-20 onPress={onRemove} label="Remove" />
    </View>
  );
}
