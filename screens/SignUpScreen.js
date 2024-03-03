import React from 'react'
import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form'

const SignUpScreen = () => {

    const navigation = useNavigation();

    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        //data.email, data.password

        alert(JSON.stringify(data));
        
        navigation.navigate('Home')

    }

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
                                placeholder='Full Name' 
                                style={styles.emailInput} 
                                autoComplete="off" 
                                autoCapitalize="none" 
                                autoCorrect={false}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            /> 
                        )}
                        name="fullname"
                        rules={{required: "Please input a name"}}
                    />
                    <Controller 
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                        <TextInput 
                            placeholder='Username' 
                            style={styles.emailInput} 
                            autoComplete="off" 
                            autoCapitalize="none" 
                            autoCorrect={false}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}

                        /> 
                        )}
                        name="username"
                        rules={{required: "Please input a username"}}
                    />
                    <Controller 
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput 
                                placeholder='Phone Number' 
                                style={styles.emailInput} 
                                autoComplete="off" 
                                autoCapitalize="none" 
                                autoCorrect={false}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}

                            /> 
                        )}
                        name="number"
                        rules={{required: "Please input a phone number"}}
                    />
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
                        rules={{required: "Please input a password"}}
                    />
                </View>
                <Text onPress={handleSubmit(onSubmit)} style={styles.loginTextButton}>Sign Up</Text>
                <Text style={styles.signInText}>Already have an account? <Text onPress={() => navigation.navigate('Login')} style = {styles.signUpText}>Login</Text> </Text>
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

    }


})

export default SignUpScreen