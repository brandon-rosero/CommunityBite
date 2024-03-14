import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const DonationForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    // You can handle form submission logic here
  };

  return (
    <View style={{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', flex: 1}}>
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
                style={styles.input} 
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
                placeholder='Phone Number' 
                style={styles.input} 
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                keyboardType="phone-pad"
              /> 
            )}
            name="number"
            rules={{required: "Please input a phone number"}}
          />
          <Controller 
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput 
                placeholder='Type of Donation' 
                style={styles.input} 
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              /> 
            )}
            name="donationType"
            rules={{required: "Please input the type of donation"}}
          />
          <Controller 
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <View>
                <Text style={styles.label}>Select Donation Method:</Text>
                <View style={styles.radioContainer}>
                  <Pressable style={styles.radioOption} onPress={() => onChange('nearby')}>
                    <Text>Nearby Donation</Text>
                    {value === 'nearby' && <View style={styles.radioDot} />}
                  </Pressable>
                  <Pressable style={styles.radioOption} onPress={() => onChange('direct')}>
                    <Text>Direct Donation</Text>
                    {value === 'direct' && <View style={styles.radioDot} />}
                  </Pressable>
                </View>
              </View>
            )}
            name="donationMethod"
            defaultValue="nearby"
          />
          <Controller 
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput 
                placeholder='List of Items' 
                style={[styles.input, {height: 100}]} 
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                multiline
              /> 
            )}
            name="itemList"
          />
        </View>
        <Pressable onPress={handleSubmit(onSubmit)} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 275
  },
  loginContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginBottom: 20,
  },
  textInputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    width: '100%',
    marginBottom: 10,
    borderRadius: 5,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
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
  },
  button: {
    backgroundColor: '#F09B76',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DonationForm;