import React from "react";
import {SafeAreaView, View, StyleSheet, useColorScheme} from "react-native";
import SignUp from "@/src/components/auth/signup";
import {themeColors} from "@/src/constants/color";

const Model = () => {
    const colorScheme = useColorScheme();
    const backgroundColor =
        colorScheme === 'light'
            ? themeColors.light.backgroundColor
            : themeColors.dark.backgroundColor;
    return (
        <SafeAreaView style={[styles.safeArea,{backgroundColor: backgroundColor} ]}>
            <View style={styles.container}>
                <SignUp/>
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

export default Model;
