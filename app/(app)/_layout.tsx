
import {useAuth} from "@/src/context/authContext";
import {Redirect, Stack} from "expo-router";



 const AppLayout = () => {
    const {session} = useAuth();
    return !session ? <Redirect href={"/onboarding"} /> : <Stack/>

}
export default AppLayout;