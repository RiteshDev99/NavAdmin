import React from "react";
import {SafeAreaView, View, StyleSheet, useColorScheme} from "react-native";
import Login from "@/src/components/auth/login";
import {themeColors} from "@/src/constants/color";

const Modal = () => {
    const colorScheme = useColorScheme();
    const backgroundColor =
        colorScheme === 'light'
            ? themeColors.light.backgroundColor
            : themeColors.dark.backgroundColor;
    return (
        <SafeAreaView style={[styles.safeArea,{backgroundColor: backgroundColor} ]}>
            <View style={styles.container}>
                <Login />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Modal;
