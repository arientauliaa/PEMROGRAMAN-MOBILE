import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function MenuDetailScreen({ route }) {
  const { menu } = route.params;

  return (
    <View style={styles.container}>
      <Image source={menu.image} style={styles.image} />
      <Text style={styles.name}>{menu.name}</Text>
      <Text style={styles.price}>{menu.price}</Text>
      {menu.soldOut && <Text style={styles.soldOut}>SOLD OUT</Text>}
      <Text style={styles.description}>
        Ini adalah minuman {menu.name} yang nikmat dan cocok untuk menemani harimu.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f8f4e1',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: '#444',
  },
  soldOut: {
    marginTop: 10,
    color: 'red',
    fontWeight: 'bold',
  },
  description: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
});
