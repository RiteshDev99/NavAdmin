import {Text, View, StyleSheet, Image, Dimensions, useColorScheme,} from "react-native";
import MyButton from "@/src/components/ui/button";
import { useRouter } from "expo-router";
import {themeColors} from "@/src/constants/color";

const { width } = Dimensions.get("window");

export default function Onboarding() {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const backgroundColor =
        colorScheme === 'light'
            ? themeColors.light.backgroundColor
            : themeColors.dark.backgroundColor;
    const textColor = colorScheme === 'light' ? themeColors.light.text : themeColors.dark.text;
    const subTitleColor = colorScheme === 'light' ? themeColors.light.subtitle : themeColors.dark.subtitle;
    const OnContinue = () => {
        router.navigate("/signin");
    };

    return (
        <View style={[styles.container,{backgroundColor: backgroundColor}]}>
            <Image
                source={require('@/assets/images/onboarding.png')
                }
                style={styles.image}
                resizeMode="cover"
            />
            <Text style={[styles.title,{color:textColor}]}>Welcome, NavAdmin!</Text>
            <Text style={[styles.subtitle,{color:subTitleColor}]}>
                Effortlessly manage orders, menus, and restaurant settings — all in one place.
            </Text>

            <MyButton
                title="Continue"
                onPress={OnContinue}
                backgroundColor="#FF6347"
                textColor="#fff"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: width * 0.9,
        height: width * 0.9,
        marginBottom: 40,
        borderRadius: 20,
        objectFit: "fill",
    },
    title: {
        fontSize: 30,
        fontWeight: "700",
        marginBottom: 15,
    },
    subtitle: {
        fontSize: 17,
        textAlign: "center",
        marginBottom: 50,
        paddingHorizontal: 30,
        lineHeight: 24,
    },
});
