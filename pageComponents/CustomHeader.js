import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Button, TouchableHighlight, Dimensions, Animated, SafeAreaView } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import Icon from '../img/bell.png'

export default class PageHeaders extends Component {

    toggleTooltip = () => {
      
    };
    render() {
        return (
            <View>
                <View style={{ width: '100%', height: 65, backgroundColor: '#8EBEDC', alignItems: 'baseline', flexDirection: 'row' }}>
                    <Text style={{ fontWeight: '700', marginLeft: '15%', fontSize: 18, color: '#ffffff' }}>{this.props.name}</Text>
                    <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10 }}>

                    </View>
                    <View style={{marginTop:10}}>
                    <IconButton
                        rippleColor="#ffffff"
                        icon={Icon}
                        color='#E30613'
                        size={25}
                        onPress={this.toggleTooltip}
                    />
                    </View>
                </View>

                <View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    inputIcon: {
        width: 20,
        height: 20,
        marginLeft: 15,
        justifyContent: 'center'
    },

});
