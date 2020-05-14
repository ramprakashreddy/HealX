import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import font from './font';
import auth from '@react-native-firebase/auth';




export default class Signup extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            confpassword: ''
        }
        this.handleChangeText1 = this.handleChangeText1.bind(this)
        this.handleChangeText2 = this.handleChangeText2.bind(this)
        this.handleChangeText3 = this.handleChangeText3.bind(this)

    }
    handleChangeText1(newText) {
        this.setState({
            username: newText
        })
    }
    handleChangeText2(newText2) {
        this.setState({
            password: newText2

        })
    }
    handleChangeText3(newText3) {
        this.setState({
            confpassword: newText3

        })
    }


    /* signup() {
        if ((this.state.username === '') || (this.state.password === '') || (this.state.confpassword === '')) {
            alert('enter the details')
        }
        else {
            if (this.state.confpassword === this.state.password) {
                auth()
                    .createUserWithEmailAndPassword(this.state.username, this.state.password)
                    .then(() => {
                        console.log('User account created & signed in!');
                        this.props.navigation.navigate('Login')
                    })
                    .catch(error => {
                        if (error.code === 'auth/email-already-in-use') {
                            console.log('That email address is already in use!');
                        }

                        if (error.code === 'auth/invalid-email') {
                            console.log('That email address is invalid!');
                        }

                    });
            }
            else {
                alert("confirm password should be same as password")
            }
        }
    }
 */

    render() {


        return (
            <ScrollView style={styles.container1}>

                <View style={{ flexDirection: "column", marginTop: 80, marginLeft: 20 }}>
                    <Text style={styles.inputFieldHeading}>Name of your pharmacy</Text>
                    <TextInput style={styles.inputField}
                        autoCapitalize='words' />
                    <Text style={styles.inputFieldHeading}>Address of your pharmacy</Text>
                    <TextInput style={styles.inputField} />
                    <Text style={styles.inputFieldHeading}>City</Text>
                    <TextInput autoCapitalize='none'
                        defaultValue={this.state.username}
                        onChangeText={this.handleChangeText1}
                        style={styles.inputField} />
                    <Text style={styles.inputFieldHeading}>Contact no. of pharmacy</Text>
                    <TextInput style={styles.inputField}
                        autoCapitalize='none' secureTextEntry
                        defaultValue={this.state.password}
                        onChangeText={this.handleChangeText2} />


                </View>
                <TouchableOpacity style={styles.button}
                    /*  onPress={() => { this.signup() }} */
                    onPress={() => this.props.navigation.navigate('chatBot')}>
                    <Text style={{ textAlign: "center", marginTop: 6, fontFamily: "Poppins-Regular", fontSize: 22 }}>
                        Sign Up
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
        fontSize: 20,
        marginLeft: 27,
        marginBottom: 10,
        marginTop: 20

    },
    button: {
        backgroundColor: "#b0bbe3",
        width: 250,
        height: 40,
        marginTop: 240,
        borderRadius: 40,
        alignSelf: "center"
    }
});