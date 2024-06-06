import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import tasks from '../../assets/tasks.json';  // Asegúrate de que la ruta del archivo JSON sea correcta

export default function VerTarea() {
  const { id } = useLocalSearchParams(); // Obtiene el ID de los parámetros de la URL
  const taskId = parseInt(id, 10);
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Tarea no encontrada</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <Text style={styles.value}>{task.title}</Text>
      <Text style={styles.label}>Descripción</Text>
      <Text style={styles.value}>{task.description}</Text>
      <Text style={styles.label}>Autor</Text>
      <Text style={styles.value}>{task.author}</Text>
      <Text style={styles.label}>Fecha</Text>
      <Text style={styles.value}>{task.date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
  error: {
    fontSize: 18,
    color: 'red',
  },
});
