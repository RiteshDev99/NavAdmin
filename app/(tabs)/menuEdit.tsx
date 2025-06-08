import {StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FoodCard } from '@/src/components/ui/cards/foodCard';
import { StatusBar } from 'expo-status-bar';
import {useImages} from "@/src/context/menuEditContext";
import {useEffect} from "react";

export default function MenuEditTab() {
    const {documents, fetchData,} = useImages();

    useEffect(() => {
        fetchData();
        console.log("Fetched documents:", documents);
    }, []);
    return (
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
        </SafeAreaView>
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
});
