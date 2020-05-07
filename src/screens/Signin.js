import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity,Image } from 'react-native';
import signup from './Signup'


 
export default class App extends Component {
   render(){
    return(
        <View style={styles.container}>
        <Text style={styles.healX}>HealX</Text>
        <Image style={{ width: 227, height: 222, marginTop:16}}
        source={require('../assets/hlogo.png')}></Image>
        <TouchableOpacity style={styles.touch1}>
          <Text style={styles.signtext}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>
            this.props.navigation.navigate('Signup')
        }
        style={styles.touch2}>
          <Text style={styles.signuptext}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent:'center'}}>
          <Text style={styles.areYouAPharmacistClickHere}>Are you a pharmacist? Click here.</Text>
        </TouchableOpacity>
      </View>
    )}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#ffffff"
    },
    healX: {
      marginTop: 75,
      width: 120,
      height: 53,
      fontFamily: "SegoeUI",
      fontSize: 40,
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: 53,
      letterSpacing: 0,
      textAlign: "left",
      color: "#385882"
    },
    touch1: {
      marginTop: 65,
      backgroundColor: "#b0bbe3",
      width: 204,
      height: 40,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center'
    },
    touch2: {
      marginTop: 30,
      width: 204,
      height: 40,
      borderRadius: 30,
      backgroundColor: "#f6f7f9",
      alignItems: 'center',
      justifyContent: 'center'
    },
    signtext:{
      width: 75,
    height: 31,
    fontFamily: "Poppins",
    fontSize: 22,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#f5faff"
    },
    signuptext:{
      width: 82,
    height: 31,
    fontFamily: "Poppins",
    fontSize: 22,
    fontWeight: "normal",
    fontStyle: "normal",
    //lineHeight: 28,
    letterSpacing: 0,
    textAlign: "center",
    color: "#385882"
    },
    areYouAPharmacistClickHere: {
      marginTop: 70,
      //width: 297,
      height: 24,
      fontFamily: "OpenSans",
      fontSize: 18,
      fontWeight: "normal",
      fontStyle: "normal",
      lineHeight: 24,
      letterSpacing: 0.63,
      textAlign: "left",
      color: "#385882"
    }
  
  });