import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartProvider, useCart } from './src/context/CartContext';
import ProductListScreen from './src/screens/ProductListScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import { Text, View, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const CartIcon = () => {
  const { cartCount } = useCart();
  return (
    <View style={styles.cartContainer}>
      <Text style={styles.cartText}>Cart: {cartCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    padding: 8,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  cartText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // headerRight: () => <CartIcon />,
        }}
      >
        <Stack.Screen
          name="ProductList"
          component={ProductListScreen}
          options={{ title: 'Catalog' }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={({ route }) => ({ title: route.params.product.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppNavigator />
    </CartProvider>
  );
}
