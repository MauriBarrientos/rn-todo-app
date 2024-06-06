import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import tasks from '../../assets/tasks.json';  // Asegúrate de que la ruta del archivo JSON sea correcta

export default function EditTaskListScreen() {
  const router = useRouter();
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    // Cargar tareas desde el archivo JSON
    setTaskList(tasks);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.item}
      onPress={() => router.push(`/editartareaform?id=${item.id}`)}  // Asegúrate de pasar el ID correcto en la URL
    >
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.author}</Text>
        <Text>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>¿Qué tarea deseas editar?</Text>
      <FlatList
        data={taskList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
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
  item: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 2,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
