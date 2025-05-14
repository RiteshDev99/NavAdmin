import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ActivityIndicator, Alert, SafeAreaView } from 'react-native';
import { account } from "@/src/lib/appwrite";
import { router } from "expo-router";
import { ID, Models } from "appwrite";

interface AuthContextType {
    user: Models.User<Models.Preferences> | null;
    session: Models.Session | null;
    signin: (params: AuthParams) => Promise<void>;
    signup: (params: SignupParams) => Promise<void>;
    signout: () => Promise<void>;
}

interface SignupParams {
    name: string;
    email: string;
    password: string;
}

interface AuthParams {
    email: string;
    password: string;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
    const [session, setSession] = useState<Models.Session | null>(null);

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        try {
            const currentSession = await account.getSession('current');
            const currentUser = await account.get();

            setSession(currentSession);
            setUser(currentUser);
        } catch (error) {
            console.log("Auth check error:", error);
            setSession(null);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const signup = async ({ name, email, password }: SignupParams) => {
        try {
            await account.create(ID.unique(), email, password, name);
            Alert.alert("Signup successful!", "Please log in.");
            router.replace("/signin");
        } catch (error: any) {
            Alert.alert("Signup Error", error.message || "Something went wrong");
        }
    };

    const signin = async ({ email, password }: AuthParams) => {
        setLoading(true);
        try {
            const newSession = await account.createEmailPasswordSession(email, password);
            const newUser = await account.get();

            setSession(newSession);
            setUser(newUser);

            router.push("/");
        } catch (error: any) {
            Alert.alert("Signin Error", error.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const signout = async () => {
        try {
            if (session) {
                await account.deleteSession("current");
            }
        } catch (error: any) {
            if (error.message?.includes("missing scope")) {
                console.log("User already logged out.");
            } else {
                console.log("Logout Error:", error.message);
                Alert.alert("Logout Error", error.message || "Something went wrong");
            }
        } finally {
            setSession(null);
            setUser(null);
            router.replace("/signin");
        }
    };

    const contextData: AuthContextType = { user, session, signup, signin, signout };

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? (
                <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#FF6347" />
                </SafeAreaView>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };
