
import React from "react";
import {View, Text, StyleSheet, Alert} from "react-native";
import {useRouter} from "expo-router";
import {account} from "@/src/lib/appwrite";
import MyButton from "@/src/components/ui/button";

export default function Home() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await account.deleteSession("current");
            Alert.alert("Logged out successfully");
            router.replace("/login");
        } catch (error: any) {
            Alert.alert("Logout Error", error.message || "Something went wrong");
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the Home Screen!</Text>
            <MyButton
                title="Login"
                backgroundColor="#FF6347"
                textColor="#fff"
                onPress={handleLogout}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    text: { fontSize: 24, fontWeight: "bold" },
});
