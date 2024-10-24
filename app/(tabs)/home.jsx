import { ScrollView, Text, View, FlatList, Alert } from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/Home/Header';
import Slider from '../../components/Home/Slider';
import PopularBusiness from '../../components/Home/PopularBusiness';
import CategoryItem from '../../components/Home/CategoryItem'; // Assuming you have this or place the earlier code
import { useNavigation } from '@react-navigation/native'

const categories = [
    { id: 1, name: 'curatenie', icon: '<a href="https://www.flaticon.com/free-icons/wash" title="wash icons">Wash icons created by monkik - Flaticon</a>' },
    { id: 2, name: 'montare usi', icon: 'https://www.flaticon.com/free-icons/construction' },
    { id: 3, name: 'arhitecti', icon: 'https://www.flaticon.com/free-icons/architectural' },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigation = useNavigation(); 

  // Handle the category press
  const handleCategoryPress = (category) => {
    setSelectedCategory(category);

    // Perform different actions based on the selected category
    if (category.name === 'curatenie') {
      navigation.navigate('CeVreiSaFaci/Curatenie');
    } else if (category.name === 'montare usi') {
      navigation.navigate('CeVreiSaFaci/MontareUsi');
    } else if (category.name === 'arhitecti') {
      navigation.navigate('CeVreiSaFaci/arhitecti');
    }
  };

  return (
    <ScrollView>
      {/* Header: A description of what this page is about */}
      <Header />

      {/* Slider */}
      <Slider />

      {/* Category Section */}
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Categories</Text>
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CategoryItem category={item} onCategoryPress={handleCategoryPress} />
          )}
        />
      </View>

      {/* Popular Business Section */}
      <PopularBusiness />

      {/* Render some information based on the selected category */}
      {selectedCategory && (
        <View style={{ padding: 15 }}>
          <Text style={{ fontSize: 18, marginTop: 20 }}>
            Selected Category: {selectedCategory.name}
          </Text>
          {/* You can add more content or navigation logic here */}
        </View>
      )}

      {/* A bottom margin */}
      <View style={{ height: 30 }} />
    </ScrollView>
  );
}
