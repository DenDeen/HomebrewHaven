import { useEffect } from 'react';
import { StatusBar } from "react-native";
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import './globals.css';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    'CinzelDecorative-Regular': require('../assets/fonts/CinzelDecorative-Regular.ttf'),
    'CinzelDecorative-Bold': require('../assets/fonts/CinzelDecorative-Bold.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Bilbo': require('../assets/fonts/Bilbo.ttf'),
    'Norse': require('../assets/fonts/Norse.otf'), 
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar hidden={ true } />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ 
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="item/[id]"
          options={{ 
            headerShown: true,
            headerTintColor: '#EAEAEA',
            headerStyle: { backgroundColor: '#1F2122' },
            headerBackTitle: "Back",
          }}
        />
      </Stack>
    </>);
}
