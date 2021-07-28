import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Paragraph } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
interface Props {
  page: string;
  navigation: any;
}
const AppBar = ({ page, navigation }: Props) => {
  return (
    <View style={styles.wrapper}>
      <Ionicons
        name="ios-arrow-back-outline"
        size={24}
        color="#050505"
        onPress={() => navigation.goBack()}
      />
      <Paragraph style={styles.paragraph}>{page}</Paragraph>
      <Ionicons name="ios-at-circle-outline" size={24} color="#050505" />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: 40,
    padding: 20,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  paragraph: {
    fontFamily: "Inter_400Regular",
    fontSize: 18,
    color: "#050505",
  },
});

export default AppBar;
