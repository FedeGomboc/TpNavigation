import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import RedScreen from "./src/screens/RedScreen";
import BlueScreen from "./src/screens/BlueScreen";
import GreenScreen from "./src/screens/GreenScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SplashScreen from "./src/screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="GreenScreen" component={GreenScreen} />
        <Stack.Screen name="BlueScreen" component={BlueScreen} />
        <Stack.Screen name="RedScreen" component={RedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
