import {createContext, useState, useContext} from 'react'
import * as React from 'react'
import * as Location from 'expo-location';

const globalState = {
    username: "",
    userType: "",
    messages: [],
    getFoodListings: true,  // Change to true later
    foodListingsList: [],
    getFoodBanks: true,  // Change to true later
    foodbankList: []
};


const GlobalContext = React.createContext(globalState)
const DispatchGlobalContext = React.createContext(undefined)

const InventoryContext = React.createContext()

function GlobalProvider({children}){
    //const [username, setUserName] = useState("");

    const [products, setProducts] = useState([

        { productName: 'apple', quantity: 0 },
        { productName: 'potato', quantity: 0 },
        { productName: 'carrot', quantity: 0 },
        { productName: 'onion', quantity: 0 },
        { productName: 'banana', quantity: 0 },
    
    ])

    const [state, dispatch] = React.useReducer(
        (state, newValue) => ({ ...state, ...newValue }),
        globalState
    );

    return(
        <InventoryContext.Provider value={[products, setProducts]}>
            <GlobalContext.Provider value={state}>
                <DispatchGlobalContext.Provider value={dispatch}>
                    {children}
                </DispatchGlobalContext.Provider>
            </GlobalContext.Provider>
        </InventoryContext.Provider>
        
    );
};

const useGlobalState = () => [
    React.useContext(GlobalContext),
    React.useContext(DispatchGlobalContext)
];

export {GlobalContext, DispatchGlobalContext, InventoryContext, GlobalProvider, useGlobalState}
