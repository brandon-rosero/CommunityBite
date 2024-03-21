import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FoodBankHome from './components/FoodBankHome';
import NavigationFoodBank from './components/NavigationFoodBank';
import NavigationDonor from './components/NavigationDonor'
import {useState, React} from "react"
import {GlobalProvider} from "./globalContext"

function App() {
  const [username, setUsername] = useState("");
  
  return ( 
    <GlobalProvider>
      <NavigationFoodBank />
    </GlobalProvider>
  );
}

export default App;
