import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FoodBankHome from './components/FoodBankHome';
import NavigationFoodBank from './components/NavigationFoodBank';
import NavigationDonor from './components/NavigationDonor'

export default function App() {
  
  return ( 
    <NavigationFoodBank />
    //<NavigationDonor />

  );
}
