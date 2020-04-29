import React, { Component } from 'react';
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Alert, Image
} from 'react-native';
import axios from 'axios';
export default class RSaatList extends Component {

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);

            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>dsadasd</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 30
    },
})


