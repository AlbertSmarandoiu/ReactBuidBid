import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const CategoryItem = ({ category, onCategoryPress }) => {
    console.log('Category Data:', category); // Log category data

    return (
        <TouchableOpacity onPress={() => onCategoryPress(category)}>
            <View style={{
                padding: 15,
                backgroundColor: '#74B1B8',
                borderRadius: 99,
                marginRight: 15
            }}>
                <Image source={{ uri: category.icon }}
                    style={{
                        width: 40,
                        height: 40
                    }}
                />
            </View>
            <Text
                style={{
                    fontSize: 12,
                    textAlign: 'center',
                    marginTop: 5
                }}
            >{category.name}</Text>
        </TouchableOpacity>
    );
};

export default CategoryItem;
