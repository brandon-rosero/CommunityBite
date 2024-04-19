import React, { useLayoutEffect } from 'react'
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Messages from '../screens/Messages'
import ViewDonors from '../screens/viewDonors';
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Settings from '../screens/Settings'  
import DonorForm from '../screens/DonorForm';
import Form from '../screens/Form'
import DonationLog from '../screens/DonationLog';

const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function Drawers() {

    return (

        <Drawer.Navigator>

            <Drawer.Screen name="Home" component={Home} options={{headerShown:true}} />
            <Drawer.Screen name="Settings" component={Settings} options={{headerShown:true}} />
            
        </Drawer.Navigator>

    )

    // return (

    //     <Drawer.Navigator>

    //         <Drawer.Screen name="Profile" component={Profile} options={{headerShown:true}} />
    //         <Drawer.Screen name="Settings" component={Settings} options={{headerShown:true}} />
            
    //     </Drawer.Navigator>

    // )

}

const FoodBankHome = () => {

    

    return(
    
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: () => {
                if(route.name === 'Food Inventory'){

                    return <Image source={require('../assets/inventory.png')} style={styles.barIcon}/>

                }
                else if(route.name === 'Donation History'){

                    return <Image source={require('../assets/historyLog.png')} style={styles.barIcon}/>
                    
                }
                else if(route.name === 'Nearby Donors'){

                    return <Image source={require('../assets/viewDonorsIcon.png')} style={styles.barIcon}/>

                }
                else if(route.name === 'Home'){

                    return <Image source={require('../assets/homepage.png')} style={styles.barIcon}/>

                }
            },
            tabBarStyle: {

                backgroundColor: '#F09B76',
                height: 100,

            },

            headerStyle:{

                height: 125,

            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'black',
            
   
        })}>
            <Tab.Screen name="Home" component={Drawers} options={headerOptions}/>
            <Tab.Screen name="Food Inventory" component={DonationLog} />
            <Tab.Screen name="Nearby Donors" component={ViewDonors} />
            <Tab.Screen name="Donation History" component={DonationLog} />
        </Tab.Navigator>       

    )
}

const headerOptions = {
    headerShown:false,

}

const styles = StyleSheet.create({

    userIcon: {

        height: 24,
        width: 24,
        left: 30

    },
    barIcon: {

        height: 34,
        width: 34,

    },
    settingsIcon: {
        
        height: 24,
        width: 24,
        right: 30
 
    },
    logo: {

        width: 160,
        height: 50

    },
    headerWrapper: {
        
        width: '100%',
        flexDirection: 'row',
        bottom: 325,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    
    }
    
})

export default FoodBankHome