import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

const Header = () => {
    return(

        <View style={styles.headerWrapper}>      
             <Pressable onPress={() => console.log("user pressed")}>
                <Image source={require('../assets/userIcon.png')} style={styles.userIcon}/>
             </Pressable>
             
             <Image source={require('../assets/logo.png')} style={styles.logo}/>
             
             <Pressable onPress={() => console.log("settings pressed")}>
                <Image source={require('../assets/settingsIcon.png')} style={styles.settingsIcon}/>
             </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({

    userIcon: {

        height: 24,
        width: 24,

    },
    settingsIcon: {
        
        height: 24,
        width: 24,
 
    },
    headerWrapper: {
        
        width: '100%',
        flexDirection: 'row',
        bottom: 325,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    
    }
    
})

export default Header