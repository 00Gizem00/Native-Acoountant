import React from "react";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import { useFileContext } from "../hooks/useFileContext";

export default function FileUploader() {
  const { state, dispatch } = useFileContext();

  const handlePickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        dispatch({
          type: "ADD_FILE",
          payload: { uri: result.assets[0].uri, type: "image" },
        });
      }
    } catch (error) {
      console.error("Image picking error:", error);
    }
  };

  const handlePickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
      });

      if (result.type !== "cancel") {
        dispatch({
          type: "ADD_FILE",
          payload: { uri: result.uri, type: "pdf" },
        });
      }
    } catch (error) {
      console.error("Document picking error:", error);
    }
  };

  const handleRemoveFile = (index: number) => {
    dispatch({ type: "REMOVE_FILE", payload: index });
  };

  return (
    <View>
      <Button title="Fotoğraf Seç" onPress={handlePickImage} />
      <Button title="PDF Yükle" onPress={handlePickDocument} />

      {state.files.length === 0 ? (
        <Text>Yüklenmiş dosya yok.</Text>
      ) : (
        <FlatList
          data={state.files}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Text style={{ flex: 1 }}>
                {item.type === "image" ? "Resim" : "PDF"}: {item.uri.split("/").pop()}
              </Text>
              <TouchableOpacity onPress={() => handleRemoveFile(index)}>
                <Text style={{ color: "red" }}>Sil</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}