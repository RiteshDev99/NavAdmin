import { Tabs } from 'expo-router';
import {AntDesign, EvilIcons, MaterialCommunityIcons} from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#FF6347', headerShown: false,
            tabBarStyle: {
                backgroundColor: '#FFF5F0',
            },

        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Dashboard',
                    tabBarIcon: ({ color }) => <AntDesign size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="menuEdit"
                options={{
                    title: 'Menu-Edit',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons  size={28} name="clipboard-edit-outline" color={color} />,
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <EvilIcons size={34} name="user" color={color} />,
                }}
            />
        </Tabs>
    );
}
