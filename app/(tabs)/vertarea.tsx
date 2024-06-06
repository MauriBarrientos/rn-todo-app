import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSearchParams } from 'expo-router';
import tasks from '../../assets/tasks.json';

export default function ViewTaskScreen() {
  const { id } = useSearchParams();
  const task = tasks.find(t => t.id === parseInt(id));

  if (!task) {
    return (
      <View style={styles.container}>
        <Text>Tarea no encontrada</Text>
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
});
