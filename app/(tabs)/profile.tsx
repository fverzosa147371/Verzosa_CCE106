import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Profile</Text>
      <Text style={styles.info}>Name: Frank Christian Verzosa</Text>
      <Text style={styles.info}>Program: BS Information Technology</Text>


      <Link href={'/student/2026-001' as any} asChild>
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
    padding: 16,
    backgroundColor: '#1E1E2C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 16,
  },
  info: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#34D399',
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#1E1E2C',
    fontWeight: 'bold',
  },
});