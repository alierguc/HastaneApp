/**
 * @format
 */

import React, { Component } from 'react';

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Splash from './pages/SplashPage';
import Login from './pages/LoginPage';
import 'react-native-gesture-handler';
import {
    StatusBar

} from 'react-native';
import OneSignal from 'react-native-onesignal';

class Main extends Component {
    componentWillUnmount() {
        OneSignal.removeEventListener("received", this.onReceived);
        OneSignal.removeEventListener("opened", this.onOpened);
        OneSignal.removeEventListener("ids", this.onIds);
    }
    onReceived(notification) {
        console.log("Notification received: ", notification);
    }
    onOpened(openResult) {
        console.log("Message: ", openResult.notification.payload.body);
        console.log("Data: ", openResult.notification.payload.additionalData);
        console.log("isActive: ", openResult.notification.isAppInFocus);
        console.log("openResult: ", openResult);
    }
    onIds(device) {
        console.log("Device info: ", device);
    }


    
    constructor(props) {
        super(props);
        OneSignal.init("81120005-fc8e-40f3-a53f-bfb077c70738");// set kOSSettingsKeyAutoPrompt to false prompting manually on iOS

        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('ids', this.onIds);
        this.state = { currentScreen: 'Splash' };
        setTimeout(() => {
            this.setState({ currentScreen: 'Login' })
        }, 3000);
    }

    render() {
        <StatusBar backgroundColor="#8EBEDC" />
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Login />
        return mainScreen;

    }
}
AppRegistry.registerComponent(appName, () => Main);
