import React, { useState, useLayoutEffect } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserInfo = ( { route } ) => {
    
    const navigation = useNavigation();

    const {name, address, items} = route.params;

    return(

        <View style={styles.wrapper}>
            <Text>{name}</Text>
            <Text>{address}</Text>
            <Text>{items}</Text>
        </View>

    )
}

const styles = StyleSheet.create({

    wrapper : {

        alignContent: "center", 
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100
        

    }


})

export default UserInfo