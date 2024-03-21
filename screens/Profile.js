import React, { useState, useLayoutEffect } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useGlobalState } from '../globalContext';

const Profile = () => {

    const [state, dispatch] = useGlobalState(); // Global state
    const [usernameText, setUsernameText] = useState(state.username) // Stores username text
    
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

        //<Text>profile</Text>
        <Text>{usernameText}</Text> // Display username from globalContext.js

    )
}

const styles = StyleSheet.create({

    userIcon: {

        height: 24,
        width: 24,
        left: 30

    },

})

export default Profile