import React, { Component } from 'react';
import { StyleSheet, View, Image, Text,StatusBar } from 'react-native';

export default class Splash extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#8EBEDC" />
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../img/splashlogo.png')}></Image>
                    <Text style={styles.title}>Hastane App</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8EBEDC',
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        width: 250,
        height: 250,
        borderRadius: 20
    },
    title: {
        fontWeight: 'bold',
        color: 'rgb(32,53,70)',
        fontSize: 18
    }
})