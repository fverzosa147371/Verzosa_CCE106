import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preferences</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Dark Theme Enabled</Text>
        <Switch
          value={isDarkMode}
          onValueChange={(value) => setIsDarkMode(value)}
          trackColor={{ false: "#767577", true: "#A855F7" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1E1E2C",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2A2A3D",
    padding: 16,
    borderRadius: 10,
  },
  label: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
