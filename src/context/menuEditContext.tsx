import React, { createContext, useState, useContext } from 'react';

const MenuEditContext = createContext<any>(null);
// @ts-ignore
export const ImageProvider = ({ children }) => {
    const [imageUri, setImageUri] = useState<string | null>('https://media.istockphoto.com/id/1316673633/photo/close-up-of-hamburger-with-black-background.jpg?s=612x612&w=0&k=20&c=Y7rl6pmy7N8JFmNQPtbhkZk5WHMDNjinvvmyGB2EH94=');
    const [foodName, setFoodName] = useState<string | null>('Egg Roll');
    const [foodPrice, setFoodPrice] = useState<string | null>('₹80');
    const [closeSheet, setCloseSheet] = useState<boolean>(false);


    return (
        <MenuEditContext.Provider value={{ imageUri, setImageUri, foodName, setFoodName, foodPrice, setFoodPrice, closeSheet, setCloseSheet }}>
            {children}
        </MenuEditContext.Provider>
    );
};

export const useImages = () => useContext(MenuEditContext);