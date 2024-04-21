import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Pressable, Button } from 'react-native';
import { getFoodListings } from "../database.js"
import { useGlobalState } from '../globalContext';

const DonationLog = () => {
    const [state, dispatch] = useGlobalState(); // Global state
    const [foodListings, setFoodListings] = useState(state.foodListingsList) // Stores food listings
    //const [retrieveFoodListings, setRetrieveFoodListings] = useState(state.getFoodListings) // Tells when to get food listings

    //const messages = ['message1','message2','message3','message4','message5']
    //const donations = ['Got donation from Rob Johnson!','Got donation from Melissa Miles!','Got donation from Bob Jones!','Got donation from Dawei Chao!','Got donation from Marley John!']
    const donations = foodListings

    const refreshLog = () => {
        //console.log("Calling refreshMarkers")
        //if (state.getFoodListings == true){   // If-statement here if calling function infinitely
        console.log("Refreshing food listings...")
        foodListingArray = []
        getFoodListings().then(function(result){
            // Each element in foodListingArray is contained in an array: [latitude, longitude, fullName, phoneNumber]
            foodListingArray = result
            foodListingArray.forEach(element => console.log(element))
    
            dispatch({foodListingsList: foodListingArray, getFoodListings: false})
            //setRetrieveFoodListings(false);
            setFoodListings(foodListingArray)
        }).catch(function(error){
            console.log(error)
        });
        console.log("Refreshed food listings!")
        //}
        }
    

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <Button 
                style={styles.refreshButton}
                onPress={() => refreshLog()}
                title="Refresh"
            >
            </Button>
            <View style={styles.donationContainer}>
                {donations.map((donation, index) => 
                    <View style={styles.userDonationContainer}>
                        <Text>Name: {donation.name}</Text>
                        <Text>Address: {donation.address}</Text>
                        <Text>To be donated: {donation.items}</Text>
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
    },
    refreshButton: {
        backgroundColor: 'orange',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    }
})

export default DonationLog