import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, StyleSheet, SafeAreaView, Text, useWindowDimensions } from 'react-native';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import CategoryTabs from '../components/CategoryTabs';

const ProductListScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const { width } = useWindowDimensions();

    const numColumns = width > 600 ? 4 : 2;

    useEffect(() => {
        const lowercasedQuery = searchQuery.toLowerCase();
        const filtered = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(lowercasedQuery);
            const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
        setFilteredProducts(filtered);
    }, [searchQuery, selectedCategory]);

    const renderItem = ({ item }) => (
        <ProductCard
            product={item}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search products..."
                        placeholderTextColor="#999"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>
                <CategoryTabs
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />
            </View>

            {filteredProducts.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>No products found.</Text>
                </View>
            ) : (
                <FlatList
                    key={numColumns} // Force re-render when switching columns
                    data={filteredProducts}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    contentContainerStyle={styles.listContent}
                    columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : null}
                />
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        zIndex: 10,
    },
    searchContainer: {
        padding: 16,
        paddingBottom: 4,
    },
    searchInput: {
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
        fontSize: 16,
        color: '#333',
    },
    listContent: {
        padding: 8,
        paddingTop: 16,
    },
    columnWrapper: {
        justifyContent: 'flex-start',
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
