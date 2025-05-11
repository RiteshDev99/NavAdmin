import {SafeAreaView, View, Text, StyleSheet, TextInput, useColorScheme, Alert} from "react-native";
import MyButton from "@/src/components/ui/button";
import { useRouter } from "expo-router";
import {themeColors} from "@/src/constants/color";
import {useState} from "react";
import {account} from "@/src/lib/appwrite";
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleLogin = async () => {
        try {
            await account.deleteSession("current");

            await account.createEmailPasswordSession(email, password);

            Alert.alert("Login successful!");
            router.push("/home");
        } catch (error: any) {
            Alert.alert("Login Error", error.message || "Something went wrong");
        }
    };




    const colorScheme = useColorScheme();
    const backgroundColor =
        colorScheme === 'light'
            ? themeColors.light.backgroundColor
            : themeColors.dark.backgroundColor;
    const headingColor = colorScheme === 'light' ? themeColors.light.text : themeColors.dark.text;
    const subheadingColor = colorScheme === 'light' ? themeColors.light.subtitle : themeColors.dark.subtitle;
    const inputFieldColor = colorScheme === 'light' ? themeColors.light.inputFieldColor : themeColors.dark.inputFieldColor;
    const inputFieldTextColor = colorScheme === 'light' ? themeColors.light.inputFieldTextColor : themeColors.dark.inputFieldTextColor;


    const router = useRouter();


    const goToSignup = () => {
        router.navigate("/signup");
    };

    return (
        <SafeAreaView style={[styles.container,{backgroundColor: backgroundColor}]}>
            <View style={styles.innerContainer}>
                <Text style={[styles.heading, {color: headingColor}]}>Welcome Back!</Text>
                <Text style={[styles.subheading,{color: subheadingColor}]}>Login to continue managing your orders</Text>

                <TextInput
                    placeholder="Email Address"
                    placeholderTextColor= {subheadingColor}
                    value={email}
                    onChangeText={setEmail}
                    style={[styles.input,{backgroundColor: inputFieldColor, color: inputFieldTextColor}]}
                    keyboardType="email-address"
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor= {subheadingColor}
                    value={password}
                    onChangeText={setPassword}
                    style={[styles.input,{backgroundColor: inputFieldColor, color: inputFieldTextColor}]}
                    secureTextEntry
                />

                <MyButton
                    title="Login"
                    backgroundColor="#FF6347"
                    textColor="#fff"
                    onPress={handleLogin}
                />

                <Text style={[styles.signupText,{color:subheadingColor}]}>
                    Don't have an account? <Text style={styles.signupLink} onPress={goToSignup}>Sign up</Text>
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
    },
    innerContainer: {
        paddingHorizontal: 24,
    },
    heading: {
        fontSize: 28,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 10,
    },
    subheading: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 30,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 16,
    },
    signupText: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 14,
    },
    signupLink: {
        color: "#FF6347",
        fontWeight: "600",
    },
});
