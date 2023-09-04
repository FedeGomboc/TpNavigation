import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Menu from '../components/Menu';
import Boton from '../components/Boton';
import { useNavigation } from "@react-navigation/native";

export default function GreenScreen() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Green Screen</Text>
      <Boton titulo="Logout" style={styles.logout} onPress={() => navigation.navigate("LoginScreen")}/>
      <Menu/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center', //Centro del eje X
      justifyContent: 'center', //Centro del eje Y
    }, 
    text: {
      color: "white",
    },
    logout: {
      backgroundColor: "red",
      marginTop: 30
    }
  });