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
                <View style={{ flexDirection: 'row', marginRight: 10 }}>
                    <TouchableOpacity style={styles.card}
                        onPress={() => this.props.navigation.navigate('pharmastock')}>
                        <Text style={styles.cardtitle}>My Stock</Text>
                        <Image
                            style={styles.imagestyleStock}
                            source={require('../images/medicine_table.png')}

                        />
                        <Text style={styles.cardcontentStock}>Check your current stock</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}
                        onPress={() => this.props.navigation.navigate('updateStock')}

                    >
                        <Text style={styles.cardtitle}>Update Stock</Text>
                        <Image
                            style={styles.imagestyleUpdateStock}
                            source={require('../images/updateStock.png')}

                        />
                        <Text style={styles.cardcontentUpdateStock}>Manage and update your stock</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginRight: 10 }}>
                    <TouchableOpacity style={styles.card}
                        onPress={() => this.props.navigation.navigate('pharmaorder')}>
                        <Text style={{ fontSize: 24, color: '#8589c3', fontFamily: 'OpenSans-SemiBold', textAlign: 'center', marginTop: 5 }}>Orders</Text>
                        <Image
                            style={styles.imagestyleOrders}
                            source={require('../images/timetable.png')}

                        />
                        <Text style={styles.cardcontentOrders}>Keep track of all your orders. </Text>
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
        fontSize: 24,
        color: '#8589c3',
        fontFamily: 'OpenSans-SemiBold',
        textAlign: 'center',
        marginTop: 5
    },
    imagestyleStock: {
        alignSelf: 'center',
        marginTop: 18,
        width: 92,
        height: 110
    },
    imagestyleOrders: {
        alignSelf: 'center',
        marginTop: 16,
        width: 87,
        height: 115
    },
    imagestyleUpdateStock: {
        alignSelf: 'center',
        marginTop: 18,
        width: 122,
        height: 95,

    },
    imagestyleshop: {
        alignSelf: 'center',
        marginTop: 18,
        width: 150,
        height: 90,

    },
    cardcontentStock: {

        fontFamily: "OpenSans-Regular",
        fontSize: 18,
        padding: 4,
        textAlign: "center",
        color: "#385882",
        marginTop: 28,
    },
    cardcontentSales: {

        fontFamily: "OpenSans-Regular",
        fontSize: 18,
        padding: 4,
        textAlign: "center",
        color: "#385882",
        marginTop: 40,
    },
    cardcontentOrders: {

        fontFamily: "OpenSans-Regular",
        fontSize: 18,
        padding: 4,
        textAlign: "center",
        color: "#385882",
        marginTop: 18,
    },
    cardcontentUpdateStock: {

        fontFamily: "OpenSans-Regular",
        fontSize: 18,
        padding: 4,
        textAlign: "center",
        color: "#385882",
        marginTop: 44,
    }
});