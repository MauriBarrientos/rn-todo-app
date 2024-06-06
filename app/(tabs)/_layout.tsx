import React from "react";
import { Stack } from "expo-router";

export default function TabLayout() {

  return (
    <Stack>
      <Stack.Screen
       name="index"
        options={{ headerShown: false 
        }} />
      <Stack.Screen
       name="board"
        options={{headerShown: false
         }} />
      <Stack.Screen 
        name="listatareas" 
        options={{ 
          title: 'Lista de tareas',
        }} />
      <Stack.Screen 
        name="agregartarea" 
        options={{
          title: 'Añade una nueva tarea',
        }} />
      <Stack.Screen 
        name="editartarea" 
        options={{
          title: 'Edita una tarea',
      }} />
      <Stack.Screen 
        name="vertarea" 
        options={{
          title: 'Edita una tarea',
      }} />
      <Stack.Screen 
        name="config" 
        options={{
          title: 'Configuraciones de la aplicación',
      }} />
      <Stack.Screen name="editartareaform" options={{ title: 'Formulario de Edición' }} />
    </Stack>
  );
}