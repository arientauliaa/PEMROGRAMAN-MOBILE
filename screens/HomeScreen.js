import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/coffee-cup.png')}
        style={styles.image}
      />
      <Title style={styles.title}>Hello, Coffee Bliss Is Here!</Title>
      <Paragraph style={styles.paragraph}>Espresso yourself — 
      life’s too short for bad coffee.</Paragraph>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#f8f4e1' // Latar belakang menggunakan warna terang
  },
  image: { 
    width: 150, 
    height: 150, 
    marginBottom: 20 
  },
  title: { 
    fontSize: 22, 
    textAlign: 'center', 
    marginBottom: 10, 
    color: '#512615' // Warna untuk judul
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    color: '#8d493a' // Warna untuk paragraf
  },
});
