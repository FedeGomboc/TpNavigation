import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Menu from '../components/Menu';

export default function BlueScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Blue Screen</Text>
      <Menu/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center', //Centro del eje X
      justifyContent: 'center', //Centro del eje Y
    }, 
    text: {
      color: "white",
    }
  });