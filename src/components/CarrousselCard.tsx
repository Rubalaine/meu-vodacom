import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Paragraph } from "react-native-paper";
interface Props {
  item: {
    imgUrl?: string;
    title?: string;
  };
  index: number;
}
export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH - 40);
const CarrousselCard = ({ item, index }: Props) => {
  return (
    <View style={styles.wrapper} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 10,
    overflow: "hidden",
    width: ITEM_WIDTH,
    height: 130,
  },
  image: {
    width: ITEM_WIDTH,
    height: "100%",
  },
});

export default CarrousselCard;
