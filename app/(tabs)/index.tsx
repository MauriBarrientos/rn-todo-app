import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const PRESET_USERNAME = 'maurisalina';
const PRESET_PASSWORD = 'MauriSalina2305';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (username === PRESET_USERNAME && password === PRESET_PASSWORD) {
      Alert.alert('Logged in successfully');
      router.push('/board');
    } else {
      Alert.alert('Invalid credentials');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16 }}
        onChangeText={setUsername}
        value={username}
        placeholder="Username or Email"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16 }}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
