import React from 'react';
import { View, Text, Alert, TouchableOpacity, FlatList, Image, StyleSheet, Dimensions } from 'react-native';


const data = [
  {
    id: '1',
    name: 'Cappuccino Classic',
    price: 'Rp. 35.000',
    image: require('../assets/cappuccino.jpg'),
    soldOut: false,
  },
  {
    id: '2',
    name: 'Latte Hazelnut',
    price: 'Rp. 38.000',
    image: require('../assets/latte.jpg'),
    soldOut: false,
  },
  {
    id: '3',
    name: 'Americano',
    price: 'Rp. 25.000',
    image: require('../assets/americano.jpg'),
    soldOut: false,
  },
  {
    id: '4',
    name: 'Matcha Latte',
    price: 'Rp. 30.000',
    image: require('../assets/matcha.jpg'),
    soldOut: false,
  },
  {
    id: '5',
    name: 'Choco Forest',
    price: 'Rp. 35.000',
    image: require('../assets/choco.jpg'),
    soldOut: false,
  },
  {
    id: '6',
    name: 'Red Velvet',
    price: 'Rp. 30.000',
    image: require('../assets/red velvet.jpg'),
    soldOut: false,
  },
  {
    id: '7',
    name: 'Vanilla Frappuccino',
    price: 'Rp. 40.000',
    image: require('../assets/vanillaa.jpg'),
    soldOut: false,
  },
  {
    id: '8',
    name: 'Choco Frappuccino',
    price: 'Rp. 40.000',
    image: require('../assets/choco.jpg'),
    soldOut: false,
  },
  {
    id: '9',
    name: 'Arabica',
    price: 'Rp. 30.000',
    image: require('../assets/americano.jpg'),
    soldOut: false,
  },
  {
    id: '10',
    name: 'Matcha Frappuccino',
    price: 'Rp. 40.000',
    image: require('../assets/matcha frappe.jpg'),
    soldOut: false,
  },
];

  export default function CoffeeMenuScreen({ navigation }) {
    const goToDetail = (item) => {
      navigation.navigate('Detail', { menu: item });
    };
  
    const renderItem = ({ item }) => (
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
        {item.soldOut && <Text style={styles.soldOut}>SOLD OUT</Text>}
  
        <TouchableOpacity style={styles.detailButton} onPress={() => goToDetail(item)}>
          <Text style={styles.detailButtonText}>Detail</Text>
        </TouchableOpacity>
      </View>
    );
  
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.list}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#512615',
    paddingTop: 20,
  },
  list: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#f8f4e1',
    borderRadius: 10,
    padding: 10,
    margin: 8,
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: Dimensions.get('window').width / 2.8,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    color: '#444',
    marginTop: 4,
  },
  soldOut: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: '#c7a385',
    fontWeight: 'bold',
    fontSize: 12,
  },
  detailButton: {
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#512615',
    borderRadius: 6,
  },
  detailButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

