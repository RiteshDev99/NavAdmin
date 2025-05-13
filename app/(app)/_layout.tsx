
import {useAuth} from "@/src/context/authContext";
import {Redirect, Slot} from "expo-router";



 const AppLayout = () => {
    const {session} = useAuth();
    return !session ? <Redirect href={"/onboarding"} /> : <Slot/>

}
export default AppLayout;