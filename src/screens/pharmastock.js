import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';

function Users() {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [medicine, setmedicine] = useState([]); // Initial empty array of users


  useEffect(() => {
    const subscriber = firestore()
      .collection('medicine').where('user','==','rag@gmail.com')
      .onSnapshot(querySnapshot => {
        const medicine = [];
  
        querySnapshot.forEach(documentSnapshot => {
          medicine.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
          
        });
  
        setmedicine(medicine);
        setLoading(false);
      });
      return () => subscriber();
        }, []);
        console.log(medicine)
  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={medicine}
      renderItem={({ item }) => (
        <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>{item.name}</Text>
          <Text>{item.stock}</Text>
        </View>
      )}
    />
  );
}
export default (Users);