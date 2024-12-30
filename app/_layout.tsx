import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      {/* NOTE: not to show file name to Header as Header title */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

