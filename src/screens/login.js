import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import font from './font';

export default class login extends Component {
    constructor(props) {
        super(props);
        // this.toggleSwitch = this.toggleSwitch.bind(this);
        this.state = {
            showPassword: true,
        }
    }
    /* toggleSwitch() {
        this.setState({ showPassword: !this.state.showPassword });
    } */
    render() {
        return (
            <View style={styles.container1}>
                <View style={{ flexDirection: "column", marginTop: 40, marginLeft: 16 }}>
                    <Text style={{ fontFamily: 'OpenSans-Bold', color: "#4c859b", fontSize: 30 }}>Hello,</Text>
                    <Text style={styles.text}>Welcome back</Text>
                </View>
                <View style={{ flexDirection: "column", marginTop: 100, marginLeft: 20 }}>
                    <Text style={styles.inputFieldHeading}>E-mail</Text>
                    <TextInput style={styles.inputField} />
                    <Text style={styles.inputFieldHeading}>Create Password</Text>
                    <TextInput
                        secureTextEntry={this.state.showPassword}
                        onChangeText={(password) => this.setState({ password })}
                        style={styles.inputField} />


                    <Text style={styles.inputFieldHeading}>Confirm Password</Text>
                    <TextInput style={styles.inputField} />

                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ textAlign: "center", marginTop: 5, fontFamily: "Poppins-Regular", fontSize: 22 }}>
                        Sign Up
                     </Text>
                </TouchableOpacity>
                {/*   <TouchableOpacity onPress={this.toggleSwitch}
                    value={!this.state.showPassword}>
                    <Image style={styles.imagestyle}
                        source={require('../images/eye.png')} />
                </TouchableOpacity> */}
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
        height: 40,
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