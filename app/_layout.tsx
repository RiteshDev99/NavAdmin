import { Stack,} from "expo-router";
import { AuthProvider } from "@/src/context/authContext";
import {ImageProvider} from "@/src/context/imageContext";

export default function RootLayout() {


  return(

      <AuthProvider>
           <ImageProvider>
          <Stack
              screenOptions={{
                      animation: 'slide_from_right',
                      headerShown: false,
                  }}
          >
              <Stack.Screen name="(tabs)" options={{ title: 'Home'}} />

          </Stack>
           </ImageProvider>
      </AuthProvider>
  );
}
