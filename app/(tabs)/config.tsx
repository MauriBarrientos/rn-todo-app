import React, { useState, useRef } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import ConfettiCannon from 'react-native-confetti-cannon';

export default function ConfigScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const confettiRef = useRef(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const triggerConfetti = () => {
    if (confettiRef.current) {
      confettiRef.current.start();
    }
  };

  const theme = {
    dark: darkMode,
    colors: {
      background: darkMode ? '#000000' : '#f0f0f0',
      text: darkMode ? '#ffffff' : '#000000',
    },
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.text, { color: theme.colors.text }]}>
        {darkMode ? 'Ta oscuro' : 'Ta clarito'}
      </Text>
      <Button title="Clickeame" onPress={toggleDarkMode} />
      <br></br>
      <Button title="Confetti" onPress={triggerConfetti} />
      <ConfettiCannon
        count={200}
        origin={{ x: -10, y: 0 }}
        autoStart={false}
        ref={confettiRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
