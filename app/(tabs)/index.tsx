import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
        <Text style={styles.appTitle}>NoteBox</Text>
        <Text style={styles.label}>Name: Frank Christian Verzosa</Text>
        <Text style={styles.courseText}>Course: BSIT 2063-CCE106</Text>
        <Text style={styles.ideaText}>
          An app that can help students by tracking tasks and reminders.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  appTitle: {
    fontFamily: "System",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#FFD700",
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
  label: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 8,
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
    color: "#FFD700",
  },
  ideaText: {
    fontSize: 14,
    color: "#E0E0E0",
    textAlign: "center",
    fontStyle: "italic",
    paddingHorizontal: 10,
  },
});
