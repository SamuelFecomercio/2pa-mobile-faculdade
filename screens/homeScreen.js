import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

//components
import Header from "../components/header";

export default function HomeScreen({ Navegation }) {
  const handleMenuPress = () => {
    // Lógica para o menu hamburguer
    console.log("Menu pressed");
  };

  return (
    <View style={styles.container}>
      <Header onMenuPress={handleMenuPress} />
    </View>
  );
}

const styles = StyleSheet.create({});
