import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  Appearance,
} from "react-native";
import { Caption, Surface } from "react-native-paper";
import Header from "../components/Header";
import { globalStyles } from "../globalStyles";
import { Paragraph, Title } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import OptionCard from "./../components/OptionCard";
import { useEffect } from "react";
interface Props {
  navigation: any;
}
const colorScheme = Appearance.getColorScheme();
let RED_COLOR = colorScheme === "dark" ? "#ee6366" : "#EF1417";
const Home = ({ navigation }: Props) => {
  useEffect(() => {
    RED_COLOR = colorScheme === "dark" ? "#ee6366" : "#EF1417";
  }, [colorScheme]);
  return (
    <View style={globalStyles.container}>
      <Header navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 20,
        }}
      >
        <View style={styles.userInfo}>
          <Caption style={styles.userCaption}>22 de janeiro de 2021</Caption>
          <Title style={styles.userName}>Olá Albertino!</Title>
          <Paragraph style={styles.userWellcome}>
            Bem-Vindo ao Meu Vodacom
          </Paragraph>
        </View>

        <Surface style={styles.mainAccount}>
          {/* <View
            style={{
              position: "absolute",
              top: -35,
              left: 0,
              right: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableNativeFeedback>
              <View
                style={{
                  padding: 10,
                  backgroundColor: "#EF1417",
                  borderRadius: 60,
                  borderColor: "white",
                  borderWidth: 2,
                }}
              >
                <Ionicons name="ios-add-outline" color="white" size={30} />
              </View>
            </TouchableNativeFeedback>
          </View> */}

          <Paragraph
            style={[
              styles.paragraph,
              {
                color: "#f3f5eb",
              },
            ]}
          >
            Saldo
          </Paragraph>
          <Title
            style={[
              styles.title,
              {
                color: "#f3f5eb",
              },
            ]}
          >
            80 MT
          </Title>
          <Paragraph
            style={[
              styles.paragraph,
              {
                color: "#d2d3cf",
              },
            ]}
          >
            aos 22 de janeiro de 2020
          </Paragraph>
        </Surface>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginBottom: 20 }}
        >
          <Surface style={[styles.balance]}>
            <Ionicons name="ios-call-outline" size={30} color={RED_COLOR} />
            <Title style={styles.title}>1500 MT</Title>
            <Paragraph style={styles.paragraph}>Chamadas</Paragraph>
          </Surface>
          <Surface style={styles.balance}>
            <Ionicons
              name="ios-swap-vertical-outline"
              size={30}
              color={RED_COLOR}
            />

            <Title style={styles.title}>200 MB</Title>
            <Paragraph style={styles.paragraph}>Internet</Paragraph>
          </Surface>
          <Surface style={styles.balance}>
            <Ionicons
              name="ios-chatbubbles-outline"
              size={30}
              color={RED_COLOR}
            />
            <Title style={styles.title}>30 SMS</Title>
            <Paragraph style={styles.paragraph}>Mensagens</Paragraph>
          </Surface>
        </ScrollView>

        <OptionCard message="Recaregar" navigation={navigation} to="Jackpot" />
        <OptionCard
          message="Converter Megas"
          navigation={navigation}
          to="Internet"
        />
        <OptionCard
          message="Enviar Crédito"
          navigation={navigation}
          to="TopOffers"
        />
        <OptionCard
          message="Extra Jackpot"
          navigation={navigation}
          to="ExtraJackpot"
        />
        <OptionCard
          message="Ofertas Top"
          navigation={navigation}
          to="ExtraJackpot"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  userInfo: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  userName: {
    fontSize: 28,
    fontFamily: "Inter_700Bold",
    marginVertical: 10,
    color: "#050505",
  },
  userCaption: {
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    color: "#aca6a3",
  },
  userWellcome: {
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    color: "#625d5b",
  },
  title: {
    color: RED_COLOR,

    fontSize: 28,
    fontFamily: "Inter_900Black",
    marginVertical: 20,
  },
  paragraph: {
    fontFamily: "Inter_400Regular",
    color: RED_COLOR,
  },
  mainAccount: {
    backgroundColor: RED_COLOR,
    padding: 20,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: "center",
    position: "relative",
  },
  balance: {
    width: 150,
    height: 200,
    backgroundColor: "#ef141813",
    padding: 10,
    borderRadius: 25,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  surface: {
    backgroundColor: "#FD7016",
    padding: 10,
    borderRadius: 15,
    marginBottom: 20,
  },
});
export default Home;
