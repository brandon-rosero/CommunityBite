import React, { useState, useLayoutEffect } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserInfo = ( { route } ) => {
    
    const navigation = useNavigation();

    const {name, address, items} = route.params;

    return(

        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.address}>{address}</Text>
            <Text style={styles.items}>{items}</Text>
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#ffffff',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    address: {
        fontSize: 18,
        marginBottom: 10,
    },
    items: {
        fontSize: 16,
        marginTop: 20,
    }
    


})

export default UserInfo
