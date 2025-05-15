import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import {Feather} from "@expo/vector-icons";

interface FoodCardProps {
    name:string,
    price:string,
    image:string,
}
export const FoodCard = ({name, image, price}:FoodCardProps) => {
    return(
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image
                    style={styles.foodImage}
                    source={{ uri: image }}
                />
            </View>
            <View style={styles.editIcon}>
                <TouchableOpacity
                    onPress={() => {}}

                >
                    <Feather size={18} name="edit" color={'#fff'} />
                </TouchableOpacity>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.priceText}>{price}</Text>
              
                    <Text style={styles.foodName}>
                        {name}
                    </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:195,
        width:175,
        borderWidth:1,
        // borderColor:"rgba(44,62,80,0.29)",
        borderColor:"rgba(255,99,71,0.8)",
        borderRadius:13,
        overflow:'hidden',
    },

    innerContainer: {
        height:150,
        width:'100%',
        flexDirection:"row",

    },
    foodImage:{
        height:'100%',
        width:'100%',
        resizeMode:"cover",
    },
    editIcon:{
        height:40,
        width:40,
        borderRadius:25,
        backgroundColor:"rgba(255,99,71,0.8)",
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        top:106,
        right:3,
        zIndex:10,
    },
    detailContainer:{
        flex:1,
        backgroundColor: '#FF6347',
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:10,
        paddingVertical:5,

    },
    foodName:{
        fontSize:16,
        fontWeight: "600",
        textAlign:"center",
        marginTop:2,
        marginBottom:2,
        // color:"rgba(255,99,71,0.8)",
        color: '#F1F1F1'
    },
    priceText:{
        fontSize:16,
        fontWeight:"bold",
        // color:"rgba(255,99,71,0.8)",
        color: '#F1F1F1'
    },
    innerEditContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 14,
        backgroundColor:'rgba(255,99,71,0.8)',
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 8,
    },
})