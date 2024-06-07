import React, { useState } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Button, Card, TextInput } from 'react-native-paper';

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validateUsername = (username) => {
  return username.length >= 5 && username.length <= 10;
};

const validatePassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{5,}$/;
  return regex.test(password);
};

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (username.includes('@')) {
      // Validate as email
      if (!validateEmail(username)) {
        alert('Formato de correo electrónico inválido');
        return;
      }
    } else {
      // Validate as username
      if (!validateUsername(username)) {
        alert('El nombre de usuario debe tener entre 5 y 10 caracteres');
        return;
      }
    }

    // Validate password
    if (!validatePassword(password)) {
      alert('La contraseña debe tener al menos 5 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula y un símbolo');
      return;
    }
    router.push('/board');
  };

  const handleCancel = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Inicio de Sesión" />
        <Card.Content>
          <TextInput
            mode='outlined'
            label="Nombre de usuario o Email"
            onChangeText={setUsername}
            value={username}
            placeholder="Nombre de usuario o Email"
            style={styles.input}
          />
          <TextInput
            mode='outlined'
            label="Contraseña"
            onChangeText={setPassword}
            value={password}
            placeholder="Contraseña"
            secureTextEntry
            style={styles.input}
          />
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button onPress={handleCancel} mode="outlined" style={styles.button}>
            Cancelar
          </Button>
          <Button onPress={handleLogin} mode="contained" style={styles.button}buttonColor= "#49BA81">
            Iniciar Sesión
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    padding: 10,
  },
  input: {
    marginVertical: 8,
  },
  actions: {
    justifyContent: 'space-between',
  },
  button: {
    marginHorizontal: 4
  },
});
