import React, { Component, useState, setState } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements'; 

const Messages = () => {

    //const messages = ['message1','message2','message3','message4','message5']
    const messages = ['Got donation from Rob Johnson!','Got donation from Melissa Miles!','Got donation from Bob Jones!','Got donation from Dawei Chao!','Got donation from Marley John!']
    const foodbankInfo = [
        {foodbankName: "UIC Pop-Up Pantry", address: "750 S Halsted St, Chicago, IL 60607", description: "The mission of the Pop-Up Pantry is to exclusively serve registered UIC students who are experiencing food insecurity while attending the University of Illinois at Chicago (UIC).  Our mission is to support academic success and student development by supporting students who may be facing personal and/or financial hardship."},
        {foodbankName: "Life Changers International Church", address: "1337 W 15th St. Chicago, IL 60608", description: "The Life Changers Food Pantry is open! We are giving away fresh groceries and non-perishable items throughout the month. All are welcome. Invite anyone you know who may be in need, or pick up on their behalf."},
        {foodbankName: "Pilsen Food Pantry", address: "2124 S Ashland Ave, Chicago, IL 60608", description: "The Pilsen Food Pantry aims to improve health and social outcomes through the distribution of fresh, culturally-appropriate food, clothing, housewares, and community events."},
        {foodbankName: "Meals Ministry", address: "126 E Chestnut St, Chicago, IL 60611 ", description: "he mission of Fourth Church's Meals Ministry is to provide nutritious meals and welcoming hospitality for neighbors who are hungry, nurturing a sense of community among guests, volunteers, and partner organizations as we live out Fourth Church's mission to be a light in the city. "}
    ]

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.messagesContainer}>
                {foodbankInfo.map((fbInfo) => 
                    <View style={styles.userMessageContainer}>
                        <Text style={styles.foodbankNameText}>{fbInfo.foodbankName}</Text>
                        <Text>Address: {fbInfo.address}</Text>
                        <Text>Description: {fbInfo.description}</Text>
                    </View>
                )}  
            </View> 
        </ScrollView>
    )
}
// {messages.map((message, index) => 
//     <View style={styles.userMessageContainer}>
//         <Text>{message}</Text>
//     </View>
// )}  

//{messages.map((message, index) => <UserMessage key={index}/>)} 

const styles = StyleSheet.create({
    messagesContainer: {
        alignItems: 'center'
    },
    userMessageContainer: {
        backgroundColor: "white",
        padding: 30,
        borderRadius: 30,
        width: "95%",
        marginTop: 10
    },
    foodbankNameText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    }
})

export default Messages