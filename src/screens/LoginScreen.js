import { View, Text, StyleSheet } from "react-native";
import React, { useState, useRef } from "react";
import { TextInput } from "react-native";
import Menu from "../components/Menu";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Boton from "../components/Boton";
import UsuarioService from "../services/UsuarioService";

export default function LoginScreen() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const navigation = useNavigation();
  const passwordRef = useRef();

  const Login = async() => {
    if (usuario !== "" && contrasena !== "") {
      if (await UsuarioService.login(usuario.toLowerCase(), contrasena.toLowerCase())){
        await UsuarioService.almacenarCredenciales(usuario, contrasena);
        navigation.navigate('BlueScreen');
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } else {
      alert("Es necesario completar todos los datos");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        onChangeText={setUsuario}
        value={usuario}
        returnKeyType="next"
        blurOnSubmit={false}
        onSubmitEditing={() => {
          passwordRef.current.focus();
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={setContrasena}
        value={contrasena}
        ref={passwordRef}
        secureTextEntry
      />

      <Boton titulo="Login" onPress={Login} />
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
    color: "green",
  },
});
