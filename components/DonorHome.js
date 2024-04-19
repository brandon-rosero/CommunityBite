import React, { useLayoutEffect } from 'react'
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Messages from '../screens/Messages'
import ViewDonors from '../screens/viewDonors';
import Profile from '../screens/Profile'
import Settings from '../screens/Settings'  
import Home from '../screens/Home'
import DonationForm from '../screens/Form'
import DonorForm from '../screens/DonorForm';
import { Form } from 'react-hook-form';

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

const DonorHome = () => {

    return(
    
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: () => {
                if(route.name === 'View Food Banks'){

                    return <Image source={require('../assets/viewDonorsIcon.png')} style={styles.barIcon}/>

                }
                else if(route.name === 'Search'){

                    return <Image source={require('../assets/searchIcon.png')} style={styles.barIcon}/>

                }
                else if(route.name === 'Donate'){

                    return <Image source={require('../assets/sumIcon.png')} style={styles.barIcon}/>

                }
                else if(route.name === 'Home'){

                    return <Image source={require('../assets/homepage.png')} style={styles.barIcon}/>

                }
            },
            tabBarStyle: {

                backgroundColor: '#F09B76',
                height: 100

            },

            headerStyle:{

                height: 125,

            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'black',
            
   
        })}>
            <Tab.Screen name="Home" component={Drawers} options={headerOptions}/>
            <Tab.Screen name="Search" component={Messages} />
            <Tab.Screen name="View Food Banks" component={ViewDonors} />
            <Tab.Screen name="Donate" component={DonationForm} />
            
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

export default DonorHome