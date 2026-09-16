import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const INITIAL_EVENTS = [
  {
    id: "1",
    title: "Campus Tour",
    category: "General",
    date: "Aug 20, 2026",
    venue: "Open Grounds",
    isJoined: true,
  },
  {
    id: "2",
    title: "Campus Music Fest",
    category: "Culture",
    date: "Oct 12, 2026",
    venue: "Open Grounds",
    isJoined: true,
  },
  {
    id: "3",
    title: "UI/UX Design Workshop",
    category: "Technology",
    date: "Oct 14, 2026",
    venue: "Lab 3",
    isJoined: false,
  },
  {
    id: "4",
    title: "Intramurals, Day 1",
    category: "Sports",
    date: "Oct 28, 2026",
    venue: "School Gym",
    isJoined: false,
  },
  {
    id: "5",
    title: "Intramurals, Day 2",
    category: "Sports",
    date: "Oct 29, 2026",
    venue: "School Gym",
    isJoined: false,
  },
];

export default function EventsScreen() {
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "General", "Technology", "Culture", "Sports"];

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((e) => e.category === selectedCategory);

  const handleToggleJoin = (id: string) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === id ? { ...event, isJoined: !event.isJoined } : event,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming Events</Text>

      {/* Category Filter Buttons Layout (Example) */}
      <View style={styles.categoryContainer}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.catButton,
              selectedCategory === cat && styles.activeCatButton,
            ]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text
              style={[
                styles.catText,
                selectedCategory === cat && styles.activeCatText,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredEvents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventCard}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.categoryTag}>{item.category}</Text>

            {item.isJoined && <Text style={styles.joinedTag}>✓ Joined</Text>}

            <TouchableOpacity
              style={[
                styles.button,
                item.isJoined ? styles.cancelBtn : styles.joinBtn,
              ]}
              onPress={() => handleToggleJoin(item.id)}
            >
              <Text style={styles.buttonText}>
                {item.isJoined ? "Cancel Join" : "Join Event"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#1E1E2C" },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 15,
  },
  categoryContainer: {
    flexDirection: "row",
    marginBottom: 15,
    flexWrap: "wrap",
    gap: 8,
  },
  catButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#2A2A3D",
    borderRadius: 20,
  },
  activeCatButton: { backgroundColor: "#FFD700" },
  catText: { color: "#A0A0B2", fontSize: 12 },
  activeCatText: { color: "#1E1E2C", fontWeight: "bold" },
  eventCard: {
    backgroundColor: "#2A2A3D",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  eventTitle: { fontSize: 18, color: "#fff", marginBottom: 4 },
  categoryTag: { fontSize: 12, color: "#A0A0B2", marginBottom: 8 },
  joinedTag: { color: "#4ADE80", fontWeight: "bold", marginBottom: 8 },
  button: { padding: 10, borderRadius: 6, alignItems: "center" },
  joinBtn: { backgroundColor: "#4ADE80" },
  cancelBtn: { backgroundColor: "#EF4444" },
  buttonText: { color: "#fff", fontWeight: "600" },
});
