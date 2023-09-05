import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function Boton({ onPress, style, titulo }) {

  let today = new Date()
  let now = today.toLocaleString()

  const handleOnPress = () => {
    console.log(now)

    if (typeof onPress === "function"){
      onPress()
    }
  }

  return (
    <TouchableOpacity style={[styles.boton, style]} onPress={handleOnPress}>
      <Text style={styles.text}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    borderRadius: 20,
    backgroundColor: "#007AFF",
    marginTop: 10,
    width: "90%",
    height: 60,
  },
  text: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 18
  }
});
