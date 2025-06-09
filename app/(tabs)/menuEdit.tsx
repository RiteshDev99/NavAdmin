import {StyleSheet, ScrollView, ActivityIndicator, View, Text, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FoodCard } from '@/src/components/ui/cards/foodCard';
import { StatusBar } from 'expo-status-bar';
import {useImages} from "@/src/context/menuEditContext";
import React, {useEffect, useRef} from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import EditFoodCard from "@/src/components/ui/cards/editFoodCard";

export default function MenuEditTab() {
    const {documents, fetchData,} = useImages();
    // @ts-ignore
    const refRBSheet = useRef<RBSheet | null>(null);

    useEffect(() => {
        fetchData();
    }, []);
    return (
<>
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" backgroundColor="#FFF5F0" />
            <ScrollView contentContainerStyle={styles.innerContainer}>
                {Array.isArray(documents) && documents.length > 0 ? (
                    documents.map((item) => (
                        <FoodCard
                            key={item.$id}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                        />
                    ))
                ) : (
                  <ActivityIndicator size={'large'}  color="#FFF5F0" />

                )}
            </ScrollView>
      <TouchableOpacity
          onPress={() => refRBSheet.current.open()}
          
      >
         <View style={styles.addItem}>
          <Text style={{fontSize:35, color:'#fff'}}>+</Text>
        </View>
      </TouchableOpacity>

        </SafeAreaView>

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
                <Text style={styles.headerText}>Add Item</Text>
            </TouchableOpacity>

        </View>
        <View style={styles.detailsSheet}>
            <EditFoodCard
            />
        </View>
    </RBSheet>

</>
    

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF5F0',
        flex: 1,
    },
    innerContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap:15,
    },
    addItem:{
        height: 65,
        backgroundColor:'#FF6347',
        width:65,
        borderRadius: 50,
        position:'absolute',
        bottom:20,
        right:13,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

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
});
