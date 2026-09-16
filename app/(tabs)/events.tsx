import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import EventCard from '../../components/EventCard';

const INITIAL_EVENTS = [
    { id: '1', title: 'Campus Tour', category: 'General', date: 'Aug 20, 2026', venue: 'Open Grounds', isJoined: true }, 
    { id: '2', title: 'Campus Music Fest', category: 'Culture', date: 'Oct 12, 2026', venue: 'Open Grounds', isJoined: true },
    { id: '3', title: 'UI/UX Design Workshop', category: 'Technology', date: 'Oct 14, 2026', venue: 'Lab 3', isJoined: false },
    { id: '4', title: 'Intramurals, Day 1', category: 'Sports', date: 'Oct 28, 2026', venue: 'School Gym', isJoined: false },
    { id: '5', title: 'Intramurals, Day 2', category: 'Sports', date: 'Oct 29, 2026', venue: 'School Gym', isJoined: false },
];

export default function EventsScreen() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'General', 'Technology', 'Culture', 'Sports'];
  
    const filteredEvents = selectedCategory === 'All'
      ? INITIAL_EVENTS
      : INITIAL_EVENTS.filter(e => e.category === selectedCategory);
  
    return (
      <View style={styles.container}>
        <View style={styles.filterRow}>
          {categories.map(cat => (
            <TouchableOpacity
              key={cat}
              style={[styles.filterChip, selectedCategory === cat && styles.activeChip]}
              onPress={() => setSelectedCategory(cat)}
            >
              <Text style={styles.chipText}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </View>
  
        <FlatList
          data={filteredEvents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <EventCard {...item} />}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212', padding: 16 },
    filterRow: { flexDirection: 'row', marginBottom: 16, justifyContent: 'space-between' },
    filterChip: { backgroundColor: '#222', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 20 },
    activeChip: { backgroundColor: '#bb86fc' },
    chipText: { color: '#fff', fontSize: 12 },
  });
  