import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import dashboardAdmin from './dashboardAdmin';

    
class Login extends Component {

    static navigationOptions = {
        header: null
      };  

    render() {
        return(
            <View style= {style.container}>
                <View style={style.Imagem}>
                <Image 
                    source={require("../pages/icon-login.png")}
                    style={{width: 95, height: 100}}
                />
                </View>
                <View style={style.insercao}>
                    <TextInput
                        style={style.inputLogin}
                        placeholder="email" 
                        placeholderTextColor="#FFF"
                        underlineColorAndroid="#FFF"
                    />
                    <TextInput
                        style={style.inputLogin}
                        placeholder="senha"
                        placeholderTextColor="#FFF"
                        underlineColorAndroid="#FFF"
                        password="true"
                    />
                    <TouchableOpacity 
                    style={style.btnLogin}
                    onPress= {() => this.props.navigation.navigate('dashboardAdmin')}
                    >
                        <Text style={{color: '#FFF'}}>Login</Text>
                    </TouchableOpacity>
                </View>
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
    Imagem: {
        width: 120,
        height: 130,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    insercao: {
        width: 300,
        height: 300,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputLogin: {
        width: 220,
        marginBottom: 10,
        fontSize: 15,
        fontStyle: 'italic'
    },
    btnLogin: {
        width: 60,
        height: 25,
        backgroundColor: '#81DF99',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    }
});

export default Login;