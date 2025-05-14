import { View, Text, StyleSheet } from 'react-native';

export default function MenuEditTab() {
    return (
        <View style={styles.container}>
            <Text>Tab [Home|Settings|Menu-Edit]</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
