import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import tasks from '../../assets/tasks.json';

export default function TaskListScreen() {
  const router = useRouter();
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    // Cargar tareas desde el archivo JSON
    setTaskList(tasks);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.item}
      onPress={() => router.push(`/viewtask?id=${item.id}`)}
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
