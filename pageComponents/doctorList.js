import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image

} from 'react-native';

export default class Doktorlarimiz extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                    Doktorlarımız
  </Text>
                <View style={{ marginLeft: 20, marginBottom: 40 }}>
                    <View style={{ marginTop: 20, marginBottom: 20, paddingHorizontal: 20, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 20, marginRight: 20 }}>
                        <View style={{ width: '100%', height: 200, marginTop: 20 }}>
                            <Image style={{ resizeMode: 'cover', flex: 1, width: null, height: null }} source={require('../img/doctor.png')} />
                        </View>
                        <View style={{marginTop:40}}>
                            <Text style={{ fontWeight: '700', marginTop: 10, marginBottom: 30 }}>
                                Adı - Soyadı :
        </Text>
                            <Text style={{ fontWeight: '700', marginTop: 10, marginBottom: 30 }}>
                                Ünvanı :
        </Text>
                            <Text style={{ fontWeight: '700', marginTop: 10, marginBottom: 30 }}>
                                Görev Yeri :
        </Text>
                            <Text style={{ fontWeight: '700', marginTop: 10, marginBottom: 30 }}>
                                Branşı :
        </Text>
                            <Text style={{ fontWeight: '700', marginTop: 10, marginBottom: 30 }}>
                                Mezun olduğu üniversite :
        </Text>
                            <Text style={{ fontWeight: '700', marginTop: 10, marginBottom: 30 }}>
                                İhtisas Yeri :
        </Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 20, marginBottom: 20, paddingHorizontal: 20, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 20, marginRight: 20 }}>
                        <View style={{ width: '100%', height: 200, marginTop: 20 }}>
                            <Image style={{ resizeMode: 'cover', flex: 1, width: null, height: null }} source={require('../img/doctor.png')} />
                        </View>
                        <View style={{marginTop:40}}>
                            <Text style={{ fontWeight: '700', marginTop: 10, marginBottom: 30 }}>
                                Adı - Soyadı :
        </Text>
                            <Text style={{ fontWeight: '700', marginTop: 10, marginBottom: 30 }}>
                                Ünvanı :
        </Text>
                            <Text style={{ fontWeight: '700', marginTop: 10, marginBottom: 30 }}>
                                Görev Yeri :
        </Text>
                            <Text style={{ fontWeight: '700', marginTop: 10, marginBottom: 30 }}>
                                Branşı :
        </Text>
                            <Text style={{ fontWeight: '700', marginTop: 10, marginBottom: 30 }}>
                                Mezun olduğu üniversite :
        </Text>
                            <Text style={{ fontWeight: '700', marginTop: 10, marginBottom: 30 }}>
                                İhtisas Yeri :
        </Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, marginBottom: 20, paddingHorizontal: 20, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 20, marginRight: 20 }}>
                        <View style={{ width: '100%', height: 200, marginTop: 20 }}>
                            <Image style={{ resizeMode: 'cover', flex: 1, width: null, height: null }} source={require('../img/doctor.png')} />
                        </View>
                        <View style={{marginTop:40}}>
                            <Text style={{ fontWeight: '700', marginTop: 10, marginBottom: 30 }}>
                                Adı - Soyadı :
        </Text>
                            <Text style={{ fontWeight: '700', marginTop: 10, marginBottom: 30 }}>
                                Ünvanı :
        </Text>
                            <Text style={{ fontWeight: '700', marginTop: 10, marginBottom: 30 }}>
                                Görev Yeri :
        </Text>
                            <Text style={{ fontWeight: '700', marginTop: 10, marginBottom: 30 }}>
                                Branşı :
        </Text>
                            <Text style={{ fontWeight: '700', marginTop: 10, marginBottom: 30 }}>
                                Mezun olduğu üniversite :
        </Text>
                            <Text style={{ fontWeight: '700', marginTop: 10, marginBottom: 30 }}>
                                İhtisas Yeri :
        </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}