import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


export default class first extends Component {
    render() {
        return (
            <View style={styles.container1}>
                <TouchableOpacity onPress={() =>
                    this.props.navigation.navigate('chatBot')}
                    style={styles.button}
                >
                    <Text style={{ textAlign: "center", marginTop: 5, fontFamily: "Poppins-Regular", fontSize: 22, color: "#f5faff" }}>
                        CHAT BOT
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
    button: {
        backgroundColor: "#b0bbe3",
        width: 250,
        height: 40,
        marginTop: 325,
        borderRadius: 40,
        alignSelf: "center"
    },

});