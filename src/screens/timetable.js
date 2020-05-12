import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    Keyboard,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import PushNotification from 'react-native-push-notification';
import EmptySchedule from './emptySchedule';

import AsyncStorage from '@react-native-community/async-storage';

const Tasks = ({ navigation }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        let mounted = true;
        // AsyncStorage.clear();
        if (mounted) {
            retrieveData();
        }
        else {
            return () => mounted = false;
        }

    });


    const retrieveData = async () => {
        try {
            const valueString = await AsyncStorage.getItem('user');
            const value = JSON.parse(valueString);
            setData(value);
        } catch (error) {
            console.log(error);
        }
    };

    const clearData = async id => {
        if (data !== null) {
            const newData = data.filter((_, index) => index !== id);
            setData(newData);
            await AsyncStorage.setItem('user', JSON.stringify(newData));
            PushNotification.cancelAllLocalNotifications()
            console.log("NOTIFICATION CANCEL")
        }

    };

    return (
        <View>

            <View >
                <Text style={{ fontFamily: "OpenSans-Bold", fontSize: 36, color: "#4c859b", alignSelf: "center" }} >Schedule</Text>

                <ScrollView style={{ height: '85%', paddingVertical: 10 }}>
                    {data !== null
                        ? data.map((item, index) => {

                            return (
                                <View key={index}>
                                    <View >

                                        <View>
                                            <TouchableOpacity
                                                disabled={true}
                                                onPress={() => changeData(index)}
                                                style={styles.card}
                                            >
                                                <View style={{ flexDirection: "row" }}>
                                                    <Text style={styles.headings}>Medicine Name:</Text>
                                                    <Text style={styles.information}>{item.name}</Text>

                                                </View>
                                                <View style={{ flexDirection: "row", marginTop: 5 }}>
                                                    <Text style={styles.headings}>Date:</Text>
                                                    <Text style={styles.information}>{item.date}/{item.month}/{item.year}</Text>

                                                </View>
                                                <View style={{ flexDirection: "row", marginTop: 5 }}>
                                                    <Text style={styles.headings}>Date:</Text>
                                                    <Text style={styles.information}>{item.hour}H {item.minute}M</Text>

                                                </View>

                                                <View style={{ flexDirection: "row" }}>
                                                    <TouchableOpacity
                                                        onPress={() => navigation.navigate('editTimetable')}
                                                    >
                                                        <Image
                                                            style={styles.imagestyleedit}
                                                            source={require('../images/iconsedit.png')}

                                                        />

                                                    </TouchableOpacity>
                                                    <TouchableOpacity
                                                        onPress={() => clearData(index)}
                                                    >
                                                        <Image
                                                            style={styles.imagestylecancel}
                                                            source={require('../images/cancelicon.png')}

                                                        />

                                                    </TouchableOpacity>
                                                </View>
                                            </TouchableOpacity>

                                        </View>
                                    </View>
                                </View>
                            );
                        })
                        : null}

                </ScrollView>

            </View>



            <View>
                <TouchableOpacity
                    style={styles.FloatingButtonStyle}
                    onPress={() => navigation.navigate('addTimetable')}
                >
                    <Text style={{ color: '#ffffff', alignSelf: "center", fontSize: 50 }}>+</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};


export default Tasks;

const styles = StyleSheet.create({

    card: {
        backgroundColor: "#ffffff",
        width: 368,
        height: 160,
        marginLeft: 10,
        marginTop: 20,
        elevation: 15,
        borderRadius: 10

    },
    imagestyleedit: {
        marginTop: 1,
        marginLeft: 275,
        resizeMode: 'contain',
        width: 40,
        height: 40,


    },
    imagestylecancel: {
        marginTop: 1,
        marginLeft: 10,
        resizeMode: 'contain',
        width: 40,
        height: 40,


    },
    FloatingButtonStyle: {
        width: 70,
        height: 70,
        backgroundColor: "#8589c3",
        alignSelf: "center",
        borderRadius: 100
    },
    headings: {
        color: "#8589c3",
        fontSize: 26,
        marginLeft: 10
    },
    information: {
        fontSize: 20,
        marginTop: 6,
        marginLeft: 5
    }


});