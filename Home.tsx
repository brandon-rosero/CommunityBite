import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button, Alert, TouchableOpacity, TextInput, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from '../Navigation/HomeNavigation';
import Donation from '../screens/Donation';
import Forum from '../screens/Forum';
import Tabs from '../Navigation/tabs';



type HomeProps = {
    navigation: StackNavigationProp<any>; // You can replace 'any' with the specific stack navigator types if you have defined them
}


const Home: React.FC<HomeProps> = ({ navigation }) =>{


    return(


        <SafeAreaView style = {syles.container}>

        <View style = {syles.title}>
            <Text style = {syles.titleText}>
            Welcome to Community Bite App!
            </Text>
        </View>
        <View style = {syles.buttonContainer}>
                <Button
                title="Donation"
                color="#ff8c00"
                onPress={() => navigation.navigate('Donation')} />
                <Text style = {syles.buttonText}>
                    After clicking the button above you will have two option. Either you can Donate Directly to a Food bank or You can notify all the Food banks that are available near your area.
                </Text>

        </View>

        <View>
            <Button
                title="Forum"
                color="#ff8c00"
                onPress={() => navigation.navigate('Forum')} />
                <Text style = {syles.buttonText}>
                    The button above will take you to the discussion forum
                </Text>
        </View>
        <HomeNavigation />
        </SafeAreaView>


        

    );

}


const syles = StyleSheet.create({
    Homescreen: {
        backgroundColor: '#A2BCB1',
    },

    container: {
        flex: 1,
        backgroundColor: '#F5F5DC', // Pleasing background color
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    title: {
        marginBottom: 20,
    },
    titleText: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: '-apple-system, BlinkMacSystemFont',
    },
    buttonContainer: {
        marginBottom: 20,
        width: '100%',
    },
    buttonText: {
        marginTop: 10,
        fontSize: 16,
        textAlign: 'center',
    },
})

export default Home;