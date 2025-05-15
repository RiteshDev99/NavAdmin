import { View, Text, StyleSheet } from 'react-native';

export default function DashBoardTab() {
    return (
        <View style={styles.container}>
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
