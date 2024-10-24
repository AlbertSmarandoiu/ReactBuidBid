import { View, Text, FlatList, Image } from 'react-native';
import React, { useState, useEffect } from 'react';

// Import local images from assets
const localImages = [
  require('./../../assets/images/curatenie.png'), // Add your image paths
  require('./../../assets/images/firmaConstructii.png'), // Another image path
  require('./../../assets/images/arhitecti.png'),
];

export default function Slider() {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    GetSliderList();
  }, []);

  const GetSliderList = async () => {
    // Since you're using local images, we'll just set the data directly
    setSliderData(localImages);
  };

  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          paddingLeft: 20,
          paddingRight:15,
          marginBottom:5
        }}
      >
        #Special pentru tine
      </Text>
      <FlatList
        data={sliderData} // Binding the local images to FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={true}         //DACA VREI SA SE VADA CAND DAI SCROL ____
        style={{
            paddingLeft:20
        }}
        keyExtractor={(item, index) => index.toString()} // Use index as a key since there are no unique IDs
        renderItem={({ item }) => (
          <Image
            source={item} // Since localImages are imported, we use them directly
            style={{
              width: 300,
              height: 160,
              marginHorizontal: 10,
              borderRadius: 15,
              marginRight:15
            }}
          />
        )}
      />
    </View>
  );
}
