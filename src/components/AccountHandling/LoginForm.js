import React, {Component } from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import * as firebase from 'firebase';


export default class Login extends Component {
    state = {
        email: '',
        password: '',
        errorMessage: null,
    };

    handleLogin = () => {
        console.log('handleLogin')
    };

    handleAssistance = () => {
        console.log('handleLogin')
    };

    componentWillMount() {
        const firebaseConfig = {
            apiKey: 'AIzaSyBZiFqSQDS9msqDHzhY1PV0Axl2LCJjweA',
            authDomain: 'supermarketapp-91bb2.firebaseapp.com',
        }
    }

    render () {
        return (
            <View style = {styles.container}>
                <StatusBar
                    barStyle = "light-content"/>
                {this.state.errorMessage && <Text style={{color: 'red'}}>
                    {this.state.errorMessage}
                </Text>
                }
                <TextInput
                    style = {styles.input}
                    placeholder = "Username or Email"
                    placeholderTextColor = "rgba(255,255,255,0.5)"
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={email => this.setState({email})}
                    value={this.state.email}
                    onSubmitEditing={password => this.passwordInput.focus()}
                    />
                <TextInput
                    style = {styles.input}
                    placeholder = "Password"
                    placeholderTextColor ="rgba(255,255,255,0.5)"
                    secureTextEntry={true}
                    returnKeyType="go"
                    onChangeText={password => this.setState({password})}
                    ref={(input) => this.passwordInput = input}
                    value={this.state.password}
                    />
                <TouchableOpacity style = {styles.buttonContainerLogin} onPress={this.handleLogin()}>
                    <Text style={styles.buttonTextLogin}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonContainerHelp} onPress={this.handleAssistance()}>
                    <Text style={styles.buttonTextHelp}>Assistance</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 20,

    },
    buttonContainerLogin:{
        backgroundColor: "#27ae60",
        paddingVertical: 15,
        marginBottom: 10,
    },
    buttonContainerHelp:{
        backgroundColor: "#7f8c8d",
        opacity: 0.5,
        paddingVertical: 15,
    },
    buttonTextLogin: {
        textAlign: 'center',
        color: "#FFF",
        fontWeight: "bold",
    },
    buttonTextHelp: {
        textAlign: 'center',
        color: "#FFF",
        fontWeight: "bold",
    }
});