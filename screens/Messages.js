import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native';
//import UserMessage from '../components/UserMessage'

const UserMessage = ({message}) => {
    return(
        <View style={styles.userMessageContainer}>
            <Text>{JSON.stringify(message)}</Text>
        </View>
    )
}

const Messages = () => {

    //const messages = ['message1','message2','message3','message4','message5']
    const messages = ['Got donation from Rob Johnson!','Got donation from Melissa Miles!','Got donation from Bob Jones!','Got donation from Dawei Chao!','Got donation from Marley John!']

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.messagesContainer}>
                {messages.map((message, index) => 
                    <View style={styles.userMessageContainer}>
                        <Text>{message}</Text>
                    </View>
                )}  
            </View> 
        </ScrollView>
    )
}

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
    }
})

export default Messages