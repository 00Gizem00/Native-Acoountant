import { Card, Button, View, Text } from 'react-native-ui-lib';

export default function PDFPreview({
  pdfName,
  onRemove,
}: {
  pdfName: string;
  onRemove: () => void;
}) {
  return (
    <View center >
      <Text center >Uploaded PDF: {pdfName}</Text>
      <Button marginT-20 onPress={onRemove} label="Remove" />
    </View>
  );
}

