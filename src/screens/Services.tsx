import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AppBar from "../components/AppBar";
import Carroussel from "../components/Carroussel";
import OptionCard from "../components/OptionCard";
import { globalStyles } from "../globalStyles";
interface Props {
  navigation: any;
}
const Services = ({ navigation }: Props) => {
  return (
    <View style={globalStyles.container}>
      <AppBar page="Meus serviços" navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 20,
        }}
      >
        <Carroussel />
        <OptionCard
          message="Transferir Crédito"
          navigation={navigation}
          to="CreditTransfer"
        />
        <OptionCard
          message="Transferir Megas"
          navigation={navigation}
          to="CreditTransfer"
        />
        <OptionCard
          message="Txuna"
          navigation={navigation}
          to="CreditTransfer"
        />
        <OptionCard message="Puk" navigation={navigation} to="CreditTransfer" />
        <OptionCard
          message="Velocidade da Internet"
          navigation={navigation}
          to="CreditTransfer"
        />
      </ScrollView>
    </View>
  );
};

export default Services;
