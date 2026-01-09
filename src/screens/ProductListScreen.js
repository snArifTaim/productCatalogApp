import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, StyleSheet, SafeAreaView, Text } from 'react-native';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductListScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        const lowercasedQuery = searchQuery.toLowerCase();
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(lowercasedQuery)
        );
        setFilteredProducts(filtered);
    }, [searchQuery]);

    const renderItem = ({ item }) => (
        <ProductCard
            product={item}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search products..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
            </View>

            {filteredProducts.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>No products found.</Text>
                </View>
            ) : (
                <FlatList
                    data={filteredProducts}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={renderItem}
                    contentContainerStyle={styles.listContent}
                />
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    searchContainer: {
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    searchInput: {
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        fontSize: 16,
    },
    listContent: {
        padding: 16,
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    emptyText: {
        fontSize: 18,
        color: '#888',
    },
});

export default ProductListScreen;
