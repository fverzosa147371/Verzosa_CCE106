import { Tabs } from 'expo-router';

export default function TabLayout(){
  return (
    <Tabs screenOptions={{ tabBarStyle: { backgroundColor: '#121212' }, tabBarActiveTintColor: '#bb86fc' }}>
    <Tabs.Screen name="index" options={{ title: 'Home', headerTitle: 'EventMate Dashboard' }} />
    <Tabs.Screen name="events" options={{ title: 'Events', headerTitle: 'Campus Events' }} />
    <Tabs.Screen name="profile" options={{ title: 'Profile', headerTitle: 'Student Profile' }} />
  </Tabs>
  );
}
