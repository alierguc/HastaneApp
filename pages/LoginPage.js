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
import Register from '../pages/RegisterPage';

import { NavigationNativeContainer, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/HomePage';
import SifremiunuttumPage from '../pages/SifremiUnuttum';

const Stack = createStackNavigator();



constructor()
function LoginSection({navigation}){
        return (
            <View style={styles.mainContainer}>

                <ScrollView>
                    <View style={styles.container}>
                    <StatusBar backgroundColor="#8EBEDC" />
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
                            <Image style={styles.inputIcon} source={require('../img/lock.png')} />
                            <TextInput style={styles.inputs}
                                placeholder="Şifreniz"
                                secureTextEntry={true}
                                underlineColorAndroid='transparent'
                                onChangeText={(password) => this.setState({ password })} />
                        </View>

                        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={()=> navigation.navigate('Home')} title="Home">
                            <Text style={styles.loginText}><Image style={styles.inputIconButton} source={require('../img/logins.png')} />
                                &nbsp;&nbsp;Giriş Yap</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={()=> navigation.navigate('Register')} title="Register">
                            <Text style={styles.loginText}><Image style={styles.inputIconButton} source={require('../img/login.png')} />
                                &nbsp;&nbsp;Kayıt Ol</Text>
                        </TouchableHighlight>
                     
                            <Text style={{fontWeight:'700',color:'#1D2F3E',marginTop:30,fontFamily:'Cochin'}} onPress={()=> navigation.navigate('SifremiUnuttum')} title="Register">Şifrenizimi Unuttunuz ? | Şifremi Unuttum</Text>
                       
                    </View>
                </ScrollView>
            </View>
        );
    }

function RegisterSection({navigation})
{
    return(
        <Register/>
    );
}
function HomeSection({navigation})
{
    return(
        <Home/>
    );
}
function SifremiUnuttumSection({navigation})
{
    return(
        <SifremiunuttumPage/>
    );
}





export default function Login(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginSection} options={{title:'Kayıt Ol',headerShown:false}}/>
                <Stack.Screen name="Home" component={HomeSection} options={{title:'Anasayfa',headerShown:false}}/>
                <Stack.Screen name="Register" component={RegisterSection} options={{title:'Kayıt Ol',headerShown:false}}/>
                <Stack.Screen name="SifremiUnuttum" component={SifremiUnuttumSection} options={{title:'Şifremi Unuttum',headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}


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
