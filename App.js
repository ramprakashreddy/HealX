import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
export default class WelcomePage extends Component {

  componentDidMount() {

    SplashScreen.hide();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>DEMOSCREEN</Text>
      </View>
    )
  }
}
3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },

});