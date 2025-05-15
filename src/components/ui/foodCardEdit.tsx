import React from 'react';
import {View, Image, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import {FoodCardProps} from "@/src/components/ui/foodCard";
import {Feather} from "@expo/vector-icons";

 const FoodCardEdit = ({name, image, price}:FoodCardProps) => {
     const [priceText, onChangeText] = React.useState(price);
     const [nameText, onChangeNameText] = React.useState(name);
    return(
        <View style={[styles.EditContainer]}>
            <View style={[styles.imageCon]}>
                <View style={styles.upperImgBox}>
                    <View style={styles.ImageBor}>
                        <Image
                            source={{ uri: image }} style={styles.imageEdit}

                        />
                    </View>
                    <View style={styles.EditBox}>
                        <View style={styles.changeImg}>
                            <TouchableOpacity>
                                <Feather size={18} name="edit" color={'#fff'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.itemsCon}>
                <View style={styles.ProductName}>
                    <Text style={styles.Heading}>Food Name</Text>
                    <View style={styles.textInput}>
                        <TextInput
                            style={styles.input}
                            value={nameText}
                            onChangeText={onChangeNameText}
                            placeholder="Enter product name"
                            placeholderTextColor="#aaa"
                        />
                    </View>
                </View>
                <View style={styles.ProductPrice}>
                    <Text style={styles.Heading}>Food Price </Text>
                    <View style={styles.textInput}>
                        <TextInput
                            style={styles.input}
                            value={priceText}
                            onChangeText={onChangeText}
                            placeholder="Enter price"
                            keyboardType="numeric"
                            placeholderTextColor="#aaa"
                        />
                    </View>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                    >
                        <View style={[styles.btn, styles.btnCancelBg]}>
                            <Text style={styles.btnText}>Cancel</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    >
                        <View style={[styles.btn, styles.btnSaveBg]}>
                            <Text style={styles.btnText}>Save</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default FoodCardEdit;
 
 
 const styles = StyleSheet.create({
     EditContainer: {
         height: '81%',
         width: '100%',
     },
     imageCon: {
         height: 240,
         width: '100%',
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
         position:'relative',
     },
     itemsCon: {
         height: 230,
         width: '100%',
         flexDirection: 'column',
         alignItems: 'center',
     },
     upperImgBox: {
         height: 215,
         width: 230,
         flexDirection: 'column',
         alignItems: 'center',
     },
     ImageBor: {
         height: 200,
         width: 200,
         borderWidth: 1,
         borderRadius: 12,
         borderColor:"rgba(255,99,71,0.8)",
         alignItems: 'center',
         justifyContent: 'center',
         position: 'relative',
     },
     imageEdit: {
         height: 170,
         width: 170,
         borderRadius: 12,
     },
     ProductName: {
         height: 50,
         width: 383,
         marginTop: 6,
     },
     ProductPrice: {
         height: 50,
         width: 383,
         marginTop: 20,
     },
     Heading: {
         paddingHorizontal: 5,
     },

     btnContainer: {
         height: 70,
         width: 383,
         marginTop: 30,
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'space-evenly',
     },
     btn: {
         height: 40,
         width: 170,
         backgroundColor: '#333945',
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'center',
         color: '#ffffff',
         borderRadius: 4,
     },
     btnText: {
         color: '#ffffff',
     },
     btnSaveBg: {
         backgroundColor: '#FF6347',
     },
     btnCancelBg: {
         backgroundColor: '#2e4259',
     },
     textInput: {
         height: 40,
         width: '100%',
         borderColor:"rgba(255,99,71,0.8)",
         borderBottomWidth: 1,
         borderRadius: 8,
         paddingHorizontal: 10,
         marginTop: 8,
         justifyContent: 'center',
     },
     input: {
         fontSize: 16,
         color: '#333',
         flex: 1,
         fontWeight: 'bold',
     },
     EditBox: {
         position: 'absolute',
         bottom: -0,
         right: -1,
         zIndex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         marginRight:7,
     },

     changeImg: {
         height: 35,
         width: 35,
         backgroundColor:"rgba(255,99,71,0.8)",
         borderRadius: 25,
         justifyContent: 'center',
         alignItems: 'center',
         shadowColor: '#000',
         shadowOffset: { width: 0, height: 2 },
         shadowOpacity: 0.2,
         shadowRadius: 3,
         elevation: 5,
     },
 })