import React, { createContext, useState, useContext } from 'react';

const ImageContext = createContext<any>(null);
interface ImageProviderProps {
    children: React.ReactNode;
    imageUri: string | null;
    setImageUri: (imageUri: string | null) => void;
}
// @ts-ignore
export const ImageProvider = ({ children }) => {
    const [imageUri, setImageUri] = useState<string | null>(null);

    return (
        <ImageContext.Provider value={{ imageUri, setImageUri }}>
            {children}
        </ImageContext.Provider>
    );
};

export const useImages = () => useContext(ImageContext);