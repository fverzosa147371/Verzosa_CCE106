import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import StatCard from "../../components/StatCard";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcome}>Welcome back, Frank!</Text>

      <View style={styles.statsRow}>
        <StatCard title="Total" value={5} color="#bb86fc" />
        <StatCard title="Joined" value={2} color="#03dac6" />
        <StatCard title="Upcoming" value={3} color="#cf6679" />
      </View>

      <Link href={"/(tabs)/events" as any} style={styles.linkButton}>
        <Text style={styles.linkText}>Browse All Events →</Text>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: "#121212", flexGrow: 1 },
  welcome: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  linkButton: {
    backgroundColor: "#3700b3",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  linkText: { color: "#fff", fontWeight: "bold" },
});
