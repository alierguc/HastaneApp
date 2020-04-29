import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    ScrollView,
    StatusBar,
    Style

} from 'react-native';
import Register from '../pages/RegisterPage';

export default class SifremiunuttumPage extends Component{
    render(){
        return(
            <View style={styles.mainContainer}>

            <ScrollView>
                <View style={styles.container}>
                <StatusBar backgroundColor="#8EBEDC" />
                <Image style={styles.logo} source={require('../img/savepassword.png')}></Image>
                <Text style={styles.title}>Şifre yenileme kodunuz telefon numaranıza sms olarak gelecektir.</Text>
                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={require('../img/phone.png')} />
                        <TextInput style={styles.inputs}
                            placeholder="Telefon Numaranızı giriniz"
                            secureTextEntry={true}
                            underlineColorAndroid='transparent'
                            onChangeText={(password) => this.setState({ password })} />
                    </View>

                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={()=> navigation.navigate('Home')} title="Home">
                        <Text style={styles.loginText}><Image style={styles.inputIconButton} source={require('../img/logins.png')} />
                            &nbsp;&nbsp;Şifremi Gönder</Text>
                    </TouchableHighlight>            
        
                   
                </View>
            </ScrollView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '30%',
        marginBottom: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8EBEDC',
    },
    title: {
        marginTop:20,
        paddingLeft:25,
        paddingRight:25,
        fontWeight: 'bold',
        color: 'rgb(32,53,70)',
        fontSize: 16
    },
    mainContainer: {
        backgroundColor: '#8EBEDC',
        height: '100%',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        width: 250,
        height: 250,
        borderRadius: 20
    },
    inputContainer: {
        borderBottomColor: '#8EBEDC',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: '90%',
        marginTop:50,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#1D2F3E',
        flex: 1,
    },
    inputIcon: {
        width: 20,
        height: 20,
        marginLeft: 15,
        justifyContent: 'center'
    },
    inputIconButton: {
        width: 20,
        height: 20,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        marginTop: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#1D2F3E",
    },
    loginText: {
        color: 'white',
    }
});
