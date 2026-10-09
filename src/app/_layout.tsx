import { Stack } from "expo-router";
import "@/global.css";
import {StatusBar} from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar
        hidden={true}
      />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="movie/[id]"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  )
}