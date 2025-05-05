import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import CoffeeMenuScreen from './screens/CoffeeMenuScreen';
import MenuDetailScreen from './screens/MenuDetailScreen';
import LoginScreen from './screens/LoginScreen';

const Tab = createBottomTabNavigator();
const MenuStack = createNativeStackNavigator();

function MenuStackScreen() {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen name="MenuList" component={CoffeeMenuScreen} options={{ title: 'Menu Kopi' }} />
      <MenuStack.Screen name="Detail" component={MenuDetailScreen} options={{ title: 'Detail Menu' }} />
    </MenuStack.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Home') iconName = 'home-outline';
              else if (route.name === 'Login') iconName = 'person-outline';
              else if (route.name === 'Pesan') iconName = 'cart-outline';
              else if (route.name === 'Menu') iconName = 'cafe-outline';

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#512615',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Menu" component={MenuStackScreen} />
          <Tab.Screen name="Pesan" component={OrderScreen} />
          <Tab.Screen name="Login" component={LoginScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
