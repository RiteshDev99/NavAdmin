import React, {createContext, useContext, useState, ReactNode, useEffect} from 'react';
import {ActivityIndicator, Alert, SafeAreaView, Text} from 'react-native';
import { account } from "@/src/lib/appwrite";
import { router } from "expo-router";
import {ID, Models} from "appwrite";

interface AuthContextType {
    user: any;
    session: any;
    signin: (params: LoginParams) => Promise<void>;
    signup: (params: SignupParams) => Promise<void>;
    signout: () => Promise<void>;
}

interface SigninParams {
    email: string;
    password: string;
}
interface SignupParams {
    name:string;
    email: string;
    password: string;
}
interface LoginParams {
    email: string;
    password: string;
}
interface AuthProviderProps {
    children: ReactNode;

}




const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
    const [session, setSession] = useState<any>(null);


    useEffect(() => {
        init();
    },[])



    const init = async () => {
        checkAuth();
    }

    const checkAuth = async () => {

        try {

            const responseSession = await  account.getSession('current');
            setSession(responseSession);

            const responseUser = await account.get();
            setUser(responseUser)


        } catch ( error ) {
            console.log(error);
            setSession(null);
            setUser(null);
        }
        setLoading(false);
    }


    const signup = async ({ name, email, password }: SignupParams) => {
        try {
            await account.create(ID.unique(), email, password, name);
            Alert.alert("Signup successful! Please log in.");
            router.replace("/signin");
        } catch (error: any) {
            Alert.alert("Signup Error", error.message || "Something went wrong");
        }
    }


    const signin = async ({ email, password }: SigninParams)  => {
        setLoading(true);
        try {
            try {
                await account.deleteSession('current');
            } catch (error) {
            }
            const responseSession = await account.createEmailPasswordSession(email, password);
            const responseUser = await account.get();

            setSession(responseSession);
            setUser(responseUser);

            router.push("/");
        } catch (error: any) {
            console.log("Signin Error:", error);
            Alert.alert("Signin Error", error.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };


    const signout = async () => {
        try {
          await account.deleteSession('current');
            setSession(null);
            setUser(null);
            router.replace("/signin");
        } catch (error: any) {
            console.log("Logout Error:", error.message);
        }
    };



    const contextData: AuthContextType = { user, session, signup , signin, signout };

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? (
                <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
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
