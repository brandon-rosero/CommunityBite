import React, { useLayoutEffect } from 'react'
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native'

const FoodBankHome = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {

        navigation.setOptions({

            headerLeft: () => (

                <Pressable onPress={() => navigation.openDrawer()}>
                    <Image source={require('../assets/userIcon.png')} style={styles.userIcon}/>
                </Pressable>

            ),
            headerTitle: () => (

                <Image source={require('../assets/logo.png')} style={styles.logo}/>

            ),
            
            headerStyle:{

                height: 125,
        
            }

        })

    }, [])

    return(
    
        <Text>Home</Text>

    )
}

const styles = StyleSheet.create({

    userIcon: {

        height: 24,
        width: 24,
        left: 30

    },
    
})

export default FoodBankHome