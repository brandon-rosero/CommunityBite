import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native';

const DonationLog = () => {

    //const messages = ['message1','message2','message3','message4','message5']
    const donations = ['Got donation from Rob Johnson!','Got donation from Melissa Miles!','Got donation from Bob Jones!','Got donation from Dawei Chao!','Got donation from Marley John!']

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.donationContainer}>
                {donations.map((donation, index) => 
                    <View style={styles.userDonationContainer}>
                        <Text>{donation}</Text>
                    </View>
                )}  
            </View> 
        </ScrollView>
    )
}

//{messages.map((message, index) => <UserMessage key={index}/>)} 

const styles = StyleSheet.create({
    donationContainer: {
        alignItems: 'center'
    },
    userDonationContainer: {
        backgroundColor: "white",
        padding: 30,
        borderRadius: 30,
        width: "95%",
        marginTop: 10
    }
})

export default DonationLog