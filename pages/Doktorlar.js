import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image

} from 'react-native';
import PageHeaders from '../pageComponents/CustomHeader';
import Doktorlarimiz from '../pageComponents/doctorList';

function Doktorlar({ navigation }) {
    return (
        <View style={styles.mainContainer}>
            <PageHeaders name="Doktorlarımız" />
            <ScrollView scrollEventThrottle={16}>
            <Doktorlarimiz/>           
            </ScrollView>
        </View>

    );
}
export default Doktorlar;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        marginBottom: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8EBEDC',
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
