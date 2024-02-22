import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Messages from '../screens/Messages'
import Forum from '../screens/Forum'
import FoodBankHome from './FoodBankHome'
import ViewDonors from '../screens/viewDonors';
import Profile from '../screens/Profile'
import Settings from '../screens/Settings'

const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function Drawers() {

    return (

        <Drawer.Navigator>
            
            <Drawer.Screen name="Home" component={FoodBankHome} options={{headerShown:true}} />
            <Drawer.Screen name="Profile" component={Profile} options={{headerShown:true}} />
            <Drawer.Screen name="Settings" component={Settings} options={{headerShown:true}} />
            
        </Drawer.Navigator>

    )

}

function Tabs(){

    return (
        
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: () => {
                if(route.name === 'Messages'){

                    return <Image source={require('../assets/messagesIcon.png')} style={styles.barIcon}/>

                }
                else if(route.name === 'Forum'){

                    return <Image source={require('../assets/forumIcon.png')} style={styles.barIcon}/>

                }
                else if(route.name === 'View Donors'){

                    return <Image source={require('../assets/viewDonorsIcon.png')} style={styles.barIcon}/>

                }
                else if(route.name === 'Home'){

                    return <Image source={require('../assets/homepage.png')} style={styles.barIcon}/>

                }
            },
            tabBarStyle: {

                backgroundColor: '#F09B76',
                height: 100

            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'black',
            
   
        })}>
            <Tab.Screen name="Home" component={Drawers} options={headerOptions}/>
            <Tab.Screen name="Messages" component={Messages} />
            <Tab.Screen name="View Donors" component={ViewDonors} />
            <Tab.Screen name="Forum" component={Forum} />
        </Tab.Navigator>

    )

}

const Navigation = () => {
    
    return(
        
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>

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

        height: 38,
        width: 38,

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

export default Navigation