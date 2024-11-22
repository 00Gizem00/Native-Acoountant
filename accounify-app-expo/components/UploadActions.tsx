import { Button, View } from 'react-native-ui-lib';

export default function UploadActions({
  onPickImage,
  onTakePhoto,
  onUploadPDF,
}: {
  onPickImage: () => void;
  onTakePhoto: () => void;
  onUploadPDF: () => void;
}) {
  return (
    <View>
      <Button margin-5 label="Choose a photo" onPress={onPickImage} />
      <Button margin-5 label="Take a photo" onPress={onTakePhoto} />
      <Button margin-5 label="Upload PDF" onPress={onUploadPDF} />
    </View>
  );
}
