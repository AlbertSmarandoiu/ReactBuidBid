import { View, Text, Image} from 'react-native'
import React from 'react'

export default function PopularBusinessCard({business}) {
  return (
    <View style={{
        marginLeft:20,
        padding:10,
        backgroundColor:'#fff',
        borderRadius:15

    }}>
      <Image source={{uri:business.imageUrl}}
            style={{
                width:200,
                height:130,
                borderRadius:15
            }}
      />
      <View style={{
          marginTop:7
        }}>
        <Text style={{
          fontSize:17
        }}>{business.name}</Text>
         <Text style={{
          fontSize:13,
          color:'#000'
        }}>{business.adress}</Text>
      </View>
    </View>
  )
}