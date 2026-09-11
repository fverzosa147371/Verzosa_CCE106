import { Stack } from "expo-router";

export default function RootLayout() {
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
