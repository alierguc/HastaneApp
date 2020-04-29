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
    ScrollView
} from 'react-native';

export default class Register extends Component {

    constructor(props) {
        super(props);
    }

    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed " + viewId);
    }

    tcHesapla()
    {
        int[11];
        for(let i=0; i<int.maxLength; i++)
        {

        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <ScrollView>
                    <View style={styles.container}>
                        <View>
                            <Image style={styles.logo} source={require('../img/splashlogo.png')}></Image>
                        </View>
                        <View style={styles.inputContainer}>
                            <Image style={styles.inputIcon} source={require('../img/tc.png')} />
                            <TextInput style={styles.inputs}
                                placeholder="T.C Kimlik Numaranız"
                                maxLength={11}
                                keyboardType='number-pad'
                                underlineColorAndroid='transparent'
                                onChangeText={(email) => this.setState({ email })} />
                        </View>

                        <View style={styles.inputContainer}>
                            <Image style={styles.inputIcon} source={require('../img/name.png')} />
                            <TextInput style={styles.inputs}
                                placeholder="Adınız Soyadınız"
                                secureTextEntry={true}
                                underlineColorAndroid='transparent'
                                onChangeText={(password) => this.setState({ password })} />
                        </View>
                        <View style={styles.inputContainer}>
                            <Image style={styles.inputIcon} source={require('../img/phone.png')} />
                            <TextInput style={styles.inputs}
                                placeholder="Telefon Numaranız"
                                secureTextEntry={true}
                                underlineColorAndroid='transparent'
                                onChangeText={(password) => this.setState({ password })} />
                        </View>
                        <View style={styles.inputContainer}>
                            <Image style={styles.inputIcon} source={require('../img/mail.png')} />
                            <TextInput style={styles.inputs}
                                placeholder="E-posta Adresiniz"
                                secureTextEntry={true}
                                underlineColorAndroid='transparent'
                                onChangeText={(password) => this.setState({ password })} />
                        </View>
                        <View style={styles.inputContainer}>
                            <Image style={styles.inputIcon} source={require('../img/birth.png')} />
                            <TextInput style={styles.inputs}
                                placeholder="Doğum Tarihiniz"
                                secureTextEntry={true}
                                underlineColorAndroid='transparent'
                                onChangeText={(password) => this.setState({ password })} />
                        </View>
                        <View style={styles.inputContainer}>
                            <Image style={styles.inputIcon} source={require('../img/adress.png')} />
                            <TextInput style={styles.inputs}
                                placeholder="Adresiniz"
                                secureTextEntry={true}
                                underlineColorAndroid='transparent'
                                onChangeText={(password) => this.setState({ password })} />
                        </View>

                        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}>
                            <Text style={styles.loginText}><Image style={styles.inputIconButton} source={require('../img/logins.png')} />
                                &nbsp;&nbsp;Üyelik İşlemini Tamamla</Text>
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
        marginTop:40,
        marginBottom:20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8EBEDC',
    },
    mainContainer:{
        backgroundColor:'#8EBEDC',
        height:'100%'
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom:20,
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
        marginTop:10,
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
