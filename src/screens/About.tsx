import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Paragraph } from "react-native-paper";
import AppBar from "../components/AppBar";
import OptionCard from "../components/OptionCard";
import { globalStyles } from "../globalStyles";
import Carroussel from "../components/Carroussel";
interface Props {
  navigation: any;
}
const About = ({ navigation }: Props) => {
  return (
    <View style={globalStyles.container}>
      <AppBar page="Sobre" navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 20,
        }}
      >
        <Carroussel />

        <OptionCard
          message="Termos e Condições"
          navigation={navigation}
          to="Jackpot"
        />
        <OptionCard
          message="Politica de Privacidade"
          navigation={navigation}
          to="Internet"
        />
        <Paragraph
          style={{
            alignSelf: "flex-end",
            fontFamily: "Inter_400Regular",
            color: "#625d5b",
          }}
        >
          Versao 2.0.7
        </Paragraph>
      </ScrollView>
    </View>
  );
};

export default About;
