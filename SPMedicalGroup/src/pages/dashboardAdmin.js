import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button} from 'react-native';

class dashboardAdmin extends Component {
    render() {
        return(
            <View>
                <Button 
                title="sair"
                onPress= {() => this.props.navigation.navigate('Login')}
                />
            </View>
        );
    }
}

export default dashboardAdmin;