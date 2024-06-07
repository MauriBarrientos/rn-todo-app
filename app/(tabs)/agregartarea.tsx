import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function AgregarTarea() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleAgregarTarea = () => {
    const nuevaTarea = {
      id: Date.now(),
      title,
      description,
      author,
      date,
    };

    // Aquí deberías agregar la lógica para guardar la nueva tarea
    // Por ejemplo, actualizar el estado de una lista de tareas en el componente padre

    router.push({
      pathname: "/listatareas",
      params: { nuevaTarea: JSON.stringify(nuevaTarea) },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Agregar Tarea</Text>
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />
      <Text style={styles.label}>Autor</Text>
      <TextInput
        style={styles.input}
        value={author}
        onChangeText={setAuthor}
      />
      <Text style={styles.label}>Fecha</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
      />
      <View style={styles.buttonContainer}>
        <Button title="Cancelar" onPress={() => router.push("/board")} />
        <Button title="Guardar" onPress={handleAgregarTarea} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
