import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface EventCardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  venue: string;
  isJoined: boolean;
}

export default function EventCard({ id, title, category, date, venue, isJoined }: EventCardProps) {
  return (
    <Link href={`/event/${id}` as any} asChild>
      <TouchableOpacity style={styles.card}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{category}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.details}> {date} | {venue}</Text>
        {isJoined && <Text style={styles.joinedTag}>✓ Joined</Text>}
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#252525',
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
  },
  badge: {
    backgroundColor: '#3700b3',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginBottom: 6,
  },
  badgeText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
  title: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  details: { color: '#bbb', fontSize: 12 },
  joinedTag: { color: '#03dac6', fontSize: 12, marginTop: 6, fontWeight: 'bold' },
});