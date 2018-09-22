import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation'

import LoginSignUp from './src/components/AccountHandling/LoginSignUp';
import Loading from './src/components/AccountHandling/Loading';
import Login from './src/components/AccountHandling/Login';
import SignUp from './src/components/AccountHandling/SignUp';
import NewProfile from './src/components/AccountHandling/NewProfile';
import Main from './src/components/Main/Main';
import Grocery from './src/components/Main/Departments/Grocery';
import Dairy from './src/components/Main/Departments/Dairy';
import Deli from './src/components/Main/Departments/Deli';
import Frozen from './src/components/Main/Departments/Frozen';
import Produce from './src/components/Main/Departments/Produce';
import Meat from './src/components/Main/Departments/Meat';
import ShoppingCart from './src/components/Main/ShoppingCart';

import * as firebase from "firebase";
firebase.initializeApp({
    apiKey: "AIzaSyBZiFqSQDS9msqDHzhY1PV0Axl2LCJjweA",
    authDomain: "supermarketapp-91bb2.firebaseapp.com",
    databaseURL: "https://supermarketapp-91bb2.firebaseio.com",
    projectId: "supermarketapp-91bb2",
    storageBucket: "supermarketapp-91bb2.appspot.com",
    messagingSenderId: "846656591243"
});

const RootStack = createStackNavigator(
    {
        Loading,
        LoginSignUp,
        Login,
        SignUp,
        NewProfile,
        Main,
        Grocery,
        Dairy,
        Deli,
        Frozen,
        Produce,
        Meat,
        ShoppingCart
    },
    {
        initialRouteName: 'Loading'
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />
    };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
