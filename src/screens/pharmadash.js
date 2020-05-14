import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { fontCustomSize } from './font';


export default class pharmadash extends Component {
    render() {
        return (
            <View style={styles.container1}>


                <Text style={{ fontSize: 42, textAlign: "center", marginTop: 10, fontFamily: 'OpenSans-Bold', color: "#385882" }}>
                    HealX
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.card}
                    onPress={()=>this.props.navigation.navigate('pharmastock')}>
                        <Text style={styles.cardtitle}>My Stock</Text>
                        <Image
                            style={styles.imagestylemedicine}
                            source={require('../images/medicine_table.png')}

                        />
                        <Text style={styles.cardcontentmedicine}>Check your current stock.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                        <Text style={styles.cardtitle}>Update Stock</Text>
                        <Image
                            style={styles.imagestyleshop}
                            source={require('../images/updateStock.png')}

                        />
                        <Text style={styles.cardcontentshop}>Manage and update your Stock here.</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.card}
                        onPress={() => this.props.navigation.navigate('timetable')}>
                        <Text style={{ fontSize: 18, color: '#8589c3', fontFamily: 'OpenSans-SemiBold', textAlign: 'center', marginTop: 5 }}>Orders</Text>
                        <Image
                            style={styles.imagestyletimetable}
                            source={require('../images/timetable.png')}

                        />
                        <Text style={styles.cardcontenttimetable}>Keep track of all your orders.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}
                        onPress={() => this.props.navigation.navigate('chatBot')}
                    >
                        <Text style={{ fontSize: 18, color: '#8589c3', fontFamily: 'OpenSans-SemiBold', textAlign: 'center', marginTop: 5 }}>Sale</Text>
                        <Image
                            style={styles.imagestylebot}
                            source={require('../images/shop.png')}

                        />
                        <Text style={styles.cardcontentassistant}>Manage your sale here.</Text>
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
        height: 250,
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
        height: 110,

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