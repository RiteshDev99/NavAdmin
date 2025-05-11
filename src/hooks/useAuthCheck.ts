import { useEffect, useState } from "react";
import { account } from "@/src/lib/appwrite";

export const useAuthCheck = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkSession = async () => {
            try {
                await account.get();
                setIsLoggedIn(true);
            } catch {
                setIsLoggedIn(false);
            } finally {
                setIsLoading(false);
            }
        };

        checkSession();
    }, []);

    return { isLoading, isLoggedIn };
};
