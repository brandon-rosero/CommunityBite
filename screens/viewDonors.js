import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const ViewDonors = () => {
    return(

        <View style={styles.mapContainer}>
            <MapView 
                style={styles.mapStyle} 
                provider={PROVIDER_GOOGLE} 
                showsUserLocation={true}
                showsMyLocationButton={true}
                zoomEnabled={true}
                
            >
            </MapView>
            <View style={styles.locationsList}>
                <Text>Nearby locations go here</Text>

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
        height: 328,
        marginTop: 10,
        alignItems: "center",
       
    }

})

export default ViewDonors