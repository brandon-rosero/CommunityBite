import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FoodBankHome from './components/FoodBankHome';
import NavigationFoodBank from './components/NavigationFoodBank';
import NavigationDonor from './components/NavigationDonor'
import {useState, React} from "react"
import {GlobalProvider} from "./globalContext"
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App() {
  const [username, setUsername] = useState("");
  
  return ( 
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GlobalProvider>
        <NavigationFoodBank />
      </GlobalProvider>
    </GestureHandlerRootView>
  );
}

export default App;
