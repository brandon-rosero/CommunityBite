import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const UserMessage = (message) => {
    return(
        <View style={styles.userMessageContainer}>
            <Text>message</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    userMessageContainer: {

        backgroundColor: "white",
        padding: 30,
        borderRadius: 30,
        width: "95%",
        marginTop: 10
    


    }

})

export default UserMessage