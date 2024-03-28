import React, { useLayoutEffect, useContext } from 'react'
import { StyleSheet, Text, View, Image, Pressable, Button, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavigationFoodBank from '../components/NavigationFoodBank'
import { useForm, Controller } from 'react-hook-form'
//import {globalContext} from '../globalContext.js'
import { useGlobalState } from '../globalContext';


const LoginScreen = () => {

    const [state, dispatch] = useGlobalState();
    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        //data.email, data.password, data.selectedUserType
        dispatch({username: data.email, userType: data.selectedUserType})    // Update global state's username (username = data.email, ...)

        Alert.alert("Logged in", "Sucessfully logged in!");
        
        if(data.selectedUserType == "donor"){
            navigation.navigate('DonorHome')
        }
        else if(data.selectedUserType == "bank"){
            navigation.navigate('FoodBankHome')
        }
        else{
            alert("ERROR: Cannot determine user type");
        }
        

    }

    const navigation = useNavigation();

    return(
        
        <View style={{backgroundColor: 'white'}}>

            <View style={styles.loginContainer}>
                
                <View style={styles.textContainer}>
                
                    <Image source={require('../assets/logo.png')} style={styles.logo}/>
                
                </View>
                <View style={styles.textInputContainer}>
                    
                    <Controller 
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput 
                                placeholder='Email' 
                                style={styles.emailInput} 
                                autoComplete="off" 
                                autoCapitalize="none" 
                                autoCorrect={false}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                
                            /> 
                        )}
                        name="email"
                        rules={{required: "Please input an email"}}
                        
                
                    />
                    <Controller
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput 
                                placeholder='Password' 
                                style={styles.passwordInput} 
                                secureTextEntry={true} 
                                autoComplete="off" 
                                autoCapitalize="none" 
                                autoCorrect={false}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}

                            /> 
                        )}
                        name="password"
                        rules={{required: "Please input a password", maxLength: 10}}
                    />
                </View>

                <Controller 
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <View>
                    <Text style={styles.label}>Select User Type:</Text>
                    <View style={styles.radioContainer}>
                        <Pressable style={styles.radioOption} onPress={() => onChange('donor')}>
                        <Text>Food Donor</Text>
                        {value === 'donor' && <View style={styles.radioDot} />}
                        </Pressable>
                        <Pressable style={styles.radioOption} onPress={() => onChange('bank')}>
                        <Text>Food Bank</Text>
                        {value === 'bank' && <View style={styles.radioDot} />}
                        </Pressable>
                    </View>
                    </View>
                )}
                name="selectedUserType"
                defaultValue="donor"
                />
                
                <Text onPress={handleSubmit(onSubmit)} style={styles.loginTextButton}>Log in</Text>
                <Text style={styles.signInText}>Don't have an account? <Text onPress={() => navigation.navigate('Sign Up')} style = {styles.signUpText}>Sign up</Text> </Text>
            </View>

            
           
        </View>
    
    )
}

const styles = StyleSheet.create({
    logo:{

        height:100,
        width: 275

    },
    loginContainer: {

        justifyContent: 'center',
        alignItems: 'right',
        gap: 20,
        width: '100%',
        height: '100%',
        left: 70,
        marginTop: -10


    },
    textContainer:{

        gap: 5,

    },
    textInputContainer:{

        gap: 10,
        right: 8

    },
    signUpText:{

        fontWeight: 'bold',
        color: '#F09B76'

    },
    loginTextButton:{

        fontWeight: 'bold',
        color: '#F09B76',
        left: 205,
        fontSize: 20

    },
    loginText: {

        fontSize: 45,
        fontWeight: 'bold',

    },
    signInText: {

        fontSize: 15,
        fontWeight: 'normal',

    },
    emailInput: {

        borderWidth: 1,
        padding: 8,
        width: 300,
        borderRadius: 5,
        borderWidth: 0

    },
    passwordInput: {

        borderWidth: 1,
        padding: 8,
        width: 300,
        borderRadius: 5,
        borderWidth: 0

    },
    // radioContainer: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     marginBottom: 10,
    // },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'black',
        marginLeft: 5,
      }


})

export default LoginScreen