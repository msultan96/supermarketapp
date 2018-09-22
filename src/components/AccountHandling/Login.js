import React, {Component} from 'react';
import {StyleSheet, View, Image, Text,TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import LoginSignUp from './LoginSignUp';

import * as firebase from 'firebase';

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        errorMessage: null,
    };

    handleLogin = () => {
        const { email, password } = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Main'))
            .catch(error => this.setState({ errorMessage: error.message }))
    };

    render () {
        return (
            <KeyboardAvoidingView behavior="padding" style = {styles.container}>
                <View style = {styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source ={require('../../images/Logo.png')}
                    />
                    <Text
                        style={styles.desc}>Groceries done with convenience</Text>
                </View>
                {
                    this.state.errorMessage
                    && <Text style={{ color: '#f1c40f',fontWeight: 'bold' }}>
                        {this.state.errorMessage}
                    </Text>
                }

                <TextInput
                    style = {styles.input}
                    placeholder = "Username or Email"
                    placeholderTextColor ="rgba(0,0,0,0.5)"
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={email => this.setState({email})}
                    value={this.state.email}
                    onSubmitEditing={() => this.passwordInput.focus()}
                />
                <TextInput
                    style = {styles.input}
                    placeholder = "Password"
                    placeholderTextColor ="rgba(0,0,0,0.5)"
                    secureTextEntry={true}
                    returnKeyType="go"
                    onChangeText={password => this.setState({password})}
                    ref={(input) => this.passwordInput = input}
                    value={this.state.password}
                />
                <TouchableOpacity style = {styles.buttonContainerLogin} onPress={this.handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonContainerBack} onPress={ () => this.props.navigation.navigate('LoginSignUp')}>
                    <Text style={styles.buttonText}>Go Back</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        padding: 10,
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 300,
        height: 150,
    },
    desc:{
        color: '#000',
        marginTop: 10,
        textAlign: "center",
        opacity: 1,
        fontSize: 16,
        fontStyle: "italic",
    },
    buttonContainerLogin: {
        backgroundColor: '#2ecc71',
        paddingVertical: 15,
        marginBottom: 10,
    },
    buttonContainerBack:{
        backgroundColor: '#27ae60',
        opacity: 1,
        paddingVertical: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: "bold",
    },
    input:{
        height: 40,
        backgroundColor: 'rgb(255,255,255)',
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20,

    },
});