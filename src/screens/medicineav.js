import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';
import Store from './Store'

function medicineav({navigation}) {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [medicine, setmedicine] = useState([]); // Initial empty array of users


  useEffect(() => {
    const subscriber = firestore()
      .collection('medicine').where('name','==', Store.medname)
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
      <View style={{flex:1}}>
    <FlatList
      data={medicine}
      renderItem={({ item }) => (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardHeading}>{item.user}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.cardContent}>stock:</Text>
              
            {item.stock === 0 ?  <Text style={{ fontSize: 16, marginLeft: 10, color: "#385882", fontFamily: "Poppins-Regular", marginTop: 22 }}>Out of Stock</Text>:
               
                
                     <Text style={{ fontSize: 16, marginLeft: 10, color: "#385882", fontFamily: "Poppins-Regular", marginTop: 22 }}>In Stock</Text>}
                

              </View>
            {/* <View style={{ flexDirection: "row" }}>
              <Text style={styles.cardContent}>Customer Name:</Text>
              <Text style={{ fontSize: 16, marginLeft: 10, color: "#385882", fontFamily: "Poppins-Regular", marginTop: 22 }}>{item.orderby}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.cardContent}>Address:</Text>
              <Text style={{ fontSize: 16, marginLeft: 10, color: "#385882", fontFamily: "Poppins-Regular", marginTop: 22 }}>{item.address}</Text>
            </View> */}
          </TouchableOpacity>
        </View>
      )}
    
    />
    <View>
                <TouchableOpacity
                    style={styles.FloatingButtonStyle}
                    onPress={() => navigation.navigate('search')}
                >
                    <Text style={{ color: '#ffffff', alignSelf: "center", fontSize: 50 }}>+</Text>
                </TouchableOpacity>
            </View>
            </View>
    
    
  );
}
export default (medicineav);

 
const styles = StyleSheet.create({
 
  card: {
    backgroundColor: "#ffffff",
    width: 368,
    height: 200,
    marginLeft: 2,
    marginTop: 20,
    elevation: 15,
    borderRadius: 10
 
  },
  FloatingButtonStyle: {
    width: 70,
    height: 70,
    backgroundColor: "#8589c3",
    alignSelf: "center",
    borderRadius: 100
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
