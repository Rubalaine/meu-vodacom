import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Caption, Surface } from "react-native-paper";
import Header from "../components/Header";
import { globalStyles } from "../globalStyles";
import { Paragraph, Title } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
interface Props {
  navigation: any;
}
const Home = ({ navigation }: Props) => {
  return (
    <View style={globalStyles.container}>
      {/* <Image
        source={require("../../assets/images/bg-3.png")}
        style={[
          StyleSheet.absoluteFillObject,
          {
            width: "100%",
            height: "100%",
          },
        ]}
        resizeMode="cover"
        blurRadius={10}
      /> */}
      <Header navigation={navigation} />
      <View style={styles.wrapper}>
        <View style={styles.userInfo}>
          <Caption style={styles.userCaption}>22 de janeiro de 2021</Caption>
          <Title style={styles.userName}>Olá Maruano!</Title>
          <Paragraph style={styles.userWellcome}>
            Bem-Vindo ao Meu Vodacom
          </Paragraph>
        </View>

        <Surface style={styles.mainAccount}>
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Surface style={[styles.balance]}>
            <Ionicons name="ios-call-outline" size={30} color="#EF1417" />
            <Title style={styles.title}>1500 MT</Title>
            <Paragraph style={styles.paragraph}>Chamadas</Paragraph>
          </Surface>
          <Surface style={styles.balance}>
            <Ionicons
              name="ios-swap-vertical-outline"
              size={30}
              color="#EF1417"
            />

            <Title style={styles.title}>200 MB</Title>
            <Paragraph style={styles.paragraph}>Internet</Paragraph>
          </Surface>
          <Surface style={styles.balance}>
            <Ionicons
              name="ios-chatbubbles-outline"
              size={30}
              color="#EF1417"
            />
            <Title style={styles.title}>30 SMS</Title>
            <Paragraph style={styles.paragraph}>Mensagens</Paragraph>
          </Surface>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
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
    color: "#EF1417",

    fontSize: 28,
    fontFamily: "Inter_900Black",
    marginVertical: 20,
  },
  paragraph: {
    fontFamily: "Inter_400Regular",
    color: "#EF1417",
  },
  mainAccount: {
    backgroundColor: "#EF1417",
    padding: 20,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: "center",
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
