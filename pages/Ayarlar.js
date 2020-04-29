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
    Switch

} from 'react-native';
import PageHeaders from '../pageComponents/CustomHeader';
import SwitchToggle from "react-native-switch-toggle";

export default class Ayarlar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchOn1: false,
            switchOn2: false,
            switchOn4: false
        };
    }

    getButtonText() {
        return this.state.switchOn4 ? "Açık" : "Kapalı";
    }

    getRightText() {
        return this.state.switchOn4 ? "" : "Açık";
    }

    getLeftText() {
        return this.state.switchOn4 ? "Kapalı" : "";
    }

    onPress1 = () => {
        this.setState({ switchOn1: !this.state.switchOn1 });
    };
    onPress2 = () => {
        this.setState({ switchOn2: !this.state.switchOn2 });
    };
    onPress3 = () => {
        this.setState({ switchOn3: !this.state.switchOn3 });
    };
    onPress4 = () => {
        this.setState({ switchOn4: !this.state.switchOn4 });
    };

    render() {


        return (
            <View style={styles.mainContainer}>
                <PageHeaders name="Ayarlar" />
                <ScrollView>
                    <View style={styles.container}>
                        <View>
                            <Image style={styles.logo} source={require('../img/ayarlar.png')}></Image>
                        </View>
                        <Text style={{ fontWeight: '700', color: '#3F4A54', fontSize: 18, marginBottom: 30 }}>Şifrenizi Değiştirin</Text>
                        <View style={styles.inputContainer}>
                            <Image style={styles.inputIcon} source={require('../img/lock.png')} />
                            <TextInput style={styles.inputs}
                                placeholder="Mevcut Şifreniz :"
                                maxLength={11}
                                keyboardType='number-pad'
                                underlineColorAndroid='transparent'
                                onChangeText={(email) => this.setState({ email })} />
                        </View>

                        <View style={styles.inputContainer}>
                            <Image style={styles.inputIcon} source={require('../img/newpass.png')} />
                            <TextInput style={styles.inputs}
                                placeholder="Yeni Şifreniz :"
                                secureTextEntry={true}
                                underlineColorAndroid='transparent'
                                onChangeText={(password) => this.setState({ password })} />
                        </View>
                        <View style={styles.inputContainer}>
                            <Image style={styles.inputIcon} source={require('../img/newpass.png')} />
                            <TextInput style={styles.inputs}
                                placeholder="Yeni Şifreniz (Tekrar) :"
                                secureTextEntry={true}
                                underlineColorAndroid='transparent'
                                onChangeText={(password) => this.setState({ password })} />
                        </View>
                        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigation.navigate('Home')} title="Home">
                            <Text style={styles.loginText}><Image style={styles.inputIconButton} source={require('../img/save.png')} />
                                &nbsp;&nbsp;Kaydet</Text>
                        </TouchableHighlight>
                        <Text style={{ fontWeight: '700', color: '#3F4A54', fontSize: 18, marginBottom: 30, marginTop: 50 }}>Telefon Numaranızı Değiştirin</Text>
                        <View style={styles.inputContainer}>
                            <Image style={styles.inputIcon} source={require('../img/phone.png')} />
                            <TextInput style={styles.inputs}
                                placeholder="Yeni Telefon Numaranız :"
                                maxLength={11}
                                keyboardType='number-pad'
                                underlineColorAndroid='transparent'
                                onChangeText={(email) => this.setState({ email })} />
                        </View>
                        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigation.navigate('Home')} title="Home">
                            <Text style={styles.loginText}><Image style={styles.inputIconButton} source={require('../img/save.png')} />
                                &nbsp;&nbsp;Kaydet</Text>
                        </TouchableHighlight>
                        <Text style={{ fontWeight: '700', color: '#3F4A54', fontSize: 18, marginBottom: 30, marginTop: 50 }}>Bildirim Seçenekleri</Text>
                        <Text style={{ fontWeight: '700', color: '#3F4A54', fontSize: 12, marginBottom: 30 }}>Gelecek olan Bildirimleri Ayarla</Text>
                        <View style={{marginBottom:40}}>
                            <SwitchToggle
                                buttonText={this.getButtonText()}
                                type={1}
                                buttonStyle={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "absolute"
                                }}
                                rightContainerStyle={{
                                    flex: 1,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                                leftContainerStyle={{
                                    flex: 1,
                                    alignItems: "center",
                                    justifyContent: "flex-start"
                                }}
                                buttonTextStyle={{ fontSize: 12, fontWeight: '700',color: '#dddddd' }}
                                textRightStyle={{ fontSize: 15, fontWeight: '700', color: '#0F9200' }}
                                textLeftStyle={{ fontSize: 15, fontWeight: '700', color: '#ce0e0e' }}
                                containerStyle={{
                                    marginTop: 16,
                                    width: 160,
                                    height: 30,
                                    borderRadius: 30,
                                    padding: 5
                                }}
                                backgroundColorOn="#a0e1e5"
                                backgroundColorOff="#e5e1e0"
                                circleStyle={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 100,
                                    backgroundColor: "blue" // rgb(102,134,205)
                                }}
                                switchOn={this.state.switchOn4}
                                onPress={this.onPress4}
                                circleColorOff="#ce0e0e"
                                circleColorOn="#0F9200"
                                duration={500}
                            />
                        </View>


                    </View>
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
    switchButtonContainer: {
        flexDirection: 'row',
        alignContent: 'center',
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
        width: 25,
        height: 25,
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
