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
import PageHeaders from '../pageComponents/CustomHeader';
import RandevuSaatList from '../pageComponents/randevuSaatList';


export default class YaklasanRandevular extends Component {

    render() {
        return (


            <View style={styles.mainContainer}>
                <PageHeaders name="Yaklaşan Randevular" />
                <ScrollView>
                    <View style={styles.container}>
                        <View>
                            <Image style={styles.logo} source={require('../img/calendar.png')}></Image>
                        </View>
                        <Text style={{ fontWeight: '700', color: '#3F4A54', fontSize: 18, marginBottom: 30, marginTop: 30 }}>Yaklaşan Randevularınız</Text>

                    </View>
                    <RandevuSaatList/>
                </ScrollView>

            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        marginBottom: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    separator: {
        height: 0.5, width: "100%", backgroundColor: "#000"
    },
    rowViewContainer: {
        flex: 1,
        paddingRight: 15,
        paddingTop: 13,
        paddingBottom: 13,
        borderBottomWidth: 0.5,
        borderColor: '#c9c9c9',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 20,
        marginLeft: 10,
    },
    mainContainer: {
        backgroundColor: 'white',
        height: '100%',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        width: 220,
        height: 220,
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
