import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
 
export default Signup = () => {
    return (
        <View style={styles.container1}>
            <View style={{ flexDirection: "column", marginTop: 55, marginLeft: 16 }}>
                <Text style={{ fontFamily: 'OpenSans-Bold', color: "#4c859b", fontSize: 30 }}>Hello,</Text>
                <Text style={styles.text}>Welcome to HealX</Text>
            </View>
            <View style={{ flexDirection: "column", marginTop: 30, marginLeft: 20 }}>
                <Text style={styles.inputFieldHeading}>Name</Text>
                <TextInput style={styles.inputField} />
                <Text style={styles.inputFieldHeading}>Phone No.</Text>
                <TextInput style={styles.inputField} />
                <Text style={styles.inputFieldHeading}>E-mail</Text>
                <TextInput style={styles.inputField} />
                <Text style={styles.inputFieldHeading}>Create Password</Text>
                <TextInput style={styles.inputField} />
                <Text style={styles.inputFieldHeading}>Confirm Password</Text>
                <TextInput style={styles.inputField} />
 
 
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={{ textAlign: "center", marginTop: 8, fontFamily: "Poppins-Regular", fontSize: 22 }}>
                    Sign Up
        </Text>
            </TouchableOpacity>
        </View>
 
    )
}
 
 
 
const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    text: {
        fontFamily: 'OpenSans-Bold',
        color: "#4c859b",
        fontSize: 30,
        textAlign: "left"
    },
    inputField: {
        padding: 15,
        width: 350,
        fontSize: 16,
        color: '#4c859b',
        fontFamily: 'OpenSans',
        height: 50,
        borderRadius: 30,
        backgroundColor: "#f6f7f9"
    },
    inputFieldHeading: {
        fontFamily: 'OpenSans-Regular',
        color: "#385882",
        fontSize: 22,
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 10
 
    },
    button: {
        backgroundColor: "#b0bbe3",
        width: 250,
        height: 50,
        marginTop: 50,
        borderRadius: 40,
        alignSelf: "center"
    }
});