import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Button, TouchableHighlight } from 'react-native';
import Modal from "react-native-modal";
import RandevuAl from '../pages/RandevuAl';

export default class Category extends Component {
    state = {
        isModalVisible: false
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    render() {

        return (

            <View style={{ height: 300, width: 250, marginLeft: 10, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 20, marginRight: 20 }}>
                <View style={{ flex: 2 }}>
                    <Image style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} source={this.props.imageUri} />
                </View>

                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '700', marginTop: '10%' }}>{this.props.name}</Text>
                </View>
                <Button
                    style={{ borderColor: '#dddddd' }}
                    onPress={this.toggleModal}
                    title="Randevu Al"
                    color="#E30613"
                />
                <View>
                    <Modal
                        testID={'modal'}
                        isVisible={this.state.isModalVisible}
                        backdropColor="#DADADA"
                        backdropOpacity={0.7}
                        animationIn="zoomInDown"
                        animationOut="zoomOutUp"
                        animationInTiming={600}
                        animationOutTiming={600}
                        backdropTransitionInTiming={600}
                        backdropTransitionOutTiming={600}>
                        <RandevuAl />
                        <Button title="Kapat" color="#E30613" onPress={this.toggleModal} />
                      
                    </Modal>
                </View>
            </View>


        );
    }
};


const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
        backgroundColor: '#ce0e0e'
    },
});