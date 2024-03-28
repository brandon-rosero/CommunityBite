import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Welcome to Community Bite</Text>
        <Text style={styles.description}>
          Community Bite is an application that connects food businesses with nearby food banks and other organizations focused on alleviating hunger and reducing food waste.
        </Text>
        <Text style={styles.goal}>Our Goal:</Text>
        <Text style={styles.goalDescription}>
          To bridge the gap between surplus food and those in need, empowering individuals and food businesses to fight food waste and promote community commitment.
        </Text>
        <Text style={styles.howItWorks}>How It Works:</Text>
        <Text style={styles.sectionTitle}>For Donors:</Text>
        <Text style={styles.feature}>
          • Donate food by filling out the donor form.
        </Text>
        <Text style={styles.feature}>
          • Send messages to food banks by clicking on the message icon in the bottom navigation.
        </Text>
        <Text style={styles.feature}>
          • Use the map view to find nearby food banks for direct donations.
        </Text>
        <Text style={styles.feature}>
          • Choose between two types of donations: direct and nearby.
        </Text>
        <Text style={styles.feature}>
          • For direct donations, type the name of the food bank to send a notification directly to them.
        </Text>
        <Text style={styles.feature}>
          • For nearby donations, the notification will be sent to all nearby food banks, and any of them can accept it.
        </Text>
        
        <Text style={styles.sectionTitle}>For Food Banks:</Text>
        <Text style={styles.feature}>
          • View nearby donations on the map.
        </Text>
        <Text style={styles.feature}>
          • Communicate with donors via messages.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  goal: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  goalDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  howItWorks: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  feature: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 8,
  },
});

export default HomeScreen;
