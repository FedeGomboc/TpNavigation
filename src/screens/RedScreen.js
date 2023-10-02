import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Menu from '../components/Menu';
import Boton from '../components/Boton';
import UsuarioService from '../services/UsuarioService';
import { ToastAndroid } from 'react-native';

export default function RedScreen() {

  const handlePress = async () => {
    await UsuarioService.eliminarCredenciales()
    ToastAndroid.show("Se han eliminado los datos", ToastAndroid.SHORT)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Red Screen</Text>
      <Boton titulo="Eliminar AsyncStorage" style={styles.eliminarAsync} onPress={() => handlePress()}/>
      <Menu/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center', //Centro del eje X
      justifyContent: 'center', //Centro del eje Y
    }, 
    text: {
      color: "white",
    },
    eliminarAsync: {
      backgroundColor: "green",
      marginTop: 30
    }
  });