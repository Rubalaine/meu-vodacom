import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import Services from "./Services";
import Offers from "./Offers";
import Gift from "./Gift";
import Profile from "./Profile";
import Stores from "./Stores";
import About from "./About";
import DrawerContent from "./DrawerContent";

const DrawerNav = createDrawerNavigator();
const Drawer = () => {
  return (
    <DrawerNav.Navigator
      drawerStyle={{
        width: "80%",
        backgroundColor: "#ffffff",
      }}
      drawerContent={(props: any) => <DrawerContent {...props} />}
    >
      <DrawerNav.Screen name="Home" component={Home} />
      <DrawerNav.Screen name="Services" component={Services} />
      <DrawerNav.Screen name="Offers" component={Offers} />
      <DrawerNav.Screen name="Gift" component={Gift} />
      <DrawerNav.Screen name="Profile" component={Profile} />
      <DrawerNav.Screen name="Stores" component={Stores} />
      <DrawerNav.Screen name="About" component={About} />
    </DrawerNav.Navigator>
  );
};

export default Drawer;
