import React, {Component} from 'react';
import {StyleSheet, View, } from 'react-native';

export default class SignUp extends Component {
    state = {
        email: '',
        password:'',
        errorMessage: null};
    handleSignUp = () => {
        firebase.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then( () => this.props.navigation.navigate('Main'))
            .catch(error => this.setState({errorMessage: error.message}))
    };
    
    render(){
        return(
            <View style = {styles.container}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    }
});
