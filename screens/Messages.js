import React, { Component, useState, setState } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Pressable, FlatList, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Messages = () => {

    const [searchText, setSearchText] = useState("")

    const [foodbankInfo, setFoodbankInfo] = useState([
        {foodbankName: "UIC Pop-Up Pantry", address: "750 S Halsted St, Chicago, IL 60607", description: "The mission of the Pop-Up Pantry is to exclusively serve registered UIC students who are experiencing food insecurity while attending the University of Illinois at Chicago (UIC).  Our mission is to support academic success and student development by supporting students who may be facing personal and/or financial hardship."},
        {foodbankName: "Life Changers International Church", address: "1337 W 15th St. Chicago, IL 60608", description: "The Life Changers Food Pantry is open! We are giving away fresh groceries and non-perishable items throughout the month. All are welcome. Invite anyone you know who may be in need, or pick up on their behalf."},
        {foodbankName: "Pilsen Food Pantry", address: "2124 S Ashland Ave, Chicago, IL 60608", description: "The Pilsen Food Pantry aims to improve health and social outcomes through the distribution of fresh, culturally-appropriate food, clothing, housewares, and community events."},
        {foodbankName: "Meals Ministry", address: "126 E Chestnut St, Chicago, IL 60611 ", description: "he mission of Fourth Church's Meals Ministry is to provide nutritious meals and welcoming hospitality for neighbors who are hungry, nurturing a sense of community among guests, volunteers, and partner organizations as we live out Fourth Church's mission to be a light in the city. "}])
    
    const intitalState = [{foodbankName: "UIC Pop-Up Pantry", address: "750 S Halsted St, Chicago, IL 60607", description: "The mission of the Pop-Up Pantry is to exclusively serve registered UIC students who are experiencing food insecurity while attending the University of Illinois at Chicago (UIC).  Our mission is to support academic success and student development by supporting students who may be facing personal and/or financial hardship."},
    {foodbankName: "Life Changers International Church", address: "1337 W 15th St. Chicago, IL 60608", description: "The Life Changers Food Pantry is open! We are giving away fresh groceries and non-perishable items throughout the month. All are welcome. Invite anyone you know who may be in need, or pick up on their behalf."},
    {foodbankName: "Pilsen Food Pantry", address: "2124 S Ashland Ave, Chicago, IL 60608", description: "The Pilsen Food Pantry aims to improve health and social outcomes through the distribution of fresh, culturally-appropriate food, clothing, housewares, and community events."},
    {foodbankName: "Meals Ministry", address: "126 E Chestnut St, Chicago, IL 60611 ", description: "he mission of Fourth Church's Meals Ministry is to provide nutritious meals and welcoming hospitality for neighbors who are hungry, nurturing a sense of community among guests, volunteers, and partner organizations as we live out Fourth Church's mission to be a light in the city. "}]

    function filterFoodBanks(newText){

        setSearchText(newText)

        if(newText === ""){

            setFoodbankInfo(intitalState)

        }
        else{

            setFoodbankInfo(foodbankInfo.filter((fb) => fb.foodbankName.toUpperCase().includes(searchText.toUpperCase())))

        }  
        
    }

    return(
        
        <View style={{alignItems: "center"}}>
            <SafeAreaView>
                <TextInput 
                    placeholder='Search' 
                    clearButtonMode='always' 
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.searchBar} 
                    value={searchText}
                    onChangeText={text => filterFoodBanks(text)}
                    
                />
            </SafeAreaView>

            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.fbContainer}>
                    {foodbankInfo.map((fbInfo) => 
                        <View style={styles.fbDetailsContainer}>
                            <Text style={styles.foodbankNameText}>{fbInfo.foodbankName}</Text>
                            <Text>
                                <Text style={{fontWeight: "bold"}}>Address: </Text>
                                <Text>{fbInfo.address}</Text>  
                            </Text>

                            <Text>
                                <Text style={{fontWeight: "bold"}}>Description: </Text>
                                <Text>{fbInfo.description}</Text>  
                            </Text>
                        </View>
                    )}  
                </View> 
            </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    fbContainer: {
        alignItems: 'center'
    },
    fbDetailsContainer: {
        backgroundColor: "white",
        padding: 30,
        borderRadius: 30,
        width: "95%",
        marginTop: 10
    },
    foodbankNameText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    searchBar : {

        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: 380,
        marginTop: 20

    }
})

export default Messages