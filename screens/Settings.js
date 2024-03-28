import React, { useState, useLayoutEffect } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
    
    const navigation = useNavigation();

    useLayoutEffect(() => {

        navigation.setOptions({

            headerLeft: () => (

                <Pressable onPress={() => navigation.openDrawer()}>
                    <Image source={require('../assets/userIcon.png')} style={styles.userIcon}/>
                </Pressable>

            ),
            
            headerStyle:{

                height: 125,
        
            }

        })

    }, [])


    return(

        <Text>settings</Text>

    )
}

const styles = StyleSheet.create({

    userIcon: {

        height: 24,
        width: 24,
        left: 30

    },

})

export default Settings