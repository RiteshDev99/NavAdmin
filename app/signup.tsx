import React from "react";
import {SafeAreaView, View, StyleSheet} from "react-native";
import SignUp from "@/src/components/auth/signup";

const Model = () => {

    return (
        <SafeAreaView style={[styles.safeArea, ]}>
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
