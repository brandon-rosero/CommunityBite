import React, { useState, useLayoutEffect } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';

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
        
        <View style={styles.settingsContainer}>
            <View style={styles.settingOption}>
                <Text style={{fontWeight: "bold"}}>Change password</Text>
            </View>
            
            <TouchableHighlight>
                <View style={styles.settingOption}>
                    <Text style={{fontWeight: "bold"}}>Log out</Text>
                </View>
            </TouchableHighlight>
            
        </View>
    
    )
}

const styles = StyleSheet.create({

    userIcon: {

        height: 24,
        width: 24,
        left: 30

    },
    settingOption: {

        backgroundColor: "white",
        width: 400 ,
        padding: 20,
        marginTop: 20,
        borderRadius: 8

    },
    settingsContainer: {

        alignItems: "center",
        

    }

})

export default Settings