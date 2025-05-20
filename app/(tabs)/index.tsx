import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from "react-native-safe-area-context";
import {Feather, FontAwesome, FontAwesome5, FontAwesome6} from "@expo/vector-icons";
import DashboardCard, {DashboardCardProps} from "@/src/components/ui/cards/dashboardCard";
import {useRouter} from "expo-router";



const dashboardCards: DashboardCardProps[] = [
    {
        title: 'Orders',
        icon: <Feather size={32} name="shopping-cart" color={'#fff'} />,
        number: '150',
        backgroundColor: '#487efa',
    },
    {
        title: 'Revenue',
        icon: <FontAwesome size={32} name="rupee" color={'#fff'} />,
        number: '₹2,345',
        backgroundColor: '#4bad7a',
    },
    {
        title: 'Reserved',
        icon: <FontAwesome size={32} name="calendar-check-o" color={'#fff'} />,
        number: '56',
        backgroundColor: '#f28f61',
    },
    {
        title: 'Delivered',
        icon: <FontAwesome6 size={32} name="bell-concierge" color={'#fff'} />,
        number: '110',
        backgroundColor: '#7063e6',
    },
];



export default function DashBoardTab() {

    const router = useRouter();
    
    const UserProfile = () => {
        router.navigate("/profile");
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" backgroundColor="#FFF5F0" />
            <View style={styles.topBar}>
                <Image
                    source={require('@/assets/images/Navratan_Restaurant_Logo_.png')
                    }
                    style={styles.appImage}
                    resizeMode="cover"
                />
                <View style={styles.profile}>
                    <TouchableOpacity
                        onPress={UserProfile}
                    >
                        <FontAwesome5 size={26} name="user"  color={'#FF6347'}  />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.dashboard}>
                <Text style={styles.headerText}>Dashboard</Text>
                <View style={styles.dashboardCard}>
                    {dashboardCards.map((card, index) => (
                        <DashboardCard
                            key={index}
                            title={card.title}
                            icon={card.icon}
                            number={card.number}
                            backgroundColor={card.backgroundColor}
                        />
                    ))}

                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF5F0',
    },
    topBar:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
       height: 100,
        width: '100%',
        paddingHorizontal: 20,
    },
    appImage:{
       height:100,
        width: 100,
        resizeMode: 'contain',
    },
    profile:{
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dcd9d9',
    },
    dashboard:{
        height:330,
        marginTop:10,
        width: '100%',
    },
    headerText:{
        fontSize: 27,
        fontWeight: 'bold',
        color: '#0f0f0d',
        paddingHorizontal:20,
        paddingVertical:5,
    },
    dashboardCard:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding:20,
        justifyContent: 'center',
        gap:15,
    },
});
