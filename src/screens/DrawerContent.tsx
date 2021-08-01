import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Drawer,
  Avatar,
  Title,
  Button,
  Paragraph,
  List,
} from "react-native-paper";
import IonIcons from "@expo/vector-icons/Ionicons";
const DrawerContent = (props: any) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
        <View style={styles.drawerContent}>
          <Drawer.Section>
            <View style={styles.userInfoSection}>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <Avatar.Image
                  source={{
                    uri: "https://picsum.photos/id/237/200/300",
                  }}
                  size={50}
                />
                <View
                  style={{
                    marginLeft: 15,
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Title style={styles.title}>Albertino José da Silva</Title>
                  <Paragraph style={styles.paragraph}>842798702</Paragraph>
                  <Pressable>
                    <Text style={styles.font}>+ Adicionar perfil</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Drawer.Section>

          <Drawer.Section style={styles.drawerSection}>
            {/* <DrawerItem
              icon={({ color, size }) => (
                <IonIcons name="ios-home-outline" color={color} size={size} />
              )}
              label="Inicio"
              onPress={() => props.navigation.navigate("Home")}
              labelStyle={styles.font}
            /> */}
            <DrawerItem
              icon={({ color, size }) => (
                <IonIcons name="ios-cog-outline" color={color} size={size} />
              )}
              labelStyle={styles.font}
              label="Meus serviços"
              onPress={() => props.navigation.navigate("Services")}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <IonIcons name="ios-tv-outline" color={color} size={size} />
              )}
              labelStyle={styles.font}
              label="Ofertas"
              onPress={() => props.navigation.navigate("Offers")}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <IonIcons name="ios-gift-outline" color={color} size={size} />
              )}
              labelStyle={styles.font}
              label="Oferecer"
              onPress={() => props.navigation.navigate("Gift")}
            />
            <List.Accordion
              title="Vlive"
              style={{
                backgroundColor: "white",
                padding: 2,
              }}
              titleStyle={{
                marginLeft: 6,
                color: "#676768",
                ...styles.font,
              }}
              left={(props) => (
                <List.Icon {...props} icon="account" color="#676768" />
              )}
            >
              <List.Item
                title="Vlive Jogos"
                titleStyle={{
                  marginLeft: 6,
                  color: "#676768",
                  ...styles.font,
                }}
              />
              <List.Item
                title="Vlive Desporto"
                titleStyle={{
                  marginLeft: 6,
                  color: "#676768",
                  ...styles.font,
                }}
              />
            </List.Accordion>
            <List.Accordion
              title="Precisa de ajuda?"
              style={{
                backgroundColor: "white",
                padding: 2,
              }}
              titleStyle={{
                marginLeft: 6,
                color: "#676768",
                ...styles.font,
              }}
              left={(props) => (
                <List.Icon {...props} icon="chat-outline" color="#676768" />
              )}
            >
              <List.Item title="ajuda 1" titleStyle={{}} />
              <List.Item title="ajuda 2" />
            </List.Accordion>
            <DrawerItem
              icon={({ color, size }) => (
                <IonIcons name="ios-person-outline" color={color} size={size} />
              )}
              labelStyle={styles.font}
              label="Meu perfil"
              onPress={() => props.navigation.navigate("Profile")}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <IonIcons
                  name="ios-location-outline"
                  color={color}
                  size={size}
                />
              )}
              labelStyle={styles.font}
              label="Localizar Loja"
              onPress={() => props.navigation.navigate("Stores")}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <IonIcons
                  name="ios-help-circle-outline"
                  color={color}
                  size={size}
                />
              )}
              labelStyle={styles.font}
              label="Sobre"
              onPress={() => props.navigation.navigate("About")}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <IonIcons name="ios-exit-outline" color={color} size={size} />
              )}
              labelStyle={styles.font}
              label="Sair"
              onPress={() => props.navigation.navigate("Profile")}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    padding: 20,
  },
  font: {
    fontFamily: "Inter_400Regular",
    fontSize: 15,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontFamily: "Inter_700Bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontFamily: "Inter_400Regular",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default DrawerContent;
