import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button, Alert, TouchableOpacity, TextInput, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DonationNavigation from '../Navigation/DonationNavigation';
import Form from "../screens/Form"
import Tabs from '../Navigation/tabs';



type DonationProps = {
    navigation: StackNavigationProp<any>; // You can replace 'any' with the specific stack navigator types if you have defined them
}


const DonationOption: React.FC<DonationProps> = ({ navigation }) =>{
    return(
        <SafeAreaView style = {syles.container}>
            <View style = {syles.buttonContainer}>
                <Button
                title="Direct Donation"
                color="#ff8c00"
                onPress={() => navigation.navigate('Form')} />
                <Text style = {syles.buttonText}>
                    This button will take you to the Donation form where you can fill out the name of the bank and other details.
                </Text>
            </View>

            <View style = {syles.buttonContainer}>
                <Button
                title="Near-by Banks"
                color="#ff8c00"
                onPress={() => navigation.navigate('Form')} />
                <Text style = {syles.buttonText}>
                    This button will take you to the Donation form where you can put your address and other details.
                </Text>
            </View>

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

export default DonationOption;