import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Button, TouchableHighlight, Dimensions, Animated, SafeAreaView } from 'react-native';
import Category from '../pageComponents/PolCategory';
import PageHeaders from '../pageComponents/CustomHeader';

const { height, width } = Dimensions.get('window')


export default function HomeNav() {
    return (
        <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                    Tıbbi Birimlerimiz
          </Text>
                <Text style={{ fontSize: 10, fontWeight: '700', paddingHorizontal: 20 }}>
                    Tıbbi Birimlerimizi görebilmek için sola kaydırın
          </Text>
            </View>

            <View style={{ height: 300, marginTop: 20 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Category imageUri={require('../img/doctor.png')} name='Kulak Burun Boğaz' />
                    <Category imageUri={require('../img/doctor.png')} name='Radyoloji' />
                    <Category imageUri={require('../img/doctor.png')} name='Anesteziyoloji ve Reanimasyon' />
                    <Category imageUri={require('../img/doctor.png')} name='Cildiye (Dermatoloji)' />
                    <Category imageUri={require('../img/doctor.png')} name='Göz' />
                    <Category imageUri={require('../img/doctor.png')} name='Diş' />
                    <Category imageUri={require('../img/doctor.png')} name='Çocuk Sağlığı ve Hastalıkları' />
                    <Category imageUri={require('../img/doctor.png')} name='Acil Servis' />
                    <Category imageUri={require('../img/doctor.png')} name='Üroloji' />
                    <Category imageUri={require('../img/doctor.png')} name='Genel Cerrahi' />
                    <Category imageUri={require('../img/doctor.png')} name='Nöroloji' />
                    <Category imageUri={require('../img/doctor.png')} name='Dahiliye (İç Hastalıkları)' />
                    <Category imageUri={require('../img/doctor.png')} name='Kadın Hastalıkları ve Doğum' />
                    <Category imageUri={require('../img/doctor.png')} name='Ortopedi ve Travmatoloji' />
                    <Category imageUri={require('../img/doctor.png')} name='Fizik Tedavi Ünitesi' />
                    <Category imageUri={require('../img/doctor.png')} name='Ozon Tedavi' />

                </ScrollView>
            </View>
            <Text style={{ fontSize: 24, fontWeight: '700', marginLeft: 20, marginTop: 30 }}>
                Hastane Duyuruları
                </Text>


            <View style={{ marginLeft: 20, marginBottom: 40 }}>
                <View style={{ marginTop: 20, marginBottom: 20, paddingHorizontal: 20, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 20, marginRight: 20 }}>
                    <View style={{ width: '100%', height: 200, marginTop: 20 }}>
                        <Image style={{ resizeMode: 'cover', flex: 1, width: null, height: null }} source={require('../img/duyuru.jpg')} />
                    </View>

                    <Text style={{ fontWeight: '100', marginTop: 10, marginBottom: 30 }}>
                        Duyuru İçeriği : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                </View>

                <View style={{ marginTop: 20, paddingHorizontal: 20, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 20, marginRight: 20 }}>
                    <View style={{ width: '100%', height: 200, marginTop: 20 }}>
                        <Image style={{ resizeMode: 'cover', flex: 1, width: null, height: null }} source={require('../img/duyuru.jpg')} />
                    </View>

                    <Text style={{ fontWeight: '100', marginTop: 10, marginBottom: 30 }}>
                        Duyuru İçeriği : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                </View>
                <View style={{ marginTop: 20, paddingHorizontal: 20, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 20, marginRight: 20 }}>
                    <View style={{ width: '100%', height: 200, marginTop: 20 }}>
                        <Image style={{ resizeMode: 'cover', flex: 1, width: null, height: null }} source={require('../img/duyuru.jpg')} />
                    </View>

                    <Text style={{ fontWeight: '100', marginTop: 10, marginBottom: 30 }}>
                        Duyuru İçeriği : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
        backgroundColor: '#ce0e0e'
    },
});