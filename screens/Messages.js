import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import UserMessage from '../components/UserMessage'

const Messages = () => {
    
    const messages = ['message1','message2','message3','message4','message5','message6','message7','message8','message9','message10']
    
    return(

        <ScrollView showsVerticalScrollIndicator={false}>
            
            <View style={styles.messagesContainer}>
                
                {messages.map((message) => <UserMessage key={message._id} />)}  
                
            </View>
                
        </ScrollView>

    )
}

const styles = StyleSheet.create({

    messagesContainer: {

        alignItems: 'center'
       
        
    
    }

})

export default Messages