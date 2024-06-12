import React, { useState } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

//components
import InputLabel from "../components/inputLabel";

export default function RegistroScreen({ navigation }) {
    
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/logo/logoLogin.png")}
          style={styles.image}
        />
        <Text>Crie a sua conta</Text>
        <InputLabel
          label="Nome"
          value={nome}
          onChangeText={setNome}
          placeholder="Digite o seu nome completo aqui"
        />
        <InputLabel
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Digite o seu email aqui"
        />
        <InputLabel
          label="Senha"
          value={senha}
          onChangeText={setSenha}
          placeholder="Digite a sua senha aqui"
        />
        <InputLabel
          label="Confirme a sua senha"
          value={senha}
          onChangeText={setSenha}
          placeholder="Digite a mesma senha aqui"
        />
   
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#F28705",
      },
  })