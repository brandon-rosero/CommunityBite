import React, {useEffect, useState, useLayoutEffect} from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import MapView, {Circle, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import * as Location from 'expo-location';
import * as geoLib from 'geolib'
import { getFoodListings } from "../database.js"

const ViewDonors = () => {
    
    const [errorMsg, setErrorMsg] = useState();
    const [location, setLocation] = useState();
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const testMarkers = [{latitude: 37.796586, longitude: -122.408054}, {latitude: 37.792264, longitude: -122.425848}, {latitude: 37.805435053804175, longitude: -122.28586767156946}, 
        {latitude: 37.775806062819306, longitude: -122.40952275399093}]
    
    let lat = 0
    let long = 0
    
    // Function getMarkers() - Retrieves all food listings from the database.
    //   const getMarkers = () => {
    //   console.log("Calling getMarkers")
    //   foodListingArray = []
    //   getFoodListings().then(function(result){
    //       // Each element in foodListingArray is contained in an array: [latitude, longitude, fullName, phoneNumber]
    //       foodListingArray = result
    //       foodListingArray.forEach(element => console.log(element))
    //   }).catch(function(error){
    //       console.log(error)
    //   });
    // }

    useEffect(() => {

        const getPermissions = async () => {

            let { status } = await Location.requestForegroundPermissionsAsync()

            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync({})
            setLocation(currentLocation);
            setLatitude(currentLocation.coords.latitude);
            setLongitude(currentLocation.coords.longitude);
            //console.log(location)
            
        }

        getPermissions();

    }, [location])

    if(errorMsg){

        console.log("Error!");

    }
    else if(latitude && longitude){

        lat = latitude
        long = longitude
        

    }

    return(
    
        <View style={styles.mapContainer}>
            <MapView 
                style={styles.mapStyle} 
                provider={PROVIDER_GOOGLE} 
                showsUserLocation={true}
                showsMyLocationButton={true}
                zoomEnabled={true}  
                initialRegion={{

                    latitude: lat,
                    longitude: long,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05
                    
                }} 
                
            >
            {testMarkers.map((marker) =>(

                geoLib.isPointWithinRadius({latitude: marker.latitude, longitude: marker.longitude},{latitude: lat, longitude: long},5000) ?

                <Marker 
                    coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                    title={"marker"}

                /> : null
                

            ))}
            <Circle 

                center={{latitude: lat, longitude: long}}
                radius={5000}

            />
            </MapView>
            <View style={styles.locationsList}>
                <Text>{lat}</Text>
            </View>
                  
        </View>

    )
}

const styles = StyleSheet.create({
    mapContainer: {
        
        padding: 10,
        alignItems: "center",
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 0,
            height: 0   
        },
        shadowRadius: 2,
        height: "100%",
        
    },
    mapStyle: {
        width: '100%',
        height: 350,
        borderRadius: 20,
        

    },
    locationsList: {

        backgroundColor: "white",
        borderRadius: 20,
        width: '100%',
        height: 247,
        marginTop: 10,
        alignItems: "center",
       
    }

})

export default ViewDonors