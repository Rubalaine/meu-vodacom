import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Drawer from "./src/screens/Drawer";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_900Black,
  });
  return fontsLoaded ? (
    <NavigationContainer>
      <StatusBar />
      <Drawer />
    </NavigationContainer>
  ) : (
    <AppLoading />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
