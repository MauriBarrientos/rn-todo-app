import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import tasks from '../../assets/tasks.json';  // Asegúrate de que la ruta del archivo JSON sea correcta

export default function EditTaskFormScreen() {
  const { id } = useLocalSearchParams();  // Obtiene el ID de los parámetros de la URL
  const taskId = parseInt(id, 10);
  const task = tasks.find(t => t.id === taskId);

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [author, setAuthor] = useState(task.author);
  const [date, setDate] = useState(task.date);

  if (!task) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Tarea no encontrada</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Editar Tarea</Text>
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
      <Button title="Guardar Cambios" onPress={() => {router.push({
      pathname: "/board",
      params: { nuevaTarea: JSON.stringify(nuevaTarea) },
    }); }} />
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
  error: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});
