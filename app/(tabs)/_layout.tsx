import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#A855F7" }}>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", headerTitle: "Student Portal" }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", headerTitle: "Student Profile" }}
      />
      <Tabs.Screen
        name="settings"
        options={{ title: "Settings", headerTitle: "Preferences" }}
      />
    </Tabs>
  );
}
