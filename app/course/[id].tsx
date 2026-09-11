import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CourseDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Decode the URL parameter back to standard text (e.g., CCE 106/L)
  const decodedId = typeof id === "string" ? decodeURIComponent(id) : id;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Course Details</Text>
      <Text style={styles.info}>Course Code: {decodedId}</Text>
      <Text style={styles.description}>
        This is the detailed view for course {decodedId}. Here you can find
        syllabus, assignments, and grades.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1E1E2C",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 12,
  },
  info: {
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#A0A0B0",
    textAlign: "center",
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#EF4444",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
