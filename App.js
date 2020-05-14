import 'react-native-gesture-handler';
import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Signin from './src/screens/Signin';
import { View } from 'react-native';
import Signup from './src/screens/Signup';
import signupShop from './src/screens/signupShop';
import signupShopDetails from './src/screens/signupShopDetails';
import login from './src/screens/login';
import shopHome from './src/screens/shopHome'
import pharmadash from './src/screens/pharmadash';
import pharmastock from './src/screens/pharmastock';
import updateStock from './src/screens/updateStock';
import phatmasignin from './src/screens/pharmasignin';
import Forgotpassword from './src/screens/Forgotpassword';
import chatBot from './src/screens/chatBot';
import timetable from './src/screens/timetable';
import addTimetable from './src/screens/addTimetable';
import editTimetable from './src/screens/editTimetable';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import pharmaorder from './src/screens/pharmaorder';
import first from './src/screens/first'
const Stack = createStackNavigator();

export default class App extends Component {

  componentDidMount() {

    SplashScreen.hide();
  }
  render() {



    return (
      <NavigationContainer>



        <Stack.Navigator initialRouteName='shopHome'>
          <Stack.Screen name='Signin' component={Signin} />
          <Stack.Screen name='pharmastock' component={pharmastock} />
          <Stack.Screen name='updateStock' component={updateStock} />
          <Stack.Screen name='Signup' component={Signup} />
          <Stack.Screen name="pharmasignin" component={phatmasignin} />
          <Stack.Screen name="pharmadash" component={pharmadash} />
          <Stack.Screen name="pharmaorder" component={pharmaorder} />
          <Stack.Screen name='Login' component={login} />
          <Stack.Screen name='Forgotpassword' component={Forgotpassword} />
          <Stack.Screen options={{ headerShown: false }} name='first' component={first} />
          <Stack.Screen name='chatBot' component={chatBot} />
          <Stack.Screen options={{ headerShown: false }} name='timetable' component={timetable} />
          <Stack.Screen name='addTimetable' component={addTimetable} />
          <Stack.Screen name='editTimetable' component={editTimetable} />
          <Stack.Screen name='shopHome' options={{ headerShown: false }} component={shopHome} />
          <Stack.Screen name='signupShop' options={{ headerShown: false }} component={signupShop} />
          <Stack.Screen name='signupShopDetails' options={{ headerShown: false }} component={signupShopDetails} />
        </Stack.Navigator>
      </NavigationContainer >
    )

  }
}
