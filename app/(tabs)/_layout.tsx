import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#007AFF' }}>
      <Tabs.Screen 
        name="home" 
        options={{ title: 'Dashboard', headerTitle: 'Student Dashboard' }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ title: 'Profile', headerTitle: 'Protected Profile' }} 
      />
    </Tabs>
  );
}