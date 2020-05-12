import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    Keyboard,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import PushNotification from 'react-native-push-notification';

const Tasks = ({ navigation }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [data, setData] = useState([]);
    const [toggle, setToggle] = useState('true');
    const [itemId, setItemId] = useState(null);

    const saveData = async () => {
        if (
            (name !== null && name !== '',
                date !== null && date !== '',
                month !== null && month !== '',
                year !== null && year !== '',
                hour !== null && hour !== '',
                minute !== null && minute !== '')
        ) {
            let user = {
                name,
                date,
                month,
                year,
                hour,
                minute,
                key: Math.random(),
            };

            const arrData = [user]; // [{ name, email, phone}]

            const storedData = await AsyncStorage.getItem('user');
            const storedDataParsed = JSON.parse(storedData);
            setData(storedDataParsed);

            let newData = [];

            if (storedData === null) {
                // save
                await AsyncStorage.setItem('user', JSON.stringify(arrData));
            } else {
                newData = [...storedDataParsed, user];
                await AsyncStorage.setItem('user', JSON.stringify(newData));
            }

            Keyboard.dismiss();
            setName('');
            setDate('');
            setMonth('');
            setYear('');
            setYear('');
            setMinute('');


        } else {
            setTimeout(() => {

            }, 1000);

        }
    };

    useEffect(() => {
        //AsyncStorage.clear();
        retrieveData();
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
        }

    };
    /* 
      const highlightData = async id => {
        if (data !== null) {
          const highlightedData = data.map((item, index) => {
            if (index === id) {
              item.show = !item.show;
            }
            return item;
          });
          setData(highlightedData);
          await AsyncStorage.setItem('user', JSON.stringify(highlightedData));
        }
      }; */


    const changeData = async id => {
        setToggle(false);
        const changedData = data.map((item, index) => {
            if (index === id) {
                setName(item.name);
                setDate(item.date);
                setMonth(item.month);
                setYear(item.year);
                setHour(item.hour);
                setMinute(item.minute);
            }
            return item;
        });

        setData(changedData);
        setItemId(id);
        await AsyncStorage.setItem('user', JSON.stringify(changedData));
    };

    const updateData = async () => {
        setToggle(true);
        data[itemId].name = name;
        data[itemId].date = date;
        data[itemId].month = month;
        data[itemId].year = year;
        data[itemId].hour = hour;
        data[itemId].minute = minute;
        await AsyncStorage.setItem('user', JSON.stringify(data));
        Keyboard.dismiss();
        setName('');
        setDate('');
        setMonth('');
        setYear('');
        setYear('');
        setMinute('');

    };
    const notifynow = () => {



        PushNotification.localNotificationSchedule({
            //... You can use all the options from localNotifications
            message: name + " take this medicine now", // (required)
            date: new Date(Date.UTC(year, month - 1, date, hour, minute) - 19800000),
            repeatType: "day",
            //repeatTime: (10 * 1000)

        });
        console.log(data);
        console.log(Date.UTC(year, month - 1, date, hour, minute));
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function (token) {
                console.log("TOKEN:", token);
            },
            onNotification: function (notification) {
                console.log("NOTIFICATION:", notification);
                // notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
            permissions: {
                alert: true,
                badge: true,
                sound: true,
            },
            popInitialNotification: true,
            requestPermissions: true,
        });


        // PushNotification.cancelAllLocalNotifications()
        //console.log("CANCELLED ")
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }} >
            <ScrollView>

                <View >
                    <Text style={styles.inputFieldHeading}>Medicine Name</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Medicine Name"
                        value={name}
                        onChangeText={text => setName(text)}
                    />
                    <Text style={styles.inputFieldHeading}>Date</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Date"
                        keyboardType="phone-pad"
                        value={date}
                        onChangeText={text => setDate(text)}
                    />
                    <Text style={styles.inputFieldHeading}>Month</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Month"
                        value={month}
                        keyboardType="phone-pad"
                        onChangeText={text => setMonth(text)}
                    />
                    <Text style={styles.inputFieldHeading}>Year</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Year"
                        value={year}
                        keyboardType="phone-pad"
                        onChangeText={text => setYear(text)}
                    />
                    <Text style={styles.inputFieldHeading}>Hour</Text>
                    <TextInput
                        style={styles.inputField}

                        placeholder="Hours"
                        value={hour}
                        keyboardType="phone-pad"
                        onChangeText={text => setHour(text)}
                    />
                    <Text style={styles.inputFieldHeading}>Minutes</Text>
                    <TextInput
                        style={styles.inputField}

                        placeholder="Minutes"
                        value={minute}
                        keyboardType="phone-pad"
                        onChangeText={text => setMinute(text)}
                    />

                    <TouchableOpacity style={styles.button}
                        onPress={() => { saveData(); navigation.navigate("timetable"); notifynow(); }}>
                        <Text style={{ textAlign: "center", marginTop: 8, fontFamily: "Poppins-Regular", fontSize: 22 }}>
                            Save Remainder
                          </Text>
                    </TouchableOpacity>

                    {/*   <ScrollView style={{ height: '60%', paddingVertical: 10 }}>
                        {data !== null
                            ? data.map((item, index) => {

                                return (
                                    <View key={index}>
                                        <View >
                                            <Text>{index + 1}. </Text>
                                            <View>
                                                <TouchableOpacity
                                                    onPress={() => changeData(index)}
                                                    style={styles.card}
                                                >
                                                    <Text >{item.name}</Text>
                                                    <Text >{item.date}</Text>
                                                    <Text>{item.month}</Text>
                                                    <Text >{item.year}</Text>
                                                    <Text >{item.hour}</Text>
                                                    <Text>{item.minute}</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                );
                            })
                            : null}
                    </ScrollView> */}
                </View>

                {/*     <TouchableOpacity style={{ alignSelf: 'center', marginTop: 100 }}
                    onPress={() => saveData()}
                >
                    <Text>SAVE DATA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignSelf: 'center' }}
                    onPress={() => updateData()}

                >
                    <Text>update</Text>
                </TouchableOpacity> */}
                {/*  <TouchableOpacity style={{ alignSelf: 'center', }}
        onPress={() => highlightData(index)}
      >
        <Text>
          HIGHLIHGT
</Text>
      </TouchableOpacity> */}
            </ScrollView>
        </SafeAreaView>
    );
};


export default Tasks;

const styles = StyleSheet.create({

    card: {
        backgroundColor: "#ffffff",
        width: 250,
        height: 120,
        marginLeft: 10,
        marginTop: 25,
        elevation: 15

    }, inputFieldHeading: {
        fontFamily: 'OpenSans-Regular',
        color: "#385882",
        fontSize: 18,
        marginLeft: 27,
        marginBottom: 10,
        marginTop: 10

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
    button: {
        backgroundColor: "#b0bbe3",
        width: 250,
        height: 40,
        marginTop: 20,
        borderRadius: 40,
        alignSelf: "center"
    }

});