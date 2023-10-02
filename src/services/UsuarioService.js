import AsyncStorage from "@react-native-async-storage/async-storage";

const USERNAME_KEY = "LOGIN_username";
const PASSWORD_KEY = "LOGIN_password";

export default class UsuarioService {
  static login = async (username, password) => {
    //Obtiene las credenciales almacenadas e intenta loguearse
    let isValid;
    try {
      if (username == "federico" && password == "gomboc") {
        isValid = true;
      } else {
        isValid = false;
      }
      return isValid;
    } catch (e) {
      return false;
    }
  };

  static automaticLogin = async () => {
    //Obtiene las credenciales almacenadas e intenta loguearse
    try{
      const valorUsuario = await AsyncStorage.getItem(USERNAME_KEY);
      const valorContrasena = await AsyncStorage.getItem(PASSWORD_KEY);
      let isValid

      if (valorUsuario == "federico" && valorContrasena == "gomboc"){
        isValid = true
      }
      else {
        isValid = false
      }

      return isValid

    } catch (error) { 
      return false
    }
  };

  static eliminarCredenciales = async () => {
    //Elimina las credenciales almacenadas al cerrar sesión
    try {
      await AsyncStorage.removeItem(USERNAME_KEY)
      await AsyncStorage.removeItem(PASSWORD_KEY)
    } catch (error) {
      console.log(error)
    }
  };

  static almacenarCredenciales = async (username, password) => {
    //Almacena las credenciales en AsyncStorage (para leerlas al iniciar la proxima vez)
    try {
      await AsyncStorage.setItem(USERNAME_KEY, username);
      await AsyncStorage.setItem(PASSWORD_KEY, password);
    } catch (error) {
      // Error saving data
      console.log(error)
    }
  };

  static obtenerCredenciales = async () => {

    const valorUsuario = await AsyncStorage.getItem(USERNAME_KEY);
    const valorContrasena = await AsyncStorage.getItem(PASSWORD_KEY);

    const returnValue = { "username": valorUsuario, "password": valorContrasena };
    return returnValue;
  };
}