import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function StudentDetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Record Details</Text>
      <Text style={styles.label}>Student ID / Slug:</Text>
      <Text style={styles.value}>{id}</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardText}>Status: Enrolled & Active</Text>
        <Text style={styles.cardText}>Department: College of Information Technology</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1E1E2C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#A0A0B0',
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#34D399',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#2A2A3D',
    padding: 16,
    borderRadius: 10,
    width: '100%',
    maxWidth: 320,
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 6,
  },
});