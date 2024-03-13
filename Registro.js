import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Button, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Registro = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation(); 

  const imagen = require('./imgs/motor.jpg');
  const imagen2 = require('./imgs/CarsPit-1.png');

  const handleRegister = () => {
    // Aquí podrías implementar la lógica para enviar los datos a tu servidor o almacenarlos localmente
    console.log('Registrado con éxito:', { username, password, email, phoneNumber });
  };

  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  }

  return (
    <ScrollView style={styles.body}>
      <Image source={imagen} style={styles.backgroundImage}/>
      <Image source={imagen2} style={styles.imagenCarsPit}/>
      <View style={styles.texto}>
        <Text style={styles.textoEstilo}>CarsPit</Text>
      </View>
  
      <View style={styles.container}>
        <View style={styles.formContainer}>

        <Text style={styles.styleTitle}>Bienvenido a CarsPit Regístrate!!</Text>

        <TextInput
          style={styles.Inputs}
          placeholder="Nombre de usuario"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.Inputs}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.Inputs}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.Inputs}
          placeholder="Número de teléfono"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
          
          <Button title="Registrarse" onPress={handleRegister} />
        
          <TouchableOpacity style={styles.signupLink} onPress={handleLogin}>
            <Text style={styles.linkText}>¿Ya tienes cuenta? Inicia sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
  
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#2B2B2B'
  },
  texto: {
    position: 'absolute',
    top: 100,
    left: 100,
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 10,
    marginTop: 10,
    marginLeft: 90,
  },
  textoEstilo: {
    color: '#fff',
    fontSize: 40,
    fontWeight: "bold",
  },
  styleTitle: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: "bold",
    marginBottom: 35
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    opacity: 0.8,
    height: 250,
  },
  imagenCarsPit: {
    flex: 1,
    marginLeft: 40,
    marginTop: 50,
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
    shadowColor: '#fff', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  Inputs: {
    height: 40,
    backgroundColor: '#fff',
    borderColor: '#9F9F9F', 
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10, 
    marginBottom: 15,
    width: '100%',
  },
  signupLink: {
    alignItems: 'center',
    marginTop: 10,
  }, 
  linkText: {
    color: 'black' 
  }
});


export default Registro;