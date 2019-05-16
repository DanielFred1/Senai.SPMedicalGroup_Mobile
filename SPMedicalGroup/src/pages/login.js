import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Login extends Component {
    render() {
        return(
            <View style= {style.container}>
                <Text style= {style.texto}>Login</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#83BEDF',
    },
    texto: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});