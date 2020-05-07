import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import font from './font';

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: true,
        }
    }

    render() {
        return (
            <View style={styles.container1}>
                <View style={{ flexDirection: "column", marginTop: 40, marginLeft: 16 }}>
                    <Text style={{ fontFamily: 'OpenSans-Bold', color: "#4c859b", fontSize: 30 }}>Reset Password</Text>
                    <Text style={{ fontFamily: 'OpenSans-Regular', color: "#8589c3", fontSize: 22, marginTop: 50 }}>
                        Enter your e-mail and we'll send you
            </Text>
                    <Text style={{ fontFamily: 'OpenSans-Regular', color: "#8589c3", fontSize: 22, marginTop: 0, alignSelf: 'center' }}>
                        a link to reset your password
            </Text>

                </View>
                <View style={{ flexDirection: "column", marginTop: 50, marginLeft: 20 }}>
                    <Text style={styles.inputFieldHeading}>E-mail</Text>
                    <TextInput style={styles.inputField} />

                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ textAlign: "center", marginTop: 5, fontFamily: "Poppins-Regular", fontSize: 22, color: "#f5faff" }}>
                        Reset
                     </Text>
                </TouchableOpacity>

            </View>

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
        fontSize: 24,
        marginLeft: 30,
        marginBottom: 10,
        marginTop: 10

    },
    button: {
        backgroundColor: "#b0bbe3",
        width: 250,
        height: 45,
        marginTop: 40,
        borderRadius: 40,
        alignSelf: "center"
    },
    imagestyle: {
        width: 50.5,
        height: 40.2,

        bottom: 165,
        left: 315
    }
});