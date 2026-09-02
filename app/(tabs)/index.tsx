import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.infoBox}>
        <Text style={styles.appTitle}>NoteBox📓📝</Text>
        <Text style={styles.label}>📓Notes + To-Dos📝</Text>
        <Text style={styles.ideaText}>
          NoteBox is an app I thought of when I was brainstorming ideas for an
          app that can help students by tracking tasks and reminders by creating
          checkboxes or to-do list with deadlines
        </Text>
      </View>

      <View style={styles.infomeBox}>
        <Text style={styles.meTitle}>😊About Me😊</Text>
        <Text style={styles.label}>Name: Frank Christian Verzosa</Text>
        <Text style={styles.courseText}>Course: BSIT 2063-CCE106</Text>
        <Text style={styles.ideaText}>
          I am a 3rd year student pursuing a degree in Bachelor of Science in
          Information Technology. I am person who likes watch videos about
          people talking about various things related to topics that I am
          interested in. I also like to play games and watch movies in my free
          time.
        </Text>
      </View>

      <View style={styles.infohobbyBox}>
        <Text style={styles.meTitle}>🤓My Hobbies🎧</Text>
        <Text style={styles.hoblabel}>
          - Watching Animes with voice actors I recognize
        </Text>
        <Text style={styles.hoblabel}>- Playing Gacha Video Games</Text>
        <Text style={styles.hoblabel}>
          - Listening to OSTs from the games I play
        </Text>
        <Text style={styles.hoblabel}>
          - Watching livestreams of Vtubers, Voice Actors, or uploads from local
          content creators
        </Text>
        <Text style={styles.hoblabel}>
          - Playing that one TCG that I got into recently with other people
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    color: "#52534f",
  },
  appTitle: {
    fontFamily: "System",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#FFD700",
    letterSpacing: 1,
  },
  meTitle: {
    fontFamily: "System",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#FFFFFF",
    letterSpacing: 1,
  },
  infoBox: {
    backgroundColor: "#4ADE80",
    padding: 20,
    borderRadius: 12,
    width: "90%",
    marginVertical: 15,
    alignItems: "center",
  },
  infomeBox: {
    backgroundColor: "#84CC16",
    padding: 20,
    borderRadius: 12,
    width: "90%",
    marginVertical: 15,
    alignItems: "center",
  },
  infohobbyBox: {
    backgroundColor: "#10B981",
    padding: 20,
    borderRadius: 12,
    width: "90%",
    marginVertical: 15,
    alignItems: "center",
  },
  label: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 8,
  },
  hoblabel: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 8,
    textAlign: "left",
  },
  description: {
    color: "#E0E0E0",
    fontSize: 14,
    lineHeight: 20,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 6,
  },
  courseText: {
    fontSize: 16,
  },
  ideaText: {
    fontSize: 14,
    color: "#E0E0E0",
    textAlign: "center",
    fontStyle: "italic",
    paddingHorizontal: 10,
  },
});
