import {StyleSheet, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FoodCard } from '@/src/components/ui/foodCard';
import { StatusBar } from 'expo-status-bar';

export default function MenuEditTab() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" backgroundColor="#FFF5F0" />
            <ScrollView contentContainerStyle={styles.innerContainer}>
                {Array.from({ length: 30}).map((_, index) => (
                    <FoodCard
                        key={index}
                        name={'Egg Roll'}
                        price={'₹40'}
                        image={'https://ministryofcurry.com/wp-content/uploads/2023/11/Kolkatta-Egg-Roll-4.jpg'}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF5F0',
        flex: 1,
    },
    innerContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap:15,
    },
});
