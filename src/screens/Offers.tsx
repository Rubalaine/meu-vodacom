import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AppBar from "../components/AppBar";
import OptionCard from "../components/OptionCard";
import { globalStyles } from "../globalStyles";
interface Props {
  navigation: any;
}
const Offers = ({ navigation }: Props) => {
  return (
    <View style={globalStyles.container}>
      <AppBar page="Selecione o tipo de oferta" navigation={navigation} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 20,
        }}
      >
        <OptionCard message="Jackpot" navigation={navigation} to="Jackpot" />
        <OptionCard message="Internet" navigation={navigation} to="Internet" />
        <OptionCard
          message="Ofertas Top"
          navigation={navigation}
          to="TopOffers"
        />
        <OptionCard
          message="Extra Jackpot"
          navigation={navigation}
          to="ExtraJackpot"
        />
      </ScrollView>
    </View>
  );
};

export default Offers;
