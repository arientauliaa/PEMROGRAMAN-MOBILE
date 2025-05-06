import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Title, Button, Text, IconButton, TextInput } from 'react-native-paper';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      Alert.alert(
        "Login Berhasil",
        `Selamat datang, ${username}!`,
        [{ text: "OK" }]
      );
    } else {
      Alert.alert(
        "Login Gagal",
        "Silakan isi username dan password terlebih dahulu.",
        [{ text: "OK" }]
      );
    }
  };

  return (
    <View style={styles.container}>
      <IconButton
        icon="coffee"
        size={40}
        color="#512615"
        style={styles.icon}
      />

      <Title style={styles.title}>Selamat datang di Coffee Bliss</Title>

      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        mode="outlined"
        keyboardType="default"
      />

      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        mode="outlined"
        secureTextEntry
      />

      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.button}
        labelStyle={styles.buttonLabel}
      >
        Login
      </Button>

      <Text style={styles.footerText}>Belum punya akun? Daftar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f4e1',
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: '#512615',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#512615',
  },
  buttonLabel: {
    color: '#fff',
  },
  footerText: {
    marginTop: 15,
    color: '#8d493a',
  },
});
