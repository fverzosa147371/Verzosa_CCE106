import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function StudentDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Portal Record</Text>
      <Text style={styles.info}>Student ID: {id}</Text>
      <Text style={styles.description}>
        Bachelor of Science in Information Technology. Current Standing: Regular
        Student.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Back to Profile</Text>
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
    backgroundColor: "#A855F7",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
