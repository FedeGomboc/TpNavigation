import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import Menu from "../components/Menu";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import  Boton from "../components/Boton";

export default function SplashScreen() {
    useEffect(() => {
        const onLoad = async () => {
            await new Promise(resolve => setTimeout(resolve, 3000))
        }
        onLoad()

        return () => {
            //
        }
    }, [])
    
    return (
        <></>
    )
}