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
    StatusBar

} from 'react-native';
import Doktorlarimiz from '../pages/Doktorlar';


function RandevuAl({ navigation }) {
    return (
        <View style={styles.mainContainer}>

            <View style={styles.mainContainer}>

                <ScrollView>
                    <View style={styles.container}>
                        <StatusBar backgroundColor="#8EBEDC" />
                        <View>
                            <Image style={styles.logo} source={require('../img/doctor.png')}></Image>
                        </View>
                        <View style={styles.DoctorInner}>
                            <Text>Doktor Adı :</Text>
                        </View>
                        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigation.navigate('Register')} title="Register">
                            <Text style={styles.loginText}><Image style={styles.inputIconButton} source={require('../img/login.png')} />
                                &nbsp;&nbsp;Randevu Al</Text>
                        </TouchableHighlight>
                        <View>
                            <Image style={styles.logo} source={require('../img/doctor.png')}></Image>
                        </View>
                        <View style={styles.DoctorInner}>
                            <Text>Doktor Adı :</Text>
                        </View>
                        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigation.navigate('Register')} title="Register">
                            <Text style={styles.loginText}><Image style={styles.inputIconButton} source={require('../img/login.png')} />
                                &nbsp;&nbsp;Randevu Al</Text>
                        </TouchableHighlight>


                    </View>
                </ScrollView>
            </View>

        </View>

    );
}
export default RandevuAl;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    DoctorInner: {
        paddingLeft: 20,
        paddingRight: 20
    },
    mainContainer: {
        backgroundColor: '#ffffff',
        height: '95%',
    },
    logoContainer: {

        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        marginBottom: 40,
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
        marginBottom: 40,
        marginTop: 40,
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
