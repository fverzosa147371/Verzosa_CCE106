import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Profile</Text>
      <Text style={styles.info}>Frank Christian Verzosa</Text>
      <Text style={styles.info}>BS Information Technology</Text>

      <Link href="/student/2026-001" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Full Student Details</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#1E1E2C",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 16,
  },
  info: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#A855F7",
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
