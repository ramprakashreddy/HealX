import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';
import Store from './Store'

function Users() {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [medicine, setmedicine] = useState([]); // Initial empty array of users


  useEffect(() => {
    const subscriber = firestore()
      .collection('medicine').where('user','==', Store.userName)
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardHeading}>{item.name}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.cardContent}>Quantity:</Text>
              <Text style={{ fontSize: 16, marginLeft: 10, color: "#385882", fontFamily: "Poppins-Regular", marginTop: 22 }}>{item.stock} Tablets</Text>
            </View>
 
          </TouchableOpacity>
        </View>
      )}
    />
  );
}
export default (Users);
 
const styles = StyleSheet.create({
 
  card: {
    backgroundColor: "#ffffff",
    width: 368,
    height: 140,
    marginLeft: 2,
    marginTop: 20,
    elevation: 15,
    borderRadius: 10
 
  },
  cardHeading: {
    color: "#4c859b",
    fontFamily: "OpenSans-SemiBold",
    fontSize: 24,
    marginLeft: 20,
    marginTop: 15
  },
  cardContent: {
    color: "#8589c3",
    fontFamily: "OpenSans-SemiBold",
    fontSize: 24,
    marginLeft: 20,
    marginTop: 15
  },
 
 
 
});


