import React, {useRef} from 'react';
import {StyleSheet, Text, View, Image, Pressable, TouchableOpacity} from "react-native";
import RBSheet from 'react-native-raw-bottom-sheet';
import EditFoodCard from "@/src/components/ui/cards/editFoodCard";

export interface FoodCardProps {
    name:string,
    price:string,
    image:string,
}
export const FoodCard = ({name,price,image}:FoodCardProps) => {
    // @ts-ignore
    const refRBSheet = useRef<RBSheet | null>(null);
    return(
        <>
            <Pressable style={styles.container}
                       onPress={() => refRBSheet.current.open()}
            >
                <View style={styles.innerContainer}>

                    {image ? (
                        <Image source={{ uri: image }} style={styles.foodImage} />
                    ) : (
                        <View style={[styles.foodImage, { backgroundColor: '#ccc' }]}>
                            <Text>No Image</Text>
                        </View>
                    )}        
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.priceText}>{price}</Text>
                    <Text style={styles.foodName}>{name}</Text>
                </View>
            </Pressable>
            <RBSheet
                ref={refRBSheet}
                height={550}
                openDuration={225}
                closeDuration={210}
                customStyles={{
                    container: [styles.sheetContainer,],
                    wrapper: styles.sheetWrapper,
                }}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => refRBSheet.current.close()}

                    >
                        <Text style={styles.headerText}>Edit Food</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.detailsSheet}>
                    <EditFoodCard
                    />
                </View>
            </RBSheet>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height:185,
        width:175,
        borderWidth:1,
        // borderColor:"rgba(255,99,71,0.8)",
        borderColor:'#ccc',
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
    detailContainer:{
        flex:1,
        // backgroundColor: '#FF6347',
        // backgroundColor:'rgba(44,62,80,0.42)',
        backgroundColor:'rgba(44,62,80,0.93)',
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:10,
        paddingVertical:5,

    },
    foodName:{
        fontSize:14,
        fontWeight: "600",
        textAlign:"center",
        marginTop:2,
        marginBottom:2,
        color: '#F1F1F1'
    },
    priceText:{
        fontSize:14,
        fontWeight:"bold",
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
    sheetContainer: {
        borderTopLeftRadius: 20,
        backgroundColor:'#FFF5F0',
        borderTopRightRadius: 20,
    },
    sheetWrapper: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    postName: {
        fontSize: 18,
        fontWeight: 'semibold',
    },
    header:{
        height:50,
        width:'100%',
        // backgroundColor:'#FF6347',
        backgroundColor:'rgba(44,62,80,0.93)',
        flexDirection:"row",
        alignItems:"center",
    },
    headerText:{
        fontSize:17,
        fontWeight:"semibold",
        paddingHorizontal:12,
        paddingVertical:12,
        color: '#F1F1F1'
    },
    detailsSheet:{
        flex:1,
    }
})