import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image,ScrollView } from 'react-native';
import font from './font';
import PushNotification from 'react-native-push-notification';




export default class notify extends Component {
    constructor() {
        super();
        
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

    }

    notifynow(){
     // var date1 = Date.UTC(2020,04,10,17,50);
        PushNotification.localNotificationSchedule({
            //... You can use all the options from localNotifications
            message: "My Notification Message", // (required)
            date:  new Date(Date.UTC(2020,4,10,12,41)),
            repeatType: 'time',
            repeatTime: (10*1000)
          });
          console.log(Date.UTC(2020,4));
        // PushNotification.cancelAllLocalNotifications()
    }



    render(){
        return(
            <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                <TouchableOpacity
                onPress={()=>this.notifynow()}>
                    <Text>press for PushNotification</Text>
                </TouchableOpacity>
            </View>
        )
    }}