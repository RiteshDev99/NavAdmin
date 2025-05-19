import React, { useRef, useState } from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { Feather } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import { EditImage } from "@/src/components/ui/editImage";
import { useImages } from "@/src/context/menuEditContext";
type RBSheetRef = {
    open: () => void;
    close: () => void;
};

const EditFoodCard = () => {
    const {
        imageUri,
        foodName,
        setFoodName,
        foodPrice,
        setFoodPrice,
        closeSheet
    } = useImages();

    const [loading, setLoading] = useState(false);
    const refRBSheet = useRef<RBSheetRef | null>(null);

    function handleSave() {
        setLoading(true);
        try {
            refRBSheet.current?.close();
        } catch (error) {
            console.log((error as Error).message);
            setLoading(false);
        }
    }

   

    return (
        <>
            <View style={styles.EditContainer}>
                <View style={styles.imageCon}>
                    <View style={styles.upperImgBox}>
                        <View style={styles.ImageBor}>
                            <Image
                                source={{ uri: imageUri }}
                                style={styles.imageEdit}
                            />
                        </View>

                        <TouchableOpacity style={styles.EditBox}>
                            <View style={styles.changeImg}>
                                <TouchableOpacity
                                    onPress={() => refRBSheet.current?.open()}
                                >
                                    <Feather size={18} name="edit" color={'#fff'} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.itemsCon}>
                    <View style={styles.ProductName}>
                        <Text style={styles.Heading}>Food Name</Text>
                        <View style={styles.textInput}>
                            <TextInput
                                style={styles.input}
                                value={foodName}
                                onChangeText={setFoodName}
                                placeholder="Enter product name"
                                placeholderTextColor="#aaa"
                            />
                        </View>
                    </View>

                    <View style={styles.ProductPrice}>
                        <Text style={styles.Heading}>Food Price</Text>
                        <View style={styles.textInput}>
                            <TextInput
                                style={styles.input}
                                value={foodPrice}
                                onChangeText={setFoodPrice}
                                placeholder="Enter price"
                                keyboardType="numeric"
                                placeholderTextColor="#aaa"
                            />
                        </View>
                    </View>

                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={refRBSheet.current?.close}>
                            <View style={[styles.btn, styles.btnCancelBg]}>
                                <Text style={styles.btnText}>Cancel</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleSave}>
                            <View style={[styles.btn, styles.btnSaveBg]}>
                                <Text style={styles.btnText}>Save</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <RBSheet
                ref={refRBSheet}
                height={350}
                openDuration={550}
                closeDuration={550}
                onClose={closeSheet}
                customStyles={{
                    container: styles.sheetContainer,
                    wrapper: styles.sheetWrapper,
                }}
            >
                <View style={styles.header}>
                    <Text style={styles.headerText}>Edit Image</Text>
                </View>

                <EditImage />
            </RBSheet>
        </>
    );
};

export default EditFoodCard;



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
         // borderColor:"rgba(255,99,71,0.8)",
         borderColor:'#ccc',
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
         // borderColor:"rgba(255,99,71,0.8)",
         borderColor:'#ccc',
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
    
 })