import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import {useImages} from "@/src/context/imageContext";

export const EditImage = () => {
    const { setImageUri } = useImages();

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.row}>

                    <View style={styles.card}>
                        <TouchableOpacity onPress={pickImage}>
                            <Feather name="image" size={35} color="#333" />
                        </TouchableOpacity>
                        <Text style={styles.postName}>Gallery</Text>
                    </View>
                    <View style={styles.card}>
                        <Ionicons name="camera" size={38} color="#333" />
                        <Text style={styles.postName}>Camera</Text>
                    </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF5F0',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    card: {
        height: 160,
        width: 160,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        backgroundColor: '#fff',
    },
    postName: {
        fontSize: 18,
        fontWeight: '600', // Corrected from 'semibold'
        color: '#333',
    },
});
