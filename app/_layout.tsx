import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useFonts, Lora_400Regular, Lora_700Bold } from '@expo-google-fonts/lora';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync();

import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  const [fontsLoaded] = useFonts({
    Lora_400Regular,
    Lora_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Stack>
        {/* NOTE: not to show file name to Header as Header title */}
        <Stack.Screen name="index" options={{ headerShown: false }} />
        {children}
      </Stack>
    </View>
  );
};

export default Layout;