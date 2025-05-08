import React from "react";
import {SafeAreaView, View, StyleSheet} from "react-native";
import Login from "@/src/components/auth/login";

const Modal = () => {

    return (
        <SafeAreaView style={[styles.safeArea, ]}>
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
