import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import font from './font';
import auth from '@react-native-firebase/auth';
import Store from './Store';

export default class pharmasignin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: true,
            username: '',
            password: ''
        }
        this.handleChangeText1 = this.handleChangeText1.bind(this)
        this.handleChangeText2 = this.handleChangeText2.bind(this)
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
      signin(){
          console.log(this.state.password)
          console.log(this.state.username)
          auth()
  .signInWithEmailAndPassword(this.state.username, this.state.password)
  .then(() => {
    console.log('User account created & signed in!');
    Store.userName = this.state.username;
    console.log(Store.userName);
    this.props.navigation.navigate('shopHome')
  })
  .catch(error => {
    //if (error.code === 'auth/email-already-in-use') {
      console.log(error.code);
      alert(error.code)
    //}

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }




    render() {
        return (
            <ScrollView style={styles.container1}>
                <View style={{ flexDirection: "column", marginTop: 40, marginLeft: 16 }}>
                    <Text style={{ fontFamily: 'OpenSans-Bold', color: "#4c859b", fontSize: 30 }}>Hello,</Text>
                    <Text style={styles.text}>Welcome back</Text>
                </View>
                <View style={{ flexDirection: "column", marginTop: 100, marginLeft: 20 }}>
                    <Text style={styles.inputFieldHeading}>E-mail</Text>
                    <TextInput
                        autoCapitalize='none'
                        defaultValue={this.state.username}
                        onChangeText={this.handleChangeText1}
                        style={styles.inputField} />
                    <Text style={styles.inputFieldHeading}>Create Password</Text>
                    <TextInput
                        autoCapitalize='none' secureTextEntry
                        defaultValue={this.state.password}
                        onChangeText={this.handleChangeText2}
                        secureTextEntry={this.state.showPassword}
                        style={styles.inputField} />

                </View>
                <TouchableOpacity style={styles.button}
                    onPress={() => this.signin()}>
                    <Text style={{ textAlign: "center", marginTop: 5, fontFamily: "Poppins-Regular", fontSize: 22, color: "#f5faff" }}>
                        Sign in
                     </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>
                    this.props.navigation.navigate('Forgotpassword')}
                >
                    <Text style={{ textAlign: "center", color: "#385882", marginTop: 20, fontFamily: "Poppins-Regular", fontSize: 22 }}>
                        Forgot Password?
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