import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, TouchableNativeFeedback } from "react-native";
import { Surface, Paragraph } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
interface Props {
  to: string;
  navigation: any;
  message: string;
}
const OptionCard = ({ navigation, to, message }: Props) => {
  return (
    <TouchableNativeFeedback>
      <Surface style={styles.wrapper}>
        <Paragraph style={styles.paragraph}>{message}</Paragraph>
        <Ionicons
          name="ios-chevron-forward-outline"
          size={24}
          color="#ef1417"
        />
      </Surface>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    backgroundColor: "white",
    marginBottom: 20,
    elevation: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  paragraph: {
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    color: "#625d5b",
  },
});
export default OptionCard;
