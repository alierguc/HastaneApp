import * as React from 'react';
import { Text, StatusBar, Button, View, Image, ScrollView, StyleSheet, Header } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Doktorlar from '../pages/Doktorlar';
import Ayarlar from '../pages/Ayarlar';
import RandevuAl from '../pages/RandevuAl';
import YaklasanRandevular from '../pages/YaklasanRandevular';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNav from '../pageComponents/HomeCarousel';
import PageHeaders from '../pageComponents/CustomHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
function HomeSection() {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="#8EBEDC" />
      <PageHeaders name="Anasayfa" />
      <ScrollView>

        <HomeNav />
      </ScrollView>
    </View>
  );
}


function DoktorlarScreen({ route }) {
  return (
    <Doktorlar />
  );
}
function AyarlarScreen({ route }) {
  return (
    <Ayarlar />
  );
}
function RandevuAlScreen({ route }) {
  return (
    <RandevuAl />
  );
}
function YaklasanRandevularScreen({ route }) {
  return (
    <YaklasanRandevular />
  );
}

const Tab = createMaterialBottomTabNavigator();


export default function App() {
  return (
    <SafeAreaProvider>
      <Tab.Navigator tabBarOptions={{
        activeTintColor: '#e91e63',
        backgroundColor: '#ce0e0e'
      }}>
        <Tab.Screen name="Anasayfa" component={HomeSection} options={{
          title: 'Anasayfa', tabBarColor: '#8EBEDC', headerShown: false, tabBarIcon: ({ color, size }) => (
            <Image style={styles.inputIcon} source={require('../img/homepage.png')} />
          ),
        }} />
        <Tab.Screen name="Doktorlar" component={DoktorlarScreen} options={{
          title: 'Doktorlarımız', tabBarColor: '#4267B3', headerShown: false, tabBarIcon: ({ color, size }) => (
            <Image style={styles.inputIcon} source={require('../img/stethoscope.png')} />
          ),
        }} />
        <Tab.Screen name="Ayarlar" component={AyarlarScreen} options={{
          title: 'Ayarlar', tabBarColor: '#1D2F3E', headerShown: false, tabBarIcon: ({ color, size }) => (
            <Image style={styles.inputIcon} source={require('../img/ayarlar.png')} />
          ),
        }} />
        <Tab.Screen name="Randevular" component={YaklasanRandevularScreen} options={{
          title: 'Randevular', tabBarColor: '#00783e', headerShown: false, tabBarIcon: ({ color, size }) => (
            <Image style={styles.inputIcon} source={require('../img/calendar.png')} />
          ),
        }} />
      </Tab.Navigator>
    </SafeAreaProvider>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8EBEDC',
  },
  card: {
    backgroundColor: '#ffffff',
    width: '95%',
    flexDirection: 'column',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    justifyContent: 'center',
    height: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 30
  },
  contentInfo: {
    marginTop: 40,

  },
  mainContainer: {
    backgroundColor: 'white',
    height: '100%',
  },
  inputIcon: {
    width: 25,
    height: 25,
    justifyContent: 'center'
  },
  logo: {
    justifyContent: 'center',
    resizeMode: 'stretch',
    width: '100%',
    height: '100%',
  },
});
