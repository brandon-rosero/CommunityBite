import React, { useContext, useState } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Pressable, FlatList, Touchable, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { InventoryContext } from '../globalContext';

const Inventory = () => {

    const navigation = useNavigation();

    const [products, setProducts] = useContext(InventoryContext)
    const [text, setText] = useState('')

    function setItems(){

        products.push({productName: text, quantity: 0});

        setProducts(products)

        setText('')
        

    }

    return(
        
        <View style={styles.productContainer}>
            
            <View style = {{marginTop: 20, marginBottom: 10}}>
                <Text style={{textAlign: "center"}}>
                    <Text style={{fontSize: 18}}>Product                                              </Text>
                    <Text style={{fontSize: 18}}> Quantity </Text>
                </Text>
            </View>
            <FlatList 
                data={products.sort((a, b) => a.quantity.toString().localeCompare(b.quantity))}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableHighlight style={styles.productStyle} underlayColor="#DDDDDD" onPress={() => navigation.navigate('Change Quantity', { name: item.productName, quantity: item.quantity })}>   
                        <View style={{flex:1, flexDirection:"row"}}>
                            <View style={{flex:1}}>
                                <Text>{item.productName}</Text>
                            </View>
                            <View style={{flex:1}}>
                                <Text style={{textAlign:"right"}}>{item.quantity}</Text>
                            </View>   
                        </View>
                    </TouchableHighlight>  
                    
                )}
            />

            <View style={styles.addProductContainer}>
                
                <View style={styles.productInputContainer}>
                    <TextInput
                        style={styles.productInput}
                        onChangeText={newText => setText(newText)}
                        defaultValue={text}
                    
                    />

                    <Button
                        title='Add Product'
                        onPress={() =>  setItems()}
                    />
                </View>
                   
            </View>
            
        </View> 
       
    )
}

const styles = StyleSheet.create({

    productContainer: {
        flex: 1,
        height: "100%",
        paddingHorizontal: 20,
       
    },
    productStyle: {
        backgroundColor: "white",
        padding: 30,
        borderRadius: 30,
        marginTop: 10,
        width: "100%"
    },
    addProductContainer: {

        backgroundColor: "white",
        padding: 30,
        borderRadius: 30,
        height: "20%",
        marginTop: 20,
        marginBottom: 20

    },
    productInput: {

        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,


    },
    productInputContainer: {

        top: -5

    }

})

export default Inventory