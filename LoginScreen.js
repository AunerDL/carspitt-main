import React from 'react';
import { StyleSheet, View, TextInput, Button, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation(); // Obtener la función de navegación

  const imagen = require('./imgs/motor.jpg');
  const imagen2 = require('./imgs/CarsPit-1.png');
  const img1 = require('./imgs/usuario.png');
  const img2 = require('./imgs/candado.png');

  const handleLogin = () => {
    // Implementa la lógica de inicio de sesión aquí
  }

  const handleRegister = () => {
    navigation.navigate('Registro'); // Corregir el nombre de la pantalla de registro
  }
  

  return (
    <ScrollView style={styles.fondo}>
      
      <Image source={imagen} style={styles.backgroundImage}/>
      <Image source={imagen2} style={styles.imagenCarsPit}/>
      <View style={styles.texto}>
        <Text style={styles.textoEstilo}>CarsPit</Text>
      </View>
      
      
      
    <View style={styles.container} >
      <View style={styles.formContainer}>
        <Image source={img1} style={styles.usuario}/>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none" 
        />
        <Image source={img2} style={styles.password}/>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true} 
        />
        
        <Button title="Iniciar Sesión" onPress={handleLogin} style={styles.buton} />
        

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.linkText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupLink} onPress={handleRegister}>
          <Text style={styles.linkText}>¿No tienes cuenta? Regístrate</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  texto: {
    position: 'absolute',
    top: 100,
    left: 100,
    backgroundColor: 'rgba(0,0,0,0.2)', // Fondo semitransparente
    padding: 10,
    marginTop: 70,
    marginLeft: 90,
  },

  fondo: {
    backgroundColor: '#2B2B2B'
  },

  usuario: {
    position: 'absolute',
    height: 40,
    width: 40,
    marginLeft: 17,
    marginTop: 20,
  },

  password: {
    position: 'absolute',
    height: 40,
    width: 40,
    marginLeft: 17,
    marginTop: 74,
  },

  textoEstilo: {
    color: '#fff',
    fontSize: 40,
    fontWeight: "bold",
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    opacity: 0.8,
  },

  imagenCarsPit: {
    flex: 1,
    marginLeft: 40,
    marginTop: 100,
    width: 150,
    height: 150,
    position: 'absolute'
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B2B2B',
    width: '100%',
    borderRadius: 5, 
  },
  formContainer: {
    width: '80%', 
    padding: 20,
    marginTop: 60,
    backgroundColor: '#646464',
    borderRadius: 10,
    shadowColor: '#fff',  // Agrega una sombra sutil
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  input: {
    height: 40,
    backgroundColor: '#fff', // Fondo blanco para los campos
    borderColor: '#9F9F9F', // Borde gris muy claro
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10, 
    marginBottom: 15,
    width: '70%',
    marginLeft: 50,
  },
  buton: {
    backgroundColor: '#000000', // Azul para el botón principal
    borderRadius: 5,
    width:  "80%" ,// Ancho del botón
    height: 45,   // Altura del botón
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginTop: 15
  },
  forgotPassword: {
    alignItems: 'center',
    marginTop: 5 
  }, 
  signupLink: {
    alignItems: 'center',
    marginTop: 10,
    
  }, 
  linkText: {
    color: 'black' 
  }
});

export default LoginScreen;
