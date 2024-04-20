import React, { useState, useContext } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Pressable, FlatList, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { InventoryContext } from '../globalContext';

const InventoryQuantity = ({ route }) => {
    const navigation = useNavigation();
    const {name, quantity} = route.params;

    const [products, setProducts] = useContext(InventoryContext)
    const [text, setText] = useState('')
    const [quan, setQuan] = useState(quantity)

    function setItems(){

        setProducts(products.map((product) => product.productName === name ? {...product, quantity: text} :  product))

        setQuan(text)

        setText('')

    }

    return(
        
        <View style={styles.productContainer}>
        
            <View style={styles.productStyle}>

                <Text style={{fontWeight:"bold", fontSize: 40}}>{name}</Text>

                <Text style={{marginTop: 10}}>x{quan}</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.quantityInput}
                        onChangeText={newText => setText(newText)}
                        defaultValue={text}
                    
                    />

                    <Button
                        title='Update Quantity'
                        onPress={() =>  setItems()}
                    />
                </View>
                
            </View>
        
        </View> 
       
    )
}

const styles = StyleSheet.create({

    productContainer: {
       
        height: "100%",
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 20,
       
    },
    productStyle: {
        backgroundColor: "white",
        padding: 30,
        borderRadius: 30,
        height: "35%"
    },
    quantityInput: {

        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,


    },
    inputContainer: {

        top: 50

    }

})

export default InventoryQuantity