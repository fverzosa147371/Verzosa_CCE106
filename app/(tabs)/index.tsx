import { Link } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";

export default function HomeScreen() {
  const courses = ["CCE 106/L", "IT 13/L", "IT12 /L", "IT 11/L", "CCE 105/L"];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to the Student Portal</Text>
      <Text style={styles.subtitle}>Select a course to view more details:</Text>

      {courses.map((courseCode) => (
        // Use encodeURIComponent to handle spaces and slashes in the URL
        <Link
          key={courseCode}
          href={`/course/${encodeURIComponent(courseCode)}` as any}
          asChild
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View Course: {courseCode}</Text>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#1E1E2C",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#A0A0B0",
    marginBottom: 24,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#A855F7",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 12,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },
});
