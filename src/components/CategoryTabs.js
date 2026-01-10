import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const categories = ['All', 'Shoes', 'Electronics', 'Clothing', 'Accessories'];

const CategoryTabs = ({ selectedCategory, onSelectCategory }) => {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {categories.map((category) => (
                    <TouchableOpacity
                        key={category}
                        onPress={() => onSelectCategory(category)}
                        style={[
                            styles.tab,
                            selectedCategory === category ? styles.selectedTab : styles.unselectedTab,
                        ]}
                    >
                        <Text
                            style={[
                                styles.tabText,
                                selectedCategory === category ? styles.selectedTabText : styles.unselectedTabText,
                            ]}
                        >
                            {category}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 12,
    },
    scrollContent: {
        paddingHorizontal: 16,
    },
    tab: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedTab: {
        backgroundColor: '#007AFF', // Primary color
    },
    unselectedTab: {
        backgroundColor: '#f0f0f0', // Light gray
    },
    tabText: {
        fontSize: 14,
        fontWeight: '600',
    },
    selectedTabText: {
        color: '#fff',
    },
    unselectedTabText: {
        color: '#333',
    },
});

export default CategoryTabs;
