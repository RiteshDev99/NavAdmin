import React, { createContext, useState, useContext } from 'react';

import { Client, Storage, ID} from 'react-native-appwrite';

const MenuEditContext = createContext<any>(null);

// @ts-ignore
export const ImageProvider = ({ children }) => {
    const [imageUri, setImageUri] = useState<string | null>('https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?semt=ais_hybrid&w=740');
    const [foodName, setFoodName] = useState<string | null>('Egg Roll');
    const [foodPrice, setFoodPrice] = useState<string | null>('₹80');
    const [closeSheet, setCloseSheet] = useState<boolean>(false);

    const client = new Client();

    client
        .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
        .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

    const storage = new Storage(client);

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





    return (
        <MenuEditContext.Provider
            value={{
                imageUri,
                setImageUri,
                foodName,
                setFoodName,
                foodPrice,
                setFoodPrice,
                closeSheet,
                setCloseSheet,
                ImageUpload,
            }}
        >
            {children}
        </MenuEditContext.Provider>
    );
};

export const useImages = () => useContext(MenuEditContext);
