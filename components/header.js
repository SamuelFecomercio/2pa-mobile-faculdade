import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ onMenuPress }) => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/header/logo.png")}
        style={styles.image}
      />

      <Image
        source={require("../assets/header/nutrilife.png")}
        style={styles.image}
      />

      <TouchableOpacity onPress={onMenuPress}>
        <Ionicons name="menu" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default Header;