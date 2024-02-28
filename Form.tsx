import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button, TextInput } from 'react-native';
import Tabs from '../Navigation/tabs';


type DonationProps = {
    navigation: StackNavigationProp<any>; // You can replace 'any' with the specific stack navigator types if you have defined them
}

const Form: React.FC<DonationProps> = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [donationType, setDonationType] = useState('');
    const [donatedItems, setDonatedItems] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        // Handle form submission here
        setSubmitted(true);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Donation Form</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={text => setFirstName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={text => setLastName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Type of Donation"
                    value={donationType}
                    onChangeText={text => setDonationType(text)}
                />
                <TextInput
                    style={[styles.input, { height: 100 }]}
                    multiline
                    placeholder="List of Items"
                    value={donatedItems}
                    onChangeText={text => setDonatedItems(text)}
                />
                <Button title="Submit" onPress={handleSubmit} />
                {submitted && <Text style={styles.successMessage}>Form Submitted Successfully!</Text>}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5DC', // Light hazel color
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    successMessage: {
        color: 'green',
        marginTop: 10,
    },
});

export default Form;