import { StyleSheet, Text, View } from 'react-native';

interface StatCardProps {
  title: string;
  value: number | string;
  color?: string;
}

export default function StatCard({ title, value, color = '#6200ee' }: StatCardProps) {
  return (
    <View style={[styles.card, { borderLeftColor: color }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e1e1e',
    padding: 16,
    borderRadius: 8,
    marginVertical: 6,
    borderLeftWidth: 6,
    width: '30%', // responsive sizing
    minWidth: 100,
  },
  title: { color: '#aaa', fontSize: 12, marginBottom: 4 },
  value: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
});