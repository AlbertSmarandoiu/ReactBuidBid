import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react'; // Ensure useState is imported
import { db } from '../../configs/FirebaseConfig'; // Adjust this import according to your file structure
import { query, collection, getDocs } from 'firebase/firestore'; // Make sure these are imported correctly
import CategoryItem from '../../components/Home/CategoryItem'; // Correct import statement
import {useRouter} from 'expo-router'


export default function Category() {

  const router=useRouter();
  const [categoryList, setCategoryList] = useState([]); // State declaration

  useEffect(() => {
    GetCategoryList();
  }, []);

  const GetCategoryList = async () => {
    const q = query(collection(db, 'Category'));
    const querySnapshot = await getDocs(q);

    const categories = []; // Array to hold categories
    setCategoryList([]); // Clear previous state
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      categories.push(doc.data()); // Collecting categories
    });

    setCategoryList(categories); // Set the state with all categories
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row', // Puts the texts in a row
          justifyContent: 'space-between', // Pushes texts to opposite sides
          alignItems: 'center', // Vertically aligns them
          paddingHorizontal: 20, // Padding on the sides
          marginTop: 10, // Space from the top
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          Alege o categorie
        </Text>

        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: '#8f8f8f',
          }}
        >
          Toate categoriile
        </Text>
      </View>

      <FlatList 
        horizontal={true}
        data={categoryList}
        style={{marginLeft:20}}
        keyExtractor={(item, index) => index.toString()} // Use index as keyExtractor
        renderItem={({ item }) => (
          <CategoryItem 
          category={item} 
          onCategoryPress={(category)=>router.push('/CeVreiSaFaci/' + item.name)}
          
          /> // No need for `key={index}`
        )}
      />
    </View>
  );
}
