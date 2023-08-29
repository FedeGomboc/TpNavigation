import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Usuario"></TextInput>
      <TextInput style={styles.input} placeholder="Contraseña"></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 11.5,
    borderRadius: 10,
    width: "85%",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "absolute",
    bottom: 350,  
  }
});
