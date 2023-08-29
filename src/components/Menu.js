import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Menu() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("GreenScreen")}>
        <Text style={styles.verde}>Green</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("RedScreen")}>
        <Text style={styles.rojo}>Red</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("BlueScreen")}>
        <Text style={styles.azul}>Blue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 55,
    position: "absolute",
    bottom: 0,
  },
  boton: {
    width: "33%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  verde: {
    color: "green"
  },
  azul: {
    color: "blue"
  },
  rojo: {
    color: "red"
  }
});
