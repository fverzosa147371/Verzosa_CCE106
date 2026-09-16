import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ALL_EVENTS =[
    { id: '1', title: 'Tech Hackathon 2026', category: 'Technology', date: 'Oct 12, 2026', venue: 'Auditorium A', description: 'Get to know more about your school.' },
    { id: '2', title: 'Campus Music Fest', category: 'Culture', date: 'Oct 12, 2026', venue: 'Open Grounds', description: 'Enjoy live performances from local campus bands.' },
    { id: '3', title: 'UI/UX Design Workshop', category: 'Technology', date: 'Oct 14, 2026', venue: 'Lab 3', description: 'Learn advanced Figma layouts and accessible design principles.' },
    { id: '4', title: 'Intramurals, Day 1', category: 'Sports', date: 'Oct 28, 2026', venue: 'School Gym', description: 'First Day of Intramurals.' },
    { id: '5', title: 'Intramurals, Day 2', category: 'Sports', date: 'Oct 29, 2026', venue: 'School Gym', description: 'Second Day of Intramurals.' },
];

export default function EventDetailScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
   
    const event = ALL_EVENTS.find(e => e.id === id);
    const [joined, setJoined] = useState(event ? event.id === '1' : false);
  
    if (!event) {
      return (
        <View style={styles.container}>
          <Text style={styles.errorTitle}>Event Not Found</Text>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      );
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.meta}>Category: {event.category}</Text>
        <Text style={styles.meta}>Date: {event.date} | Venue: {event.venue}</Text>
        <Text style={styles.desc}>{event.description}</Text>
  
        <TouchableOpacity
          style={[styles.actionButton, joined ? styles.leaveBtn : styles.joinBtn]}
          onPress={() => setJoined(!joined)}
        >
          <Text style={styles.buttonText}>{joined ? 'Leave Event' : 'Join Event'}</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Back to Events</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212', padding: 20, justifyContent: 'center' },
    title: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    meta: { color: '#aaa', fontSize: 14, marginBottom: 6 },
    desc: { color: '#ddd', fontSize: 16, marginVertical: 20 },
    errorTitle: { color: '#cf6679', fontSize: 20, textAlign: 'center', marginBottom: 20 },
    actionButton: { padding: 14, borderRadius: 8, alignItems: 'center', marginBottom: 10 },
    joinBtn: { backgroundColor: '#03dac6' },
    leaveBtn: { backgroundColor: '#cf6679' },
    backButton: { backgroundColor: '#333', padding: 14, borderRadius: 8, alignItems: 'center' },
    buttonText: { color: '#fff', fontWeight: 'bold' },
  });