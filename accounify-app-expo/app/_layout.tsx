import React from "react";
import { Slot } from "expo-router";
import { AuthProvider } from "@/context/auth";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,}
});