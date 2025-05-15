import { View, Text, StyleSheet } from 'react-native';
import {StatusBar} from "expo-status-bar";

export default function DashBoardTab() {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" backgroundColor="#FFF5F0" />
            <Text style={{fontSize:25, fontWeight:'bold', fontFamily:'fontVariant' }}>Welcome to DashBoard</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF5F0',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
