import { useState } from 'react';
import { Button, Card, TextInput } from 'react-native-paper';
import { View, StyleSheet } from 'react-native-web';
import { useRouter } from 'expo-router';
import { AsyncStorage } from 'react-native';


export default function AgregarTarea() {

  const router = useRouter();

  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [autor, setAutor] = useState('');

  const handleAgregarTarea = () => {
    const nuevaTarea = {
      id: Date.now(),
      titulo,
      descripcion,
      autor,
      fecha: new Date().toISOString().split('T')[0],
    };
    
    router.push({
      pathname: "/listatareas",
      params: { nuevaTarea: JSON.stringify(nuevaTarea) },
    });
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: 'https://i.pinimg.com/564x/fb/ac/15/fbac1539d1bf5b8e620000d6649aef7b.jpg' }} style={{ 'margin': 5, 'border': '1px solid white' }} />
        <Card.Content>
          <TextInput
            mode='outlined'
            label="Titulo"
            value={titulo}
            onChangeText={text => setTitulo(text)}
            style={styles.input}
          />
          <TextInput
            mode='outlined'
            label="Descripción"
            value={descripcion}
            onChangeText={text => setDescripcion(text) }
            style={styles.input}
          />
          <TextInput
            mode='outlined'
            label="Autor"
            value={autor}
            onChangeText={text => setAutor(text)}
            style={styles.input}
          />
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => router.back()}>Cancelar</Button>
          <Button onPress={handleAgregarTarea}>Guardar</Button>
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
    borderRadius: 8,
    margin: 4,
  },
})
