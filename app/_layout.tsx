import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="course/[id]"
        options={{ presentation: "card", title: "Course Details" }}
      />
      <Stack.Screen
        name="student/[id]"
        options={{ presentation: "card", title: "Student Details" }}
      />
    </Stack>
  );
}
