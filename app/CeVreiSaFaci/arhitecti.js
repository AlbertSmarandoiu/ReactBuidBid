import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';

export default function ListaCuCeVorPersoaneleSaSpuna() {
  const [detaliiLucrare, setDetaliiLucrare] = useState('');
  const [judet, setJudet] = useState('');
  const [timpExecutie, setTimpExecutie] = useState('');
  const [poze, setPoze] = useState([]);
  const [selectedJudet, setSelectedJudet] = useState('');

  const judete = ['Alba', 'Arad', 'Argeș', 'Bacău', 'Bihor', 'Bistrița-Năsăud', 'Botoșani', 'Brașov', 'Brăila', 'București'];

  // Function to handle image picking
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPoze([...poze, result.uri]);
    }
  };

  const handleSubmit = () => {
    // Implement the logic to submit the data
    Alert.alert("Ofertă trimisă", "Detaliile ofertei au fost trimise cu succes!");
  };

  return (
    <View style={{ padding: 20 }}>
      

      {/* Detalii lucrare */}
      <Text>Spuneti cat mai multe si cat aveti de facut ca cei care va fac o oferta sa nu greseasca</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: '#ccc', marginVertical: 10, padding: 8, height: 130 }}
        multiline
        placeholder="Introduceți detalii"
        value={detaliiLucrare}
        onChangeText={setDetaliiLucrare}
      />

      {/* Din ce județ sunteți? */}
      <Text>Din ce județ sunteți?</Text>
      <Picker
        selectedValue={selectedJudet}
        style={{ height: 50, width: 200, marginVertical: 10 }}
        onValueChange={(itemValue) => setSelectedJudet(itemValue)}
      >
        {judete.map((judet, index) => (
          <Picker.Item label={judet} value={judet} key={index} />
        ))}
      </Picker>

      {/* Timp de execuție */}
      <Text>În cât timp să fie executată lucrarea?</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: '#ccc', marginVertical: 10, padding: 8 }}
        placeholder="Introduceți timpul de execuție"
        value={timpExecutie}
        onChangeText={setTimpExecutie}
      />

      {/* Adăugare poze */}
      <Text>Adăugați câteva poze pentru a fi mai clar:</Text>
      <TouchableOpacity onPress={pickImage} style={{ marginVertical: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 18 }}>+</Text>
        </View>
      </TouchableOpacity>

      {/* Afișare poze selectate */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {poze.map((poza, index) => (
          <Image key={index} source={{ uri: poza }} style={{ width: 100, height: 100, margin: 5 }} />
        ))}
      </View>

      {/* Buton pentru a trimite oferta */}
      <Button title="Trimite ofertă" onPress={handleSubmit} />
    </View>
  );
}
