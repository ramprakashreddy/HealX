import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import font from './font';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Store from './Store';



export default class search extends Component {

clicked(){
    Store.medname = this.state.med;
    console.log(Store.medname);
    this.props.navigation.navigate('medicineav') 
}

    constructor() {
        super()
        this.state = {
            med: '',
           // quantity: '',

        }
        this.handleChangeText1 = this.handleChangeText1.bind(this)
        //this.handleChangeText2 = this.handleChangeText2.bind(this)


    }
    handleChangeText1(newText) {
        this.setState({
            med: newText
        })
    }
    // handleChangeText2(newText2) {
    //     this.setState({
    //         quantity: newText2

    //     })
    // }

    render() {


        return (
            <ScrollView style={styles.container1}>

                <View style={{ flexDirection: "column", marginTop: 10, marginLeft: 20 }}>

                    <Text style={styles.inputFieldHeading}>Medicine Name</Text>
                    <TextInput autoCapitalize='none'
                        defaultValue={this.state.med}
                        onChangeText={this.handleChangeText1}
                        style={styles.inputField} />
                    {/* <Text style={styles.inputFieldHeading}>Search</Text> */}
                    {/* <TextInput autoCapitalize='none'
                        defaultValue={this.state.quantity}
                        onChangeText={this.handleChangeText2}
        style={styles.inputField} />*/}


                </View> 
                <TouchableOpacity style={styles.button}
                    onPress={() => { this.clicked()}}>
                    <Text style={{ textAlign: "center", marginTop: 6, fontFamily: "Poppins-Regular", fontSize: 22 }}>
                        Search
        </Text>
                </TouchableOpacity>
            </ScrollView>

        )
    }
}



const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    text: {
        fontFamily: 'OpenSans-Bold',
        color: "#4c859b",
        fontSize: 30,
        textAlign: "left"
    },
    inputField: {
        marginLeft: 27,
        paddingLeft: 10,
        width: 308,
        fontSize: 18,
        color: '#4c859b',
        fontFamily: 'OpenSans',
        height: 42,
        borderRadius: 30,
        backgroundColor: "#f6f7f9"
    },
    inputFieldHeading: {
        fontFamily: 'OpenSans-Regular',
        color: "#385882",
        fontSize: 18,
        marginLeft: 27,
        marginBottom: 10,
        marginTop: 10

    },
    button: {
        backgroundColor: "#b0bbe3",
        width: 250,
        height: 40,
        marginTop: 20,
        borderRadius: 40,
        alignSelf: "center"
    }
});