import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import Menu from "../components/Menu";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import  Boton from "../components/Boton";


export default function LoginScreen() {

  const [usuario, setUsuario] = useState("")
  const [contrasena, setContrasena] = useState("")

  const navigation = useNavigation();

  const Login = () => {
    if (usuario.toLowerCase() == "federico" && contrasena.toLowerCase() == "gomboc"){
      navigation.navigate("BlueScreen")
      setUsuario("")
      setContrasena("")
    }
    else {
      alert("Usuario o contraseña incorrectos")
    }
  }
  
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Usuario" onChangeText={setUsuario} value={usuario} returnKeyType='next/>
      <TextInput style={styles.input} placeholder="Contraseña" onChangeText={setContrasena} value={contrasena}/>

      <Boton titulo="Login" onPress={Login}/>
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
});
