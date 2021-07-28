import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Paragraph, Caption, Button } from "react-native-paper";
import AppBar from "../components/AppBar";
import OptionCard from "../components/OptionCard";
import { globalStyles } from "../globalStyles";
interface Props {
  navigation: any;
}
const Profile = ({ navigation }: Props) => {
  return (
    <View style={globalStyles.container}>
      <AppBar page="Meu Perfil" navigation={navigation} />
      <View style={styles.wrapper}>
        <View style={styles.topAbsolute}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.cover}
              source={{
                uri: "https://picsum.photos/id/237/200/300",
              }}
              defaultSource={require("../../assets/images/fallback-1.jpeg")}
            />
          </View>
        </View>
        {/* <Image source={require("../../assets/images/fallback-1.jpeg")} /> */}

        <View>
          <View style={styles.field}>
            <Caption style={styles.label}>Nome</Caption>
            <Paragraph style={styles.paragraph}>Maruano Pedro Julio</Paragraph>
          </View>
          <View style={styles.field}>
            <Caption style={styles.label}>Meu Número</Caption>
            <Paragraph style={styles.paragraph}>841234321</Paragraph>
          </View>
          <View style={styles.field}>
            <Caption style={styles.label}>Género</Caption>
            <Paragraph style={styles.paragraph}>Masculino</Paragraph>
          </View>
          <View style={styles.field}>
            <Caption style={styles.label}>Data de Nascimento</Caption>
            <Paragraph style={styles.paragraph}>
              23 de janeiro de 2000
            </Paragraph>
          </View>
          <View style={styles.field}>
            <Caption style={styles.label}>
              Estado de Registo do cartão SIM
            </Caption>
            <Paragraph style={styles.paragraph}>Completo</Paragraph>
          </View>
          <Button mode="contained" color="#EF1417">
            Registar-me
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 100,
    padding: 20,
    borderColor: "#eee",
    borderWidth: 1,
    margin: 20,
    marginTop: 120,
    position: "relative",
    borderRadius: 25,
  },

  cover: {
    width: "100%",
    borderRadius: 500,
    height: "100%",
  },
  imageWrapper: {
    height: 200,
    width: 200,
    borderRadius: 500,
    backgroundColor: "#ffff",
    padding: 5,
    elevation: 4,
  },
  topAbsolute: {
    position: "absolute",
    top: -100,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 69,
  },
  label: {
    color: "#aca6a3",
    fontSize: 16,
    fontFamily: "Inter_400Regular",
  },
  paragraph: {
    fontSize: 16,
    color: "#625d5b",

    fontFamily: "Inter_400Regular",
  },
  field: {
    marginBottom: 20,
  },
});
export default Profile;
