import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import Menu from "../components/Menu";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import  Boton from "../components/Boton";
import { ActivityIndicator } from "react-native";
import UsuarioService from "../services/UsuarioService";

export default function SplashScreen() {
    const navigation = useNavigation();
    //usuarioService = new UsuarioService()
    let logueado
      
    const logueoAutomatico = async () => {
        logueado = await UsuarioService.automaticLogin()
        if (logueado == true){
            navigation.navigate("BlueScreen")
        }
        else {
            navigation.navigate("LoginScreen")
        }
    }

    useEffect(() => {
        const onLoad = async () => {
            await new Promise(resolve => setTimeout(resolve, 3000))
            await logueoAutomatico()
        }
        onLoad()
    }, [])

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      position: "absolute",
      bottom: 350,  
    }
  });
  