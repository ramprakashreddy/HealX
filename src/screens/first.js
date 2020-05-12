import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { fontCustomSize } from './font';


export default class first extends Component {
    render() {
        return (
            <View style={styles.container1}>


                <Text style={{ fontSize: 42, textAlign: "center", marginTop: 50, fontFamily: 'OpenSans-Bold', color: "#385882" }}>
                    HealX
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.card}>
                        <Text style={styles.cardtitle}>Medicine Availablity</Text>
                        <Image
                            style={styles.imagestylemedicine}
                            source={require('../images/medicine_table.png')}

                        />
                        <Text style={styles.cardcontentmedicine}>Check the availability of medicines in the pharmacies near you.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                        <Text style={styles.cardtitle}>Shop subscription</Text>
                        <Image
                            style={styles.imagestyleshop}
                            source={require('../images/shop.png')}

                        />
                        <Text style={styles.cardcontentshop}>Connect with the pharmacies near you and stay updated .</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.card}
                        onPress={() => this.props.navigation.navigate('timetable')}>
                        <Text style={{ fontSize: 18, color: '#8589c3', fontFamily: 'OpenSans-SemiBold', textAlign: 'center', marginTop: 5 }}>Timetable</Text>
                        <Image
                            style={styles.imagestyletimetable}
                            source={require('../images/timetable.png')}

                        />
                        <Text style={styles.cardcontenttimetable}>Never forget to take your meds on time. Set reminders and more.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}
                        onPress={() => this.props.navigation.navigate('chatBot')}
                    >
                        <Text style={{ fontSize: 18, color: '#8589c3', fontFamily: 'OpenSans-SemiBold', textAlign: 'center', marginTop: 5 }}>HealX Assistant</Text>
                        <Image
                            style={styles.imagestylebot}
                            source={require('../images/chatBotimage.png')}

                        />
                        <Text style={styles.cardcontentassistant}>Chat with the HealX virtual assistant for help related to your symptoms </Text>
                    </TouchableOpacity>

                </View>





                {/*  <TouchableOpacity onPress={() =>
                    this.props.navigation.navigate('chatBot')}
                    style={styles.button}
                >
                    <Text style={{ textAlign: "center", marginTop: 5, fontFamily: "Poppins-Regular", fontSize: 22, color: "#f5faff" }}>
                        CHAT BOT
                     </Text>
                </TouchableOpacity> */}

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: 'center',
    },
    card: {
        backgroundColor: "#ffffff",
        width: 180,
        height: 300,
        marginLeft: 10,
        marginTop: 25,
        elevation: 15


    },
    cardtitle: {
        fontSize: 16,
        color: '#8589c3',
        fontFamily: 'OpenSans-SemiBold',
        textAlign: 'center',
        marginTop: 5
    },
    imagestylemedicine: {
        alignSelf: 'center',
        marginTop: 16,
        width: 82,
        height: 100
    },
    imagestyletimetable: {
        alignSelf: 'center',
        marginTop: 16,
        width: 77,
        height: 100
    },
    imagestyleshop: {
        alignSelf: 'center',
        marginTop: 18,
        width: 150,
        height: 90,

    },
    imagestylebot: {
        alignSelf: 'center',
        marginTop: 18,
        width: 95.9,
        height: 102.8,

    },
    cardcontentmedicine: {

        fontFamily: "OpenSans-Regular",
        fontSize: 17,
        padding: 4,
        textAlign: "center",
        color: "#385882",
        marginTop: 18,
    },
    cardcontentassistant: {

        fontFamily: "OpenSans-Regular",
        fontSize: 17,
        padding: 4,
        textAlign: "center",
        color: "#385882",
        marginTop: 15,
    },
    cardcontenttimetable: {

        fontFamily: "OpenSans-Regular",
        fontSize: 16,
        padding: 4,
        textAlign: "center",
        color: "#385882",
        marginTop: 18,
    },
    cardcontentshop: {

        fontFamily: "OpenSans-Regular",
        fontSize: 17,
        padding: 4,
        textAlign: "center",
        color: "#385882",
        marginTop: 28,
    }
});