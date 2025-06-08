import React, { createContext, useState, useContext } from 'react';

import { Client, Storage, ID} from 'react-native-appwrite';
import {Databases, Query} from "appwrite";
import {Alert} from "react-native";


interface PostData {
    name: string;
    price: string;
    image?: string;
}

const MenuEditContext = createContext<any>(null);

// @ts-ignore
export const ImageProvider = ({ children }) => {
    const [imageUri, setImageUri] = useState<string | null>('');
    const [foodName, setFoodName] = useState<string | null>('Egg Roll');
    const [foodPrice, setFoodPrice] = useState<string | null>('₹80');
    const [documents, setDocuments] = useState<any[]>([]);


    const client = new Client();
    const storage = new Storage(client);
    // @ts-ignore
    const databases = new Databases(client);

    client
        .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
        .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);
    const DATABASE_ID = '682d67c200114b3a362f';
    const COLLECTION_ID = '6831763600060d03a889';
    


    async function ImageUpload(imageUri: string) {
        if (!imageUri) {
            
            ImageUpload(imageUri);
            return;
        }

        try {
            const response = await storage.createFile(
                '682bb1cc00174158ec76',
                ID.unique(),
                {
                    name: 'image.jpg',
                    type: 'image/jpeg',
                    size: 1234567,
                    uri: imageUri,
                }
            );
            console.log("Image uploaded successfully:", response);
        } catch (error) {
            console.error("Image upload failed:", error);
        }
    }
    
  



    async function CreatePost({ name, price,image}: PostData) {
        try {
            const response = await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                {
                    name,
                    price,
                    image,
                }
            );
            console.log('Food uploaded successfully:')
            Alert.alert('Food uploaded successfully:')
            return response;
        } catch (error) {
            console.error("Food upload failed:", error);

        }
    }


    const fetchData = async () => {
        try {
            const res = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID,
            );
            console.log("API Response:", res);

            setDocuments(res.documents);
        } catch (error) {
            console.error("Error fetching documents:", error);
        }
    };
    


    return (
        <MenuEditContext.Provider
            value={{
                imageUri,
                setImageUri,
                foodName,
                setFoodName,
                foodPrice,
                setFoodPrice,
                ImageUpload,
                CreatePost,
                fetchData,
                documents,
                setDocuments,
            }}
        >
            {children}
        </MenuEditContext.Provider>
    );
};

export const useImages = () => useContext(MenuEditContext);
