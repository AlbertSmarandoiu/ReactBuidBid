import { View, Text, FlatList } from 'react-native'
import {db} from '../../configs/FirebaseConfig'
import { collection ,getDocs, limit , query } from 'firebase/firestore'
import PopularBusinessCard from './PopularBusinessCard'
import React, { useEffect, useState } from 'react';


export default function PopularBusiness() {

  const [businessList,setBusinessList]=useState([]);

  useEffect(()=>{
    GetBusinessList();
  },[])

  const GetBusinessList=async()=>{
    setBusinessList([]);
    const q=query(collection(db,'BusinessList'),limit(10));
    const querysSnapshot=await getDocs(q);

    querysSnapshot.forEach((doc)=>{
      console.log(doc.data());
      setBusinessList(prev=>[...prev,doc.data()])
    })
  }

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
          Alege o firma de la tine
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
          data={businessList}
          horizontal={true}
          renderItem={({item,index})=>(
            <PopularBusinessCard
              key={index}
              business={item}
            />
          )}
      />
    </View>
  )
}