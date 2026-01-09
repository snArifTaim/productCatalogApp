import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import Button from '../components/Button';
import { useCart } from '../context/CartContext';

const ProductDetailScreen = ({ route, navigation }) => {
    const { product } = route.params;
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart();
        Alert.alert("Success", "Added to Cart!");
    };

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.price}>{product.price}</Text>
                <Text style={styles.description}>{product.description}</Text>

                <Button
                    title="Add to Cart"
                    onPress={handleAddToCart}
                    style={styles.addButton}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    content: {
        padding: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    price: {
        fontSize: 20,
        color: '#007bff',
        fontWeight: '600',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#666',
        marginBottom: 32,
    },
    addButton: {
        marginTop: 10,
    },
});

export default ProductDetailScreen;
