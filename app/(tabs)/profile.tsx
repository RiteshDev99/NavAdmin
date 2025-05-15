
import React from "react";
import {View, Text, StyleSheet,} from "react-native";
import MyButton from "@/src/components/ui/button";
import {useAuth} from "@/src/context/authContext";




export default function ProfileTab() {
    const {signout  } = useAuth();
    const handleLogout = async () => {
        signout()
    };


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Your Account </Text>
            <MyButton
                title="Logout"
                backgroundColor="#FF6347"
                textColor="#fff"
                onPress={handleLogout}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#FFF5F0',
    },
    text: {
        fontSize: 24,
        fontWeight:
            "bold"
    },
});
