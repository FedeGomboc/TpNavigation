import AsyncStorage from "@react-native-async-storage/async-storage";

const USERNAME_KEY = "LOGIN_username";
const PASSWORD_KEY = "LOGIN_password";

class UsuarioService {
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
    let isValid = false;
    return isValid;
  };

  static eliminarCredenciales = async () => {
    //Elimina las credenciales almacenadas al cerrar sesión
  };

  static almacenarCredenciales = async (username, password) => {
    //Almacena las credenciales en AsyncStorage (para leerlas al iniciar la proxima vez)
  };

  static obtenerCredenciales = async () => {
    const returnValue = { Username: storedUsername, Password: storedPassword };
    return returnValue;
  };
}

export default UsuarioService;
