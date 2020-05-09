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
        PushNotification.localNotification({
            title: "My Notification Title", // (optional)
            message: "My Notification Message",
           // repeatType: 'time',
            //repeatTime: 60*1000,
        })

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