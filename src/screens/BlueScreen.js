import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Menu from "../components/Menu";
import Boton from "../components/Boton";
import UsuarioService from "../services/UsuarioService";

export default function BlueScreen() {
  const handlePress = async () => {
    let credenciales = await UsuarioService.obtenerCredenciales();
    alert(JSON.stringify(credenciales));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Blue Screen</Text>
      <Boton style={styles.verAsync} titulo="Ver AsyncStorage" onPress={() => handlePress()} />
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center", //Centro del eje X
    justifyContent: "center", //Centro del eje Y
  },
  text: {
    color: "white",
  },
  verAsync: {
    backgroundColor: "green",
    marginTop: 30
  }
});
