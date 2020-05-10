import 'react-native-gesture-handler';
import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Signin from './src/screens/Signin';
import { View } from 'react-native';
import Signup from './src/screens/Signup';
import login from './src/screens/login';
import first from './src/screens/first'
import notify from './src/screens/notify';
import Forgotpassword from './src/screens/Forgotpassword';
import chatBot from './src/screens/chatBot';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends Component {

  componentDidMount() {

    SplashScreen.hide();
  }
  render() {



    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='first'>
          <Stack.Screen name='notify' component={notify}/>
          <Stack.Screen name='Signin' component={Signin} />
          <Stack.Screen name='Signup' component={Signup} />
          <Stack.Screen name='Login' component={login} />
          <Stack.Screen name='Forgotpassword' component={Forgotpassword} />
          <Stack.Screen options={{ headerShown: false }} name='first' component={first} />
          <Stack.Screen name='chatBot' component={chatBot} />
        </Stack.Navigator>
      </NavigationContainer>
    )

  }
}
