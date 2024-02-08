import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Messages from '../screens/Messages'
import Forum from '../screens/Forum'
import FoodBankHome from './FoodBankHome'
import ViewDonors from '../screens/viewDonors';

const Tab = createBottomTabNavigator()

function Tabs(){

    return (
    
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: () => {
                
                if(route.name === 'Messages'){

                    return <Image source={require('../assets/messagesIcon.png')} style={styles.barIcon}/>

                }
                else if(route.name === 'Forum'){

                    return <Image source={require('../assets/forumIcon.png')} style={styles.barIcon}/>

                }else if(route.name === 'View Donors'){

                    return <Image source={require('../assets/viewDonorsIcon.png')} style={styles.barIcon}/>

                }
            },
            tabBarStyle: {

                backgroundColor: '#F09B76',
                height: 100

            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'black',
            headerStyle:{

                height: 115

            }
   
        })}>
            <Tab.Screen name="Messages" component={Messages} options={headerOptions}/>
            <Tab.Screen name="View Donors" component={ViewDonors} options={headerOptions}/>
            <Tab.Screen name="Forum" component={Forum} options={headerOptions}/>
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
    headerTitle: () => <Image source={require('../assets/logo.png')} style={styles.logo}/>,
    headerLeft: () => <Image source={require('../assets/userIcon.png')} style={styles.userIcon}/>,
    headerRight: () => <Image source={require('../assets/settingsIcon.png')} style={styles.settingsIcon}/>

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