import { Stack,} from "expo-router";
import { AuthProvider } from "@/src/context/authContext";

export default function RootLayout() {


  return(

      <AuthProvider>
          <Stack
              screenOptions={{
                      animation: 'slide_from_right',
                      headerShown: false,
                  }}
          >
              <Stack.Screen name="(tabs)" options={{ title: 'Home'}} />

          </Stack>
      </AuthProvider>
  );
}
