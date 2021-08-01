import { NavigationProp } from "@react-navigation/native";
import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import { Paragraph } from "react-native-paper";
interface Props {
  navigation?: any;
}

const Header = ({ navigation }: Props) => {
  useEffect(() => {}, []);
  return (
    <View style={styles.header}>
      <AntDesign
        name="menu-unfold"
        size={24}
        color="black"
        onPress={() => navigation.openDrawer()}
      />
      <Paragraph>PT</Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
});
export default Header;
