import React from 'react';
import Button from '@/components/ui/Button';

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
    <>
      <Button theme="primary" label="Choose a photo" onPress={onPickImage} />
      <Button label="Take a photo" onPress={onTakePhoto} />
      <Button label="Upload PDF" onPress={onUploadPDF} />
    </>
  );
}
